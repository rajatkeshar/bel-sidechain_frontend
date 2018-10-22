var express = require('express');
var path    = require("path");

var app = express();

//assuming app is express Object.

app.get('/', function(req, res) {

	res.sendFile(path.join(__dirname+'/register.html'));
	
});

app.get('/api/dapps/:dappId',function(req,res){
       
     res.sendFile(path.join(__dirname+'/index.html'));

});

app.listen('8080', function(req, res) {
	console.log("Server running at port 8080");
});
