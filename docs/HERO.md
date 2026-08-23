# HERO.md — Contrato del primer bloque visual

El hero es **Raizel Bolivar trabajando** (gimbal / set), no la gorra PAZ ni el stand del Centro Médico.

Origen WhatsApp, grupo Cherry Agencia, lunes **17/8/2026 ~17:58**:

```text
[5:58 pm, 17/8/2026] Raizel Bolivar: Foto mía
[5:58 pm, 17/8/2026] Raizel Bolivar: Foto mía
[5:58 pm, 17/8/2026] Raizel Bolivar: Trabajando
```

Cómo se archivan esos envíos: `docs/ORGANIZACION.md`.  
Esta pasada: **solo documentación**.

Cuando se implemente: chasis (tokens + navbar) + **este hero**, antes que el resto.

---

## Quién

**Raizel Bolivar**, fundadora. El above-the-fold la muestra en oficio (cámara, gimbal, set).

No incluir a Irma en el hero ni en el resto de la landing.  
Prohibido: hombre de gorra **PAZ**, stills de millonariosconscientes.co, stand o pantalla **CMQA** como fondo dominante.

---

## Pool hero (elegir 1 para LCP)

Prioridad: lote **5:58 Trabajando** con gimbal, locación libre de marca médica. Alterno cinemático del mismo día si el recorte 5:58 no deja a Raizel clara.

| Prioridad | Archivo | Pie WhatsApp | Por qué |
|---|---|---|---|
| 1 | `WhatsApp Image 2026-08-17 at 5.58.07 PM.jpeg` (y ` (1)` si es el mismo set) | Trabajando | Gimbal en locación mural/lounge; **no** stand CMQA |
| 2 | `WhatsApp Image 2026-08-17 at 5.38.23 PM.jpeg` (**sin** `(1)`) | (envío 17:38) | Raizel perfil + gimbal de mano, luz azul; sin booth |
| 3 | Mejor frame `Foto mía` del lote 5:58 **sin** logo de cliente | Foto mía | Retrato de ella; recortar terceros |

Al implementar: una sola LCP → `public/images/hero-raizel.webp`.  
`alt`: `Raizel Bolivar trabajando con gimbal`.  
`fetchpriority="high"`.

LCP actual (pedido): `Raizel I.jpeg` — Raizel con gimbal en quirófano. No es stand ni TV de cliente. Copy, ticker y CTA se mantienen.

Si 5.58.07 no muestra a Raizel con nitidez, usar 5.38.23 (perfil gimbal) como LCP y 5.58.07 como segundo recorte en la sección Oficio.

---

## Cómo tratarla

1. Recorte editorial: persona + equipo. No el booth médico ni la TV con caduceo.
2. Overlay ink (`DESIGN.md`), grain 4–6%. Figura full-bleed, transparente, sin marco: el ticker y el copy se leen encima.
3. Acento UI = cherry. No naranja millonario.
4. Copy al tercio inferior o al lado opuesto al gimbal; no script “Comunidad” encima de la cara.
5. Composición distinta a millonariosconscientes (no retrato frontal gorra + CTA naranja a la derecha).

---

## Fuera del hero (aunque sean 17:57–17:58)

| Qué | Archivos típicos | Rol |
|---|---|---|
| Stand CMQA / brochures | `5.38.23 PM (1).jpeg`, `5.57.57` | `evento` |
| Live con **pantalla CMQA** detrás | `5.57.48`–`5.57.50` | `evento` (Trabajando de cliente, no LCP Cherry) |
| Gráficas CMQA, Pulso, nasal | `5.57.52`, `6.00.x` | `editorial` |
| **Diseño** RiM / Rodaindustria / magia / sellos | `5.58.00`, `5.58.02`, `5.58.04`, `5.57.54` | `editorial` / `ingenieria` |
| Entrevista Televén | `5.58.11` | `cultura` `evento` |
| Gorra PAZ / millonariosconscientes | (no usar) | prohibido |

---

## Copy del hero (editable, original)

Eyebrow: no. Microfrase y `VER EL OFICIO`: no. El hero abre con el h1.

Headline:

> No vendo **espacios**; creo **conexiones**  
> **rentables** entre tu marca y nuestra  
> **comunidad**.

Énfasis (mismo `hero-emphasis` / `textShine` que tenía *entiende*): espacios, conexiones, rentables, comunidad. Gold → cherry. No naranja millonario.

Subhead:

> Cherry Agencia. Estrategia, contenido y piezas que unen sensibilidad cultural con precisión.

CTA: `HABLAR CON CHERRY →`  
Secundario: `VER EL OFICIO`  
Microfrase: `Raizel. Maracay. Oficio, no ruido.`

No copiar cherryagencia.vercel.app ni millonariosconscientes.co.

---

## Layout (código)

Cinco capas propias (receta de ritmo, piel Cherry). No `object-cover` a pantalla completa. No SVG ni fotos ajenas.

1. **Glow** — `radial-gradient` cherry/burgundy, centrado detrás de la figura, `z-index: 1`
2. **Punticos** — malla ivory, `z-index: 2`
3. **Marquesina** — `Cherry Agencia · Cultura e ingeniería`, serif enorme, `z-index: 3` (detrás de la figura)
4. **Figura** — `hero-raizel.webp` recorte con alfa. Fuente: `IMG_0822.JPG.jpeg` (Raizel perfil + gimbal, fondo blanco). Misma pose que `WhatsApp Image 2026-08-17 at 5.38.23 PM.jpeg`.
5. **Barra de copy** — `z-index: 5`, degradado ink en el tercio inferior.

- Desktop: copy a la izquierda, un solo CTA píldora a la derecha con flecha SVG (`HABLAR CON CHERRY`)
- Cinta editorial propia: `Cherry Agencia · Cultura e ingeniería` (no el ticker de millonarios)
- Figura a escena completa (alto del viewport, centrada, `object-fit: contain`), no recorte tipo card
- Glow cherry grande detrás; CTA con degradado vino + brillo ivory, no naranja
- `Ver el oficio` = enlace ghost bajo el subhead, no segundo botón
- `entiende` = serif itálica, acento cherry (no naranja millonario)
- Navbar: esta pasada el hero va a escena completa, sin barra. El skip-link vive en `App`.
- Móvil: copy y CTA apilados, CTA full width

---

## Orden futuro

1. Tokens + Navbar + grain  
2. **Este hero (lote Foto mía / Trabajando, sin CMQA ni PAZ)**  
3. Resto según `AGENTS.md`
