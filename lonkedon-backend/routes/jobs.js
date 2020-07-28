var express = require('express');
var router = express.Router();

var Job = require("../models/job_model").Job;

// GET ALL JOBS
router.get('/', function (req, res, next) {
	Job.find().exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
});

router.post("/", function (req, res,next) {

	var job = new Job({
		location: "Santo Domingo",
		position: "Software Developer",
		company: "Pedro Guillermo & Asoc",
		type_of_job: "Type",
		category: "Software",
		logo: null,
		url: null,
		description: "Great Job!",
		email: "me@me.com"
	});

	job.save().then(function (us) {
		res.send("Guardamos tus datos");
	}, function (err) {
		if (err) {
			console.log(String(err));
			res.send("No se guardo el trabajo")
		}
	});
});

module.exports = router;

