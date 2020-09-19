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
        console.log(`about to call this url: ${req.user.sfInstanceUrl}/services/oauth2/revoke?token=${req.user.sfAccessToken}`)
        // call the url to logout from Salesforce
        axios.get(`${req.user.sfInstanceUrl}/services/oauth2/revoke?token=${req.user.sfAccessToken}`)
        .then(result => {
          console.log(`was there any result from the axios call? ${JSON.stringify(result)}`);
          req.session.destroy();
          res.redirect('/');  
        }).catch( err => {
          console.log(`we caught an error: ${JSON.stringify(err)}`);
          req.session.destroy();
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