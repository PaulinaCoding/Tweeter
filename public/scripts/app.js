/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Test / driver code (temporary). Eventually will get this from the server.

$('#document').ready(function(e){

  const tweetData = {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  }

// [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": {
//         "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
//         "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
//         "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
//       },
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": {
//         "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
//         "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
//         "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
//       },
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   },
//   ///////////////////////////////////////////////////////////////////////
//   {
//     "user": {
//       "name": "Johann von Goethe",
//       "avatars": {
//         "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
//         "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
//         "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
//       },
//       "handle": "@johann49"
//     },
//     "content": {
//       "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
//     },
//     "created_at": 1461113796368
//   }
// ];


  function createTweetElement(tweetData) {
    var $tweet = $('<article>').addClass('tweetArticle');
    //var $tweet = createTweetElement(tweetData);

    //Appended  the heather
    var header = $('<header>').addClass('tweetHeader');
    var img = $('<img>').addClass('authorPic').attr('src', tweetData.user.avatars.small);
    var h3 = $('<h3>'+ tweetData.user.name +'</h3>').addClass('author');
    var h5 = $('<h5>'+ tweetData.user.handle +'</h5>').addClass('authorAddress');
    
      header.append(img);
      header.append(h3);
      header.append(h5);
      $tweet.append(header);

    //Appended  the tweet content
    
      var p = $('<p>'+ tweetData.content.text +'</p>').addClass('tweetContent');
      $tweet.append(p);

    //Appended the footer
    var footer = $('<footer>'+ 'Created at: '+ tweetData.created_at + '</footer>').addClass('tweetFooter');
    var footerIcons = $('<span>'+'</span>').addClass('footerIcons');
    let flagIcon= $('<i>' +'   ').addClass('fa fa-flag');
    let heartIcon= $('<i>').addClass('fa fa-heart');
    let retweetIcon= $('<i>'+'   ').addClass('fa fa-retweet');
    footerIcons.append(flagIcon);
    footerIcons.append(retweetIcon);
    footerIcons.append(heartIcon);
      footer.append(footerIcons);
      $tweet.append(footer);
  
      
      $('#tweetContainer').append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
      //return $tweet;
      console.log($tweet); // to see what it looks like
  };
  createTweetElement(tweetData);
});
// Test / driver code (temporary)