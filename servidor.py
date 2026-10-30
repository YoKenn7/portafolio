# Servidor local SIN caché para probar el portafolio.
# Uso (dentro de esta carpeta):  python3 servidor.py   ->  abre http://localhost:8000   (Ctrl+C para cerrar)
import http.server

class H(http.server.SimpleHTTPRequestHandler):
    def end_headers(self):
        self.send_header("Cache-Control", "no-store")
        super().end_headers()

print("Sirviendo en http://localhost:8000  (Ctrl+C para cerrar)")
http.server.test(HandlerClass=H, port=8000)
