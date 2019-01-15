jQuery(document).ready(function($){ 	
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