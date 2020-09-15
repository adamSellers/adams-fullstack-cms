const passport = require('passport');
const requireLogin = require('../middlewares/requireLogin');

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