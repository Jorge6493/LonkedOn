var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lonkedon");

var category_schema = new Schema({
	title: { type: String, required: true }
});

var Job = mongoose.model("Category", category_schema)

module.exports.Category = Category;