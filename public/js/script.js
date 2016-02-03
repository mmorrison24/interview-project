$(document).ready(function(){
    console.log('hello');

    bindEventListeners();

});

function bindEventListeners(){

    $(document).on('keypress','#InputTwitterUsername',onKeypressDetectSubmit); //form submit
    $(window).on('hashchange',onHashChange);

    $(window).trigger('hashchange');
}

function onHashChange(e) {

    var hash = location.hash.replace( /^#/, '' ) || null;

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
        $('.js-twitter_listing').html( '<p>User has no Tweets to show</p><img src="https://media.giphy.com/media/KYNywoibU1PQ4/giphy.gif"/>' ).focus();
        return;
    }

    var template = JSON.stringify(data);

    $('.js-twitter_listing').text( template ).focus();

}