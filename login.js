$(document).ready(function(){
  $("loginform").hide()
  $("pill").click(function(){
    var act0 = true;
    if(act0){
    $("img").animate({top: '50%'});
    $('img').addClass('a');
    $("t").fadeOut(100);
    $("header").animate({height: '60px'});
    $("loginform").fadeIn(3000);
    act0 = false;
  }
  });
  $("a").click(function(){
  $("a").addClass("is-loading");
  setTimeout(function(){
    $("loginform").animate({left: '5000px'});
    $("loginform").fadeOut();
    setTimeout(function(){
    $("header").animate({height: '100%',width: '100px'});
    $("img").removeClass("a");
    $("img").animate({top: '40px'});
  }, 200);
}, 4000);
  });
});
