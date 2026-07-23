---
layout: project
title: "TopoApp: un sistema de ventas para emprendedores"
description: "Conoce cómo René Moya diseñó TopoApp para conectar pedidos, inventario, envíos, comisiones y finanzas en un solo flujo para negocios que venden por WhatsApp y redes sociales."
permalink: /proyectos/topoapp/
breadcrumb: "proyectos|/#anuncios;TopoApp"
project_schema: true
product_url: "https://topoapp.net"
trial_url: "https://topoapp.net/registro"
manual_url: "https://topoapp.net/manual"
---

<section class="project-hero" aria-labelledby="topoapp-title">
  <div class="project-hero-copy">
    <p class="project-overline"><span aria-hidden="true">~/</span> producto propio · caso de estudio</p>
    <h1 id="topoapp-title">TopoApp <span>convierte ventas dispersas en un flujo que se puede controlar.</span></h1>
    <p class="project-lead">Diseñé y desarrollé TopoApp para emprendedores que venden por WhatsApp y redes sociales, pero necesitan mucho más que registrar un pedido: necesitan saber qué enviar, cuánto cobrar, qué descontar y qué decisión tomar después.</p>
    <div class="project-actions">
      <a class="button button--primary" href="{{ page.product_url }}" target="_blank" rel="noopener">Visitar TopoApp {% include icon.html name="arrow-right" size=16 %}</a>
      <a class="button button--ghost" href="#historia">Conocer el caso</a>
    </div>
    <dl class="project-facts">
      <div><dt>Tipo</dt><dd>SaaS web</dd></div>
      <div><dt>Enfoque</dt><dd>Operación completa</dd></div>
      <div><dt>Alcance</dt><dd>7 países de LATAM</dd></div>
    </dl>
  </div>

  <div class="product-stage" aria-label="Vista conceptual del panel de TopoApp">
    <div class="product-window">
      <div class="product-window-bar">
        <span></span><span></span><span></span>
        <code>topoapp / panel</code>
        <small>vista conceptual</small>
      </div>
      <div class="product-window-body">
        <div class="product-mini-nav">
          <b>T</b>
          <i></i><i></i><i></i><i></i>
        </div>
        <div class="product-dashboard">
          <div class="product-dashboard-head">
            <div><small>Resumen operativo</small><strong>Tu negocio, hoy</strong></div>
            <span>En línea</span>
          </div>
          <div class="product-metrics">
            <div><small>Pedidos</small><strong>12</strong><em>hoy</em></div>
            <div><small>Por entregar</small><strong>5</strong><em>en tránsito</em></div>
            <div><small>Por liquidar</small><strong>Q 1,240</strong><em>pendiente</em></div>
          </div>
          <div class="product-flow-preview">
            <div class="flow-preview-head"><strong>Flujo de pedidos</strong><span>Ver todos</span></div>
            <div class="flow-preview-row"><i class="is-orange"></i><span>#1042 · Confirmado</span><b>Q250</b></div>
            <div class="flow-preview-row"><i></i><span>#1041 · En ruta</span><b>Q180</b></div>
            <div class="flow-preview-row"><i class="is-green"></i><span>#1040 · Entregado</span><b>Q320</b></div>
          </div>
        </div>
      </div>
    </div>
    <span class="stage-note stage-note--top">pedidos + inventario</span>
    <span class="stage-note stage-note--bottom">finanzas + equipo</span>
  </div>
</section>

<section id="historia" class="project-section project-origin" aria-labelledby="origin-title" data-reveal>
  <div class="project-section-heading">
    <p class="project-index">01 / El origen</p>
    <h2 id="origin-title">La herramienta nació de una inconformidad sencilla.</h2>
  </div>
  <div class="origin-grid">
    <div class="origin-copy">
      <p>Muchas plataformas ofrecen a los pequeños negocios una versión demasiado básica de su operación. Permiten registrar productos o ventas, pero dejan fuera las decisiones que aparecen después: preparar el paquete, coordinar el envío, descontar costos, conciliar depósitos o pagar una comisión.</p>
      <p>También observé herramientas con precios difíciles de sostener para quien apenas está ordenando sus primeras ventas y sin una evolución funcional que acompañara el crecimiento real del negocio.</p>
      <p>Por eso no quise construir otra lista de pedidos. <strong>TopoApp integra el flujo de trabajo de un emprendedor promedio</strong>, desde que publica un producto hasta que el dinero fue recibido y cada integrante obtuvo lo que le corresponde.</p>
    </div>
    <blockquote class="origin-principle">
      <span>Principio de producto</span>
      <p>Una función aislada ahorra un clic. Un flujo bien conectado evita que el negocio pierda el hilo.</p>
    </blockquote>
  </div>
</section>

