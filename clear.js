// if (performance.navigation.type === 1) { // Проверка, что страница загружена не из кэша
//     window.location.reload(true); // Принудительная перезагрузка
// }


window.addEventListener('beforeunload', function() {
    caches.keys().then(function(names) {
        for (let name of names) {
            caches.delete(name);
        }
    });
});
