/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.

$('#document').ready(function(e) {
  loadTweets()

/////////Using Ajax to load tweets//////////
  function loadTweets(){
    $.ajax('/tweets').done(function(data) {

      $('.tweet-container').html('');
      renderTweets(data);
    })
  }

//////Functions defining tweet value and length for crafting message when tweet is too long/too short////
  function tweetContentCheck(tweetContent) {
    if (tweetContent === null || tweetContent === ""){
      return false;
    } else {
    return true;
    }
  };
  
  function requiredLength(tweetLength) {
    if (tweetLength > 140) {
      return false;
    } else {
    return true;
    }
  };
  
//using jQuery to prevent default events and submit form using AJAX
  $('#tweetForm').on('submit', function(e) {
    e.preventDefault();
// 1. Get the data from the form
    let newTweetContent = $('textarea').val(); //tweetContent = $('textarea').val();
    let newTweetLength = newTweetContent.length;
    let data = $('#tweetForm').serialize();
//Check data validity
    let validTweetLength = requiredLength(newTweetLength);
    let validTweet = tweetContentCheck(newTweetContent);
// console.log(validTweet);
    if (validTweet && validTweetLength){
      // 2. Make a AJAX request using that data
      $.ajax('/tweets', {
        method: 'POST',
        data: data
      }).done(function(data) {
        loadTweets();
// 2. Clear the form
        $('textArea').val('');
//fixed the bug with tweet error showing even if the value is not too short/empty
        $('#tweetError').text('');
//fixed the bug - it wasn't getting back to old 140 after submission
        $('#counter-container').text('140');
      })
    }
    if (!validTweet){
      $('#tweetError').text('This tweet is empty!');
    }
    if (!validTweetLength ){
      $('#tweetError').text('This tweet is too long!');
    }
  });

///////////////Showing up new tweets then newer ones first///////////////////////
  function renderTweets(tweets) {
    let $addedTweets = $('#tweetContainer').empty();
  //Looping through the tweets
    for (let item of tweets) {
    $('#tweetContainer').prepend(createTweetElement(item));
    }
    return $addedTweets;
  };


  function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('tweetArticle');

///////////////////////////Appended the heather//////////////////////////////////////////
    let $header = $('<header>').addClass('tweetHeader');
    let $img = $('<img>').addClass('authorPic').attr('src', tweet.user.avatars.small);
    let $h3 = $('<h3>').text(tweet.user.name).addClass('author');
    let $h5 = $('<h5>').text(tweet.user.handle).addClass('authorAddress');
    $header.append($img);
    $header.append($h3);
    $header.append($h5);
    $tweet.append($header);

///////////////////////Appended the tweet content/////////////////////////////////////
    let $p = $('<p>').text(tweet.content.text).addClass('tweetContent');
    $tweet.append($p);

///////////////////////Appended the footer////////////////////////////////////////////
    let now = moment(tweet.created_at).startOf('minute').fromNow();
    // format('MMMM Do YYYY, h:mm:ss a');
    let $footer = $('<footer>'+ 'Created: '+ now + '</footer>').addClass('tweetFooter');
    let $footerIcons = $('<span>'+'</span>').addClass('footerIcons');
    let $flagIcon= $('<i>').addClass('fa fa-flag');
    let $heartIcon= $('<i>').addClass('fa fa-heart');
    let $retweetIcon= $('<i>').addClass('fa fa-retweet');
    $footerIcons.append($flagIcon);
    $footerIcons.append($retweetIcon);
    $footerIcons.append($heartIcon);
    $footer.append($footerIcons);
    $tweet.append($footer);

    return $tweet;
  };

// Toogle sliding the new tweet section up and down and placing the curson in the textarea////
  $('#composeButton').click(function(){
    $('.new-tweet').slideToggle("slow");
    $('#textArea').focus();
  });

});


