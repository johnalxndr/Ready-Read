'use strict'

angular.module('readyRead')

.controller('LoginController', function (angularAuth) {
  this.login = angularAuth.logIn;
  this.logout = angularAuth.logout;
});
