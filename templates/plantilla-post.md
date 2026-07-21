<!--
  PLANTILLA DE POST — no se publica (esta carpeta está excluida del build).

  Cómo usarla:
  1. Copia todo el contenido de abajo (desde el primer --- hasta el final).
  2. Crea un archivo nuevo en /_posts/ con el formato de nombre:
       AAAA-MM-DD-titulo-en-slug.md
     Ejemplo: 2026-08-03-como-organizo-mis-finanzas.md
     La fecha del nombre del archivo debe coincidir con el "date" del front matter.
  3. Rellena cada campo. Los campos marcados como opcionales puedes borrarlos
     si no los usas, pero no borres los obligatorios.
  4. El "excerpt" (resumen) que ve Google y que aparece en /blog/ sale
     automáticamente del primer párrafo del post, A MENOS que definas
     "excerpt" explícito en el front matter — hazlo cuando quieras controlar
     exactamente qué se muestra en el listado y en las redes sociales.
-->

---
layout: post

# --- Básico (obligatorio) ---
title: "Título del post"
slug: titulo-del-post                     # debe ser igual al slug en el nombre del archivo
date: 2026-08-03 10:00:00 -0600

# --- SEO / metadatos (obligatorio) ---
description: >-
  Resumen de 150-160 caracteres para buscadores y para compartir en redes.
  Escribe algo distinto en cada post, nunca repitas el mismo texto.
excerpt: >-
  Este es el resumen corto que aparece en /blog/. Si lo dejas fuera,
  Jekyll usa automáticamente el primer párrafo del post.

# --- Imagen destacada (obligatorio si el post tiene imagen) ---
image: /assets/img/blog/nombre-de-la-imagen.jpg
image_alt: "Descripción de la imagen para accesibilidad y SEO"

# --- Categorías y etiquetas (opcional pero recomendado) ---
categories: [desarrollo]                  # una sola categoría "paraguas"
tags: [productividad, sistemas]           # varias etiquetas específicas

# --- Autor (opcional, por defecto usa site.author) ---
author: "René M."
---

Primer párrafo del post. Si no defines "excerpt" arriba, este párrafo es
lo que se va a mostrar en el listado del blog y en las vistas previas
de redes sociales, así que escríbelo pensando en eso.

## Un subtítulo (h2)

Texto normal del artículo. Puedes usar **negritas**, *cursivas*, y enlaces
como [este enlace a topoapp.net](https://topoapp.net){:target="_blank" rel="noopener"}.

### Un sub-subtítulo (h3)

Para citas, usa el formato estándar de Markdown:

> Esto es una cita destacada. Úsala para resaltar una idea clave del
> artículo o para citar a alguien.

Para código:

```js
const ejemplo = "así se ve un bloque de código";
console.log(ejemplo);
```

Para imágenes dentro del cuerpo del artículo (además de la imagen
destacada de arriba):

![Texto alternativo descriptivo](/assets/img/blog/otra-imagen.jpg)

Para listas:

- Primer punto
- Segundo punto
- Tercer punto

Cierra el artículo con un llamado a la acción suave si aplica (invitar
a comentar por redes, a revisar un servicio relacionado, o a invitarte
un café — el botón de café ya aparece automáticamente al final de cada
post gracias al layout, no hace falta agregarlo a mano).
