const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const content = require('./contentRoutes');

/* Salesforce authroutes */
authRoutes.salesforceAuthRoutes(router);

/* Bringing in the fake routes */
content.contentRoutes(router);


module.exports = router;
