readyRead.config(function ($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('login');
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: '../login.html',
            controller: 'LoginController as login'
        })
        .state('category', {
            url: '/category',
            templateUrl: '../category.html',
            controller: 'FeedController as feed'
        })
        .state('news', {
            url: '/news',
            templateUrl: '../news.html',
            controller: 'NewsController as news'
        })
        .state('sports', {
            url: '/sports',
            templateUrl: '../sports.html',
            controller: 'SportsController as sports'
        })
        .state('ent', {
            url: '/ent',
            templateUrl: '../ent.html',
            controller: 'EntController as ent'
        })
        .state('tech', {
            url: '/tech',
            templateUrl: '../tech.html',
            controller: 'TechController as tech'
        })
        .state('userProfile', {
            url: '/userProfile',
            templateUrl: '../userProfile.html',
            controller: 'UserProfileController as user'
        })
        .state('userProfile.saved', {
            url: '/userProfileSaved',
            templateUrl: '../userProfile.saved.html',
            controller: 'UserProfileController as user'
        })
        .state('userProfile.tracker', {
            url: '/userProfileTracker',
            templateUrl: '../userProfile.tracker.html',
            controller: 'UserProfileController as user'
        })
        .state('userProfile.information', {
            url: '/userProfileInformation',
            templateUrl: '../userProfile.information.html',
            controller: 'UserProfileController as user'
        });
});