readyRead.factory('api', function (Restangular) {
    return {
        tech: Restangular.one('bxsp64vm').get(),
        news: Restangular.one('e4ks0wxo').get(),
        sports: Restangular.one('ei42ckfu').get(),
        ent: Restangular.one('7hecsq1u').get()
      };
})
