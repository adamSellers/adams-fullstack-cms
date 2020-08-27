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
    console.log('user details in the serialise user function: ' + JSON.stringify(user));
    done(null, user.id);
});

passport.deserializeUser(function (id, done) {
    // query the db to find an existing user, id comes in from the user session cookie
    console.log('user id in the deserialze is: ' + id);
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
        console.log(`the accessToken is ${accessToken}`);
        console.log(`the refreshtoken is ${refreshToken}`);
        console.log(`the profile is ${JSON.stringify(profile)}`);
        try {
            let userId = profile.user_id;
            const existingUser = await User.findOne({ userId: profile.user_id });
        } catch (e) {
            console.error('catching the error: ' + e);
            existingUser = false;
        }

        if (existingUser) {
            // user exists, return the existing user
            console.log('existing user exists: ' + JSON.stringify(existingUser));
            done(null, existingUser);
        } else {
            // user doesn't exist so we create a new one.
            const user = await new User({
                userId: profile.user_id,
                firstName: profile.firstName,
                lastName: profile.lastName
            }).save();
            
            done(null, user);
        }
    })
);
