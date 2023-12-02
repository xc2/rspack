use std::sync::Arc;

use napi::bindgen_prelude::Either3;
use napi::{Env, JsFunction};
use napi_derive::napi;
use rspack_binding_values::{JsChunk, JsModule, ToJsModule};
use rspack_error::internal_error;
use rspack_napi_shared::threadsafe_function::{ThreadsafeFunction, ThreadsafeFunctionCallMode};
use rspack_napi_shared::{NapiResultExt, NAPI_ENV};
use rspack_plugin_split_chunks_new::{ChunkNameGetter, ChunkNameGetterFnCtx};

pub(super) type RawChunkOptionName = Either3<String, bool, JsFunction>;

#[inline]
pub(super) fn default_chunk_option_name() -> ChunkNameGetter {
  ChunkNameGetter::Disabled
}

#[napi(object)]
struct RawChunkOptionNameCtx {
  pub module: JsModule,
  pub selected_chunks: Vec<JsChunk>,
  pub cache_group_key: String,
}

impl<'a> From<ChunkNameGetterFnCtx<'a>> for RawChunkOptionNameCtx {
  fn from(value: ChunkNameGetterFnCtx<'a>) -> Self {
    RawChunkOptionNameCtx {
      module: value
        .module
        .to_js_module()
        .expect("should convert js success"),
      selected_chunks: value
        .selected_chunks
        .iter()
        .map(|c| JsChunk::from(c))
        .collect(),

      cache_group_key: value.cache_group_key,
    }
  }
}

pub(super) fn normalize_raw_chunk_name(raw: RawChunkOptionName) -> ChunkNameGetter {
  match raw {
    Either3::A(str) => ChunkNameGetter::String(str),
    Either3::B(_) => ChunkNameGetter::Disabled, // FIXME: when set bool is true?
    Either3::C(v) => {
      let fn_payload: ThreadsafeFunction<RawChunkOptionNameCtx, Option<String>> = NAPI_ENV
        .with(|env| -> anyhow::Result<_> {
          let env = env.borrow().expect("Failed to get env with external");
          let fn_payload = rspack_binding_macros::js_fn_into_threadsafe_fn!(v, &Env::from(env));
          Ok(fn_payload)
        })
        .expect("should generate fn_payload success");
      let fn_payload = Arc::new(fn_payload);
      ChunkNameGetter::Fn(Arc::new(move |ctx| {
        let fn_payload = fn_payload.clone();
        Box::pin(async move {
          fn_payload
            .call(ctx.into(), ThreadsafeFunctionCallMode::NonBlocking)
            .into_rspack_result()
            .expect("into rspack result failed")
            .await
            .unwrap_or_else(|err| {
              panic!(
                "{}",
                internal_error!("Failed to call external function: {err}")
              )
            })
            .expect("failed")
        })
      }))
    }
  }
}
