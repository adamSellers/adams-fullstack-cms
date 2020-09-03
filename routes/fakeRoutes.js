const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

function fakeRoutes(router) {
  /* Return a list of community ID's and names */
  router.get(
    '/api/v1/communities',
    requireLogin,
    (req, res) => {
      res.send({
        "totalSize" : 12,
        "done" : true,
        "records" : [ {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9IGAQ"
          },
          "Id" : "0DB2w000000wr9IGAQ",
          "Name" : "Partner Central"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9JGAQ"
          },
          "Id" : "0DB2w000000wr9JGAQ",
          "Name" : "Consumer Community"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9KGAQ"
          },
          "Id" : "0DB2w000000wr9KGAQ",
          "Name" : "Ω - Legacy B2B Commerce Storefront"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9LGAQ"
          },
          "Id" : "0DB2w000000wr9LGAQ",
          "Name" : "Professional Community"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9MGAQ"
          },
          "Id" : "0DB2w000000wr9MGAQ",
          "Name" : "Ω - Partner"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9NGAQ"
          },
          "Id" : "0DB2w000000wr9NGAQ",
          "Name" : "Ω - Legacy Employee Community"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9OGAQ"
          },
          "Id" : "0DB2w000000wr9OGAQ",
          "Name" : "B2B Commerce Lightning Experience"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9PGAQ"
          },
          "Id" : "0DB2w000000wr9PGAQ",
          "Name" : "Ω - Customer"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9QGAQ"
          },
          "Id" : "0DB2w000000wr9QGAQ",
          "Name" : "Ω - Legacy 1"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9RGAQ"
          },
          "Id" : "0DB2w000000wr9RGAQ",
          "Name" : "Ω - Legacy 2"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9SGAQ"
          },
          "Id" : "0DB2w000000wr9SGAQ",
          "Name" : "Ω - Legacy 3"
        }, {
          "attributes" : {
            "type" : "Network",
            "url" : "/services/data/v49.0/sobjects/Network/0DB2w000000wr9TGAQ"
          },
          "Id" : "0DB2w000000wr9TGAQ",
          "Name" : "Ω - Legacy 5"
        } ]
      })
    }
  );

  /* SF Callback route */
  router.get(
    '/auth/callback', 
    passport.authenticate('salesforce'),
    (req, res) => {
      // auth successful, redirect to root
      res.redirect('/');
    });

    /* logout route */
    router.get(
      '/auth/logout',
      requireLogin,
      (req, res) => {
        // add a further call to SF to logout of SF at some point
        req.session.destroy();
        res.redirect('/');
      }
    );

    /* Route to return current user details */
    router.get(
      '/api/v1/current_user',
      (req, res) => {
        res.setHeader('content-type', 'text/javascript; charset=UTF-8');
        res.send(req.user);
      }
    );
}

module.exports = {
  salesforceAuthRoutes
};