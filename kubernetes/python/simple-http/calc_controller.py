import http.server
import socketserver

PORT_NUMBER = 8080


class CalcController(http.server.BaseHTTPRequestHandler):
    def do_HEAD(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()

    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "application/json")
        self.end_headers()

        response = '{"message" : "hello"} \n'
        # response = '{ "message": "hello", "requestLine": "' + self.requestline + '"}}'

        self.wfile.write(str.encode(response, 'UTF-8'))


# TODO
# evaluate request data handler, body, path
# possibly for this simple all may be manually parsed

if __name__ == '__main__':
    Handler = CalcController
    with socketserver.TCPServer(("", PORT_NUMBER), Handler) as httpd:
        print('started serving')
        httpd.serve_forever()
    print('ended serving')

# References:
# https://docs.python.org/3/library/http.server.html
# https://docs.python.org/3/library/http.server.html#http.server.BaseHTTPRequestHandler
# https://wiki.python.org/moin/BaseHttpServer
