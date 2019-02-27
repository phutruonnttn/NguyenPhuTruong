var section = document.getElementsByClassName("section");
for (var i = 0; i < section.length; i++) {
	document.getElementsByClassName("tab")[i].addEventListener("click", function(){
		var active = document.getElementsByClassName("active")[1];
		active.classList.remove("active");
		active = document.getElementsByClassName("active")[0];
		active.classList.remove("active");
		this.classList.add("active");
		this.nextElementSibling.classList.add("active");
	})
}




