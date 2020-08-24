module.exports = ( req, res, next ) => {
  console.log('hey, require login got called!');
  if (!req.user) {
    // not logged in so gack, probably update to login redirect at some point ;)
    return res.status(401).send({ error: 'you must login first '}); 
  }

  next();
} 