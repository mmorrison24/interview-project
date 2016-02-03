"use strict";
let Twitter = require('twitter');
let _       = require('lodash');

// handlers for our API
module.exports = {

    getTweets: function (twitter_client, req, res) {

        const error = isRequestValid(req)

        if( error !== true ){
            res.json({error: error});
            return;
        }

        const twit_params = {

            screen_name: req.params.user,
            count: 15,
            exclude_replies: true
        };

        twitter_client.get('statuses/user_timeline', twit_params, function(error, tweets, response){

            if( error ) {
                res.json({error: "error retrieving tweets"});
                return;
            }

            res.json({data: tweets});
            return;

        });


    }
};

function isRequestValid( req ) {

    const user = req.params.user || null;

    if(!user) {

        return 'user must be defined';
    }

    return true

}