var express = require("express");
var app = express();

app.use(express.static(__dirname + '/public'));

app.listen(3400,function(){
  console.log("probando, probando");
});
