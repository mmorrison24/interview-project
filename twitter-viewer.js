"use strict";
let express = require('express');
let app = express();

const port = 8081;

app.get('/', function (req, res) {
    res.send('It\'s Working');
});

let server = app.listen(port, function () {

    console.log(`listening on port: ${server.address().port}`);

});