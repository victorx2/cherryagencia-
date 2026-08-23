---
name: design-system
description: Aplica el Design System Cherry de DESIGN.md (ink, cherry/burgundy, ivory/gold, serif+sans, bento, glow vino). Usar al crear o refactorizar UI, Tailwind, tokens, botones, cards, tipografía o cualquier pantalla.
---

# Design system

## Objetivo

Que toda UI salga de `DESIGN.md`, no de la memoria del modelo ni de millonariosconscientes.co.

## Cuándo utilizarlo

Al generar o cambiar componentes, estilos, Tailwind theme, botones, bento, hero, hover o color.

## Reglas

- Tokens exactos de `DESIGN.md`. Campo `--field` (carta). Acento `#500014`. Gold solo hairline/hover. Un solo retículo `--dots`.
- Display serif (`Bodoni Moda` variable + opsz), UI sans (`Archivo` variable, wdth ~88), `clamp()`. No Cormorant/Outfit/Inter.
- Bento: `--elevated`, borde `--line`, `--glow-bento`.
- Campo único `--field` fixed. Cinta = velo ink + título que sigue el mouse. Un retículo en órbita. No mesh carbon.
- CTA pill cherry, no naranja.
- Espaciado de la escala 4–160.
- Leer `AGENTS.md` si el cambio toca identidad.

## Proceso

1. Abrir `DESIGN.md`.
2. Reutilizar un patrón existente (botón, card, overlay).
3. Si hace falta uno nuevo, derivarlo de tokens actuales y documentarlo en `DESIGN.md` en la misma pasada.
4. Comprobar contraste paper/muted sobre ink.
5. Preguntar: ¿parece plantilla? ¿parece copia? ¿el CTA destaca?

## Checklist

- [ ] Ningún color fuera de `:root`
- [ ] Ningún naranja millonario
- [ ] Serif solo en display/citas/énfasis
- [ ] Glow vino discreto
- [ ] Radius y spacing del sistema
- [ ] `prefers-reduced-motion` no contradicho

## Errores que evitar

- Inventar paleta “más premium”
- Mezclar Inter/Montserrat extra
- Cards glass copiadas de la referencia de alto ticket
- Gold como fondo de sección
- Grid mesh carbon fiber
