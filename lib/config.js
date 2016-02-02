"use strict";
let path = require('path');
let express = require('express');
let handler = require('./handler_api');

// Export method to be compliant with Express 3.0
let applyConfiguration = function (app) {

    let rootDir = path.resolve(__dirname, '..');

    console.log('setting up express configuration');

    // Serve static content from "public" directory
    app.use(express.static(rootDir + '/public'));

}
let applyRouting = function (app) {
    console.log('setting up api routes');

     app.get('/tweets', handler.getTWeets);
}
module.exports = {
    applyConfiguration : applyConfiguration,
    applyRouting : applyRouting
};