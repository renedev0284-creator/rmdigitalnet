---
layout: page
title: Blog
eyebrow: Blog
description: Entradas, notas y procesos de rmdigital.net en formato Markdown.
permalink: /blog/
lede: Aqui puedes escribir publicaciones cortas o largas con slugs limpios y una base lista para crecer.
---

## Entradas publicadas

{% if site.posts.size > 0 %}
  <div class="post-grid">
    {% for post in site.posts %}
      <article class="post-card">
        <p class="post-meta">{{ post.date | date: "%d %b %Y" }}</p>
        <h3><a href="{{ post.url | relative_url }}">{{ post.title }}</a></h3>
        <p>{{ post.excerpt | strip_html | truncatewords: 24 }}</p>
      </article>
    {% endfor %}
  </div>
{% else %}
  <p class="muted">Aun no hay entradas. El post de ejemplo ya esta listo abajo en `_posts`.</p>
{% endif %}

## Plantilla rapida

Si quieres escribir una nueva entrada, duplica la plantilla:

- Titulo claro
- Fecha correcta
- Lede breve
- Tags utiles
- Slug limpio

<a class="button button-ghost" href="{{ '/blog/plantilla/' | relative_url }}">Abrir plantilla</a>
