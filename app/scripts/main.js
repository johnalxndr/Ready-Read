'use strict';

var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular', 'firebase', 'ui.router'])
readyRead.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/')
    RestangularProvider.setDefaultRequestParams('jsonp', {
        callback: 'JSON_CALLBACK'
    })
    RestangularProvider.setDefaultRequestParams({
        apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd'
    })
})

readyRead.controller('LoginController', function (angularAuth) {
    this.login = angularAuth.logIn
    this.auth = angularAuth.getAuth
    this.logout = angularAuth.logout
    if (this.auth) {
        console.log('have auth')
    } else {
        console.log('no auth')
    }
})
readyRead.controller('FeedController', function (api, angularAuth, $firebaseObject) {
    var self = this;
    api.then(function (data) {
        self.articles = data.results.collection1
        self.save = angularAuth.saveArticle
    })
    this.wordCount = function (text) {
        var s = text ? text.split(/\s+/) : 0;
        return Math.round(s ? s.length / 190 : '');
    };
    this.markedAsRead = function (words) {
        var userBase = $firebaseObject(new Firebase('https://readyread.firebaseio.com/users/' + angularAuth.getAuth.uid))
        var users = new Firebase('https://readyread.firebaseio.com/users/' + angularAuth.getAuth.uid)
        userBase.$loaded().then(function (data) {
            self.count = data.wordsRead
            users.update({
                wordsRead: self.count + words
            })
        })
    }
})
readyRead.controller('UserProfileController', function (angularAuth, $firebaseObject, $firebaseArray) {
    this.auth = angularAuth.getAuth
    var self = this;
    var base = new Firebase('https://readyread.firebaseio.com/users/' + this.auth.uid)
    var userBase = $firebaseObject(new Firebase('https://readyread.firebaseio.com/users/' + this.auth.uid))
    var userHistory = $firebaseArray(new Firebase('https://readyread.firebaseio.com/articles/' + this.auth.uid))
    userBase.$loaded()
        .then(function (data) {
            self.displayName = data.displayName
            self.avatar = data.picture
            self.wordCount = data.wordsRead
        });
    userHistory.$loaded()
        .then(function (data) {
            self.list = data
        })
    this.profileUpdate = function () {
        base.update({
            nickname: this.newData.nickname,
            file: this.newData.file,
            description: this.newData.description
        })
    }
})