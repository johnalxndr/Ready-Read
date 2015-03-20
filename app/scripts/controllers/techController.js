readyRead.controller('TechController', function(api,$firebaseAuth,angularAuth){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com')
  this.getAuth = $firebaseAuth(base)
  this.getAuth.$onAuth(function (authData) {
      self.authData = authData
  })
  api.tech.then(function(data){
    self.techNews = data.results;
  })
  this.markRead = angularAuth.markAsRead
})
