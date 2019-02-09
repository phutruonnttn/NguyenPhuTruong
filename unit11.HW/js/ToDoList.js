var countAll = 0;
$(document).ready(function(){
	$(".wrapH3").click(function(){
		countAll ++;
		var a = $("input").val();
		var flag = false;
		for (var i = 0; i < a.length; i++) {
			if (a[i] != " ") {
				flag = true;
			}
		}
		if (a == "" || flag == false) { 
			$('.alert').css('opacity','1');
			$('#textbox').focus();
			setTimeout(function(){ $('.alert').css('opacity','0');}, 2000);
			return; 
		}
		$(".null").remove();
		var str = "item"+countAll;
		var str1 = "del"+countAll;
		$("#content").append("<div class='item "+str+"' status='0'><i class='iconCheck fas fa-check'></i>"+(a.charAt(0).toUpperCase() + a.slice(1))+"<i class='iconX "+str1+" fas fa-times'></i></div>");
		+$("input").val("");

		var t = document.getElementsByClassName('item');
		for (var i = 0; i < t.length; i++) {
			if (i%2==0) {
				t[i].style.background = "rgb(222, 247, 255)";
			} else {
				t[i].style.background = "rgb(109, 195, 236)";
			}
		}
		var chieucao = $("#content").innerHeight();
		if (chieucao >= 400) {
			document.getElementById('content').style.height = '455px';
			$("#content").css('overflow', 'auto');
		}
		str = '.'+str;
		str1 = '.'+str1;
		$(str).click(function(){
			var s = 1 - $(this).attr('status');
			$(this).attr('status', s)
			if (s == 0) {
				$(this).css('text-decoration', 'none');
				$(this).children('.iconCheck').css('color', '#ffffff00');
			} else {
				$(this).css('text-decoration', 'line-through');
				$(this).children('.iconCheck').css('color', 'red');
			}
			var vv = document.getElementsByClassName('iconCheck');
			var flag = true;
			for (var i = 0; i < vv.length; i++) {
				var cl = $('.iconCheck').eq(i).css('color');
				if (cl != "rgb(255, 0, 0)") {
					flag = false;
				}
			}
			if (flag) {done();}
		})
		$(str1).click(function(){
			$(str).remove();
			var t = document.getElementsByClassName('item');
			for (var i = 0; i < t.length; i++) {
				if (i%2==0) {
					t[i].style.background = "rgb(222, 247, 255)";
				} else {
					t[i].style.background = "rgb(109, 195, 236)";
				}
			}
			var chieucao1 = $("#content").innerHeight();
			if (chieucao1 == 0) {
				$("#content").append("<h4 class='null'>Empty</h4>");
			}
		})
	});

	$('#textbox').keypress(function(event){
		var keycode = (event.keyCode ? event.keyCode : event.which);
		if(keycode == '13'){
			countAll ++;
			var a = $("input").val();
			var flag = false;
			for (var i = 0; i < a.length; i++) {
				if (a[i] != " ") {
					flag = true;
				}
			}
			if (a == "" || flag == false) { return; }
			$(".null").remove();
			var str = "item"+countAll;
			var str1 = "del"+countAll;
			$("#content").append("<div class='item "+str+"' status='0'><i class='iconCheck fas fa-check'></i>"+(a.charAt(0).toUpperCase() + a.slice(1))+"<i class='iconX "+str1+" fas fa-times'></i></div>");
			+$("input").val("");

			var t = document.getElementsByClassName('item');
			for (var i = 0; i < t.length; i++) {
				if (i%2==0) {
					t[i].style.background = "rgb(222, 247, 255)";
				} else {
					t[i].style.background = "rgb(109, 195, 236)";
				}
			}
			var chieucao = $("#content").innerHeight();
			if (chieucao >= 400) {
				document.getElementById('content').style.height = '455px';
				$("#content").css('overflow', 'auto');
			}
			str = '.'+str;
			str1 = '.'+str1;
			$(str).click(function(){
				var s = 1 - $(this).attr('status');
				$(this).attr('status', s)
				if (s == 0) {
					$(this).css('text-decoration', 'none');
					$(this).children('.iconCheck').css('color', '#ffffff00');
				} else {
					$(this).css('text-decoration', 'line-through');
					$(this).children('.iconCheck').css('color', 'red');
				}
				var vv = document.getElementsByClassName('iconCheck');
				var flag = true;
				for (var i = 0; i < vv.length; i++) {
					var cl = $('.iconCheck').eq(i).css('color');
					if (cl != "rgb(255, 0, 0)") {
						flag = false;
					}
				}
				if (flag) {done();}
			})
			$(str1).click(function(){
				$(str).remove();
				var t = document.getElementsByClassName('item');
				for (var i = 0; i < t.length; i++) {
					if (i%2==0) {
						t[i].style.background = "rgb(222, 247, 255)";
					} else {
						t[i].style.background = "rgb(109, 195, 236)";
					}
				}
				var chieucao1 = $("#content").innerHeight();
				if (chieucao1 == 0) {
					$("#content").append("<h4 class='null'>Empty</h4>");
				}
			})
		}
	});
	function done(){
		swal({
			title: "Done!",
			text: "You have completed your list!",
			icon: "success",
			button: "OK",
		});
	}

	var close = document.getElementsByClassName("closebtn");
	for (var i = 0; i < close.length; i++) {
		close[i].onclick = function(){
			var div = this.parentElement;
			div.style.opacity = "0";
		}
	}
});