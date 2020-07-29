var mongoose = require("mongoose");
var Schema = mongoose.Schema;

mongoose.connect("mongodb://localhost/lonkedon");

var job_schema = new Schema({
	location: { type: String, required: true },
	position: { type: String, required: true },
	company: { type: String, required: true },
	type_of_job: { type: String, required: true },
	category: { type: String, required: true },
	logo: { type: String },
	url: { type: String },
	description: { type: String, required: true },
	como_aplicar: { type: String },
	email: { type: String, required: true },
	publication_date: { type: Date, required: true }
});

var Job = mongoose.model("Job", job_schema)

module.exports.Job = Job;