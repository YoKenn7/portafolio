# CreativCloud — portafolio

## Probarlo en tu computadora
No funciona con doble clic (el navegador bloquea leer data/demos.json). En esta carpeta ejecuta:
    python3 servidor.py
y abre http://localhost:8000
(servidor.py es igual que "python3 -m http.server" pero sin caché, para que veas al instante los cambios en data/demos.json).   (Ctrl+C en la terminal para cerrarlo)

## Estructura
    index.html                 el portafolio
    assets/                    logo, estilos (styles.css) y lógica (app.js)
    data/demos.json            REGISTRO: una entrada por proyecto
    data/demos.ejemplos.json   plantillas de cada tipo de proyecto
    demos/<categoría>/<subcategoría>/<proyecto>/    una carpeta por proyecto
        ej.  demos/invitaciones/bodas/boda-ana-luis/index.html
             demos/desarrollo-web/restaurantes/restaurante-01/index.html
Cada subcarpeta trae un LEEME.txt que recuerda cómo usarla.

## Agregar un proyecto (sin tocar app.js)
1. Crea la carpeta del proyecto en demos/<cat>/<sub>/<id>/ (el nombre de la carpeta = el "id").
2. Agrega una entrada en data/demos.json (mira data/demos.ejemplos.json):
   - Página/invitación HTML  -> sin "src": la ruta se calcula sola (demos/<cat>/<sub>/<id>/index.html)
   - Video propio            -> "video": "demos/<cat>/<sub>/<id>/video.mp4"   (o "yt": "ID_YOUTUBE")
   - Capturas                -> "images": ["demos/<cat>/<sub>/<id>/1.jpg", ...]
   - Enlace externo          -> "link": "https://..."
   "cat" y "sub" son los nombres de las carpetas (ids de CATS en assets/app.js).
   "status": "ready" la muestra; "pending" la deja pendiente. "featured": true la muestra en Inicio.
   "cover": emoji o ruta a una imagen (ej. demos/<cat>/<sub>/<id>/portada.jpg).
   Ojo con JSON: comillas dobles y sin coma después de la última entrada.
3. Para una subcategoría nueva: agrégala en CATS (app.js) y crea su carpeta en demos/<cat>/.

## Publicar
Sube la carpeta completa a GitHub Pages, Netlify, Vercel o Cloudflare Pages.
Las páginas dentro de demos/ deben usar rutas relativas (./estilos.css), no absolutas (/estilos.css).
