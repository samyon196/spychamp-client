import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.InetSocketAddress;
import java.util.ArrayList;
import java.util.List;
import java.util.StringTokenizer;
import java.util.Timer;

import org.java_websocket.WebSocket;
import org.java_websocket.handshake.ClientHandshake;
import org.java_websocket.server.WebSocketServer;

public class ChatServer extends WebSocketServer {
    private List<String> players;
    private List<String> places;
    private String time;
    public ChatServer( int port ) {
        super( new InetSocketAddress( port ) );
        players = new ArrayList<>();
        places = new ArrayList<>();
        this.time = "0";
//        players.add("playerHospital");
//        players.add("playerHello");
//        players.add("playeraaaa");
//        players.add("playercccc");
//        players.add("playerbbbbb");
//        players.add("playerddddd");
//        players.add("playerfffff");
//        players.add("playereeeeee");
//        players.add("playerkkkkk");
//        players.add("playergggg");
//        players.add("playerhhhhh");
//        players.add("playerlllll");
//        players.add("playerwwwww");
//        players.add("playerqqqqq");
//        players.add("playsaqqq");

        places.add("Hospital");
        places.add("Hello");
        places.add("aaaa");
        places.add("cccc");
        places.add("bbbbb");
        places.add("ddddd");
        places.add("fffff");
        places.add("eeeeee");
        places.add("kkkkk");
        places.add("gggg");
        places.add("hhhhh");
        places.add("lllll");
        places.add("wwwww");
        places.add("qqqqq");
    }

    @Override
    public void onOpen( WebSocket conn, ClientHandshake handshake ) {
        //conn.send("WELCOME"); //This method sends a message to the new client
        //broadcast( "new connection: " + handshake.getResourceDescriptor() ); //This method sends a message to all clients connected
        System.out.println( conn.getRemoteSocketAddress().getAddress().getHostAddress() + " entered the room!" );
    }

    @Override
    public void onClose( WebSocket conn, int code, String reason, boolean remote ) {
        //broadcast( conn + " has left the room!" );
        System.out.println( conn + " has left the room!" );
    }

    @Override
    public void onMessage( WebSocket conn, String message ) {
        System.out.println( message );
        //broadcast(message);
        List<String> s = new ArrayList<>();
        StringTokenizer st = new StringTokenizer(message, " ");
        while(st.hasMoreTokens()) {
            s.add(st.nextToken());
        }
        if(s.get(0).equals("CONNECT") && s.get(1).equals("HELLO")) {
            msleep();
            conn.send("CONNECT WELCOME");
        }
        if(s.get(0).equals("HOST")) {
            msleep();
            conn.send("HOST APPROVED");
            players.add(s.get(1));
            conn.send("INCOMING " + s.get(1));
            this.time = s.get(2);

        }
        if(s.get(0).equals("JOIN")) {
            msleep();
            conn.send("JOIN APPROVED");
            //conn.send("EXISTING ori lior yossi bobi mobi xobi lib asd asd asdvb asd");
            String str = "EXISTING";
            for(String player : players) {
                str += (" " + player);
            }
            conn.send(str);
            players.add(s.get(1));
            broadcast("INCOMING " + s.get(1));

        }
        if(s.get(0).equals("START")) {
            msleep();
            String ppl = "PLAYERS 2";
            String pls = "LOCATIONS";
            for(String player : players) { //TODO CHANGE TO PPL!!!
                ppl += (" " + player);
            }
            for(String loc : places) {
                pls += (" " + loc);
            }
            broadcast(ppl);
            broadcast(pls);
            broadcast("ROLE NOTSPY SelectedLocation");
            broadcast("STARTING");
            Timer timer = new Timer();
            timer.schedule(new CountDown(this, Integer.parseInt(this.time)-1), 0, 1000);
        }

    }

    public void msleep() {
        try
        {
            Thread.sleep(1500);
        }
        catch(InterruptedException ex)
        {
            Thread.currentThread().interrupt();
        }
    }
    @Override
    public void onError( WebSocket conn, Exception ex ) {
        ex.printStackTrace();
    }

    @Override
    public void onStart() {
        System.out.println("Server started!");
        setConnectionLostTimeout(0);
        setConnectionLostTimeout(100);
    }

    public static void main( String[] args ) throws InterruptedException , IOException {
        int port = 10007; // 843 flash policy port
        port = Integer.parseInt(args[0]);
        ChatServer s = new ChatServer( port );
        s.start();
        System.out.println( "ChatServer started on port: " + s.getPort() );

        BufferedReader sysin = new BufferedReader( new InputStreamReader( System.in ) );
        while ( true ) {
            String in = sysin.readLine();
            s.broadcast( in );
            if( in.equals( "exit" ) ) {
                s.stop(1000);
                break;
            }
        }
    }


}
