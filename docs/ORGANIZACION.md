# ORGANIZACION.md — Cómo se ordena este proyecto

Cursor es la fuente de verdad: marca, paleta, hero, fotos, nombres del oficio.

WhatsApp es solo la bandeja de origen. Elementor no es este Design System.

---

## Tres herramientas, tres roles

| Herramienta | Para qué | No para qué |
|---|---|---|
| **Cursor** (este repo) | `AGENTS.md`, `DESIGN.md`, `docs/`, `.cursor/rules`, `.cursor/skills` | Pegar la web a lo loco sin leer docs |
| **WhatsApp** (grupo Cherry Agencia, 17/8/2026) | Origen de fotos y pies: `Foto mía`, `Trabajando`, `Diseño` | Identidad visual ni copy final |
| **Elementor / WordPress** (pestaña “Edit Inicio”) | Sitio actual en producción, otra pista | No es este Design System. No mezclar instrucciones |

La landing vive en `web/`. Los JPEG y vídeos crudos viven en `fuente/`, con nombre corto. Lo que se publica se exporta a `web/public/images/` y `web/public/videos/`.

---

## Mapa del repo (hoy)

```text
Nueva carpeta/
  AGENTS.md
  DESIGN.md
  docs/                     BRIEF, HERO, ASSETS, este archivo
  web/                      landing Vite
  fuente/
    carta/                  carta-raizel.pdf
    marca/                  isotipo y lockups Cherry
    diapositivas/           obesidad, abundancia, tiempo, cierre…
    disenos/                bremen, cmqa, sellos, cejas, monaco…
    fotos/
      raizel/               gimbal, set, lives
      nestyuri/
      eventos/              stand-cmqa
    videos/                 presentacion, raizel-01…04
```

Nada de JPEG suelto en la raíz. Inventario y roles: `docs/ASSETS.md`.

---

## Nombres del oficio (crudo = web)

Los ids y los WebP publicados no se renombran. Cambia el **título** que ve el visitante.

| `fuente/` | Título en la web | Slug publicado |
|---|---|---|
| `diapositivas/obesidad` | Obesidad · cómo se trata | `slides-tratamiento` |
| `diapositivas/abundancia` | Principios de abundancia | `slides-abundancia` |
| `diapositivas/dinamica-tiempo` | Dinámica del tiempo | `slides-ii` |
| `diapositivas/cierre-impresion` | Cierre e impresión | `slides-iv` |
| `diapositivas/cmqa-compartir` | CMQA · compartir | `slides-v` |
| `diapositivas/tips-rinones` | Tips para los riñones | `slides-vi` |
| `diapositivas/cancer-mama` | Cáncer de mama | `slides-vii` |
| `diapositivas/anzoategui` | Anzoátegui | `slides-viii` |
| `fotos/nestyuri` | Carruseles y diapositivas | `work-nestyuri` |
| `disenos/guia-estudio` | Guía de estudio | `diseno-guia` |
| `disenos/curso-pestanas` | Curso de pestañas | `diseno-ii` |
| `disenos/plato-saludable` | Plato saludable | `diseno-iii` |
| `disenos/taller-rodamientos` | Taller de rodamientos | `diseno-iv` |
| `disenos/sellos-mecanicos` | Sellos mecánicos | `diseno-v` |
| `disenos/dia-corazon` | Día del corazón | `diseno-vi` |
| `disenos/nestyuri-flyer` | Flyer Nestyuri | `diseno-vii` |
| `disenos/rapid-express` | Rapid Express | `diseno-viii` |
| `disenos/cejas` | Micropigmentación de cejas | `diseno-ix` |
| `disenos/rosas-eternas` | Rosas eternas | `diseno-x` |
| `disenos/cmqa` (jornadas) | CMQA · jornadas y sorteo | `diseno-xi` |
| `disenos/cmqa` | CMQA | `work-cmqa` |
| `disenos/bremen` | Bremen · sellos | `work-bremen` |
| `disenos/rim-urbano` | RiM urbano | `work-rim-urbano` |
| `disenos/monaco` | Circuit de Monaco | `work-monaco` |
| `disenos/alfredo` | Alfredo Alexander | `work-alfredo` |
| `disenos/isaias` | Isaias Mateo | `work-isaias` |
| `disenos/bisturi` | Entre Bisturí | `work-bisturi` |
| `fotos/raizel` (lote XV) | Raizel en set | `set-lets-talk` |
| `fotos/raizel/gimbal-azul.jpeg` | Portada Raizel en set | `set-portada` |
| `fotos/raizel/gimbal-cherry.jpeg` | Hero LCP | `hero-raizel-set` |

Fotos de ella o de evento → `#galerias` / Raizel en set. Mónaco y Alfredo se quedan en **Diseño**.

Editar títulos solo en `web/src/data/portfolio.ts`.

---

## Cómo leer los archivos de WhatsApp

