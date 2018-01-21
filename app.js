require('./api/data/dbConnection.js').open();

//require('./api/data/db.js');


var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');

var routes = require('./api/routes');

app.set('PortNo',8800);

app.use(function(req,res,next){
	
	console.log(req.method,req.url);
	 next();
	
});

app.use(express.static(path.join(__dirname,'public')));
app.use('/node_modules',express.static(__dirname+'/node_modules'));



// Enable parsing of posted forms
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/api',routes);

/*
app.get("/",function(req,res){
	
	console.log("GET The Home Pages");
	res.sendFile(path.join(__dirname,'Public','index.html'));
});
*/

/*

app.get("/json",function(req,res){
	
	console.log("GET the json Object");
	res
	.status(600)
	.json({"Name":"Piyush"});
});
*/

/*
app.get("/file",function(req,res){
	
	console.log("GET the file Object");
	res
	.status(200)
	.sendFile(path.resolve('../../../../../D:/Projects/Gieom_Frontend_Hiring_Challenge.json'));
});
*/

var server = app.listen(app.get('PortNo'),function(){
var port = server.address().port;
console.log("Magic happen at port "+port);	
});


console.log("Magic happen after port "+app.get('PortNo'));