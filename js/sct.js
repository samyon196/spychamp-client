function allInvisible() {
	document.getElementById("load").style.display = "none";
	document.getElementById("main").style.display = "none";
	document.getElementById("host").style.display = "none";
	document.getElementById("join").style.display = "none";
	document.getElementById("wait").style.display = "none";
	document.getElementById("play").style.display = "none";
}
function openView(viewName) {
	allInvisible();
	var view = document.getElementById(viewName);
	var header = document.getElementById("header");
	var container = document.getElementById("container");
	var content = document.getElementById("content");
	view.style.display = "block";
	var margin = getComputedStyle(document.querySelector('.view')).marginTop;
	var height = view.scrollHeight + header.scrollHeight + 'px';
	container.style.height = height;
	if(viewName == "join")
		document.getElementById("username_h").focus();
	if(viewName == "host")
		document.getElementById("username_j").focus();
}
