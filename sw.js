self.addEventListener('install', (event) => {
    console.log('SW: Instalado');
    const promiseCache = caches.open('cache-v1').then((cache) => {
        //addAll es una promesa
        return cache.addAll(
            [
                './',
                './index.html',
                './js/app.js',
                './pages/suma.html',
                './pages/resta.html',
                './pages/division.html',
                './pages/multiplicacion.html',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css',
                'https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js'
            ]
        );
    });
    event.waitUntil(promiseCache);
})


self.addEventListener('fetch', (event) => {
    const respCache = caches.match(event.request)
    event.respondWith(respCache);
})