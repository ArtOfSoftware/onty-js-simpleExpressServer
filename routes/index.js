var express = require('express');
var router = express.Router();

console.log("### Index router starts...")

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log("### Index router's root item invoked")
  res.render('index', { title: 'Express' });
});

module.exports = router;

console.log("### Index router done...")