<section class="project-section project-flow" aria-labelledby="flow-title" data-reveal>
  <div class="project-section-heading project-section-heading--split">
    <div>
      <p class="project-index">02 / El sistema</p>
      <h2 id="flow-title">Un pedido no termina cuando presionas “guardar”.</h2>
    </div>
    <p>TopoApp conecta las etapas para que inventario, entrega, cobro y comisiones respondan al mismo registro.</p>
  </div>

  <ol class="operation-flow">
    <li>
      <span class="operation-number">01</span>
      <span class="operation-icon">{% include icon.html name="store" size=22 %}</span>
      <h3>Catálogo y pedido</h3>
      <p>El cliente compra desde un catálogo compartible o el equipo registra la venta.</p>
    </li>
    <li>
      <span class="operation-number">02</span>
      <span class="operation-icon">{% include icon.html name="package" size=22 %}</span>
      <h3>Stock y preparación</h3>
      <p>El inventario se descuenta y el pedido avanza por confirmación, guía y empaque.</p>
    </li>
    <li>
      <span class="operation-number">03</span>
      <span class="operation-icon">{% include icon.html name="truck" size=22 %}</span>
      <h3>Envío y seguimiento</h3>
      <p>Se asigna transportista, número de guía y manifiesto para controlar la entrega.</p>
    </li>
    <li>
      <span class="operation-number">04</span>
      <span class="operation-icon">{% include icon.html name="coins" size=22 %}</span>
      <h3>Depósito y liquidación</h3>
      <p>Las guías se concilian con el depósito COD y el pedido cierra su ciclo financiero.</p>
    </li>
    <li>
      <span class="operation-number">05</span>
      <span class="operation-icon">{% include icon.html name="user" size=22 %}</span>
      <h3>Comisión del equipo</h3>
      <p>La comisión se libera al liquidar y conserva trazabilidad hasta su pago.</p>
    </li>
    <li>
      <span class="operation-number">06</span>
      <span class="operation-icon">{% include icon.html name="chart" size=22 %}</span>
      <h3>Decisiones con datos</h3>
      <p>Ventas, costos, publicidad y utilidad terminan en reportes comprensibles.</p>
    </li>
  </ol>
</section>

<section class="project-section project-depth" aria-labelledby="depth-title" data-reveal>
  <div class="project-section-heading">
    <p class="project-index">03 / La profundidad</p>
    <h2 id="depth-title">Lo que ocurre detrás de una venta también importa.</h2>
  </div>

  <div class="depth-grid">
    <article class="depth-card depth-card--shipping">
      <span class="depth-label">Costos operativos</span>
      <div class="depth-icon">{% include icon.html name="truck" size=25 %}</div>
      <h3>Cada pedido conserva sus costos reales.</h3>
      <p>Puedes registrar empresas de envío, costo base, cargos y gastos asociados. TopoApp utiliza esa información para separar el cobro bruto de la base neta y evitar que una venta aparente ser más rentable de lo que es.</p>
      <div class="calculation" aria-label="Ejemplo de cálculo de base neta">
        <span>Total del pedido <b>Q500</b></span>
        <span>Envío y cargos <b>− Q35</b></span>
        <strong>Base neta <b>Q465</b></strong>
      </div>
    </article>

    <article class="depth-card depth-card--team">
      <span class="depth-label">Equipo y comisiones</span>
      <div class="depth-icon">{% include icon.html name="user" size=25 %}</div>
      <h3>El equipo vende; el sistema hace las cuentas.</h3>
      <p>Cada integrante tiene acceso propio y un porcentaje asignado. La comisión se calcula sobre la base neta, permanece pendiente durante la operación y solo se libera cuando el pedido fue entregado y liquidado.</p>
      <div class="commission-status" aria-label="Estados de una comisión">
        <span>pendiente</span><i></i><span>liberada</span><i></i><span>pagada</span>
      </div>
    </article>

    <article class="depth-card depth-card--cod">
      <span class="depth-label">Cobros contra entrega</span>
      <div class="depth-icon">{% include icon.html name="coins" size=25 %}</div>
      <h3>Los depósitos se concilian guía por guía.</h3>
      <p>Cuando la transportista deposita lo cobrado, puedes relacionar las guías, identificar la retención COD y verificar que la diferencia sea cero antes de cerrar el depósito.</p>
      <div class="deposit-check">
        <span>{% include icon.html name="check" size=16 %} Guías relacionadas</span>
        <span>{% include icon.html name="check" size=16 %} Diferencia verificada</span>
      </div>
    </article>
  </div>
</section>

