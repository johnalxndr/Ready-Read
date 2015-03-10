'use strict';
var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular'])
readyRead.config(function(RestangularProvider) {
      RestangularProvider.setBaseUrl('https://getpocket.com/v3/')
      RestangularProvider.setDefaultHeaders({'Access-Control-Allow-Origin': 'https://localhost:9000'})
      // RestangularProvider.setDefaultRequestParams('jsonp',{callback: 'JSON_CALLBACK'})
      RestangularProvider.setDefaultRequestParams({access_token:"535956fa-270b-fddf-9a6b-943285", consumer_key:"38876-54bb413b8e4ea513959c5687"})
  });

readyRead.controller('MainController', function(Restangular){
    // Restangular.setJsonp(true)
    this.account = Restangular.one('get').get()
})
