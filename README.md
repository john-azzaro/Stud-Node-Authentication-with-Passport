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
5. The user logs in with email and password.  IF successful, user is routed to the home page.  If not, the user encounters a flash error message.
6. Enjoy the home page!
7. When successfully logged in, the user CANNOT login (route will be prohibited).
8. When user wants to log out, user can click the "Log Out" button.
