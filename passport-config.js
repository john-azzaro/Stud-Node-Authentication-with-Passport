const LocalStrategy = require('passport-local').Strategy           // to use the local version of passport, load passport-local as a strategy.




function initialize(passport) {
    const authenticateUser = function(email, password, done) {                  // Second, have authenticateUser with email and password passed in and then done when we are done authenticting the user. This is what is called from our email password to make sure the user is correct.
       const user =  getUserByEmail(email)                                      // 1. Get user by email or return null if there is no email (at this point the function has not been created yet but planning ahead)
                                                    // 2. Check to see if there is a user.
    }; 

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))   // First, use local strategy and pass user name field (i.e. email but it could be name or whatever) and the call to authenticate the user.
    passport.serializeUser(function(user, done) {                                    // Third, to serialize the user and store inside the session, call serializeUser take a function and pass user and done to store inside the session.
    passport.deserializeUser(function(id, done) {                                    // Fourth, deserialize outside session if needed.

    })
    });
}

module.exports = initialize;