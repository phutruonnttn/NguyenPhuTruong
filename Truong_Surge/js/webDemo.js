new WOW().init();
$(document).ready(function() {
	$('#status').fadeOut();
	$('#preloader').delay(350).fadeOut('slow');
	$('body').delay(350).css({
		'overflow': 'visible'
	});

	if($(".backToTop").length > 0){
		$(window).scroll(function () {
			var e = $(window).scrollTop();
			if (e > 100) {
				$(".backToTop").show()
			} else {
				$(".backToTop").hide()
			}
		});
		$(".backToTop").click(function () {
			$('body,html').animate({
				scrollTop: 0
			})
		})
	}	
});