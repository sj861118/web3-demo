// index.js

var express    = require("express");
var app = express();

app.use(express.static(__dirname+"/public"));

// Port setting
app.listen(3000, function(){
 console.log("server on!");
});
