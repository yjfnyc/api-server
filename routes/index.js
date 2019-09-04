var express = require('express');
var router = express.Router();
const api = require('./api');
const cors= require('cors');
const graphql = require('./graphql');

router.use(cors());
router.use('/api', api);
router.use('/graphql', graphql);

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
