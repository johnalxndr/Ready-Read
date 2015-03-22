'use strict';
readyRead.controller('LoginController', function (angularAuth) {
  this.login = angularAuth.logIn;
  this.logout = angularAuth.logout;
})
