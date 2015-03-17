readyRead.factory('api', function (Restangular) {
    Restangular.setJsonp(true)
    return {
    tech: Restangular.one('d8yv7o0i').get(),
    news: Restangular.one('7pe51x78').get()
    }
})
