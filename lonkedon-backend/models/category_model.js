var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lonkedon",{ useNewUrlParser: true, useUnifiedTopology: true });

var category_schema = new Schema({
	category: { type: String, required: true }
});

var Category = mongoose.model("Category", category_schema)

module.exports.Category = Category;