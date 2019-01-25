function checkLogin(){
	var t = document.getElementsByClassName('ip');
	var flag = true;
	document.getElementsByClassName('tName2')[0].classList.remove("active");
	document.getElementsByClassName('tPass')[0].classList.remove("active");
	document.getElementsByClassName('tSDT')[0].classList.remove("active");
	if(t[4].value == ""){
		document.getElementsByClassName('tConfPass')[0].classList.remove("active");
	}
	for (var i = 0; i < t.length; i++) {
		
		var a = t[i];
		if (a.value == "") {
			document.getElementsByClassName('img')[0].classList.remove("active");
			document.getElementsByClassName('tNull')[i].classList.add("active");
		}
		if (i==0) {
			if (t[i].value.length<=8 && t[i].value.length>0) {
				document.getElementsByClassName('img')[0].classList.remove("active");
				document.getElementsByClassName('tName2')[0].classList.add("active");
			}
		}
		if (i==2) {
			if (t[i].value.length<10 && t[i].value.length>0) {
				document.getElementsByClassName('tSDT2')[0].classList.remove("active");
				document.getElementsByClassName('img')[0].classList.remove("active");
				document.getElementsByClassName('tSDT')[0].classList.add("active");
			}
		}
		if (i==3) {
			if (t[i].value.length<=8 && t[i].value.length>0) {
				document.getElementsByClassName('img')[0].classList.remove("active");
				document.getElementsByClassName('tPass')[0].classList.add("active");
			}
		}
	}

	var c = document.getElementsByClassName('active').length;
	if (c == 0) {
		done();
	} else {
		error();
	}
}

for (var i = 1; i <= 5; i++) {
	document.getElementById(i).addEventListener('keydown', function(){
		this.parentNode.nextElementSibling.firstElementChild.classList.remove("active");
	})
}

document.getElementById(1).addEventListener('keyup', function(){
	var t = document.getElementById(1).value;
	if(t.length > 8){
		document.getElementsByClassName('tName2')[0].classList.remove("active");
	}
	for (var i = 0; i < t.length; i++) {
		for (var j = 0; j <= 9; j++) {
			if (t[i]==j && t[i]!=" "){
				document.getElementsByClassName('img')[0].classList.remove("active");
				document.getElementsByClassName('tName2')[0].classList.remove("active");
				document.getElementsByClassName('tName')[0].classList.add("active");
				return;
			}
		}
	}
	document.getElementsByClassName('tName')[0].classList.remove("active");
})

document.getElementById(3).addEventListener('keyup', function(){
	var t = document.getElementById(3).value;
	if(t.length >= 10){
		document.getElementsByClassName('tSDT')[0].classList.remove("active");
	}
	for (var i = 0; i < t.length; i++) {
		var flag =false;
		for (var j = 0; j <= 9; j++) {
			if (t[i]==j){
				flag = true;
			} 
		}
		if (!flag) {
			document.getElementsByClassName('img')[0].classList.remove("active");
			document.getElementsByClassName('tSDT')[0].classList.remove("active");
			document.getElementsByClassName('tSDT2')[0].classList.add("active");
			return;
		}
	}
	document.getElementsByClassName('tSDT2')[0].classList.remove("active");
})

document.getElementById(5).addEventListener('keyup', function(){
	var t = document.getElementById(5).value;
	var t2 = document.getElementById(4).value;
	if (t!=t2){
		document.getElementsByClassName('img')[0].classList.remove("active");
		document.getElementsByClassName('tConfPass')[0].classList.add("active");
		return;
	}
	document.getElementsByClassName('tConfPass')[0].classList.remove("active");
})

document.getElementById(4).addEventListener('keyup', function(){
	var t = document.getElementById(5).value;
	var t2 = document.getElementById(4).value;
	if (t2.length > 8) {
		document.getElementsByClassName('tPass')[0].classList.remove("active");
	}
	if (t!=t2 && t.length != 0){
		document.getElementsByClassName('img')[0].classList.remove("active");
		document.getElementsByClassName('tConfPass')[0].classList.add("active");
		return;
	}
	document.getElementsByClassName('tConfPass')[0].classList.remove("active");
})

function checkMail(){
	var email = document.getElementById(2); 
	var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
	if (!filter.test(email.value) && email.value.length >0) { 
		document.getElementsByClassName('img')[0].classList.remove("active");
		document.getElementsByClassName('tMail')[0].classList.add("active");
		return
	}
	document.getElementsByClassName('tMail')[0].classList.remove("active");
}

function done(){
	swal({
		title: "Chúc mừng!",
		text: "Bạn đã đăng kí thành công!",
		icon: "success",
		button: "OK",
	});
}

function error(){
	swal({
		title: "Thất bại!",
		text: "Vui lòng nhập đúng yêu cầu của các trường thông tin!",
		icon: "error",
	});
}

function removeAll(){
	document.getElementsByClassName('tName2')[0].classList.remove("active");
	document.getElementsByClassName('tMail')[0].classList.remove("active");
	document.getElementsByClassName('img')[0].classList.add("active");
	document.getElementsByClassName('tConfPass')[0].classList.remove("active");
	document.getElementsByClassName('tPass')[0].classList.remove("active");
	document.getElementsByClassName('tSDT2')[0].classList.remove("active");
	document.getElementsByClassName('tSDT')[0].classList.remove("active");
	document.getElementsByClassName('tName')[0].classList.remove("active");
	for (var i = 1; i <= 5; i++) {
		document.getElementById(i).parentNode.nextElementSibling.firstElementChild.classList.remove("active");

	}
}