# Service worker test
###Made from : https://github.com/ashleymoogle/starter-kit-js
Service worker is initialized with initServiceWorker.js in *src/assets/workers/*

It caches webpack bundles and React cdn.

You need to refresh after it's install for it to fetch cached resources.

If you change the code and want to recache stuff, change the **const version** in *src/sw.js*

##Todo :
- [ ] Webpack task that changes the version on each compile.
- [ ] Test the service worker