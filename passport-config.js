const LocalStrategy = require('passport-local').Strategy           // to use the local version of passport, load passport-local as a strategy.

function initialize(passport) {
    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser))
}

module.exports = initialize;