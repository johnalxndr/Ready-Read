readyRead.factory('angularAuth', function ($firebaseArray, $firebaseAuth, $firebaseObject, $state) {
    var base = new Firebase('https://readyread.firebaseio.com/')
    var users = $firebaseObject(base.child('users'))
    var articles = $firebaseArray(base.child('articles'))
    var authObj = $firebaseAuth(base)
    var authenticated = authObj.$getAuth()


<<<<<<< HEAD
    return {
        getAuth: authenticated,
        logIn: function () {
            authObj.$authWithOAuthPopup("twitter").then(function (authData) {
                $state.go('feed.category')
                console.log("Logged in as:", authData.uid);
            }).catch(function (error) {
                console.error("Authentication failed:", error);
            })
        },
        logout: function () {
            authObj.$unauth()
        },
        updateUser: base.onAuth(function (authData) {
            if (authData) {
                base.child('users').child(authData.uid).update({
                    name: authData.twitter.username,
                    displayName: authData.twitter.displayName,
                    picture: authData.twitter.cachedUserProfile.profile_image_url,
                    isMember: true
                })
            }
        }),
        saveArticle: function (saved) {
            var userArticles = $firebaseArray(base.child('articles').child(authenticated.uid))
            var newDate = Date.now()
            if (authenticated) {
                userArticles.$add(saved).then(function (base) {
                    console.log(saved)
                })
            } else {
                console.log('log in to use this feature')
            }
        }
=======
  return {
    getAuth: authenticated,
    logIn: function(){
      authObj.$authWithOAuthPopup("twitter").then(function(authData) {
        $state.go('feed.category')
      console.log("Logged in as:", authData.uid);
    }).catch(function(error) {
      console.error("Authentication failed:", error);
    })
    },
    logout: function(){
      authObj.$unauth()
    },
    updateUser: base.onAuth(function(authData){
      if(authData){
        base.child('users').child(authData.uid).update({
          name: authData.twitter.username,
          displayName: authData.twitter.displayName,
          picture: authData.twitter.cachedUserProfile.profile_image_url,
          isMember: true
        })
      }
    }),
    saveArticle: function(saved){
      var userArticles = $firebaseArray(base.child('articles').child(authenticated.uid))
      var newDate = Date.now()
      if(authenticated){
        userArticles.$add(saved).then(function(base){
          console.log(saved)
        })
      }else{
        console.log('log in to use this feature')
      }
>>>>>>> e973cdc327cee8d62617171ec81c5de04f246cc0
    }
})