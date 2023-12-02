use napi_derive::napi;

use crate::JsCompatSource;

#[napi(object)]
pub struct JsNormalModule {
  pub original_source: Option<JsCompatSource>,
  pub resource: Option<String>,
  pub module_identifier: String,
  pub name_for_condition: Option<String>,
}
