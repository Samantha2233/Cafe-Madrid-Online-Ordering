const router = require('express').Router();
const passport = require('passport');


router.get('/', function(req, res){
    res.redirect('/lunch');
});

// google OAuth login route
router.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email']}
  ));
  
  //Google OAuth callback route
  router.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/lunch',
      failureRedirect: '/lunch'
    }
  ));
  
  // OAuth logout route
  router.get('/logout', function(req, res){
    req.logout();
    res.redirect('/lunch');
  });

  module.exports = router;