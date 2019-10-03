# Node Authentication with Passport

<br>

## What is the Node Authentication with Passport Study?

Here's some questions covered in the study:

* [What is Authentication?](#)
* [What is Passport?](#)

<br>

## What is Authentication?
When a user logs into your system it needs to be checked if it is correct. For example, suppose you have a commerce website that requires users to register and sign into an an account to purchase items. In other words, this comparison of passwords is authentication in action.  Of course, passwords should never be stored as plain text in a database (or anywhere else for that matter) because identifying users and providing corresponding access to thier respective content (depending on their id) keep those passwords safe. 

<br>

## What is Passport?
Passport is an authentication middleware for Node.js.  Passport can be dropped into any express-based web application and has a number of built-in strategies (e.g. local, etc.) and authentication methods can include user name and password, facebook, twitter, google, etc.

<br>

## What is the Passport Authentication Flow?
The authentication flow is the series of steps the application is set up to follow in order to register and authenticate a user, as well as persist the user during the session.  The simplified authentication flow is as follows:

1. The user is initially routed to the login-Screen.
2. If the user is new, the user can follow the *register* link below the form.  If not, log in.
3. If the user registers, the user inputs thier name, email-address, and password.
4. After registration, the user is routed to the Login screen.
5. If login successful, routed to home page.  If not, the user encounters a flash error message.
6. Enjoy the home page!
7. When successfully logged in, the user CANNOT login (route will be prohibited).
8. When user wants to log out, user can click the "Log Out" button.

<br>

## Points of interest in the Passport Study
Since this particular study is a little bit more extensive in terms of building out the prototype, I thought it would be best to provide some interesting highlights from the study below.  If you want to get a better sense of the study and the step-by-step development process, check out the server.js and passport-config.js files, as well as the processNotes.txt file for a complete walk through.  

In any case, here are some interesting points of interest:

<br>

### You need to include express.urlencoded for the POST requests.
Seems pretty straight forward, since the information you are passing in is coming from forms.  Additionally, you want to pass in the option of ``` extended: false ``` because we want the application to take the login information and access them inside the request method.
```JavaScript
    app.use(express.urlencoded({ extended: false }));
```

<br>

### You can use bcrypt with Passport
You can use bcrypt to hash and salt passwords in your application if you want.  In this study, we just use a simple hash but adding a salt is realtively easy.
```JavaScript
    app.post('/register', async function(req, res) { 
        try {
             const hashedPassword = bcrypt.hash(req.body.password, 10);
             ...
             ...
        } ...
    }
```

<br>

### Passport has a number of authentication methods
In this study, we use a local strategy, but you can use a number of different strategies such as google, facebook, etc.
```
    npm install passport passport-local
```

<br>

### To keep your server.js file clean, put your Passport logic in a seperate document.
In the case of this study, everything is put into a passport.config.js file and the module is accessible in the server.js file.  If you want to see how this is done, check out the file itself or phase 9 of the process notes!

<br>

### Checking for authentication is very simple
To check for authentication (or no authentication), which essentially means check to see if the user has permission to be there, you simply need to add two middleware functions and then pass those function to the respective routes.  For example, for routes that you want to check for authenticated user, if it checks out then the application will render the home page:
```JavaScript
  function checkAuthentication(req, res, next) {  
        if (req.isAuthenticated()) {  
            return next();  
        } else {
            res.redirect('/login'); 
        }
    }
```
And then you would pass in the middleware function to your desired routes. For example, below you have a GET request to the home page (i.e. /) and before the response can be sent, checkAuthenticate is run first, which then runs its own respective logic to return next OR redirect to the login screen if there is a problem. 

```JavaScript
    app.get('/', checkAuthentication, function(req, res) {    
        res.render('index.ejs', { name: req.user.name });      
    });
```

For routes you do NOT want to authenticate, like going back to the login screen AFTER you login, which would simply redirect the user back to the home page. And like the example above, you would simply need to pass in this middleware function to any route you wanted to ensure the user (when logged in), does not go to (it would be redundant).
```JavaScript
    function checkNotAuthentication(req, res, next) {   
        if (req.isAuthenticated()) {       
            res.redirect('/')  
        } else {
            next();  
        }
    }
```

<br>