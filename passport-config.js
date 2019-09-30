const LocalStrategy = require('passport-local').Strategy           // to use the local version of passport, load passport-local as a strategy.




function initialize(passport) {
    const authenticateUser = function(email, password, done) {                  // Second, have authenticateUser with email and password passed in and then done when we are done authenticting the user. 
 
    };
    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))   // First, use local strategy and pass user name field (i.e. email but it could be name or whatever) and the call to authenticate the user.
}

module.exports = initialize;