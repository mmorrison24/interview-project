"use strict";
//node_modules
let express = require('express');
let Twitter = require('Twitter');

//application modules
let config = require('./lib/config');


const port = 8081;

//application bootstrap
let twitter_client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

let app = express();
config.applyConfiguration( app );
config.applyRouting( app, twitter_client );


//start express server
let server = app.listen(port, function () {

    console.log( `listening on port: ${server.address().port}` );

});