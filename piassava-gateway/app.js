var express = require('express');
const request = require('request');

var app = express();

app.get('/', function (req, res) {

  var url = 'http://piassava-weight-manager:3001/test';

  getRequest(url,null).then( (result) => {
    res.send(result);
  }).catch((error) => {
    console.log("Error", error);
    res.send(JSON.stringify(error));
  });

});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


function getRequest(url,data){

 return new Promise(function(resolve, reject) {
  
    request(url, (err, data, body) => {
        if (err) {  
          reject(new Error({msg: err})); 
        }
        else {
          resolve(body);
        }  
      });
  });
}