var mongoose = require("mongoose");
var Schema = mongoose.Schema;

(messageSchema = new Schema(
	{
		name: String,
		message: String,
	},
	{ collection: "message", timestamps: true }
)),
	// model is very important, point to the right database(model) name to get access correctly
	(Message = mongoose.model("Messages", messageSchema));

// So we are now in Users.user
module.exports = Message;
