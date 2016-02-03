var root = root || {}
_.extend( root, {
    template: null,
    default_image: '/css/no-image.png',
    no_tweets_image: "https://media.giphy.com/media/KYNywoibU1PQ4/giphy.gif"
})

$(document).ready(function(){
    root.template = _.template( $('.js-tweet_template').html() );
    bindEventListeners();

});

function bindEventListeners(){

    $(document).on('keypress','#InputTwitterUsername',onKeypressDetectSubmit); //form submit
    $(window).on('hashchange',onHashChange);

    $(window).trigger('hashchange');
}

function onHashChange(e) {

    var hash = location.hash.replace( /^#/, '' ) || null;

    $('#InputTwitterUsername').val( hash );
    doSearch( hash );

}

function onKeypressDetectSubmit(e) {

    if( e.charCode  !== 13 && e.keyCode !== 13 ) return;

    var $this 	= $(this),
        username = $this.val();

    $this.blur();

    if(username.length == 0 || username == null || typeof username == undefined) return;

    initateSearch(username);

}

function initateSearch( username ) {
    location.hash = username;
}


function doSearch( username ) {

        var ajaxUrl = "http://" + window.location.hostname + ":8081/tweets/"+username;

        $.ajax({
            url:ajaxUrl,
            success:onTweetsReceived,
            error: function( err ) {
                alert('Could not complete your search. Please try again later')
            }
        });
}

function onTweetsReceived( recieved ){

    console.log( recieved );

    if( recieved.error ) {
        alert('error fetching tweets');
        return
    }

    var data = recieved.data;

    if( data.length === 0 ) {
        data = [{
            created_at: '',
            text:'User has no tweets to share :(',
            entities:{ media:[{media_url:root.no_tweets_image}]}
        }]
    }

    var generatedHTML = _.reduce(data, function(templateStr, tweet){
        _.defaultsDeep(tweet,{entities:{media:[{media_url:root.default_image}]}}) //ensure we have a default image
        return templateStr.concat( root.template(tweet) );
    }, '')

    $('.js-twitter_listing').html( generatedHTML ).focus();

}