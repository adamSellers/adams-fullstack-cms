const express = require('express');
const router = express.Router();
const authRoutes = require('./authRoutes');
const fake = require('./fakeRoutes');

/* Salesforce authroutes */
authRoutes.salesforceAuthRoutes(router);

/* Bringing in the fake routes */
fake.fakeRoutes(router);


module.exports = router;
