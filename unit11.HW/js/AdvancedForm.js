$(document).ready(function() {
	var count = 0;
	$("#pre").click(function(){
		if (count>0) {
			$("#next").addClass("active");
			$("#next").removeAttr("disabled");
			$("#page1").animate({
				left: '+=100%', 
			},250)
		}
		if (count == 1) {
			$("#fun2").removeClass('active');
			$("#fun2").addClass('done');	
			$("#fun1").removeClass('done');
			$("#fun1").addClass('active');
			$("#pre").removeClass('active');

			$("#name").removeClass('required')
			$("#surname").removeClass('required')
			$("#email").removeClass('email')
			$("#email").removeClass('required')
			$("#age").removeClass('number')
			$("#age").removeClass('required')
			count--;
		} else if (count == 2) {
			$("#fun3").removeClass('active');
			$("#fun3").addClass('done');	
			$("#fun2").removeClass('done');
			$("#fun2").addClass('active');
			count--;
		} else if (count == 3){
			$("#fun4").removeClass('active');
			$("#fun4").addClass('done');	
			$("#fun3").removeClass('done');
			$("#fun3").addClass('active');
			$("#acceptTerms").removeClass('required')
			count--;
			if ($("#age").val() >= 18) {
				setTimeout(
					function() 
					{
						$("#page1").animate({
							left: '+=100%', 
						},200)
						$("#fun3").removeClass('active');
						$("#fun3").addClass('done');	
						$("#fun2").removeClass('done');
						$("#fun2").addClass('active');
						count--;
					}, 200);

			}
		}

	})
	$("#fun1").click(function(){
		if ($("#fun1").hasClass("done")) {
			$("#page1").animate({
				left: '0', 
			},250)
			count = 0;
			$(".active").eq(0).addClass('done');
			$(".active").eq(0).removeClass('active');
			$("#fun1").removeClass('done');
			$("#fun1").addClass('active');
			$("#next").removeAttr("disabled");
			$("#pre").removeClass('active');
			$("#next").addClass("active");
			$("#acceptTerms").removeClass('required')
			$("#name").removeClass('required')
			$("#surname").removeClass('required')
			$("#email").removeClass('email')
			$("#email").removeClass('required')
			$("#age").removeClass('number')
			$("#age").removeClass('required')
		}
	})
	$("#fun2").click(function(){
		if ($("#fun2").hasClass("done")) {
			$("#page1").animate({
				left: '-100%', 
			},250)
			count = 1;
			$(".active").eq(0).addClass('done');
			$(".active").eq(0).removeClass('active');
			$("#fun2").removeClass('done');
			$("#fun2").addClass('active');
			$("#next").removeAttr("disabled");
			$("#pre").addClass('active');
			$("#next").addClass("active");

			$("#acceptTerms").removeClass('required')
			$("#name").addClass('required')
			$("#surname").addClass('required')
			$("#email").addClass('email')
			$("#email").addClass('required')
			$("#age").addClass('number')
			$("#age").addClass('required')
		}
	})
	$("#fun3").click(function(){
		if ($("#fun3").hasClass("done") && $("#age").val() < 18) {
			$("#page1").animate({
				left: '-200%', 
			},250)
			count = 2;
			$(".active").eq(0).addClass('done');
			$(".active").eq(0).removeClass('active');
			$("#fun3").removeClass('done');
			$("#fun3").addClass('active');
			$("#pre").addClass('active');
			$("#next").removeClass("active");
			$("#next").attr("disabled","true");
			
			$("#acceptTerms").removeClass('required')
		}
	})
	$("#fun4").click(function(){
		if ($("#fun4").hasClass("done") && $("#age").val() >= 18) {
			$("#page1").animate({
				left: '-300%', 
			},250)
			count = 3;
			$(".active").eq(0).addClass('done');
			$(".active").eq(0).removeClass('active');
			$("#fun4").removeClass('done');
			$("#fun4").addClass('active');
			$("#next").removeAttr("disabled");
			$("#pre").addClass('active');
			$("#next").addClass("active");
			
			$("#acceptTerms").addClass('required')
		}
	})
	$("#advancedForm").validate({
		rules: {
			userName:{
				required: true,
				minlength: 8,
			},
			password: {
				required: true,
				minlength: 8,
			},
			confirm: {
				required: true,
				equalTo: "#password",
			}
		},
		messages: {
			confirm: {
				equalTo: "Please enter the same password.",
			}
		},
		submitHandler: function() {
			count++;
			if (count >=4){
				fDone();
				count = 3;
				return;
			}
			$("#page1").animate({
				left: '-=100%', 
			},250)
			if (count == 1) {
				$("#page2").css('display', 'block')
				$("#fun1").removeClass('active');
				$("#fun1").addClass('done');	
				$("#fun2").removeClass('done');
				$("#fun2").addClass('active');
				$("#pre").addClass('active');

				$("#name").addClass('required')
				$("#surname").addClass('required')
				$("#email").addClass('email')
				$("#email").addClass('required')
				$("#age").addClass('number')
				$("#age").addClass('required')
			} else if (count == 2) {
				$("#fun2").removeClass('active');
				$("#fun2").addClass('done');	
				$("#fun3").removeClass('done');
				$("#fun3").addClass('active');
				if ($("#age").val() >= 18) {
					setTimeout(
						function() 
						{
							$("#page1").animate({
								left: '-=100%', 
							},200)
							$("#page4").css('display', 'block')
							$("#fun3").addClass('done');	
							$("#fun3").removeClass('active');	
							$("#fun4").removeClass('done');
							$("#fun4").addClass('active');
							$("#acceptTerms").addClass('required')
							count++;
						}, 200);
					
				} else {
					$("#next").removeClass("active");
					$("#next").attr("disabled","true");
				}
			} else if (count == 3){
				$("#page4").css('display', 'block')
				$("#fun3").removeClass('active');
				$("#fun3").addClass('done');	
				$("#fun4").removeClass('done');
				$("#fun4").addClass('active');
				$("#acceptTerms").addClass('required')
			}
		}
	})
	function fDone(){
		swal({
			title: "Done!",
			text: "You have successfully submitted!",
			icon: "success",
			button: "OK",
		});
	}
	$("#password").keyup(function() { 
		var strength = 0; 
		if(this.value.length >= 8) { 
			strength++; 
		} 
		if(this.value.match(/[a-z]+/)) { 
			strength++; 
		} 
		if(this.value.match(/[0-9]+/)) { 
			strength++; 
		} 
		if(this.value.match(/[A-Z]+/)) { 
			strength++; 
		} 
		$("#statusLock").empty();
		for (var i = 1; i <= strength; i++) {
			$("#statusLock").append("<i class='fas lk fa-lock lock'></i>")
		}
		for (var i = 1; i <= 4 - strength; i++) {
			$("#statusLock").append("<i class='fas lk fa-unlock-alt ulock'></i>")
		}
	}); 
	$("#password").blur(function() { 
		var strength = 0; 
		if(this.value.length >= 8) { 
			strength++; 
		} 
		if(this.value.match(/[a-z]+/)) { 
			strength++; 
		} 
		if(this.value.match(/[0-9]+/)) { 
			strength++; 
		} 
		if(this.value.match(/[A-Z]+/)) { 
			strength++; 
		} 
		$("#statusLock").empty();
		for (var i = 1; i <= strength; i++) {
			$("#statusLock").append("<i class='fas lk fa-lock lock'></i>")
		}
		for (var i = 1; i <= 4 - strength; i++) {
			$("#statusLock").append("<i class='fas lk fa-unlock-alt ulock'></i>")
		}
	}); 
})