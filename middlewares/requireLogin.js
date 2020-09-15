module.exports = ( req, res, next ) => {
  console.log('hey, require login got called!');
  if (!req.user) {
    return res.redirect('/auth/login');
  }

  next();
} 