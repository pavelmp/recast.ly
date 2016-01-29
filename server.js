var express = require('express');
var app = express();
var port = 8080;

app.use(express.static(__dirname + '/client'));

console.log('Recast.ly listening on ' + port);
app.listen(port);