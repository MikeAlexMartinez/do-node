var express = require('express');
var app = express();

app.get('/', function (req, res) {
    console.log('request received!')
    res.send('Hello Digital Ocean! :D');
});

app.listen(3000, function() {
    console.log('Magic is happening on port 3000!');
});