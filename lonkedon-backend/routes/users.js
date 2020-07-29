var express = require('express');
var router = express.Router();

var User = require("../models/user_model").User;

// GET ALL USERS
router.get('/', function (req, res, next) {
	User.find().exec(function (err, usuarios) {
		if (err)
			console.log(err);
		res.send(usuarios);
	});
});

router.get('/:id', function (req, res, next) {
	User.findById(req.params.id).exec(function (err, usuarios) {
		if (err)
			console.log(err);
		res.send(usuarios);
	});
});

// POST USER
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

module.exports = router;

