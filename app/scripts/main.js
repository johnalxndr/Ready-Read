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
    console.log(this.auth)
})
readyRead.controller('FeedController', function (api, angularAuth) {
    var self = this;
    api.then(function (data) {
        self.articles = data.results.collection1
        console.log(self.articles)
        self.save = angularAuth.saveArticle
    })
})
readyRead.controller('UserProfileController', function (angularAuth, $firebaseObject, $firebaseArray) {
    this.auth = angularAuth.getAuth
    var self = this;
    var userBase = $firebaseObject(new Firebase('https://readyread.firebaseio.com/users/' + this.auth.uid))
    var userHistory = $firebaseArray(new Firebase('https://readyread.firebaseio.com/articles/' + this.auth.uid))
    userBase.$loaded()
        .then(function (data) {
            self.name = data.name
            self.avatar = data.picture
            console.log(self.avatar)
        });
    userHistory.$loaded()
        .then(function (data) {
            self.list = data
            console.log(self.list)
        })
})