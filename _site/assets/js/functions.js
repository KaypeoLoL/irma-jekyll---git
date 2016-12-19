$(document).ready(function() {
  $(window).scroll(function(){
    stripScroll();
  });
});

function stripScroll(){
  var wScroll =$(window).scrollTop()/2;

  $(".pic").css("background-position", "center -" +wScroll+ "px");
}
