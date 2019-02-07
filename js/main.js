var gws;
function pageLoaded() {
    openView("load");
    gws = new SpySocket("ws://localhost:10009");
}

