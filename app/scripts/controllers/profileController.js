readyRead.controller('UserProfileController', function(angularAuth,$firebaseObject,$firebaseArray){
  var self = this;
  var base = new Firebase('https://readyread.firebaseio.com/users/')
  var userBase = $firebaseObject(base.child(base.getAuth().uid))
  var userHistory = $firebaseArray(new Firebase('https://readyread.firebaseio.com/articles/'+base.getAuth().uid))
  userBase.$loaded()
  .then(function(data) {
    self.displayName = data.displayName
    self.avatar = data.picture
    self.wordCount = data.wordsRead
    self.timeCount = data.timeRead
    self.other = data.other
    self.time = data.timeGoal
    self.progress = Math.floor((data.timeRead/data.timeGoal)*100);
    self.wordTracker = Math.floor((data.wordsRead/100000)*100);
    if(data.timeRead === undefined){
      base.child(data.$id).update({
        wordsRead: 0,
        timeRead: 0
      })
    }
  });
  userHistory.$loaded()
  .then(function(data){
    self.list = data
  })
  this.profileUpdate = function(){
    base.child(base.getAuth().uid).update({
      timeGoal: Number(this.newData.timeGoal),
      other: this.newData.other
    })
    this.newData = ''
  }
  this.logout = angularAuth.logout
})
