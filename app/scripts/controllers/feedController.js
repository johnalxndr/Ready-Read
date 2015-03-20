  readyRead.controller('FeedController', function (api, angularAuth, $firebaseObject, $firebaseAuth, $state) {
    var self = this;
    var base = new Firebase('https://readyread.firebaseio.com/users/')
    this.getAuth = $firebaseAuth(base)
    this.getAuth.$onAuth(function (authData) {
        self.authData = authData
    })
    this.markedAsRead = function (words) {
        var userBase = $firebaseObject(base.child(base.getAuth().uid))
        var users = new Firebase('https://readyread.firebaseio.com/users/' + base.getAuth().uid)
        userBase.$loaded().then(function (data) {
            self.time = data.timeRead
            self.words = data.wordsRead
            users.update({
                timeRead: self.time + time,
                wordsRead: self.words + words
            })
        })
    }
})
