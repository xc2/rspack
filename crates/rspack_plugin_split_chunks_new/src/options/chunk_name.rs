use std::sync::Arc;

use futures_util::future::BoxFuture;
use rspack_core::{Chunk, Compilation, Module};

pub struct ChunkNameGetterFnCtx<'a> {
  pub module: &'a dyn Module,
  pub selected_chunks: &'a [&'a Chunk],
  pub cache_group_key: String,
}

type ChunkNameGetterFn =
  Arc<dyn for<'a> Fn(ChunkNameGetterFnCtx<'a>) -> BoxFuture<'a, Option<String>> + Send + Sync>;

#[derive(Clone)]
pub enum ChunkNameGetter {
  String(String),
  Fn(ChunkNameGetterFn),
  Disabled,
}
