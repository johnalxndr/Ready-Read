'use strict';

var readyRead = angular.module('readyRead', ['ngAnimate', 'restangular', 'firebase', 'ui.router'])
readyRead.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/')
    RestangularProvider.setDefaultRequestParams('jsonp', {
        callback: 'JSON_CALLBACK'
    })
    RestangularProvider.setDefaultRequestParams({
        apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd',
        kimbypage: '1'
    })

})

function cnt() {
    var paragraphs = document.getElementsByTagName("p");

    for (var i = 0; i < paragraphs.length; i++) {
        alert(paragraphs[i].innerHTML);
    }
}