$(document).ready(function(){
  $("loginform").hide()
  $("pill").click(function(){
    $("img").animate({top: '50%'});
    $('img').addClass('a');
    $("t").fadeOut(100);
    $("header").animate({height: '60px'});
    $("loginform").fadeIn(3000);
  });
});
