// MODULES IMPORT
var express = require("express");
var app = express();
const http = require("http").Server(app);
const io = require("socket.io")(http);
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

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
		io.emit("message", req.body);
		res.sendStatus(200);
	});
});

io.on("connection", (socket) => {
	console.log("Number of connection: ", io.engine.clientsCount);
});

http.listen(port, () => {
	console.log(`Socket.IO server running at http://localhost:${port}/`);
});
