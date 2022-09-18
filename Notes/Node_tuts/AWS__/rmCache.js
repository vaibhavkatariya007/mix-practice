
function removeCache(){
    if ('serviceWorker' in navigator) {
        return caches.keys().then(cacheNames => Promise.all([cacheNames.forEach(cacheName => caches.delete(cacheName))]))
    }
}

if ('serviceWorker' in navigator) {
  caches.keys().then(function(cacheNames) {
    return Promise.all(cacheNames.forEach(function(cacheName) {
      return caches.delete(cacheName);
    })).then(res=>console.log(res);
  });
}