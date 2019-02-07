Client: Open loading view
Client: Opens websocket, sends "CONNECT HELLO"
Server: Sends "CONNECT WELCOME"
Client: Open main view
Client: Select Host/Join, move to view accordingly
On Host:
    Client: Open loading view
    Client: sends "HOST <username> <time>"
    Server: sends "HOST APPROVED"
    Client: Open waiting view in host mode

On Join:
    Client: Open loading view
    Client: sends "JOIN <username>"
    Server: sends "JOIN APPROVED"
    Client: Open waiting view in join mode
    Server: sends "EXISTING <user1> <user2> <user3> ..."

Server: broadcast "INCOMING <username>"
Client[admin]: sends "START <username>"
Server: select place&spy
Server: broadcast "LOCATIONS <loc1> <loc2> ..."
Server: broadcast "PLAYERS <player1> <player2> ..."
Server: sends "ROLE SPY"
Server: sends "ROLE NOTSPY LOCATION <selected_location>"
Server: sends "STARTING"
Each second:
    Server: broadcast "REMAINING <M> <S>"

