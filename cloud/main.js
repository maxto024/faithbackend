
Parse.Cloud.define('prayer', function(request, res) {
    var date = new Date();
   var  month = parseInt(pad(date.getMonth()+1));
  var year = date.getFullYear();
function  pad(n) 
   { return n < 10 ? '0' + n : n 
};
console.log(month,year);
  var prayerurl = 'http://api.aladhan.com/calendar?latitude='+parseFloat(request.params.lat)+'&longitude='+parseFloat(request.params.lon)+'&timezonestring='+request.params.continent+'%2F'+request.params.city+'&method='+parseFloat(request.params.method)+'&month='+month+'&year='+year;
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


Parse.Cloud.define('mosques', function(request, res) {

    
 var _url = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +parseFloat(request.params.lat) + ',' +parseFloat(request.params.lon) + '&rankby=' + request.params.rankby + '&types=' + request.params.type + '&key= ' + request.params.key

   var header = { 'Content-Type': 'application/x-www-form-urlencoded' }
   console.log(_url);
  Parse.Cloud.httpRequest({
        method: 'GET',
        url: _url,
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
