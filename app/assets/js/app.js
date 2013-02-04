$(document).ready(function(){
	$(".content").hide();
	$(".app").hide().slideDown(2000);
	
	


	$(".about").click(function () {
		$(".content").slideUp(1000);
 		$("#about").slideDown(600);
//stuff to do on mouseover
	});

	$(".reviews").click(function () {
		$(".content").slideUp(1000);
 		$("#reviews").slideDown(600);
//stuff to do on mouseover
	});

	$(".sizing").click(function () {
		$(".content").slideUp(1000);
 		$("#sizing").slideDown(600);
//stuff to do on mouseover
	});

	$(".contact").click(function () {
		$(".content").slideUp(1000);
 		$("#nav-contact").slideDown(600);
//stuff to do on mouseover
	});

	$(".media").click(function () {
		$(".content").slideUp(1000);
 		$("#media").slideDown(600);
//stuff to do on mouseover
	});



	$(".content").click(function () {
     	$(this).slideUp();
    });

$('.stock-images')
        .wrap('<span style="display:inline-block;float:left; margin-right:4%;"></span>')
        .css('display', 'block')
        .parent()
        .zoom({url:'http://www.boomtownsports.com/wp-content/uploads/2011/02/nirvana_board_newi.jpg'});

});



