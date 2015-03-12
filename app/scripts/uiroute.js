readyRead.config(function($stateProvider, $urlRouterProvider){
  $urlRouterProvider.otherwise("/login");
  $stateProvider
  .state('login',{
    url: '/login',
    templateUrl: './login.html',
    controller: 'LoginController as login'
  })
  .state('feed',{
    url: '/feed',
    templateUrl: './feed.html',
    controller: 'FeedController as feed'
  })
  .state('feed.list',{
    url: '/list',
    templateUrl: './feed.list.html',
    controller: 'FeedController as feed'
  })
  .state('feed.listtwo',{
    url: '/listtwo',
    templateUrl: './feed.listtwo.html',
    controller: 'FeedController as feed'
  })
})
