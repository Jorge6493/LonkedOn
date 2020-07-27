var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lonkedon");

var email_match = [];

var user_schema = new Schema({
	username: { type: String, required: true, maxlength: [50, "Username muy grande"] },
	password: {
		type: String,
		minlength: [5, "El password es muy corto"]
	}
});

var User = mongoose.model("User", user_schema)

module.exports.User = User;