readyRead.factory('api', function (Restangular) {
    Restangular.setJsonp(true)
    return {
        tech: Restangular.one('d8yv7o0i').get(),
        news: Restangular.one('61cspj3g').get()
            //        sports: Restangular.one('61cspj3g').get()
    }
})