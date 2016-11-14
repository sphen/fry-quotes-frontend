var colors = ["#34495E","#4A89DC", "#967ADC", '#6A50A7', "#9b59b6", "#BF263C", "#DA4453","#D35400", "#E9573F", "#F6BB42", "#F1C40F", "#E0C341", "#8CC152", "#2ABA66", "#37BC9B"];
var white = "#ECF0F1";
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
        backgroundColor: colors[color]
      }, 1000);

    },
    cache: false
  });
}

$(document).ready(getNew);

$('#getQuote').click(getNew);
