var state = "";
var isAdmin = false;
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
            isAdmin = true;
            if(isAdmin)
                document.getElementById("adminstart").style.display = "inline";
        }
        if(tokens[0] === "JOIN" && tokens[1] === "APPROVED") {
            openView("wait");
            state = "join";
            isAdmin = false;
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
        if(tokens[0] === "PLAYERS" && (state === "join" || state === "host")) {
            var numFirst = parseInt(tokens[1]);
            var names = tokens.slice(2);
            buildPlayersTable(names, numFirst);
        }
        if(tokens[0] === "LOCATIONS" && (state === "join" || state === "host")) {
            var names = tokens.slice(1);
            buildLocationsTable(names);
        }
        if(tokens[0] === "ROLE" && (state === "join" || state === "host")) {
            if(tokens[1] === "SPY") {
                setPlayerSpy();
            }
            else if(tokens[1] === "NOTSPY") {
                setPlayerRole(tokens[2]);
            }
        }
        if(tokens[0] === "STARTING" && (state === "join" || state === "host")) {
            state = "play";
            openView("play");
            if(isAdmin)
                document.getElementById("adminstop").style.display = "inline";
            else
                document.getElementById("adminstop").style.display = "none";
        }
        if(tokens[0] === "REMAINING" && state === "play") {
            setTime(tokens[1], tokens[2]);
        }
        if(tokens[0] === "ENDGAME" && state === "play") {
            clearTables();
            clearWaitingList();
            if(isAdmin)
                state = "host";
            else
                state = "join";
            openView("wait");
        }
        if(tokens[0] === "SERVERMESSAGE") {
            var msg_arr = tokens.slice(1);
            alert(msg_arr.join(" "));
        }
    }
    sendMessage(msg) {
        this.ws.send(msg);
    }
}
