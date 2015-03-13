
readyRead.factory('auth', function($state){
  var base = new Firebase('https://readyread.firebaseio.com/')
  var userArticle = new Firebase('https://readyread.firebaseio.com/articles')
  var auth = base.getAuth()
  return{
    logUserIn: function(){
      base.authWithOAuthPopup("twitter", function(error, authData) {
        if (error) {
          console.log("Login Failed!", error);
        } else {
          console.log("Authenticated successfully with payload:", authData);
        }
      });
    },
    logOut: function(){
      base.unauth(function(){
        $('.userDisplay').html('')
      })
    },
    hello: function(){
      base.onAuth(function(authData){
        if(authData){
          console.log('ello ello')
        }else{
          console.log('log in to use this feature')
        }
      })
    },
    addCustomArticle: function(){
      var add = {
        name: this.newArticle.name,
        url: this.newArticle.name
      }
      base.onAuth(function(authData){
        if(authData){
          base.child('articles').child(authData.uid).push(add)
          console.log('added to your list of added articles')
        }else{
          console.log('please log in to use this feature')
        }
      })
    }
  }
})
