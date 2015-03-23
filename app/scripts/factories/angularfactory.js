'use strict';

angular.module('readyRead')

.factory('angularAuth',['$firebaseArray','$firebaseAuth','$firebaseObject','$state', function ($firebaseArray, $firebaseAuth, $firebaseObject, $state) {
    var base = new Firebase('https://readyread.firebaseio.com/');
    var userBase = new Firebase('https://readyread.firebaseio.com/users/');
    var userArticles = new Firebase('https://readyread.firebaseio.com/articles/');
    return {
        logIn: function () {
            base.authWithOAuthPopup('twitter', function (error, authData) {
                if (error) {
                    console.log('Login Failed!', error);
                } else {
                    $state.go('userProfile');
                    console.log('Authenticated successfully with payload:', authData);
                    base.getAuth();
                }
            });
        },
        logout: function () {
            base.unauth();
            base.getAuth();
            $state.go('login');
        },
        updateUser: base.onAuth(function (authData) {
            if (authData) {
                base.child('users').child(authData.uid).update({
                    name: authData.twitter.username,
                    displayName: authData.twitter.displayName,
                    isMember: true
                });
            }
        }),
        markAsRead: function (words) {
          var myBase = $firebaseObject(userBase.child(base.getAuth().uid));
          var users = new Firebase('https://readyread.firebaseio.com/users/' + base.getAuth().uid);
          myBase.$loaded().then(function (data) {
            self.time = data.timeRead;
            self.words = data.wordsRead;
            users.update({
              timeRead: Math.floor(self.time +(words/190)),
              wordsRead: self.words + words
            });
          });
        },
        saveArticle: function(title,url){
          var myArticles = $firebaseArray(userArticles.child(base.getAuth().uid));
          myArticles.$add({
            title: title,
            url: url
          });
        }
    };
}]);
