
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/LuxeWear/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/LuxeWear"
  },
  {
    "renderMode": 2,
    "route": "/LuxeWear/about"
  },
  {
    "renderMode": 2,
    "route": "/LuxeWear/login"
  },
  {
    "renderMode": 2,
    "route": "/LuxeWear/register"
  },
  {
    "renderMode": 2,
    "route": "/LuxeWear/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 670, hash: 'ba20ea142554df1d229b6f2d4ac83ced871140addf2369a823406d4869faf2fc', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1014, hash: '3e6378a49ef9c9718fe6d7b3539351aa647addbd9851b787dbd9d5242cb65498', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 5133, hash: 'd18027ec21dfefb0464674b44ce7b1536bc3c376ae60bf43085179ec4cee442f', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'index.html': {size: 5131, hash: '021cf9b5417a1f7379f897f98a4921a81b8dd9895683e4363a467052ce951495', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'login/index.html': {size: 5134, hash: '5c6769b0ccd33a423c337cef68d39a7c3c6a4cf9b9ed28be1929445270dc62d1', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'register/index.html': {size: 5143, hash: 'd9884cd188a080db7eca992790719b6dd5220e334c9f439e1ab522461d459d97', text: () => import('./assets-chunks/register_index_html.mjs').then(m => m.default)},
    'styles-QCOQJLHX.css': {size: 241, hash: 'fAtpWpolER0', text: () => import('./assets-chunks/styles-QCOQJLHX_css.mjs').then(m => m.default)}
  },
};
