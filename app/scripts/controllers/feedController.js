readyRead.controller('FeedController', function(api,angularAuth,$firebaseObject,$firebaseAuth){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com/users/')
  this.getAuth = $firebaseAuth(base)
  this.getAuth.$onAuth(function(authData){
    self.authData = authData
  })
  api.tech.then(function(data){
    self.articles = data.results.collection1
  })
  api.news.then(function(data){
    self.newsArticles = data.results
  })
  api.sports.then(function(data){

  })
  this.timeCount = function(text){
    var s = text ? text.split(/\s+/) : 0;
    return Math.round(s ? s.length/190 : '');
  };
  this.wordCount = function(text){
    var s = text ? text.split(/\s+/) : 0;
    return s ? s.length : '';
  };
  this.markedAsRead = function(words,time){
    var userBase = $firebaseObject(base.child(base.getAuth().uid))
    var users = new Firebase('https://readyread.firebaseio.com/users/'+base.getAuth().uid)
    userBase.$loaded().then(function(data){
      self.time = data.timeRead
      self.words = data.wordsRead
      users.update({
        timeRead: self.time+time,
        wordsRead: self.words+words
      })
    })
  }
})
