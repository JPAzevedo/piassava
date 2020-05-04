var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Hello World! Weight Manager');
});

app.get('/test', function (req, res) {
  res.send(JSON.stringify({ x: 5, y: 6 }));
});


app.listen(3001, function () {
  console.log('Example app listening on port 3000!');
});