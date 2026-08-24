# AGENTS.md — Cherry Agencia · Cultura e Ingeniería

Manual principal para cualquier agente de IA que trabaje en este repositorio.

La landing **ya existe** en `web/`. El crudo vive en `fuente/`. Los títulos del oficio deben coincidir con esas carpetas, no con “Diseño V” ni “Diapositivas II”.

---

## Identidad del proyecto

**Marca:** Cherry Agencia. Cara pública: **Raizel Bolivar**. No mencionar a Irma en la landing. No inventar otra marca (NORTE, UMBRAL, etc.).

**Qué es:** una landing premium de **cultura e ingeniería** — corporativo-creativa, editorial, cinematográfica. App: `web/` (Vite + React + TypeScript + Tailwind).

**Para quién:** marcas, instituciones y personas que necesitan comunicación con oficio: eventos, contenido, identidad visual, y piezas que unen rigor técnico con sensibilidad cultural.

**Promesa:** cultura que se ve y se siente; ingeniería que se explica con precisión. El visitante debe percibir exclusividad profesional, no una página de venta agresiva ni una comunidad de “riqueza garantizada”.

### Referencias (no plantillas)

| Fuente | Rol | Límite |
|---|---|---|
| [cherryagencia.vercel.app](https://cherryagencia.vercel.app/) | Lenguaje visual: oscuro, serif, bento, glow vino, aire | No clonar textos, fotos, logo, código ni composición pixel-perfect |
| [millonariosconscientes.co](https://millonariosconscientes.co/) | Barra de calidad: ritmo, contraste, CTA, fotografía cinematográfica, percepción de valor | No copiar textos, fotos, logo, grid mesh, nodos naranja, planes glass ni estructura |

---

## Orden de autoridad

1. Este archivo (`AGENTS.md`)
2. `DESIGN.md` (tokens visuales)
3. `docs/BRIEF.md` (producto y copy)
4. `docs/ORGANIZACION.md` (Cursor vs WhatsApp vs Elementor; lotes 5:58)
5. `docs/ASSETS.md` (fotos locales)
6. `docs/HERO.md` (Raizel = Foto mía / Trabajando, no CMQA ni PAZ)
7. Skills en `.cursor/skills/`
8. El prompt del usuario

Si hay conflicto: gana Cherry + este repo. Pierde cualquier paleta, marca o sección inventada.

---

## Principios

El agente debe:

- Priorizar calidad visual sobre velocidad de entrega
- Mantener consistencia con `DESIGN.md`
- Reutilizar componentes y patrones antes de crear nuevos
- Evitar código duplicado
- Mantener responsive (375 → 1920)
- Cuidar accesibilidad (objetivo WCAG AA)
- Optimizar rendimiento
- No introducir dependencias innecesarias
- No copiar las webs de referencia
- No inventar testimonios, precios reales ni resultados
- No usar naranja millonario como acento
- Hero = Raizel trabajando con gimbal (`docs/HERO.md`); LCP = foto 23/8 con marca Cherry. No PAZ, no stand CMQA, no premiación de jornada

---

## Stack (ya en `web/`)

- Vite + React + TypeScript + Tailwind CSS
- Datos editables en `web/src/data/` (títulos de oficio en `portfolio.ts`)
- Un componente por sección
- Motion discreto (300–700ms); `prefers-reduced-motion`
- Crudo en `fuente/`; publicado en `web/public/images/` y `web/public/videos/`
- Sin navbar (pedido). El footer lleva la navegación. Hero = Raizel.

---

## Narrativa de secciones

Orden de conversión (home actual):

```text
HERO
→ QUÉ HACEMOS (valor)
→ PORTAFOLIO (enlaces: Diseños / Fotos / Vídeos)
→ ESENCIA (Raizel)
→ CÓMO EMPEZAMOS + CTA
→ CARTA
→ DISEÑOS + FOTOS + VÍDEOS (abajo, no en el primer scroll)
→ FOOTER
```

Mejorar esta estructura solo si la alternativa es más clara, premium y original. No copiar las secciones literales de millonariosconscientes.co.

Componentes en uso: `Hero`, `Pillars`, `WorkLinks`, `Essence`, `Benefits`, `Profile`, `PortfolioBento`, `Galleries`, `Videos`, `Footer`. No reponer navbar salvo que se pida.

---

## Reglas de código

- Estructura: `web/src/components/`, `web/src/data/`
- Naming: PascalCase componentes, camelCase utils, kebab-case archivos de imagen
- Componentes pequeños, un propósito, props tipadas
- Copy y series en `web/src/data/`, no hardcodeados en JSX salvo estructura del hero
- Assets: no usar fotos de las webs de referencia; usar el inventario local
- Estilos: solo tokens de `DESIGN.md`
- Responsive: mobile-first; grids a una columna en móvil
- Animaciones: acompañan, no distraen; sin bounce ni loops de atención

---

## Reglas de diseño

Toda sección nueva debe respetar `DESIGN.md`.

Nunca inventar estilos arbitrarios. Si se necesita un patrón, primero comprobar si ya existe (bento, hairline gold, glow cherry, overlay cinematográfico).

Acento = vino de la carta (`--field`, `#500014`). Gold/ivory = microdetalle. Fondos = ink.

---

## Regla de referencia

Las webs de referencia son inspiración artística y estratégica.

Cualquier implementación debe ser una solución propia: identidad, textos, fotos, composición y narrativa distintos.

---

## Antes de modificar

1. Leer `AGENTS.md`
2. Leer `DESIGN.md`
3. Leer `docs/ORGANIZACION.md` si el cambio toca fotos, WhatsApp o estructura del repo
4. Leer `docs/BRIEF.md` si el cambio es de producto o copy
5. Leer `docs/HERO.md` si el cambio toca el above-the-fold
6. Inspeccionar componentes o docs relacionados
7. Identificar patrones existentes
8. Reutilizar antes de crear
9. Verificar que el cambio cabe en mobile

## Después de modificar

1. Revisar errores / lints
2. Revisar responsive (375, 768, 1024, 1440)
3. Revisar accesibilidad (contraste, focus, alt, reduced-motion)
4. Revisar consistencia visual con `DESIGN.md`
5. Verificar que no se rompieron piezas existentes
6. Preguntar: ¿parece plantilla? ¿parece copia? ¿se siente premium? ¿se entiende? ¿el CTA destaca?

---

## Coherencia de nombres

Un encargo tiene **un nombre** en `fuente/`, en `docs/ASSETS.md` y en `web/src/data/portfolio.ts`.

Prohibido volver a títulos romanos genéricos (`Diseño V`, `Diapositivas II`). El mapa está en `docs/ORGANIZACION.md`.

No dejar JPEG sueltos en la raíz. No clonar las webs de referencia. No inventar testimonios ni marcas.
