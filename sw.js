// Service worker mínimo: deixa o app instalável. Não guarda dados em cache (status é sempre ao vivo).
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.clients.claim()));
self.addEventListener('fetch', () => {});
