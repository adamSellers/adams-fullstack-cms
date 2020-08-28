var express = require('express');
var router = express.Router();
const authRoutes = require('./authRoutes');

/* Salesforce authroutes */
authRoutes.salesforceAuthRoutes(router);

module.exports = router;
