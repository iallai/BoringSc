
var http = require('http');
var querystring = require('querystring');


var options = {
    hostname: 'www.paipaizhao.net',
    port: 80,
    path: '/rest/contents',
    method: 'GET'

};
//var options = {
//    hostname: 'www.paipaizhao.net',
//    port: 80,
//    path: '/rest/contents',
//    method: 'POSt'
//
//};

var req = http.request(options, function(res) {
    console.log('STATUS: ' + res.statusCode);
    console.log('HEADERS: ' + JSON.stringify(res.headers));
    res.setEncoding('utf8');
    res.on('data', function (chunk) {
        console.log('BODY: ' + chunk);
    });
    res.on('end', function() {
        console.log('No more data in response.')
    })
});

req.on('error', function(e) {
    console.log('problem with request: ' + e.message);
});

// write data to request body
req.write('ss');
req.end();
