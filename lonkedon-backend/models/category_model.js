var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lonkedon");

var category_schema = new Schema({
	name: { type: String, required: true }
});

var Category = mongoose.model("Category", category_schema)

module.exports.Category = Category;