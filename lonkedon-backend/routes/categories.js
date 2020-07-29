var express = require('express');
var router = express.Router();

var Category = require("../models/category_model").Category;

// Get All
router.get('/', function (req, res, next) {
	Category.find().exec(function (err, categorias) {
		if (err)
			console.log(err);
		res.send(categorias);
	});
});

// Get ID
router.get('/:id', function (req, res, next) {
	Category.findById(req.params.id).exec(function (err, categorias) {
		if (err)
			console.log(err);
		res.send(categorias);
	});
});

// Post
router.post("/", function (req, res,next) {

	var category = new Category({
		category: req.body.category
	});

	category.save().then(function (us) {
		res.send("Guardamos tus datos");
	}, function (err) {
		if (err) {
			console.log(String(err));
			res.send("No se guardo la categoria")
		}
	});
});

// Delete
router.delete('/:id', function (req, res, next) {
	Category.findByIdAndDelete(req.params.id).exec(function (err, category) {
		if (err)
			console.log(err);
		res.send(category);
	});
});

module.exports = router;

