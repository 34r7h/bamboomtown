$(document).ready(function(){

  $(".content").click(function () {
    window.location = '/#/';
      
        
  
    });

  $("nav li a").click(function () {
    $(".content").slideUp();
    });

  $(".about").click(function () {
    $("#about").slideDown(600);
//stuff to do on mouseover
  });

  $(".reviews").click(function () {
    $("#reviews").slideDown(600);
//stuff to do on mouseover
  });

  $(".sizing").click(function () {
    $("#sizing").slideDown(600);
//stuff to do on mouseover
  });

  $(".contact").click(function () {
    $("#nav-contact").slideDown(600);
//stuff to do on mouseover
  });

  $(".media").click(function () {
    $("#media").slideDown(600);
//stuff to do on mouseover
  });

  

});