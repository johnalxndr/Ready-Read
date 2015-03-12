'use strict';
var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular','firebase', 'ui.router'])
readyRead.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/')
  RestangularProvider.setDefaultRequestParams('jsonp',{callback: 'JSON_CALLBACK'})
  RestangularProvider.setDefaultRequestParams({apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd'})
})

readyRead.controller('LoginController', function () {
    
})
readyRead.controller('FeedController', function(api){
  var self = this;
  api.then(function(data){
    self.articles=data.results.collection1
    console.log(self.articles)
  })

})
