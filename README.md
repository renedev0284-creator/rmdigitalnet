# rmdigital.net

Sitio personal de René M. construido en Jekyll, listo para publicar en GitHub Pages.

## Cómo correrlo en local

```bash
bundle install
bundle exec jekyll serve
```

Abre `http://localhost:4000`.

## Dónde editar cada cosa

- **Colores de todo el sitio** → `_sass/_variables.scss`. Cambia los valores hex ahí
  arriba y se propagan a todo el sitio automáticamente. No hay colores sueltos
  en ningún otro archivo.
- **Redes sociales y proyectos (ambos sidebars)** → `_data/social.yml`.
- **Menú superior** → sección `nav:` en `_config.yml`.
- **Bloque "ahora mismo" de la home** → campos `now_title`, `now_desc`,
  `now_image` en el front matter de `index.md`.
- **Mensaje del hero** → campos `hero_title` y `hero_sub` en `index.md`.
- **FAQs de la home** → directamente en `_layouts/home.html`, cada una usa
  `{% include faq-item.html question="..." answer="..." %}`.
- **Textos de Acerca de y Legal** → `acerca-de.md` y `legal.md`.
- **Botón de café / PayPal** → `paypal_email` en `_config.yml` y el include
  `_includes/coffee-button.html`.

## Cómo publicar un nuevo post

1. Copia la plantilla completa de `templates/plantilla-post.md` (esa carpeta
   no se publica, es solo de referencia).
2. Crea el archivo en `_posts/` con el nombre `AAAA-MM-DD-tu-slug.md`.
3. Rellena el front matter: `title`, `date`, `description`, `excerpt`,
   `image`, `image_alt`, `categories`, `tags`.
4. Escribe el cuerpo en Markdown normal (soporta citas con `>`, código con
   ```, imágenes, enlaces, listas).
5. Guarda la imagen destacada en `assets/img/blog/`.

El post aparece automáticamente en `/blog/` y en el feed RSS
(`/feed.xml`), con su propia URL limpia tipo `/blog/tu-slug/` y sus
propios metadatos SEO (gracias a `jekyll-seo-tag`).

## SEO ya configurado

- `jekyll-seo-tag`: genera `<title>`, meta description, Open Graph y
  Twitter Card por página/post usando `title`, `description` e `image`
  del front matter.
- `jekyll-sitemap`: genera `/sitemap.xml` automáticamente.
- `jekyll-feed`: genera `/feed.xml` (RSS) del blog.
- `robots.txt` apunta al sitemap.
- Cada página y post debe llevar su propio `description` distinto —
  no reutilices el mismo texto en todo el sitio.

## Antes de lanzar

- Reemplaza los enlaces `tuusuario` en `_data/social.yml` por tus redes reales.
- Reemplaza `url:` en `_config.yml` por el dominio real cuando esté activo.
- Reemplaza las imágenes placeholder en `assets/img/` por las reales.
- Revisa `legal.md` y `acerca-de.md`: tienen texto placeholder marcado
  explícitamente para que lo completes.
