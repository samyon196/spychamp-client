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
        alert("Conn closed");
        this.isConnected = false;
    }
    onIncomingMessage(evt) {
        var msg = evt.data;
        if(msg === "CONNECT WELCOME") {
            openView("main");
        }
    }
    sendMessage(msg) {
        alert(msg);
        this.ws.send(msg);
    }
}
