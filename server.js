"use strict"

var express = require('express');
var bodyParser = require("body-parser");

var server = express();
var jsonParser = bodyParser.json();

server.use(express.static(__dirname));

server.use(jsonParser);


server.get("/", function (request, response) {
    console.log("Start page is ranning...");
    response.send("<h1>Welcome!!!</h1>");
});


//server.get
server.get("/userGet", function(request, response) {
	console.log(request.query);
});


//server.post
server.post("/userPost", function(request, response) {
	console.log(request.body);
});

server.listen(3000);