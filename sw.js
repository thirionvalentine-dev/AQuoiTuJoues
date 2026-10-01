const CACHE = "jeux-cartes-v1";
const FILES = ["./", "index.html", "style.css", "games.js", "app.js", "manifest.json"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
  self.skipWaiting();
});

self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))));
});

// Réseau d'abord : vos modifications apparaissent tout de suite. Le cache sert hors connexion.
self.addEventListener("fetch", e => {
  e.respondWith(
    fetch(e.request).then(r => {
      const copie = r.clone();
      caches.open(CACHE).then(c => c.put(e.request, copie));
      return r;
    }).catch(() => caches.match(e.request))
  );
});
