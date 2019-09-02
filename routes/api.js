var express = require('express');
var router = express.Router();
const colorController = require('../controllers/colors');

router.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); 
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

router.get('/colors', colorController.getColors);

module.exports = router;
