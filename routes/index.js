var express = require('express');
var router = express.Router();
const authRoutes = require('./authRoutes');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Salesforce authroutes */
authRoutes.salesforceAuthRoutes(router);

module.exports = router;
