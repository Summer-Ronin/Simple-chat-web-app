var express = require('express');
const { Server } = require("socket.io");
const io = new Server(server);
var app = express()

var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var mongoose = require('mongoose');

//  Connect to database
var connection = require("./config/database")

// Define static dirname
app.use(express.static("views"));

// Index page serving
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

var server = app.listen(3000, () =>{
    console.log('http://localhost:3000', server.address().port);

});



