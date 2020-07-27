var express = require('express');
var router = express.Router();

var User = require("../models/user_model").User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a GET for Pedro');
});

router.post("/create", function (req, res,next) {

	var user = new User({
		username: req.username,
		password: req.password,
		type_of_user: req.type_of_user
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

