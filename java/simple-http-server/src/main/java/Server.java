import com.sun.net.httpserver.HttpServer;

import java.net.InetSocketAddress;

public class Server {

    public static void main(String... args){
        try {
            int port = 9000;
            HttpServer server = HttpServer.create(new InetSocketAddress(port), 0);
            server.createContext("/", new HelloHandler());
            server.setExecutor(null);
            System.out.println("Server started on port: " + port);
            server.start();
        } catch (Exception e) {

        }

    }



}
