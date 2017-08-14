var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('request received!')
    res.send('Bellas my Bunny! <3 <3 <3');
});

app.listen(8080, function() {
    console.log('Magic is happening on port 8080!');
});