var gws;
function pageLoaded() {
    openView("load");
    gws = new SpySocket("ws://localhost:10006");
}

function onHostClick() {
    openView("load");
    var time = document.getElementById("gametime").value;
    var username = document.getElementById("username_h").value;
    gws.sendMessage("HOST " + username + " " + time);
}

function onJoinClick() {
    openView("load");
    var username = document.getElementById("username_j").value;
    gws.sendMessage("JOIN " + username);
}