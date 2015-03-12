readyRead.factory('api',function(Restangular){
    Restangular.setJsonp(true)
    return  Restangular.one('ehi2pmlg').get()
})
