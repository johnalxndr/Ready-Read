







//
// return {
//  logUserIn : this.auth.$authWithOAuthPopup("twitter").then(function(authData) {
//   console.log("Logged in as:", authData.uid);
// }).catch(function(error) {
//   console.error("Authentication failed:", error);
// }),
//  logOut : function() {
// this.auth.$unauth(function(){
//   $('.userDisplay').html('')
// })
// },
//  hello: function (){
// this.auth.$onAuth(function(authData){
//   if(authData){
//     console.log('ello ello')
//   }else{
//     console.log('log in to use this feature')
//   }
// })
// },
//  addCustomArticle: function(){
// var add = {
//   name: this.newArticle.name,
//   url: this.newArticle.name
// }
// this.auth.$onAuth(function(authData){
//   if(authData){
//     this.userArticle.child(authData.uid).$add(add)
//     console.log('added to your list of added articles')
//   }else{
//     console.log('please log in to use this feature')
//   }
// })
// }
// }
// })
