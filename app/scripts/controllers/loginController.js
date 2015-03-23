'use strict';

angular.module('readyRead')

.controller('LoginController',['angularAuth', function (angularAuth) {
  this.login = angularAuth.logIn;
  this.logout = angularAuth.logout;
}]);
