'use strict';

angular.module('readyRead')

.controller('FeedController',['api','angularAuth','$firebaseObject','$firebaseAuth', function (api, angularAuth, $firebaseObject, $firebaseAuth) {
      var self = this;
      var base = new Firebase('https://readyread.firebaseio.com/users/');
      this.getAuth = $firebaseAuth(base);
      this.getAuth.$onAuth(function (authData) {
        self.authData = authData;
    });
}]);
