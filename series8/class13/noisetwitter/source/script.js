/*var tweetboxField = $('.tweetbox__field');
var tweets = $('.tweets');
var maxCharacters = 140;

var addNewTweet = function (response) {
  var newTweet = $('.tweet').first().clone();

  newTweet.find('.tweet__content').text(response.tweet_content);
  newTweet.find('.tweet__author').text(response.tweet_author);
  newTweet.find('.tweet__avatar img').prop('src', response.tweet_avatar);
  newTweet.find('.tweet__time').text('now');

  newTweet.removeClass('favorited retweeted');

  tweets.prepend(newTweet);
}

$('.tweetbox').on('submit', function (event) {
  event.preventDefault();

  $.ajax('tweet.php', {
    data: $('.tweetbox').serialize(),
    dataType: 'json',
    method: 'POST'
  }).done(function (response) {
    addNewTweet(response);

    tweetboxField.val('');
  }).fail(function () {
    alert('oh no!');
  });  
});*/

setInterval(function () {
  $.ajax('tweet.php', {
    dataType: 'json'
  }).done(addNewTweet);
}, 5000);

/*var calculateRemainingCharacters = function () {
  var textAreaValue = tweetboxField.val();
  var textAreaLength = textAreaValue.length;

  $('.tweetbox__button').prop('disabled', textAreaLength > maxCharacters);

  $('.tweetbox__counter').text(maxCharacters - textAreaLength);
};
calculateRemainingCharacters();

$('.tweetbox__field').on('keyup', calculateRemainingCharacters);

/*$('.tweets').on('click', '.retweet', function () {
  $(this).closest('.tweet').toggleClass('retweeted');
});

$('.tweets').on('click', '.favorite', function () {
  $(this).closest('.tweet').toggleClass('favorited');
});*/

angular.module('NoiseTwitter', []);

angular.module('NoiseTwitter').controller('MainController', ['$scope', function ($scope) {
  $scope.hello = "Hi there!";

  $scope.tweets = [
    {
      author: 'JeffreyATW',
      time: '1h',
      content: 'You give love a bad name.'
    },
    {
      author: 'JeffreyATW',
      time: '2h',
      content: 'Old McDonald had a farm.'
    },
    {
      author: 'JeffreyATW',
      time: '3h',
      content: "I'm a little teapot, short and stout."
    }
  ];

  $scope.toggleRetweet = function (tweet) {
    tweet.retweeted = !tweet.retweeted;
  };

  $scope.toggleFavorite = function (tweet) {
    tweet.favorited = !tweet.favorited;
  };

  $scope.addNewTweet = function () {
    var newTweetObj = {
      author: 'JeffreyATW',
      time: 'now',
      content: $scope.newTweet
    };

    $scope.tweets.unshift(newTweetObj);

    $scope.newTweet = '';
  };
}]);

angular.module('NoiseTwitter').directive('tweet', [function () {
  return {
    replace: true,
    restrict: 'EA', // E stands for element, A stands for attribute, C for class
    link: function () {
      console.log('this should log three times!');
    },
    templateUrl: 'tweet.html'
  };
}]);