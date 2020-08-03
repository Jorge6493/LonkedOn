var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var img_schema = new Schema({
	imageName: {
		type: String,
		default: "none",
		required: true
	},
	imageData: {
		type: String,
		required: true
	}
});

var Image = mongoose.model("Image", img_schema);

module.exports = Image;