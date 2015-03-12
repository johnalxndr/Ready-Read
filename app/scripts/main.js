'use strict';
var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular'])

readyRead.controller('LoginController', function(){
  var base = new Firebase('https://readyread.firebaseio.com/')
  var userArticle = new Firebase('https://readyread.firebaseio.com/articles')
  var auth = base.getAuth()
  console.log(auth)

  this.logUserIn = function () {
    base.authWithOAuthPopup("twitter", function(error, authData) {
  if (error) {
    console.log("Login Failed!", error);
  } else {
    console.log("Authenticated successfully with payload:", authData);
  }
});
}
  this.logOut = function() {
    base.unauth()
  }
})
