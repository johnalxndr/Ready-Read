readyRead.controller('MainController', function (angularAuth, $firebaseAuth) {
    var base = new Firebase('https://readyread.firebaseio.com')
    var self = this
    this.isCollapsed = true;
    this.auth = $firebaseAuth(base)
    this.logout = angularAuth.logout
    this.getAuth = $firebaseAuth(base)
    this.getAuth.$onAuth(function (authData) {
        self.authData = authData
    })
})