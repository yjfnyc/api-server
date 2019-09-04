var express = require('express');
var router = express.Router();
const colorController = require('../controllers/colors');

router.get('/colors', colorController.getColors);

module.exports = router;
