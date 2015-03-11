'use strict';
var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular'])

readyRead.controller('LoginController', function () {
    var base = new Firebase('https://readyread.firebaseio.com/')

    this.addUser = function () {
        var users = []
        users.push(this.newData);
        this.newData = ''
        if (users[0].password != users[0].passCheck) {
            alert('Do You Even Type Bro? Match the passwords')
        } else {
            base.createUser({
                email: users[0].email,
                password: users[0].password
            }, function (error, userData) {
                if (error) {
                    console.log("Error creating user:", error);
                } else {
                    console.log("Successfully created user account with uid:", userData.uid);
                }
            });
        }
    }
})