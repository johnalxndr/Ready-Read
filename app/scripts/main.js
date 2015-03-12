'use strict';
var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular','firebase', 'ui.router'])


readyRead.controller('LoginController', function () {
    var base = new Firebase('https://readyread.firebaseio.com/')
    var userArticle = new Firebase('https://readyread.firebaseio.com/articles')
    var auth = base.getAuth()
    console.log(auth)
  this.display = base.onAuth(function(authData) {
    if (authData) {
      // save the user's profile into Firebase so we can list users,
      // use them in Security and Firebase Rules, and show profiles
      base.child("users").child(authData.uid).set({
        provider: authData.provider,
        name: authData.twitter.displayName
      });
      $('.userDisplay').html('Hello ' + authData.twitter.displayName)
    }
  });
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
    base.unauth(function(){
      $('.userDisplay').html('')
    })
    }
  }
  this.hello = function (){
    base.onAuth(function(authData){
      if(authData){
        console.log('ello ello')
      }else{
        console.log('log in to use this feature')
      }
    })
  }
  this.addCustomArticle = function(){
    var add = {
      name: this.newArticle.name,
      url: this.newArticle.name
    }
    base.onAuth(function(authData){
      if(authData){
        base.child('articles').child(authData.uid).push(add)
        console.log('added to your list of added articles')
      }else{
        console.log('please log in to use this feature')
      }
    })
  }
})
readyRead.controller('FeedController', function(){
  console.log('Feed Controller')
})
