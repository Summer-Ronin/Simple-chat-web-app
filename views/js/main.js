/**
 * First thing is to get all the messages from db first
 * to do here is to use JBox and perform form validation
 * Then we perform what we need to perform
 */
var socket = io();

$(document).ready(function () {
	// Get all messages from db and send to client side
	getMessage()

    /**
     * First validate the form, if it is all OK then
     * we send the message to database but not yet send back to client side cause we will perform that using socket later
     */
	$("#send").click(function (event) {
		event.preventDefault();

		// validate form
		if (
			$("#user_name").val() == null ||
			$("#user_mess").val() == null ||
			$("#user_name").val().length == 0 ||
			$("#user_mess").val().length == 0
		) {
			new jBox("Notice", {
				content: "Name or Message is empty",
				color: "red",
			});
		} 
        else {
            // send new message to db
            sendMessage({
                name: $("#user_name").val(),
			    message: $("#user_mess").val(),
            })

			// empty all inputs using form reset 
			$("#message_form")[0].reset();
		}
	});

	socket.on('message', addMessage)
});

// send message to database
function sendMessage(message){
	$.post("/messages", message);
}

// add message to client side
function addMessage(message) {
	// write new message to client side
	$("#messages_viewer").append(`
        <h4> ${message.name} </h4>
        <p>  ${message.message} </p>
    `);
}

// get messages from db
function getMessage() {
    $.get('/messages', (messages) => {
        messages.forEach(function(mess){
            addMessage(mess)
        })
    })
}