<section class="project-section project-modules" aria-labelledby="modules-title" data-reveal>
  <div class="project-section-heading project-section-heading--split">
    <div>
      <p class="project-index">04 / Capacidades</p>
      <h2 id="modules-title">Una operación completa, organizada por módulos.</h2>
    </div>
    <p>Cada módulo resuelve una tarea concreta, pero comparte información con el resto del sistema.</p>
  </div>

  <div class="module-grid">
    <article><span>{% include icon.html name="store" size=20 %}</span><h3>Catálogo público</h3><p>Productos, carrito, pedidos sin cuenta y enlaces listos para compartir o pautar.</p></article>
    <article><span>{% include icon.html name="package" size=20 %}</span><h3>Pedidos e inventario</h3><p>Estados operativos, stock automático, alertas e historial de movimientos.</p></article>
    <article><span>{% include icon.html name="truck" size=20 %}</span><h3>Envíos</h3><p>Transportistas, guías, empaque, manifiestos, tránsito e incidencias.</p></article>
    <article><span>{% include icon.html name="user" size=20 %}</span><h3>Clientes y equipo</h3><p>Historial de compra, roles, vendedores y responsabilidad por pedido.</p></article>
    <article><span>{% include icon.html name="coins" size=20 %}</span><h3>Comisiones</h3><p>Cálculo neto, pagos parciales, FIFO, saldos a favor e historial.</p></article>
    <article><span>{% include icon.html name="check" size=20 %}</span><h3>Liquidaciones</h3><p>Cierre del pedido cuando el negocio recibió efectivamente el dinero.</p></article>
    <article><span>{% include icon.html name="chart" size=20 %}</span><h3>Finanzas</h3><p>COGS, gastos, publicidad, caja, utilidad neta y cobros pendientes.</p></article>
    <article><span>{% include icon.html name="spreadsheet" size=20 %}</span><h3>Reportes</h3><p>Ventas, productos, clientes, rendimiento del equipo y exportación CSV.</p></article>
  </div>
</section>

<section class="project-section project-decisions" aria-labelledby="decisions-title" data-reveal>
  <div class="project-section-heading">
    <p class="project-index">05 / Criterio de producto</p>
    <h2 id="decisions-title">Diseñado para reducir fricción, no para presumir complejidad.</h2>
  </div>
  <div class="decision-list">
    <div><span>01</span><p><strong>Funciona desde el navegador.</strong> No exige instalaciones ni actualizaciones manuales y puede utilizarse desde celular o computadora.</p></div>
    <div><span>02</span><p><strong>Los roles protegen la operación.</strong> La persona responsable conserva configuración y finanzas; cada integrante trabaja con lo que necesita.</p></div>
    <div><span>03</span><p><strong>Los estados tienen consecuencias.</strong> Anular reintegra inventario, liquidar libera comisiones y cerrar un depósito completa la conciliación.</p></div>
    <div><span>04</span><p><strong>La información debe poder salir.</strong> Los reportes se exportan a CSV compatible con Excel y Google Sheets.</p></div>
  </div>
</section>

<aside class="custom-solution-note" data-reveal>
  <div>
    <p class="project-index">Una herramienta debe adaptarse al problema</p>
    <h2>¿Tu operación necesita un flujo diferente?</h2>
    <p>TopoApp fue diseñado para ventas por catálogo y redes. Si tu negocio requiere permisos, procesos o integraciones particulares, también puedo ayudarte a evaluar un sistema a medida.</p>
  </div>
  <a class="text-link" href="{{ '/servicios/sistemas-a-medida/' | relative_url }}">Conocer sistemas a medida {% include icon.html name="arrow-right" size=15 %}</a>
</aside>

<aside class="manual-callout" data-reveal>
  <div class="manual-callout-icon">{% include icon.html name="code" size=28 %}</div>
  <div>
    <p class="project-index">Documentación abierta</p>
    <h2>El producto también explica cómo funciona.</h2>
    <p>El manual documenta cada etapa, sus reglas y las buenas prácticas de operación. Puedes revisarlo para conocer TopoApp con mayor profundidad.</p>
  </div>
  <a class="button button--ghost" href="{{ page.manual_url }}" target="_blank" rel="noopener">Abrir manual {% include icon.html name="arrow-right" size=15 %}</a>
</aside>

<section class="project-final-cta" aria-labelledby="project-cta-title" data-reveal>
  <div>
    <p class="project-index">Producto activo · 14 días gratis</p>
    <h2 id="project-cta-title">¿Tu negocio vende por chat pero todavía opera entre mensajes y apuntes?</h2>
    <p>Prueba el flujo completo de pedidos, catálogo, inventario y finanzas sin registrar una tarjeta.</p>
  </div>
  <div class="project-final-actions">
    <a class="button button--light" href="{{ page.trial_url }}" target="_blank" rel="noopener">Crear cuenta gratis {% include icon.html name="arrow-right" size=16 %}</a>
    <a href="{{ page.product_url }}" target="_blank" rel="noopener">Conocer la plataforma</a>
  </div>
</section>
