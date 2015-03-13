readyRead.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/login");
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: './login.html',
            controller: 'LoginController as login'
        })
        .state('feed', {
            url: '/feed',
            templateUrl: './feed.html',
            controller: 'FeedController as feed'
        })
        .state('feed.techCrunch', {
            url: '/techCrunch',
            templateUrl: './feed.techCrunch.html',
            controller: 'FeedController as feed'
        })
        .state('feed.read', {
            url: '/read',
            templateUrl: './feed.read.html',
            controller: 'FeedController as feed'
        })
        .state('feed.title', {
            url: '/title',
            templateUrl: './feed.title.html',
            controller: 'FeedController as feed'
        })
        .state('feed.category', {
            url: '/category',
            templateUrl: './feed.category.html',
            controller: 'FeedController as feed'
        })
})