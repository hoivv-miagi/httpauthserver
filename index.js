var express = require('express');
var app = express();
const basic_auth = require('./auth');
app.use(basic_auth);
app.get('/', function (req, res) {
    //res.send('hello world');
    res.redirect('http://45.32.49.159:8080/'); //doi link
});
app.listen(3000, function () {
    console.log('listening on port 3000');
});