var express = require('express');
var router = express.Router();

var Job = require("../models/job_model").Job;

// Get All
router.get('/', function (req, res, next) {
	Job.find().sort({ publication_date: 'descending' }).exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
});

// Get by Category
router.get('/category/:name', function (req, res, next) {
	Job.find({ category: req.params.name }).exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
})

// Get ID
router.get('/:id', function (req, res, next) {
	Job.findById(req.params.id).exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
});

//PUT
router.put('/:id', function (req, res) {
	console.log(req.params.id);
	Job.findById(req.params.id, function (err, job) {
		job.location = req.body.location;
		job.position = req.body.position;
		job.company = req.body.company;
		job.type_of_job = req.body.type_of_job;
		job.category = req.body.category;
		job.logo = req.body.logo;
		job.url = req.body.url;
		job.description = req.body.description;
		job.como_aplicar = req.body.como_aplicar;
		job.email = req.body.email;
		job.publication_date = job.publication_date;

		job.save().then(
			function (us) {
				res.send("Guardamos tus datos");
			},
			function (err) {
				if (err) {
					res.send("No se guardo: " + String(err));
				}
			}
		);
	});
});



// Delete
router.delete('/:id', function (req, res, next) {
	Job.findByIdAndDelete(req.params.id).exec(function (err, jobs) {
		if (err)
			console.log(err);
		res.send(jobs);
	});
});

// Post
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
		como_aplicar: "Por favor enviar un correo electronico a " + req.body.email,
		email: req.body.email,
		publication_date: Date.now()
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

