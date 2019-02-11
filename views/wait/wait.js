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
    container.style.height = height;*/
    pplist = document.getElementById("pplist");
    pplist.scrollTop = pplist.scrollHeight;
}

function removeUserFromList(name) {
    //TODO: LOOP FOR ALL CHILDS, IF NAME EQ, REMOVE.
    let children = document.getElementById("pplist").children;
    for(child of children) {
        if(child.innerHTML === name) {
            child.style.display = "none";
        }
    }

}
function clearWaitingList() {
    document.getElementById("pplist").innerHTML = "";
}