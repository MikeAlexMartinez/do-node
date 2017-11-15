const path = require('path'); 
const express = require('express');
const app = express();

// this allows us to serve static files from our public folder
app.use(express.static(path.join(__dirname, '/public')));

app.use('*', express.static(path.join(__dirname + '/public/templates/')));

app.listen(8080, function() {
    console.log('Magic is happening on port 8080!');
});