 var proxy = 'http://localhost:54305';

 var destiny = Destiny(proxy + '/platform/Destiny/'); // this is your proxy server

 destiny
     .Search({
         membershipType: 2,
         name: 'me88'
     })
     .then(function(res) {
         console.log('res:', res);

         $("div").empty();

         $("div").append('<img src=' + proxy +res[0].iconPath + '></img>');
         $("div").append('</br>MembershipID: ' + res[0].membershipId);
         $("div").append('</br>DisplayName: ' + res[0].displayName);


     });
