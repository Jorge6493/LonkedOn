var express = require('express');
var router = express.Router();

var User = require("../models/user").User;

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/create", function (req, res) {

	var user = new User({
		username: req.body.username,
		password: req.body.password
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

