var maxStt = 10, minStt = 1;
for (var i = 1; i <= 10; i++) {
	var k = "dot"+i;
	document.getElementById(k).addEventListener('click', function(){
		var t = document.getElementsByClassName('active')[0];
		t.classList.remove("active");
		var stt = this.getAttribute('stt');
		var a = document.getElementsByClassName(stt)[0];
		a.classList.add("active");

		t = document.getElementsByClassName('activeCircle')[0];
		t.classList.remove("activeCircle");
		this.classList.add("activeCircle");
	})
}

document.getElementById('prev').addEventListener('click', function(){
	var t = document.getElementsByClassName('active')[0];
	var stt = parseInt(t.getAttribute('stt'));
	stt--;
	if (stt==minStt-1) {
		stt = maxStt;
	}
	var a = document.getElementsByClassName(stt)[0];
	t.classList.remove("active");
	a.classList.add("active");

	t = document.getElementsByClassName('activeCircle')[0];
	a = document.getElementsByClassName(stt)[1];
	t.classList.remove("activeCircle");
	a.classList.add("activeCircle");
})

document.getElementById('next').addEventListener('click', function(){
	var t = document.getElementsByClassName('active')[0];
	var stt = parseInt(t.getAttribute('stt'));
	stt++;
	if (stt==maxStt+1) {
		stt = minStt;
	}
	var a = document.getElementsByClassName(stt)[0];
	t.classList.remove("active");
	a.classList.add("active");

	t = document.getElementsByClassName('activeCircle')[0];
	a = document.getElementsByClassName(stt)[1];
	t.classList.remove("activeCircle");
	a.classList.add("activeCircle");
})

setInterval(function(){
	var t = document.getElementsByClassName('active')[0];
	var stt = parseInt(t.getAttribute('stt'));
	stt++;
	if (stt==maxStt+1) {
		stt = minStt;
	}
	var a = document.getElementsByClassName(stt)[0];
	t.classList.remove("active");
	a.classList.add("active");

	t = document.getElementsByClassName('activeCircle')[0];
	a = document.getElementsByClassName(stt)[1];
	t.classList.remove("activeCircle");
	a.classList.add("activeCircle");
},10000)