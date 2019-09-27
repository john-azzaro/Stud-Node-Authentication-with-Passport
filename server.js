const express = require('express');                // import express
const app = express();                             // get app variable from express

app.listen(process.env.PORT || 3000, function() {
    console.log(`Your app is listening on port ${process.env.PORT || 3000}...`);
});