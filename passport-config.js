const LocalStrategy = require('passport-local').Strategy           // to use the local version of passport, load passport-local as a strategy.
const bcrypt = require('bcrypt')                                  // take in bcrypt by requiring it in.



function initialize(passport, getUserByEmail, getUserById) {
    const authenticateUser = async function(email, password, done) {              // Second, have authenticateUser with email and password passed in and then done when we are done authenticting the user. This is what is called from our email password to make sure the user is correct.
    const user = getUserByEmail(email);                                           // 1. Get user by email or return null if there is no email (at this point the function has not been created yet but planning ahead)      
    if(user == null) {                                                           // 2. Check to see if there is a user.
        return done(null, false, { message: 'No user with that email' });    // ... if there is no user, return "done()" and pass the error (in this case null bc no error only null) and return the user we found (i.e. no user so "false")
    }
       
    try {                                                                         // 3. Then you need to make sure the password matches the password provided with bcrypt with a try/catch block/
        if (await bcrypt.compare(password, user.password)) {                     // if (awaiting) bcrypt comparison of the password that the user sent in with the form.  If this is true, then we have an authenticated user.
            return done(null, user);                                             // ... return done with no error and the user that we want to authenticate.
        }  else {                                                                 // if the passwords did NOT match...
            return done(null, false, { message: 'password incorrect'});          // ... return done with no error and false (password did NOT match) and the message.
        }                                   
    } catch(err) {
        return done(err);
    }                                    
}; 

    passport.use(new LocalStrategy({ usernameField: 'email' }, authenticateUser));   // First, use local strategy and pass user name field (i.e. email but it could be name or whatever) and the call to authenticate the user.
    passport.serializeUser(function(user, done) {});                                    // Third, to serialize the user and store inside the session, call serializeUser take a function and pass user and done to store inside the session.
    passport.deserializeUser(function(id, done) {});                                   // Fourth, deserialize outside session if needed.
}

module.exports = initialize;



