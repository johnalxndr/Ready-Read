readyRead.factory('angularAuth', function ($firebaseArray, $firebaseAuth, $firebaseObject, $state) {
    var base = new Firebase('https://readyread.firebaseio.com/')
    var users = $firebaseObject(base.child('users'))
    var articles = $firebaseArray(base.child('articles'))
    return {
        logIn: function () {
          base.authWithOAuthPopup("twitter", function(error, authData) {
            if (error) {
              console.log("Login Failed!", error);
            } else {
              $state.go('userProfile')
              console.log("Authenticated successfully with payload:", authData)
              base.getAuth()
            }
          });
        },
        logout: function () {
            base.unauth()
            base.getAuth()
            $state.go('login')
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
            var userArticles = $firebaseArray(base.child('articles').child(base.getAuth().uid))
            if (base.getAuth().uid) {
                userArticles.$add(saved).then(function (base) {
                    console.log(saved)
                })
            } else {
                console.log('log in to use this feature')
            }
        }
    }
})
