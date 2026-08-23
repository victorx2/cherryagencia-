# DESIGN.md — Sistema visual Cherry

Fuente de verdad visual del proyecto. No inventar tokens fuera de este archivo.

**Marca:** Cherry Agencia  
**Piel:** campo vino de la carta de Raizel + ivory/champagne + gold sutil  
**Sensación:** premium, corporativo-creativa, editorial, cinematográfica, limpia, con aire.

Lenguaje inspirado en [cherryagencia.vercel.app](https://cherryagencia.vercel.app/) — no clonar.  
Barra de calidad (ritmo, contraste, CTA) inspirada en millonariosconscientes.co — no copiar, y **nunca** usar su naranja.

---

## Brand personality

| Cualidad | Cómo se ve |
|---|---|
| Premium | Espacio negativo, tipografía grande, pocos elementos |
| Consciente | Copy sobrio, sin gritos ni urgencia falsa |
| Ambiciosa | Titulares editoriales, fotografía de oficio |
| Moderna | Sans geométrica en UI, bento, hairlines |
| Humana | Retratos reales del workspace, no stock plástico |
| Elegante | Serif en display, ivory sobre ink |
| Editorial | Asimetría, collage, ritmos distintos por sección |
| Cinematográfica | Overlay negro, grain sutil, profundidad |

Nada sobrecargado. Si una sección parece dashboard, sobra.

---

## Color system

Usar estas variables CSS (y espejo en Tailwind theme). No añadir un naranja de venta.

Fuente de paleta: carta de presentación **Anggi Raizel Castillo Bolivar** (vino → ink, texto champagne, retículo de puntos). No inventar un cherry más rojo.

```css
:root {
  --ink: #0A0A0A;
  --wine: #500014;      /* rgb(80, 0, 20) */
  --wine-2: #450012;    /* rgb(69, 0, 18) */
  --wine-3: #2D000C;    /* rgb(45, 0, 12) */
  --wine-4: #1A0008;    /* rgb(26, 0, 8) */
  --surface: #10080C;
  --elevated: #16080E;
  --paper: #F5F0E8;
  --text: #F5F0E8;
  --muted: #A8A29A;
  --border: rgba(245, 240, 232, 0.10);
  --line: #2A181C;

  --primary: #500014;
  --primary-hover: #6B1428;
  --secondary: #2D000C;
  --accent: #500014;
  --gold: #C4A574;
  --gold-bright: #E8C99A;

  --field: linear-gradient(105deg, rgb(80, 0, 20) 0%, rgb(69, 0, 18) 25%, rgb(45, 0, 12) 50%, rgb(26, 0, 8) 75%, rgb(10, 10, 10) 100%);
  --dot: rgba(245, 240, 232, 0.20);
  --dot-cell: 18px;
  --dots: radial-gradient(circle, var(--dot) 1px, transparent 1.2px);

  --background: #0A0A0A;
  --surface-elevated: #16080E;

  --success: #3D6B4F;
  --warning: #C4A574;
  --error: #8F2D2D;

  --glow-cherry: rgba(80, 0, 20, 0.40);

  --mark-cultura: #E8C99A;
  --mark-ingenieria: #9EB6C4;
  --mark-salud: #8FBFA3;
  --mark-set: #F5F0E8;
  --mark-rose: #C47A8E;
}
```

| Token | Rol |
|---|---|
| `--field` | Campo de marca: atmósfera, cintas, CTA |
| `--ink` / `--background` | Negro de cierre del degradé |
| `--wine` … `--wine-4` | Escalera de la carta |
| `--surface` / `--elevated` | Contenedores y cards, tinte vino |
| `--paper` / `--text` | Ivory/champagne de la carta |
| `--muted` | Cuerpo, captions |
| `--border` / `--line` | Bordes 1px |
| `--primary` / `--accent` | Vino de la carta. Hover: `--primary-hover` |
| `--secondary` | Vino profundo |
| `--gold` | Hairline, badge — nunca página entera |
| `--dots` / `--dot-cell` | Único retículo. 18px. Una sola capa. |
| `--success` / `--warning` / `--error` | Semántica, no marca |
| `--mark-cultura` | Champagne: Cultura, oficio, branding |
| `--mark-ingenieria` | Acero: Ingeniería, campañas, auditoría |
| `--mark-salud` | Sage: Salud, entrega, WhatsApp |
| `--mark-set` | Ivory: En set, fotografía |
| `--mark-rose` | Rosa vino: redes, referido, vídeo |

---

## Marcas (iconos)

Trazos propios en `web/src/components/ui/Mark.tsx`. No Lucide, Heroicons, Feather ni “engranaje / corazón / cámara / check” de plantilla.

Cada serie y cada card lleva un trazo distinto y un tono de la tabla. Gold solo en *Todos*, briefing, pin y carta. El icono es decorativo (`aria-hidden`); el texto sigue siendo el nombre.

`--field` = fondos de marca. Ivory = texto. Gold = microdetalle. Prohibido un segundo grid de puntos (hero + atmósfera se pisan y rompen el patrón).

---

## Glow

```css
--glow-cta: 0 8px 32px -8px rgba(80, 0, 20, 0.70);
--glow-bento: 0 0 60px -20px rgba(80, 0, 20, 0.40);
--glow-focus: 0 0 0 2px var(--ink), 0 0 0 4px var(--gold);
```

Fondo de card destacada:

```css
background:
  radial-gradient(120% 80% at 0% 0%, rgba(80, 0, 20, 0.45) 0%, transparent 55%),
  var(--elevated);
```

Glow discreto. Si parece neón de discoteca, bajar opacidad.

Hero (primer bloque): mancha `radial-gradient` del `--wine` detrás de la figura, no SVG de terceros ni `#ff5500`. Foto **full-bleed** (`object-fit: cover`, 100% del hero), opacity ~0.5, `luminosity`, fade inferior (no marco, no óvalo). Copy y CTA encima, legibles. Ticker por encima de la figura.

**Puntos:** un solo retículo `--dots` a `--dot-cell` 18px, champagne. Vive en atmósfera y gira lento (órbita 72s, solo `transform`). Las cintas no pintan otro grid: dejan ver el mismo. Nunca un segundo retículo en el hero. No mesh carbon ni nodos naranja.

**Campo único:** `--field` una vez, `background-attachment: fixed` en `body` (y CTA). El hero no pinta otro degradé a todo el ancho: el oficio ve el mismo vino y el mismo retículo. Prohibido un segundo linear-gradient de marca.

Palabra clave del hero (`entiende`): serif itálica + degradado gold → cherry con `textShine`. Nunca `#FF9D00` / `#FF4D00` ni Times New Roman.

---

## Typography

**Display / headings:** serif de alto contraste — `Bodoni Moda` variable con optical size (didona cerrada, serifas duras). Fallback `Didot`, `Georgia`.  
**UI / body / labels / números:** sans condensable — `Archivo` variable, eje `wdth` ~88 (letra más cerrada y legible). Fallback `system-ui`.

No usar `Cormorant`, `Outfit`, `Inter`, `Montserrat` ni `Playfair`: son el default de agencia y se reconocen en otras webs. Cherry no hereda la tipografía de millonariosconscientes.co ni de cherryagencia.vercel.app.

Cargar con `font-display: swap`, ejes variables y latin + latin-ext. Solo estas dos familias. `font-optical-sizing: auto` en display. `opsz` máximo de Bodoni: 96.

| Rol | Familia | Peso | Tamaño |
|---|---|---|---|
| Display | serif | 600–700 | `clamp(2.25rem, 5vw, 4.75rem)` |
| Heading | serif | 600 | `clamp(1.5rem, 3vw, 2.5rem)` |
| Body | sans, `wdth` 88 | 400 | `clamp(1rem, 1.15vw, 1.125rem)` |
| Label | sans, `wdth` 88 | 600, tracking moderado | `clamp(0.7rem, 0.8vw, 0.8rem)` |
| Caption | sans | 400 | `0.8125rem` / `--muted` |

Line-height display: 1.02–1.12. Body: 1.6. Tracking display: −0.035em a −0.045em. Palabras clave en serif itálica + `--primary` o `--gold` (una sola, no ambas en la misma palabra).

---

## Spacing

Escala (px): `4, 8, 12, 16, 24, 32, 48, 64, 80, 96, 128, 160`.

Secciones: padding vertical `clamp(4rem, 8vw, 8rem)`.  
No mezclar valores fuera de escala.

---

## Border radius

| Token | Valor | Uso |
|---|---|---|
| `--radius-sm` | 6px | chips, inputs |
| `--radius-md` | 12px | cards pequeñas |
| `--radius-lg` | 20px | bento, paneles |
| `--radius-pill` | 999px | CTA primario, badges |

---

## Shadows

```css
--shadow-sm: 0 4px 16px rgba(0, 0, 0, 0.35);
--shadow-md: 0 12px 40px rgba(0, 0, 0, 0.45);
--shadow-lg: 0 24px 64px rgba(0, 0, 0, 0.55);
```

Sombras profundas y frías. El color de marca entra por glow, no por sombra negra teñida de naranja.

---

## Layout

| Token | Valor |
|---|---|
| Max-width contenido | 1120px (`max-w-5xl` / `70rem`) |
| Max-width wide | 1280px |
| Gutter mobile | 20px |
| Gutter tablet+ | 32–48px |
| Grid | 12 columnas desktop; 4 tablet; 1–2 mobile |
| Hero | 100dvh, lote 5:58 Foto mía / Trabajando (`docs/HERO.md`); no PAZ ni CMQA |

Breakpoints de comprobación: **375, 390, 768, 1024, 1440, 1920**.

---

## Buttons

### Primary

Fondo `--primary`, texto `--paper`, radius pill, glow CTA.

- Default: `--primary`
- Hover: `--primary-hover`, glow un paso más, translateY(-1px)
- Active: `--secondary`
- Focus: `--glow-focus`
- Disabled: opacity 0.4, `pointer-events: none`

### Secondary

Transparente, borde `--border`, texto `--paper`.

- Hover: borde `--primary`, texto `--paper`
- Focus: igual que primary

### Ghost

Sin borde. Texto `--muted`. Hover: `--paper`. Para nav y acciones discretas.

CTA primario no en cada bloque. Reservar para Hero, planes, transformación, cierre.

---

## Scroll

Barra fina. Thumb champagne/gold sobre track transparente. No scrollbar nativo gris de Windows. Firefox: `scrollbar-width: thin` + `scrollbar-color`. WebKit: 8px, thumb redondo, hover `--gold`.

---

## Cinta / barra de categoría

Barra horizontal que **corta** el oficio: `Cultura`, `Ingeniería`, `Salud`, `En set`. Sin cinta de `El oficio`.

Ritmo de una cinta ancha (aire, full-bleed, título a la izquierda). Piel de la carta, no plantilla:

- Velo ink 28% sobre el `--field` fijo. Mismo retículo que gira detrás. No otro degradé.
- Borde 1px en degradé ivory que nace y muere en transparente.
- Hairline champagne a la derecha; se alarga y sigue el puntero (máx. 14×8px, 500ms).
- Texto: Archivo, mayúsculas, `--paper`, tracking 0.2em.
- Alto `clamp(8.5rem, 22vw, 13.5rem)`. Padding horizontal ~12vw. Móvil: padding 12vw / 5.5vw.
- Aire entre cinta y grilla: 40px. No banner diagonal. No mesh carbon.

---

## Cards / Bento

- Fondo `--elevated`, borde 1px `--line`, radius `--radius-lg`
- Padding generoso (24–32)
- Grid irregular: spans 2×2, 2×1, 1×1 — no 8 cards iguales
- Hover: borde cherry 20%, glow bento, imagen `scale(1.04)` max
- Hairline gold 1px que aparece de izquierda a derecha en hover de pilares
- Pilares de Qué hacemos: cada uno un lavado de marca (gold, rose, champagne, acero) sobre vino. En hover el lavado sube a opacidad 1 (500ms). No teal/verde de plantilla, no card blanca, no Poppins.
- Carril de cartas (`CardRail`): mazo solapado (margen negativo + sombra ink a la izquierda), centrado con `safe center` cuando cabe. En reposo, brillo ~70%. Hover/foco: `translateY` (≤1.35rem), z-index al frente, brillo 1, lavado vino. Disco de paso = círculo `--primary` con anillo gold, no naranja millonario. Sin Swiper, sin mesh carbon, sin círculos #ff5500.

Vídeos (`#videos`): cards 9/16, `--elevated`, play pill `--field`. Sin autoplay con sonido. Un vídeo a la vez.

Showreel (`#presentacion`): bajo la grilla de `#videos`. Marco cine (bezel ink, hairline gold, sombra). 16/9, no full-bleed. Loop mudo; **Escuchar el vídeo**. No clonar RIM.

---

## Images

- `object-fit: cover`
- Aspectos: hero `16/9` o full-bleed; retrato `3/4`; bento `1/1` o `4/5`
- Overlay: `linear-gradient(180deg, rgba(10,10,10,.25) 0%, rgba(26,0,8,.78) 70%, #0A0A0A 100%)`
- Grain CSS opacity 0.04–0.06
- Radius igual al card
- Lazy loading salvo hero (`fetchpriority="high"`)
- Preferir WebP/AVIF + `srcset` cuando exista implementación
- Tratamiento: B/N o tinte frío + un acento cherry; no saturación naranja
- `alt` descriptivo en español; vacío solo si puramente decorativa

---

## Motion

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--dur-fast: 300ms;
--dur-med: 500ms;
--dur-slow: 700ms;
```

Permitido: fade-up de sección, reveal de palabras (stagger ≤ 80ms), parallax 4–8% en fotos, hover scale ≤ 1.04, línea de journey, navbar blur, órbita lenta del retículo (72s), cintas que siguen el puntero (≤14px), blooms en círculo (GSAP), idle de cartas de oficio/foto (GSAP suave: ~4–5px, 3.4s, scale 1.012; no apagarlo con reduced-motion de Windows).

Prohibido: bounce, springs de videojuego, loops de atención rápidos, varios bloques de copy moviéndose a la vez.

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

---

## Responsive

| Viewport | Prioridad |
|---|---|
| Mobile 375–390 | Headline, CTA full width, una columna, menú hamburger, menos deco |
| Tablet 768 | Bento 2 columnas, hero compacto |
| Desktop 1024–1440 | Asimetría editorial, bento irregular |
| Wide 1920 | Max-width contenido; no estirar texto a todo el monitor |

El móvil se diseña, no se comprime. Si un collage no cabe, simplificar — no hacer zoom-out de desktop.

---

## Checklist anti-plantilla

Antes de dar una sección por buena:

1. ¿Parece una plantilla? → más aire, más serif, menos cards iguales
2. ¿Parece copia de millonarios o de cherryagencia? → cambiar composición
3. ¿Se siente premium? → tipo, spacing, foto, jerarquía
4. ¿Se entiende en 5 segundos? → simplificar
5. ¿El CTA destaca sin gritar? → `--field` sobre ink, no un cherry distinto
