use std::path::{Path, PathBuf};
use std::sync::Arc;

use oxc_resolver::{FileMetadata, FileSystem};
use rspack_fs::{AsyncNativeFileSystem, AsyncReadableFileSystem, FSMetadata};

pub struct ResolverFileSystem {
  fs: Arc<dyn AsyncReadableFileSystem + Send + Sync>,
}

impl Default for ResolverFileSystem {
  fn default() -> Self {
    ResolverFileSystem::new(Arc::new(AsyncNativeFileSystem))
  }
}

impl ResolverFileSystem {
  pub fn new(fs: Arc<dyn AsyncReadableFileSystem + Send + Sync>) -> Self {
    Self { fs }
  }
}

impl FileSystem for ResolverFileSystem {
  fn read_to_string(&self, path: &Path) -> std::io::Result<String> {
    match futures::executor::block_on(self.fs.read(&<Path as AsRef<Path>>::as_ref(path))) {
      Ok(a) => Ok(String::from_utf8(a).expect("todo!")),
      Err(e) => Err(e.into()),
    }
  }

  fn metadata(&self, path: &Path) -> std::io::Result<FileMetadata> {
    let path = <Path as AsRef<Path>>::as_ref(path);
    futures::executor::block_on(self.fs.metadata(&path))
      .map(convert_metadata)
      .map_err(|e| e.into())
  }

  fn symlink_metadata(&self, path: &Path) -> std::io::Result<FileMetadata> {
    let path = <Path as AsRef<Path>>::as_ref(path);
    futures::executor::block_on(self.fs.symlink_metadata(&path))
      .map(convert_metadata)
      .map_err(|e| e.into())
  }

  fn canonicalize(&self, path: &Path) -> std::io::Result<PathBuf> {
    dunce::canonicalize(path)
  }
}

fn convert_metadata(a: FSMetadata) -> FileMetadata {
  FileMetadata::new(a.is_file, a.is_dir, a.is_symlink)
}
