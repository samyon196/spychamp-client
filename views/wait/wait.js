function addUserToList(name) {
    //var firstname = document.getElementById('newnick').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(name));
    var list = document.getElementById("pplist");
    list.appendChild(entry);
  /*  var waiting = document.getElementById("wait");
	var header = document.getElementById("header");
	var container = document.getElementById("container");
	var height = waiting.scrollHeight + header.scrollHeight + 'px';
    container.style.height = height;
    pplist = document.getElementById("pplist");
    pplist.scrollTop = pplist.scrollHeight; */
}

function clearWaitingList() {
    document.getElementById("pplist").innerHTML = "";
}