var express = require('express');
var router = express.Router();

var User = require("../models/user_model").User;

// Get All
router.get('/', function (req, res, next) {
	User.find().exec(function (err, usuarios) {
		if (err)
			console.log(err);
		res.send(usuarios);
	});
});

//PUT
router.put('/:id', function (req, res) {
	User.findById(req.params.id, function (err, user) {
		user.username = req.body.username;
		user.password = req.body.password;
		user.type_of_user = req.body.type_of_user;

		user.save().then(
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

// Post
router.post("/login", function (req, res, next) {
	User.findOne({ username: req.body.username, password: req.body.password }, function (err, user) {
		if (err)
			console.log(err);
		try {
			res.send(user._id);
		}
		catch{
			res.send();
        }		
	});
});

// Get ID
router.get('/:id', function (req, res, next) {
	User.findById(req.params.id).exec(function (err, usuarios) {
		if (err)
			console.log(err);
		res.send(usuarios);
	});
});

// Post
router.post("/", function (req, res,next) {

	var user = new User({
		username: req.body.username,
		password: req.body.password,
		type_of_user: req.body.type_of_user
	});

	user.save().then(function (us) {
		res.send("Guardamos tus datos");
	}, function (err) {
		if (err) {
			console.log(String(err));
			res.send("No se guardo el usuario")
		}
	});
});

// Delete
router.delete('/:id', function (req, res, next) {
	User.findByIdAndDelete(req.params.id).exec(function (err, users) {
		if (err)
			console.log(err);
		res.send(users);
	});
});

module.exports = router;

