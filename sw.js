const CACHE_NAME = 'controle-luft-cache-v1';
// https://script.google.com/a/macros/luftsolutions.com.br/s/AKfycbxWlZe9FQHt7b2vnrwLb2oV9BKHqsoYAdlKyKBxzvwp0rkZkzTblznkHN2YjQTtE5jd/exec
const urlsToCache = [
  'https://script.google.com/a/macros/luftsolutions.com.br/s/AKfycbxWlZe9FQHt7b2vnrwLb2oV9BKHqsoYAdlKyKBxzvwp0rkZkzTblznkHN2YjQTtE5jd/exec'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});