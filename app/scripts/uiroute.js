readyRead.config(function ($stateProvider, $urlRouterProvider) {
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
        .state('feed.tech', {
            url: '/title',
            templateUrl: './feed.tech.html',
            controller: 'FeedController as feed'
        })
        .state('feed.category', {
            url: '/category',
            templateUrl: './feed.category.html',
            controller: 'FeedController as feed'
        })
        .state('feed.news', {
            url: '/feed.news',
            templateUrl: './feed.news.html',
            controller: 'FeedController as feed'
        })
        .state('userProfile', {
            url: '/userProfile',
            templateUrl: './userProfile.html',
            controller: 'UserProfileController as user'
        })
        .state('userProfile.saved', {
            url: '/userProfileSaved',
            templateUrl: './userProfile.saved.html',
            controller: 'UserProfileController as user'
        })
        .state('userProfile.tracker', {
            url: '/userProfileTracker',
            templateUrl: './userProfile.tracker.html',
            controller: 'UserProfileController as user'
        })
        .state('userProfile.information', {
            url: '/userProfileInformation',
            templateUrl: './userProfile.information.html',
            controller: 'UserProfileController as user'
        })
        .state('feed.sports', {
            url: '/feed.sports',
            templateUrl: './feed.sports.html',
            controller: 'FeedController as feed'
        })
})
