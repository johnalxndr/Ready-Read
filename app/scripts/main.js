'use strict';

var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular','firebase', 'ui.router'])
readyRead.config(function(RestangularProvider){
  RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/')
  RestangularProvider.setDefaultRequestParams('jsonp',{callback: 'JSON_CALLBACK'})
  RestangularProvider.setDefaultRequestParams({apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd'})
})

readyRead.controller('LoginController', function (angularAuth) {
  this.login = angularAuth.logIn
  this.logout = angularAuth.logout
})
readyRead.controller('FeedController', function(api,angularAuth,$firebaseObject){
  var self = this;
  api.tech.then(function(data){
    self.articles=data.results.collection1
  })
  api.news.then(function(data){
    self.newsArticles = data.results.collection1
  })
  this.timeCount = function(text){
    var s = text ? text.split(/\s+/) : 0;
    return Math.round(s ? s.length/190 : '');
  };
  this.wordCount = function(text){
    var s = text ? text.split(/\s+/) : 0;
    return s ? s.length : '';
  };
  this.markedAsRead = function(words,time){
    var base = new Firebase('https://readyread.firebaseio.com/users/')
    var userBase = $firebaseObject(base.child(base.getAuth().uid))
    var users = new Firebase('https://readyread.firebaseio.com/users/'+base.getAuth().uid)
    userBase.$loaded().then(function(data){
      self.time = data.timeRead
      self.words = data.wordsRead
      users.update({
        timeRead: self.time+time,
        wordsRead: self.words+words
      })
    })
  }
})
readyRead.controller('UserProfileController', function(angularAuth,$firebaseObject,$firebaseArray){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com/users/')
  var userBase = $firebaseObject(base.child(base.getAuth().uid))
  var userHistory = $firebaseArray(new Firebase('https://readyread.firebaseio.com/articles/'+base.getAuth().uid))
  userBase.$loaded()
  .then(function(data) {
    self.displayName = data.displayName
    self.avatar = data.picture
    self.wordCount = data.wordsRead
    self.other = data.other
    self.time = data.timeGoal
    self.progress = Math.floor((data.timeRead/data.timeGoal)*100);
    self.wordTracker = Math.floor((data.wordsRead/100000)*100);
    if(data.timeRead === undefined){
      base.child(data.$id).update({
        wordsRead: 0,
        timeRead: 0
      })
    }
  });
  userHistory.$loaded()
  .then(function(data){
    self.list = data
  })
  this.profileUpdate = function(){
    base.child(base.getAuth().uid).update({
      timeGoal: Number(this.newData.timeGoal),
      other: this.newData.other
    })
    this.newData = ''
  }
  this.logout = angularAuth.logout
})
