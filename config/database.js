const mongoose = require("mongoose");

var dbName = "Messages";

/**
 * This url is very important since it defines which collection you will connect to
 * What you named your Collection, you must put it there, for example:
 * My collection named "Messages" to store many message documents => mongodb://127.0.0.1:27017/Messages
 */
var url = "mongodb://127.0.0.1:27017/Messages";
var db = mongoose.connect(
	url,
	{
		useNewUrlParser: true,
		useUnifiedTopology: true,
	},
	(err) => {
		if (!err) {
			console.log(dbName + " is connected");
		} else {
			console.log("Error in DB connection : " + err);
		}
	}
);

var db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {});
