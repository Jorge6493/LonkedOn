var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lonkedon",{ useNewUrlParser: true, useUnifiedTopology: true });

var user_schema = new Schema({
	username: { type: String, required: true, maxlength: [50, "Username muy grande"] },
	password: {
		type: String, required: true
	},
	type_of_user: { type: String, required: true }
});

var User = mongoose.model("User", user_schema)

module.exports.User = User;