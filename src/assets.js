const assets = import.meta.glob('./assets/*', {
  eager: true,
  query: '?url',
  import: 'default',
});

export function asset(filename) {
  const path = `./assets/${filename}`;
  const url = assets[path];

  if (!url) {
    throw new Error(`Asset not found: ${filename}`);
  }

  return url;
}
