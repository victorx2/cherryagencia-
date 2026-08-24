# BRIEF — Landing cultura e ingeniería

Producto y copy. La piel visual está en `DESIGN.md`. Las fotos en `docs/ASSETS.md`. El hero (lote 5:58 Foto mía / Trabajando) en `docs/HERO.md`. Cómo se ordena todo: `docs/ORGANIZACION.md`.

---

## Marca

**Cherry Agencia.** Fundadora: **Raizel Bolivar**. No mencionar a Irma en la landing. No crear marca paralela ni slogan tipo comunidad de alto ticket.

Tono: corporativo-creativo, cercano, preciso. Español. Aspiracional y creíble.

**Cara del sitio:** Raizel en el hero — WhatsApp 17/8/2026 5:58 (`Foto mía`, `Trabajando`), gimbal, sin stand CMQA. Clientes y oficio en secciones posteriores. Solo Raizel.

---

## Promesa

Cultura que se ve y se siente. Ingeniería que se explica con claridad.

El visitante debe sentir que entra a un estudio con oficio — no a un funnel de riqueza, no a una plantilla de coaching.

Equilibrio: **aspiración + confianza + oficio + credibilidad.**

---

## Para quién

- Marcas e instituciones que necesitan presencia (eventos, redes, identidad)
- Proyectos que cruzan **cultura** (deporte, música, editorial, comunidad) e **ingeniería** (precisión, sistemas, salud, técnica)
- Personas que valoran el detalle y no el ruido

---

## Narrativa UX

```text
QUÉ ES
→ PARA QUIÉN
→ CÓMO SE VE (cultura)
→ CÓMO SE CONSTRUYE (ingeniería)
→ OFICIO
→ PRUEBA (trabajo real / fotos locales)
→ CÓMO TRABAJAR
→ DECISIÓN
```

El usuario debe entender rápido: qué es → para quién → qué obtiene → por qué confiar → cómo empezar.

---

## Secciones (home actual)

Sin navbar. Contacto y enlaces en el footer.

| Sección | Componente | Intención |
|---|---|---|
| Hero | `Hero` | Raizel, lote 5:58. `docs/HERO.md`. No PAZ. No stand CMQA. |
| Qué hacemos | `Pillars` | Valor: acompañamiento, redes, identidad, campañas |
| Portafolio | `WorkLinks` | Tres enlaces: Diseños / Fotografía / Vídeos |
| Esencia | `Essence` | Raizel. Oficio, no ruido |
| Cómo empezamos | `Benefits` | Briefing → oficio → entrega + perks |
| Carta | `Profile` | Bio y dirección de marca |
| Oficio | `PortfolioBento` | Series con **título descriptivo** (`docs/ORGANIZACION.md`) |
| Fotografía | `Galleries` | Pixieset + Raizel en set |
| Vídeos | `Videos` | Play al clic |
| Footer | `Footer` | Teléfonos, mail, Instagram, carta |

CTA primario con mesura: Hero y “Cómo empezamos”. El resto, scroll.

Títulos de series: `web/src/data/portfolio.ts`. Deben coincidir con `fuente/`.

---

## Copy — permitido

- Claro, emocional, humano, directo
- Hablar de crecimiento, consciencia, liderazgo y oficio **sin** vender milagros
- Destacar palabras en serif + cherry o gold (una por headline)

## Copy — prohibido

- Promesas de riqueza garantizada
- Claims imposibles (“la mayor comunidad…”, “millonario en X días”)
- Lenguaje manipulador o falsa urgencia
- Testimonios inventados o cifras de ingresos ficticias
- Textos de millonariosconscientes.co o de cherryagencia.vercel.app copiados
- Nombres de secciones literales de la referencia de alto ticket

Placeholders de testimonio: marcar explícitamente  
`[Testimonio pendiente — reemplazar con historia real]`.

Precios: variables `[PRECIO]` por plan. No inventar montos.

---

## CTAs sugeridos (editables)

- Primario: `QUIERO EMPEZAR →` o `HABLAR CON CHERRY`
- Secundario: `VER EL OFICIO`
- Nav: `UNIRME` / `CONTACTO`

No usar el copy exacto de la web de referencia.

---

## FAQ inicial (contenido editable)

1. ¿Para quién es este estudio?
2. ¿Qué incluye un proyecto o membresía?
3. ¿Cómo funciona el acceso o el encargo?
4. ¿Hay eventos o producciones presenciales?
5. ¿Puedo cancelar o pausar?
6. ¿Desde qué países se puede trabajar?
7. ¿Hace falta experiencia previa?

Respuestas cortas, honestas, sin relleno. Si hay FAQ: `web/src/data/`.

---

## Criterio de copy listo

- Se entiende sin conocer la marca
- No promete resultados financieros
- No parece millonariosconscientes
- Suena a Cherry: estrategia y chispa, no a guru
