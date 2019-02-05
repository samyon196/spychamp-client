function allInvisible() {
	document.getElementById("load").style.display = "none";
	document.getElementById("main").style.display = "none";
	document.getElementById("host").style.display = "none";
	document.getElementById("join").style.display = "none";
	document.getElementById("wait").style.display = "none";
	document.getElementById("play").style.display = "none";
}
function toLoad() {
	allInvisible();
	document.getElementById("load").style.display = "table-cell";
	document.getElementById("container").style.height = "230px";
}

function toStart() {
	allInvisible();
	document.getElementById("main").style.display = "table-cell";
	document.getElementById("container").style.height = "200px";
}

function toHost() {
	allInvisible();
	document.getElementById("host").style.display = "table-cell";
	document.getElementById("container").style.height = "450px";
}

function toJoin() {
	allInvisible();
	document.getElementById("join").style.display = "table-cell";
	document.getElementById("container").style.height = "300px";
}

function toWait() {
	allInvisible();
	document.getElementById("wait").style.display = "table-cell";
	document.getElementById("container").style.height = "500px";
}

function toPlay() {
	allInvisible();
	document.getElementById("play").style.display = "table-cell";
	document.getElementById("container").style.height = "500px";
}


