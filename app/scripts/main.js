'use strict';
var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular'])

readyRead.controller('LoginController', function () {
    var base = new Firebase('https://readyread.firebaseio.com/')
    var userArticle = new Firebase('https://readyread.firebaseio.com/articles')
    var auth = base.getAuth()
    console.log(auth)
    this.addUser = function () {
        var users = [];
        users.push(this.newData);
        this.newData = ''
            //Checks to see if both password fields match
        if (users[0].password != users[0].passCheck) {
            alert('Do You Even Type Bro? Match the passwords')
        } else {
            //creates a new user
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
    this.logUserIn = function () {
        base.authWithPassword({
            email: this.userLogin.email,
            password: this.userLogin.password
        }, function (error, authData) {
            if (error) {
                alert("Login Failed!", error.code);
            } else {
                console.log("Authenticated successfully with payload:", authData);
            }
        })
        this.userLogin = ''
    }
    this.logOut = function () {
        base.unauth()
    }
})