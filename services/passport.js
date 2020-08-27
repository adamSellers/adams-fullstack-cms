// require the bits needed to run passport
const passport = require('passport');
const SalesforceStrategy = require('passport-salesforce').Strategy;

// setup variables needed to run the SF connected app
const clientId = process.env.CLIENTID;
const clientSecret = process.env.CLIENTSECRET;
const callbackUrl = process.env.APPURL + '/auth/callback';

// setup required for connecting to mongo
const mongoose = require('mongoose');
const User = mongoose.model('users');


// serialise and deserialise user functions go here, Passport calls these
// on every request to identify the user in he session cookie
passport.serializeUser(function (user, done) {
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    // query the db to find an existing user, id comes in from the user session cookie
    User.findById(id)
        .then(user => {
        done(null, user);
    });
});

// setup the Salesforce Strategy
passport.use(
    new SalesforceStrategy({
        clientID: clientId,
        clientSecret: clientSecret,
        callbackURL: callbackUrl,
        proxy: true,
        authorizationURL: process.env.SFCOMMUNITYURL + '/services/oauth2/authorize',
        tokenURL: process.env.SFCOMMUNITYURL + '/services/oauth2/token',
        profileURL: process.env.SFCOMMUNITYURL + '/services/oauth2/userinfo'
    }, async (accessToken, refreshToken, profile, done) => {
        // test if user exists
        
        let userId = profile.user_id;
        const existingUser = await User.findOne({ userId: userId });

        if (existingUser) {
            // user exists, return the existing user
            done(null, existingUser);
        } else {
            // user doesn't exist so we create a new one.
            const user = await new User({
                userId: profile.user_id,
                firstName: profile.given_name,
                lastName: profile.family_name,
                sfAccessToken: accessToken,
                sfUserString: profile.profile,
                sfProfilePic: profile.picture,
                sfInstanceUrl: profile.urls.custom_domain
            }).save();
            
            done(null, user);
        }
    })
);
