var express = require('express');
var app = express();

app.get("/", function(req, res){
	res.send("<div style = 'background-color: blue; height: 200px; width: 200px'></div>");
});

app.listen(process.env.PORT|3000, function(){
	console.log("running");
});