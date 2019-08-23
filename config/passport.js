var passport = require('passport');

var GoogleStrategy = require('passport-google-oauth20').Strategy;

var Customer = require('../models/customer');

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
},
    function(accessToken, refreshToken, profile, cb) {
        // a customer has logged in with OAuth...
        console.log(profile);
        Customer.findOne({ googleId: profile.id }, function(err, customer) {

            if (err) return cb(err);
            if (customer) {
                console.log('has customer');
                return cb(null, customer);
            } else {
                // we have a new customer via OAuth!
                var newCustomer = new Customer({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });
                newCustomer.save(function(err){
                    console.log(newCustomer)
                    return cb(null, newCustomer);
                });
            }
        });
    }
));

passport.serializeUser(function(customer, done){
    done(null, customer.id);
});

passport.deserializeUser(function(id, done){
    Customer.findById(id, function(err, customer){
        done(err, customer);
    });
});