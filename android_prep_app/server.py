#!/usr/bin/env python3
"""
Android Lead & Staff Interview Prep Studio - Local Development Server
Lightweight static file server with CORS support.
"""

import http.server
import socketserver
import os
import json
import urllib.request
import urllib.error

PORT = 8090
DIRECTORY = os.path.dirname(os.path.abspath(__file__))

class AppHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type, x-goog-api-key, x-goog-model')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        self.send_header('Pragma', 'no-cache')
        self.send_header('Expires', '0')
        super().end_headers()

    def do_OPTIONS(self):
        self.send_response(200)
        self.end_headers()

    def do_POST(self):
        if self.path.startswith('/api/gemini/generateContent'):
            content_length = int(self.headers.get('Content-Length', 0))
            body = self.rfile.read(content_length)
            api_key = self.headers.get('x-goog-api-key', '')
            model = self.headers.get('x-goog-model', 'gemini-2.5-flash-lite')
            target_url = f"https://generativelanguage.googleapis.com/v1beta/models/{model}:generateContent"

            req = urllib.request.Request(
                target_url,
                data=body,
                headers={
                    'Content-Type': 'application/json',
                    'x-goog-api-key': api_key
                }
            )
            try:
                with urllib.request.urlopen(req) as resp:
                    resp_data = resp.read()
                    self.send_response(resp.status)
                    self.send_header('Content-Type', 'application/json')
                    self.end_headers()
                    self.wfile.write(resp_data)
            except urllib.error.HTTPError as e:
                err_data = e.read()
                self.send_response(e.code)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(err_data)
            except Exception as e:
                self.send_response(500)
                self.send_header('Content-Type', 'application/json')
                self.end_headers()
                self.wfile.write(json.dumps({'error': {'message': str(e)}}).encode('utf-8'))
            return
        super().do_POST()

def run():
    os.chdir(DIRECTORY)
    socketserver.TCPServer.allow_reuse_address = True
    with socketserver.TCPServer(("0.0.0.0", PORT), AppHandler) as httpd:
        print("=================================================================")
        print(f"🤖 Android Lead & Staff Prep Studio Server")
        print(f"🌐 Running at: http://localhost:{PORT}")
        print(f"📁 Serving: {DIRECTORY}")
        print("=================================================================")
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nShutting down server.")
            httpd.server_close()

if __name__ == '__main__':
    run()
