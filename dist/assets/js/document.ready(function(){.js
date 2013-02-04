document.ready(function(){
	$(".home").html("Hello").css({'z-index':'1000', 'background':'white'}).hide();
	$(".home").on(hover, function{
		this.show();
	});

});