El nombre **es la hora de envío**, no la de la sesión.

`WhatsApp Image 2026-08-17 at 5.58.07 PM.jpeg`  
→ lunes 17/8/2026, ~17:58, chat Cherry Agencia.

Varias fotos el mismo minuto: ` (1)`, ` (2)`, ` (3)` = duplicados o recortes. Elegir 1; el resto archivo.

### Pies de Raizel Bolivar (17/8/2026)

Fuente: grupo **Cherry Agencia**.

| Hora | Pie | Qué significa aquí | Dónde va |
|---|---|---|---|
| ~17:57–17:58 | **Trabajando** | Oficio: gimbal, set, grabación | Hero si **no** domina logo CMQA; si no → `evento` |
| ~17:58 | **Foto mía** | Retrato de Raizel (ella en cámara) | Hero o retrato; recortar cliente |
| ~17:58 | **Diseño** | Piezas de cliente (RiM, flyers, merch) | `editorial` / `ingenieria` — **nunca hero** |

Textos exactos a respetar en docs:

```text
[5:58 pm, 17/8/2026] Raizel Bolivar: Foto mía
[5:58 pm, 17/8/2026] Raizel Bolivar: Foto mía
[5:58 pm, 17/8/2026] Raizel Bolivar: Trabajando
```

---

## Lotes del 17/8 (histórico WhatsApp)

Los archivos ya no están en la raíz. La hora del nombre original sigue siendo la pista.

| Hora en el filename | Contenido típico | Rol |
|---|---|---|
| `5.38.23` sin `(1)` | Raizel perfil + **gimbal de mano**, luz azul | `hero` alterno (cinemático, sin stand) |
| `5.38.23 (1)` | Raizel en **stand CMQA** | `evento` — no hero |
| `5.39.39`–`5.39.40` | F1, Barça, collage infantil | `cultura` o `excluir` |
| `5.43`–`5.47` | Podcast, campañas salud | `editorial` |
| `5.57.48`–`5.57.51` | Raizel en live; **pantalla CMQA detrás** | `evento` (Trabajando, pero cliente a pleno) |
| `5.57.52`–`5.57.57` | Gráficas CMQA, booth vacío, sellos, etc. | `editorial` / no hero |
| **`5.58.00`–`5.58.11`** | Mezcla **Foto mía / Trabajando / Diseño** | Ver tabla abajo |
| `6.00` | Pulso Informativo CMQA | `editorial` |
| `7.24` | Camisa ingeniería UBV | `ingenieria` |

### Detalle ~17:58 (el lote que pediste)

| Archivo (aprox.) | Lectura | Rol |
|---|---|---|
| `5.58.00` logo RiM / gear | Diseño cliente Rodaindustria | `editorial` `ingenieria` |
| `5.58.02` *¿Cómo funciona la magia?* | Pieza ingeniería (skate/torre) | `ingenieria` |
| `5.58.04` flyer Rodaindustria | Diseño | `editorial` |
| `5.58.07` locación mural + **gimbal** | **Trabajando** — sin stand médico | **Pool hero** |
| `5.58.09` mesa, vino, tablet | Foto mía / set | retrato o prueba; recortar si no es LCP |
| `5.58.11` entrevista Televén | Prensa | `cultura` `evento` — no hero gimbal |

La foto **definitiva de LCP** se elige del pool hero (`docs/HERO.md`): gimbal + Raizel o set de trabajo **sin** gorra PAZ y **sin** stand/pantalla CMQA.

---

## Dónde vive cada cosa

| Tipo | Carpeta |
|---|---|
| Crudo (JPEG, MP4, PDF) | `fuente/` |
| Publicado (WebP, vídeo web) | `web/public/images/`, `web/public/videos/` |
| Carta pública | `web/public/docs/carta-raizel.pdf` + copia en `fuente/carta/` |

Hero LCP: `fuente/fotos/raizel/quirofano-gimbal.jpeg` → `web/public/images/`. Recorte con alfa: `gimbal-blanco.jpeg`. Stand CMQA: `fuente/fotos/eventos/stand-cmqa.jpeg` — no hero.

---

## Orden de lectura para un agente

1. `AGENTS.md`  
2. `DESIGN.md`  
3. Este archivo  
4. `docs/HERO.md`  
5. `docs/ASSETS.md`  
6. `docs/BRIEF.md`  
7. Skills si toca UI o copy  

Leer `docs/ASSETS.md` y `docs/HERO.md` antes de tocar fotos.

---

## Cursor: qué está “bien hecho”

- Rules en `.cursor/rules` con `alwaysApply` → no se olvida la marca  
- Skills en `.cursor/skills` → se invocan al diseñar  
- Docs en `docs/` → humanos y agentes leen lo mismo  
- Crudo en `fuente/`, publicado en `web/public/`  

No volver a dejar JPEG sueltos en la raíz.
