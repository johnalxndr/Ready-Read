'use strict';

angular.module('readyRead')

.controller('UserProfileController',['angularAuth','$firebaseObject','$firebaseArray','$timeout', function(angularAuth,$firebaseObject,$firebaseArray,$timeout){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com/users/');
  var userBase = $firebaseObject(base.child(base.getAuth().uid));
  var userHistory = $firebaseArray(new Firebase('https://readyread.firebaseio.com/articles/'+base.getAuth().uid));
  userBase.$loaded()
  .then(function(data) {
    self.displayName = data.displayName;
    self.avatar = data.picture;
    self.wordCount = data.wordsRead;
    self.timeCount = data.timeRead;
    self.other = data.other;
    self.time = data.timeGoal;
    self.progress = Math.floor((data.timeRead/data.timeGoal)*100);
    self.wordTracker = Math.floor((data.wordsRead/100000)*100);
    if(data.timeRead === undefined){
      base.child(data.$id).update({
        wordsRead: 0,
        timeRead: 0
      });
    }
  });
  userHistory.$loaded()
  .then(function(data){
    self.list = data;
  });
  this.profileUpdate = function(){
    base.child(base.getAuth().uid).update({
      timeGoal: Number(this.newData.timeGoal)
    });
    this.newData = '';
  };
  this.resetTime = function(){
    base.child(base.getAuth().uid).update({
      timeRead: 0
    });
    this.showTimeMessage = true;
    $timeout(function() {
          self.showTimeMessage = false;
        }, 2000);
  };
  this.resetWords = function(){
    base.child(base.getAuth().uid).update({
      wordsRead: 0
    });
    this.showWordMessage = true;
    $timeout(function(){
      self.showWordMessage = false;
    }, 2000);
  };
  this.removeSavedArticle = function(article){
    userHistory.$remove(article);
  };
}]);
