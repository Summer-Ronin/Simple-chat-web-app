/**
 * First thing is to get all the messages from db first
 * to do here is to use JBox and perform form validation
 * Then we perform what we need to perform
 */
$(document).ready(function () {
	// Get all messages from db and send to client side
	$.get("/messages", (data) => {
		data.forEach(function (mess) {
			$("#messages_viewer").append(`
                <h4> ${mess.name} </h4>
                <p>  ${mess.message} </p>
            `);
		});
	});

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

		// add messages
		addMessage({
			name: $("#user_name").val(),
			message: $("#user_mess").val(),
		});

		// empty all inputs
		$("#message_form")[0].reset();
	});
});

// add message to client side
function addMessage(message) {
	// write new message to client side
	$("#messages_viewer").append(`
        <h4> ${message.name} </h4>
        <p>  ${message.message} </p>
    `);

	// write new message to db
	$.post("/messages", message);
}

// get messages from db
function getMessage() {}
