
Parse.Cloud.define('prayer', function(req, res) {

  var prayerurl = 'http://api.aladhan.com/calendar?latitude=23.8103&longitude=90.4125&timezonestring=Asia%2FDhaka&method=2&month=05&year=2017';
   var header = { 'Content-Type': 'application/x-www-form-urlencoded' }
   console.log(prayerurl);
  Parse.Cloud.httpRequest({
        method: 'GET',
        url: prayerurl,
        headers: header,
    }).then(function (httpResponse) {
            console.log("done")
          console.log(httpResponse.data)
        res.success(httpResponse.data);
    }, function (httpResponse) {
        console.log(httpResponse.data);
        res.error(httpResponse.data);
    });

});
