self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("56mile-cache").then(cache => {
      return cache.addAll([
        "./index.html",
        "./manifest.json",
        "./serviceWorker.js"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(response => {
      return response || fetch(e.request);
    })
  );
});
