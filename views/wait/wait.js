function addUserToList(name) {
    var listcont = document.getElementById("plist");
    listcont.style.height = listcont.offsetHeight;
    var firstname = document.getElementById('newnick').value;
    var entry = document.createElement('li');
    entry.appendChild(document.createTextNode(firstname));
    var list = document.getElementById("pplist");
    listcont.style.height = listcont.offsetHeight + 'px';
    list.appendChild(entry);
    listcont.style.height = listcont.offsetHeight + 'px';
    /*
    var waiting = document.getElementById("wait");
	var header = document.getElementById("header");
    var container = document.getElementById("container");
    var listcont = document.getElementById("plist");
    var listheight = list.offsetHeight + 'px';
    listcont.style.height = listheight;
	var height = waiting.scrollHeight + header.scrollHeight + 'px';
    container.style.height = height;

*/
    
    pplist = document.getElementById("pplist");
    pplist.scrollTop = pplist.scrollHeight;
    openView("wait");
}