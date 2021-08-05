var express = require('express');
const { Server } = require("socket.io");
const io = new Server(server);
var app = express()

var bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}))

var mongoose = require('mongoose');

//  Connect to database
var connection = require("./database")

app.use(express.static(__dirname));

// Index page serving
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    console.log('a user connected');
});

var server = app.listen(3000, () =>{
    console.log('http://localhost:3000', server.address().port);

});



