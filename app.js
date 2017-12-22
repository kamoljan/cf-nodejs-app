const express = require('express')
const app = express()

var http = require('http');
var fs = require('fs');


app.get('/', function (req, res) {
  var file = fs.createWriteStream("100MB.zip");
  var request = http.get("http://90.130.70.73/100MB.zip", function (response) {
    response.pipe(file);
  });
  res.send('Hello World!')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})