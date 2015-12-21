/**
 * Created by iallai on 21/12/2015.
 */
var http = require('http');
var data=''
http.get("http://www.paipaizhao.net/rest/contents", function(res,a,b) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        //console.log('BODY: ' + chunk);
        data=data+chunk

    });
    res.on('end', function() {
        console.log('No more data in response.')
        console.log(data)


    })
    // consume response body
    res.resume();
}).on('error', function(e) {
    console.log("Got error: " + e.message);
});

