"use strict";
let path = require('path');
let express = require('express');
let handler = require('./handler_api');
let _ = require('underscore');

// Export method to be compliant with Express 3.0
let applyConfiguration = function (app) {

    let rootDir = path.resolve(__dirname, '..');

    console.log('setting up express configuration');

    // Serve static content from "public" directory
    app.use(express.static(rootDir + '/public'));

}
let applyRouting = function (app, twitter_client) {
    console.log('setting up api routes');

    app.get('/tweets/:user*?' , _.partial(handler.getTweets, twitter_client));
}
module.exports = {
    applyConfiguration : applyConfiguration,
    applyRouting : applyRouting
};