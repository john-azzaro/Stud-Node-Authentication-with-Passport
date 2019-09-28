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

app.post('/register', async function(req, res) {                               // To create a user...
    try {                                                                      // create a try block to run our code...
        const hashedPassword = bcrypt.hash(req.body.password, 10);             // hash the password from the user input (i.e. the body of the form where password is) and the value of 10 (good default).
        users.push( {                                                          // Then we push this user to the local storage.
            id:  Date.now().toString(),                                        // ... this is a uuid, but a database would do this by default.
            name: req.body.name,                                               // ... this would get the name from the body of the form.
            email: req.body.email,                                             // ... this would get the email from the body of the form.
            password: hashedPassword                                           // ... this would get the password from the hashedPassword variable above.
        });         
        res.redirect('/login');                                                // and if everything works correctly, the response will be to redirect to the login page.                        
    } catch(err) {                                                             // If the try block fails, send an error.
        
    }
});




app.listen(process.env.PORT || 3000, function() {                                             // listen on port 3000 for requests...
    console.log(`Your app is listening on port ${process.env.PORT || 3000}...`);
});