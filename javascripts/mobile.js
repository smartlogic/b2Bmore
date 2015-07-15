$(document).ready(function() {

  $('header h1').click(function() {
    $('header').toggleClass('active');
  });

  $('header ul li a').click(function() {
    $('header').removeClass('active');
  });

});
