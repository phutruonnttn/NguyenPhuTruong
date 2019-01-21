var count = 0;
function default1(){
	var t = document.getElementById("target");
	t.style.fontSize = "16px"; 
}
function bigger1(){
	count++;
	var t = document.getElementById("target");
	if(count==1) {
		t.style.fontSize = "16px";
	}
	var s = parseInt(t.style.fontSize.replace("px",""))*1.4;
	t.style.fontSize = s+"px";
}
function smaller1(){
	count++;
	var t = document.getElementById("target");
	if(count==1) {
		t.style.fontSize = "16px";
	}
	var s = parseInt(t.style.fontSize.replace("px",""));
	if (s > 3 && s*0.6>=3) {
		s*=0.6;
	}
	t.style.fontSize = s+"px";
}