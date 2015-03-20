readyRead.factory('api', function (Restangular) {
    Restangular.setJsonp(true)

    return {
        tech: Restangular.one('bxsp64vm').get(),
        news: Restangular.one('61cspj3g').get(),
        sports: Restangular.one('ei42ckfu').get(),
        ent: Restangular.one('7hecsq1u').get()
    }
})