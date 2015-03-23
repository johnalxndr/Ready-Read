readyRead.controller('TechController', function(api,$firebaseAuth,angularAuth,$firebaseArray){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com');
  this.order = '';
  this.orderByTime = function(){
    this.order = 'wordcount';
  };
  this.orderByTimeHigh = function(){
    this.order = '-wordcount';
  };
  this.resetOrder = function(){
    this.order = '';
  };
  this.getAuth = $firebaseAuth(base);
  this.getAuth.$onAuth(function (authData) {
      self.authData = authData;
  });
  api.tech.then(function(data){
    self.techNews = data.results;
  });
  this.markRead = angularAuth.markAsRead;
  this.save = angularAuth.saveArticle;
});
