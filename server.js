const express = require('express');                // import express
const app = express();                             // get app variable from express

app.get('/', function(req, res) {                  // Home page route (that you need to be logged into to get to)
    res.render('index.ejs');                       // The response will be to render a "index.ejs" page.
});



app.listen(process.env.PORT || 3000, function() {
    console.log(`Your app is listening on port ${process.env.PORT || 3000}...`);
});