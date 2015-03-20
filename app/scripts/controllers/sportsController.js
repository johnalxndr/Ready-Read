readyRead.controller('SportsController', function(api,angularAuth,$firebaseAuth){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com')
  this.getAuth = $firebaseAuth(base)
  this.getAuth.$onAuth(function (authData) {
      self.authData = authData
  })
  api.sports.then(function(data){
    self.sportsNews = data.results;
  })
  this.markRead = angularAuth.markAsRead
})
