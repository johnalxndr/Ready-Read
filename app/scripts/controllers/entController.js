readyRead.controller('EntController', function(api,angularAuth,$firebaseAuth){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com');
  this.getAuth = $firebaseAuth(base)
  this.getAuth.$onAuth(function (authData) {
      self.authData = authData
  })
  api.ent.then(function(data){
    self.entNews = data.results;
  })
  this.markRead = angularAuth.markAsRead
})
