function clickedInstagram() {
    console.log('oh wow hi');
    
    // Initialize with your OAuth.io app public key
OAuth.initialize('cUXp4Mx_8PgliLxqplxKDGFx-ZI');
//Using popup (option 1)
OAuth.popup('instagram')
.done(function(result) {
  //use result.access_token in your API request 
  //or use result.get|post|put|del|patch|me methods (see below)
})
.fail(function (err) {
  //handle error with err
});

}
