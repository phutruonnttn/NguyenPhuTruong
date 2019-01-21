var input = document.getElementsByClassName("ip");
for (var i = 0; i < input.length; i++) {
	document.getElementsByClassName("ip")[i].addEventListener("click", function(){
		var t = this.firstElementChild;
		if (t.checked == true) {
			t.checked = false;
		} else {
			t.checked = true;
		}
	})}
var ck = document.getElementsByClassName("check");
for (var i = 0; i < ck.length; i++) {
	document.getElementsByClassName("check")[i].addEventListener("click", function(){
		var t = this;
		if (t.checked == true) {
			t.checked = false;
		} else {
			t.checked = true;
		}
	})}
function check(){
	var check = document.getElementsByClassName("check");
	for (var i = 0; i < check.length; i++){
		check[i].checked = true;
	}
}
function uncheck(){
	var check = document.getElementsByClassName("check");
	for (var i = 0; i < check.length; i++){
		check[i].checked = false;
	}
}