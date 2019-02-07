var gws;
function pageLoaded() {
    openView("load");
    gws = new SpySocket("ws://localhost:10004");
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

function onClickStart() {
    openView("load");
    var username = document.getElementById("username_h").value;
    gws.sendMessage("START " + username);
}

function onClickStop() {
    openView("load");
    var username = document.getElementById("username_h").value;
    gws.sendMessage("STOP " + username);
}