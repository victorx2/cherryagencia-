# ORGANIZACION.md — Cómo se ordena este proyecto (sin código)

**Sí: Cursor es el lugar correcto** para esta fase. Aquí vive la fuente de verdad para cualquier agente (y para ti): marca, paleta, hero, fotos, lo prohibido.

No hace falta código todavía. No hace falta Elementor para organizar. WhatsApp es solo la bandeja de donde salieron las fotos.

---

## Tres herramientas, tres roles

| Herramienta | Para qué | No para qué |
|---|---|---|
| **Cursor** (este repo) | `AGENTS.md`, `DESIGN.md`, `docs/`, `.cursor/rules`, `.cursor/skills` | Pegar la web a lo loco sin leer docs |
| **WhatsApp** (grupo Cherry Agencia, 17/8/2026) | Origen de fotos y pies: `Foto mía`, `Trabajando`, `Diseño` | Identidad visual ni copy final |
| **Elementor / WordPress** (pestaña “Edit Inicio”) | Sitio actual en producción, otra pista | No es este Design System. No mezclar instrucciones |

Cuando más adelante se construya la landing en Cursor (Vite), se copian fotos **desde este folder** a `public/images/`. Hasta entonces los JPEG se quedan en la raíz con el nombre de WhatsApp.

---

## Mapa del repo (hoy)

```text
Nueva carpeta/
  AGENTS.md                 ← manual del agente
  DESIGN.md                 ← tokens Cherry (vino, no naranja)
  docs/
    ORGANIZACION.md         ← este archivo
    BRIEF.md                ← producto y copy
    HERO.md                 ← Raizel + gimbal, lote 5:58
    ASSETS.md               ← inventario y roles
  web/public/docs/carta-raizel.pdf  ← carta de Raizel, enlace público
  .cursor/rules/            ← siempre activo
  .cursor/skills/           ← se dispara al diseñar/redactar
  WhatsApp Image 2026-08-17 at *.jpeg   ← crudo; no renombrar aún
```

**No existe todavía (y no crear ahora):** `package.json`, `src/`, `index.html`, `public/`.

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

## Lotes del 17/8 (raíz del proyecto)

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

## Organización futura (solo cuando haya implementación)

No mover nada todavía. Plan de nombres:

```text
public/images/
  hero-raizel.webp          ← 1 sola, LCP
  raizel-trabajando-02.webp ← extra del lote 5:58
  evento-cmqa-stand.webp
  cultura-monaco.webp
  ingenieria-magia.webp
  editorial-rim.webp
```

`src/data/assets.ts` apuntará a esos paths. Los WhatsApp JPEG crudos pueden pasar a `assets-raw/` para no ensuciar `public/`.

---

## Orden de lectura para un agente

1. `AGENTS.md`  
2. `DESIGN.md`  
3. Este archivo  
4. `docs/HERO.md`  
5. `docs/ASSETS.md`  
6. `docs/BRIEF.md`  
7. Skills si toca UI o copy  

**Esta pasada:** solo documentación. Cero Vite, cero HTML, cero Elementor desde aquí.

---

## Cursor: qué está “bien hecho”

- Rules en `.cursor/rules` con `alwaysApply` → no se olvida la marca  
- Skills en `.cursor/skills` → se invocan al diseñar  
- Docs en `docs/` → humanos y agentes leen lo mismo  
- Fotos en la raíz con nombre WhatsApp → trazabilidad 17/8 5:58  

Eso es el sistema operativo. La web se construye **después**, leyendo esto primero.
