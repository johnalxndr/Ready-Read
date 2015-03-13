readyRead.factory('api', function (Restangular) {
    Restangular.setJsonp(true)
    return Restangular.one('d8yv7o0i').get()
})