// include jQuery.ui to activate colors
var colors = ['#4A89DC', '#3BAFDA', '#967ADC', '#6A50A7', '#BF263C', '#DA4453', '#E9573F', '#F6BB42', "#E0C341", "#8CC152", "#2ABA66", "#37BC9B", "#7DB1B1"];

function getNew() {

  $.ajax({
    url: 'https://fry-quotes-api.herokuapp.com/quote/random',
    success: function(data) {
      var post = data; // The data is an array of posts. Grab the first one.

      $(".quote-text").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#quote').text(post.quote);
        });

      $("#author").animate({
          opacity: 0
        }, 500,
        function() {
          $(this).animate({
            opacity: 1
          }, 500);
          $('#author').text(post.author);
        });

      var color = Math.floor(Math.random() * colors.length);
      $("html body").animate({
        backgroundColor: colors[color],
        color: colors[color]
      }, 1000);
      $(".buttons").animate({
        backgroundColor: colors[color]
      }, 1000);
    },
    cache: false
  });
};

$(document).ready(getNew);

$('#getQuote').click(getNew);