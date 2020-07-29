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

router.get('/:id', function (req, res, next) {
	Job.findById(req.params.id).exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
});

router.get('/categoty:id', function (req, res, next) {
	Job.find({ category: 'Design' }).exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
})

router.delete('/:id', function (req, res, next) {
	Job.findByIdAndDelete(req.params.id).exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
});

router.post("/", function (req, res,next) {

	var job = new Job({
		location: req.body.location,
		position: req.body.position,
		company: req.body.company,
		type_of_job: req.body.type_of_job,
		category: req.body.category,
		logo: req.body.logo,
		url: req.body.url,
		description: req.body.description,
		como_aplicar: req.body.como_aplicar,
		email: req.body.email
	});

	job.save().then(function (us) {
		res.send("Guardamos tus datos");
	}, function (err) {
		if (err) {
			console.log(String(err));
			res.send(req.body)
		}
	});
});

module.exports = router;

