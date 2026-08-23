---
name: frontend
description: Arquitectura frontend Cherry (Vite + React + TS + Tailwind, un componente por sección, datos en src/data). Usar al implementar, refactorizar o estructurar la landing, componentes, estado o composición.
---

# Frontend

## Objetivo

Código limpio, componentes reutilizables, datos editables, cero duplicación innecesaria. Stack previsto: Vite + React + TypeScript + Tailwind.

## Cuándo utilizarlo

Al crear la app, secciones, hooks, layout, `src/data/`, o al decidir si extraer un componente.

## Reglas

- Un componente por sección de `docs/BRIEF.md`.
- Copy, FAQ, planes, beneficios en `src/data/` — no hardcodear párrafos en JSX.
- PascalCase componentes; props tipadas; sin `any`.
- UI atómica en `src/components/ui/` (`Button`, `GrainOverlay`, `Accordion`, `Section`).
- Reutilizar antes de crear.
- Precios `[PRECIO]`. Testimonios reales o placeholder marcado.
- No librerías extra si Tailwind + un motion ligero bastan.
- Esta pasada documental: no crear `src/` todavía.

## Proceso

1. Leer `AGENTS.md` y `docs/BRIEF.md`.
2. Listar componentes existentes; reutilizar.
3. Extraer UI repetida a `ui/`.
4. Estados: default, hover, focus, disabled, loading si hay async.
5. Composición: páginas orquestan secciones; secciones no importan otras páginas.

## Checklist

- [ ] Sin duplicar markup de botones/cards
- [ ] Datos configurables
- [ ] Nombres alineados a la narrativa (Hero, Pillars, PortfolioBento, …)
- [ ] Sin dependencias de relleno
- [ ] No rompe piezas existentes

## Errores que evitar

- Un `App.tsx` de 2000 líneas
- Copiar estructura de carpetas de la web de referencia
- Fetch innecesario en una landing estática
- Inventar estado global para el menú si un `useState` basta
