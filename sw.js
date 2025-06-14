const CACHE_NAME = 'controle-luft-cache-v1';
// https://script.google.com/a/macros/luftsolutions.com.br/s/AKfycbx7x-tZaqEqh3JKmxiAyDAAQ8HY_uBOemyLsAaD0FYubyK7SAy60jBjijgyRKhJQlms/exec
const urlsToCache = [
  'https://script.google.com/a/macros/luftsolutions.com.br/s/AKfycbx7x-tZaqEqh3JKmxiAyDAAQ8HY_uBOemyLsAaD0FYubyK7SAy60jBjijgyRKhJQlms/exec'
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
