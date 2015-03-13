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
  .state('feed.techCrunch',{
    url: '/techCrunch',
    templateUrl: './feed.techCrunch.html',
        })
    controller: 'FeedController as feed'
  })
})
