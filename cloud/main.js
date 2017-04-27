
Parse.Cloud.define('prayer', function(request, res) {
  
  var prayerurl = 'http://api.aladhan.com/calendar?latitude='+parseFloat(request.params.lat)+'&longitude='+parseFloat(request.params.lon)+'&timezonestring='+request.params.continent+'%2F'+request.params.city+'&method='+parseFloat(request.params.method)+'&month='+request.params.month+'&year='+request.params.year;
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
