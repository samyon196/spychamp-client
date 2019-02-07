var state = "";
class SpySocket {
    constructor(address) {
        this.isConnected = false;
        this.ws = new WebSocket(address);
        this.ws.onopen = this.onConnOpen;
        this.ws.onclose = this.onConnClose;
        this.ws.onmessage = this.onIncomingMessage;
    }
    onConnOpen() {
        this.isConnected = true;
        this.send("CONNECT HELLO");
    }
    onConnClose() {
        openView("load");
        state = "load";
        this.isConnected = false;
    }
    onIncomingMessage(evt) {
        var msg = evt.data;
        var tokens = msg.split(" ");
        if(tokens[0] === "CONNECT" && tokens[1] === "WELCOME") {
            openView("main");
            state = "main";
        }
        if(tokens[0] === "HOST" && tokens[1] === "APPROVED") {
            openView("wait");
            state = "host";
            document.getElementById("adminstart").style.display = "inline";
        }
        if(tokens[0] === "JOIN" && tokens[1] === "APPROVED") {
            openView("wait");
            state = "join";
            document.getElementById("adminstart").style.display = "none";
        }
        if(tokens[0] === "EXISTING" && state === "join") {
            var names = tokens.slice(1);
            for(name of names) {
                addUserToList(name);
            }
        }
        if(tokens[0] === "INCOMING" && (state === "join" || state === "host")) {
            addUserToList(tokens[1]);
        }
        if(tokens[0] === "STARTING" && (state === "join" || state === "host")) {
            state = "play";
            openView("play");
        }
    }
    sendMessage(msg) {
        this.ws.send(msg);
    }
}
