---
name: responsive
description: Adapta cada bloque Cherry a mobile, tablet, desktop y wide (375–1920). Mobile-first, CTA full width, bento a columna. Usar al maquetar secciones, grids, hero, navbar o al revisar breakpoints.
---

# Responsive

## Objetivo

Diseñar el móvil; no comprimir el desktop. Comprobar 375, 390, 768, 1024, 1440, 1920.

## Cuándo utilizarlo

Al implementar layout, hero, bento, navbar, tipografía fluida o al auditar viewport.

## Reglas

- Mobile-first (Tailwind sin prefijo = base móvil).
- Headline con `clamp()` de `DESIGN.md`; nunca ilegible.
- CTA primario full width bajo 768px.
- Grids → 1 columna en móvil; 2 en tablet; bento irregular en desktop.
- Navbar → hamburger elegante; panel accesible.
- Hero conserva impacto (foto + overlay + un CTA); menos deco.
- Gutters: 20px móvil, 32–48px desktop. Max-width contenido 1120–1280px.
- Collages editoriales: simplificar en tablet, no scale(0.5).

## Proceso

1. Definir el bloque en 375px primero.
2. Subir a 768 y 1024; añadir columnas solo si el ritmo lo pide.
3. En 1440+ limitar ancho; no estirar texto a todo el monitor.
4. Quitar decoración que choque o tape el CTA en móvil.

## Checklist

- [ ] 375 / 390: CTA usable, texto no minúsculo
- [ ] 768: 2 columnas coherentes
- [ ] 1024–1440: asimetría editorial
- [ ] 1920: max-width respetado
- [ ] Menú teclado en móvil
- [ ] Imágenes con aspect ratio definido (no CLS)

## Errores que evitar

- `hidden md:flex` que esconde el mensaje principal
- Horizontal scroll por padding fijo de desktop
- Cinco cards en fila en 390px
- Hero recortado de forma que desaparezca el sujeto
