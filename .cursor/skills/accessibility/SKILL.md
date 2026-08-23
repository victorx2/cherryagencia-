---
name: accessibility
description: Accesibilidad WCAG AA para la landing Cherry (HTML semántico, teclado, focus gold, contraste, alt, aria mínimo). Usar al maquetar, botones, menú, FAQ, imágenes, formularios o al auditar a11y.
---

# Accessibility

## Objetivo

WCAG AA mínimo. La página usable con teclado, lector de pantalla y `prefers-reduced-motion`.

## Cuándo utilizarlo

Al crear HTML, nav, acordeón FAQ, CTA, overlays, imágenes, o al revisar contraste.

## Reglas

- Semántica: `header`, `nav`, `main`, `section` con `h2` por bloque, `footer`. Un `h1` en el hero.
- Contraste: `--paper` y `--muted` sobre `--ink` / `--primary`. Verificar CTA cherry con texto ivory.
- Focus visible: `--glow-focus` de `DESIGN.md`. Nunca `outline: none` sin reemplazo.
- Teclado: menú, FAQ, botones, links. Escape cierra el menú.
- `aria-expanded` en hamburger y acordeón. `aria-label` si el icono no tiene texto.
- `alt` descriptivo; `alt=""` solo decorativo.
- No transmitir información solo con color (gold vs paper).
- Skip link a `#main` al inicio.

## Proceso

1. Estructura semántica antes de CSS.
2. Tab order = orden visual.
3. Contrast checker en CTA y muted.
4. Probar menú y FAQ solo con teclado.
5. Reduced-motion: ver skill `animations`.

## Checklist

- [ ] Un h1
- [ ] Headings sin saltos (h2 → h3)
- [ ] Focus visible en todos los interactivos
- [ ] Alt en fotos de `docs/ASSETS.md`
- [ ] Acordeón operable con Enter/Espacio
- [ ] Contraste AA en texto y botones
- [ ] Movimiento no esencial se puede apagar

## Errores que evitar

- Divs clicables sin `button`/`a`
- Modales sin foco atrapado (si se añaden)
- Texto en la imagen sin equivalente HTML
- Iconos de redes sin nombre accesible
