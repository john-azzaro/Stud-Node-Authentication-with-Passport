const express = require('express');                // import express
const app = express();                             // get app variable from express
const bcrypt = require('bcrypt');                  // added bcrypt for security

app.set('view-engine', 'ejs');
app.use(express.urlencoded({ extended: false }));

const users = [];                                          // local storage for users (would be mongodb in production)


app.get('/', function(req, res) {                          // Route for Home Page (that you need to be logged into to get to)
    res.render('index.ejs', { name: 'joe'});               // The response will be to render a "index.ejs" page.
});

app.get('/login', function (req, res) {                    // Route for Login Page
    res.render('login.ejs');                               // ... which renders the login.ejs view.
});

app.post('/login', function(req, res) {                    // Route to POST login
    
});

app.get('/register', function (req, res) {                 // Route for Registration Page
    res.render('register.ejs');                            // ... which renders the registration.ejs view.
});

app.post('/register', function(req, res) {
    req.body.name
});




app.listen(process.env.PORT || 3000, function() {                                             // listen on port 3000 for requests...
    console.log(`Your app is listening on port ${process.env.PORT || 3000}...`);
});