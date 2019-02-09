$(document).ready(function(){
	$(".accordion").click(function(){
		$(".accordion").removeClass("active");
		$(".panel").slideUp();
		if ($(this).next().css('display') == 'none') {$(this).next().slideToggle();$(this).addClass("active");}
	})
})