var input = document.getElementsByClassName("ip");
for (var i = 0; i < input.length; i++) {
	document.getElementsByClassName("ip")[i].addEventListener("click", function(){
		var t = this.firstElementChild;
		t.checked = 1 - t.checked;
	})}
var ck = document.getElementsByClassName("check");
for (var i = 0; i < ck.length; i++) {
	document.getElementsByClassName("check")[i].addEventListener("click", function(){
		this.checked = 1 - this.checked;
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