const CACHE='eg-v1';
const ASSETS=['./','./index.html','./assets/css/main.css','./assets/js/main.js','./rome/index.html','./rome/chapter-01/index.html'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
