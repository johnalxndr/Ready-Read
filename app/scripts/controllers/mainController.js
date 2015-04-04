'use strict';

angular.module('readyRead')

.controller('MainController',['angularAuth','$firebaseAuth','$interval', function (angularAuth, $firebaseAuth,$interval) {
    var base = new Firebase('https://readyread.firebaseio.com');
    var self = this;
    this.isCollapsed = true;
    this.auth = $firebaseAuth(base);
    this.logout = angularAuth.logout;
    this.getAuth = $firebaseAuth(base);
    this.getAuth.$onAuth(function (authData) {
        self.authData = authData;
    });
    this.currentTime = 0;
    this.currentMins= 0;
    this.startTimer = function(){
      this.intervalPromise = $interval(function(){
        if(self.currentTime <= 59){
        self.currentTime++;
        if(self.currentTime < 10){
          self.currentTime = '0'+self.currentTime
        }
      }else{
        self.currentMins ++;
        self.currentTime = 0;
      }
      },1000);
    };
    this.stopTimer = function(){
      $interval.cancel(this.intervalPromise);
    };
    this.resetTimer = function(){
      this.currentTime = 0;
      this.currentMins = 0;
    };
}]);
