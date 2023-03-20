// Imports
const express = require ('express');

//Instantiate server
var server = express();

// configure routes
server.get('/', function (req, res) {
    res.send("Hello world");
});

// launch sever  
server.listen(80, function() {
    console.log("Server en écoute :) ");
});
