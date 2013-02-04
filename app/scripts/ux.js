$(document).ready(function(){


$(".app").hide().slideDown(2000);
$("nav li a").click(function () {
    $(".content").slideUp();
    });

$(".typekit-badge").hide();
$(".logo").lettering();

$('.stock-images')
        .wrap('<span style="display:inline-block;float:left; margin-right:4%;"></span>')
        .css('display', 'block')
        .parent()
        .zoom({url:'http://www.boomtownsports.com/wp-content/uploads/2011/02/nirvana_board_newi.jpg'});

});