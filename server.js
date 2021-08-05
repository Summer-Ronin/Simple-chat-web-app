var express = require("express");
const { Server } = require("socket.io");
const io = new Server(server);
var app = express();

var bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

var mongoose = require("mongoose");

//  Connect to database
var connection = require("./config/database");

// Define static dirname
app.use(express.static("views"));

// init Message model
var Message = require("./models/message");

// Index page serving
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/views/index.html");
});

// get all the messages from db
app.get("/messages", (req, res) => {
	Message.find({}, (err, messages) => {
		res.send(messages);
	});
});

app.post("/messages", (req, res) => {
	var message = new Message(req.body);
	message.save((err) => {
		if (err) sendStatus(500);
		res.sendStatus(200);
	});
});

var server = app.listen(3000, () => {
	console.log("http://localhost:3000", server.address().port);
});
