//'use strict';

//const http = require('http');
//const url  = process.argv[2];

//http.get(url, function(response) {
  //response.setEncoding("utf8");
  //response.on("data", console.log);
  //response.on("error", console.error);
//});

var http = require('http');

http.get(process.argv[2], function(result) {
    var data = '';
    result.setEncoding('utf8');
    result.on('error', function (err) {
        console.error(err);
    });
    result.on('data', function (chunk) {
        data += chunk;
    });
    result.on('end', function () {
        console.log(data.length);
        console.log(data);
    });
});