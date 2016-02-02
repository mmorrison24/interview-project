"use strict";
let express = require('express');

let config = require('./lib/config');

const port = 8081;

let app = express();
config.applyConfiguration(app);
config.applyRouting(app);

let server = app.listen(port, function () {

    console.log(`listening on port: ${server.address().port}`);

});