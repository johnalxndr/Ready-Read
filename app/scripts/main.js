'use strict';
angular.module('readyRead', ['ngAnimate', 'restangular', 'firebase', 'ui.router'])
.config(function (RestangularProvider) {
    RestangularProvider.setBaseUrl('https://www.kimonolabs.com/api/');
    RestangularProvider.setDefaultRequestParams({
        apikey: 'lxZzI5UKXbWL2JK3DL0U2g2uCfMjFUgd',
        kimbypage: 1,
        kimmodify: 1
    });
});
