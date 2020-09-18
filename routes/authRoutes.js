const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');
const axios = require('axios');

function salesforceAuthRoutes(router) {
  /* Login route */
  router.get(
    '/auth/login',
    passport.authenticate('salesforce', {
      scope: [
        'full'
      ]
    })
  );

  /* SF Callback route */
  router.get(
    '/auth/callback', 
    passport.authenticate('salesforce'),
    (req, res) => {
      // auth successful, redirect to logged in page
      res.redirect('/content-type');
    });

    /* logout route */
    router.get(
      '/auth/logout',
      requireLogin,
      (req, res) => {
        // revoke SF Access token via GET request
        console.log(`what's in the req object? : ${JSON.stringify(req)}`);
        axios.get(`https://login.salesforce.com/services/oauth2/revoke?token=${req.user.sfAcessToken}`, {
          'Authorization' : `Bearer ${req.user.sfAcessToken}`
        })
        .then(result => {
          console.log(`axios result: ${JSON.stringify(result)}`);
          if(result.status === 200) {
            req.session.destroy();
            res.redirect('/');
          }
        })
        .catch( err => {
          console.log(`eww something bad happened: ${err.message}`);
          res.redirect('/');
        });        
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