---
name: performance
description: Rendimiento de la landing Cherry (lazy images, fuentes swap, JS mínimo, Core Web Vitals). Usar al elegir imágenes, fuentes, animaciones, dependencias o al optimizar LCP/CLS.
---

# Performance

## Objetivo

Landing rápida: poco JS, imágenes ligeras, fuentes contenidas. Core Web Vitals saludables.

## Cuándo utilizarlo

Al añadir fotos, fuentes, motion, deps, videos, o al hacer auditoría de peso.

## Reglas

- Hero: `fetchpriority="high"`, resto `loading="lazy"` + dimensiones o aspect-ratio (evitar CLS).
- Exportar WebP/AVIF desde los JPEG de `docs/ASSETS.md`; no servir WhatsApp originales a  full en producción.
- Fuentes: 2 familias, 2–3 pesos, `font-display: swap`, subset latin.
- No librerías innecesarias. No jQuery, no Swiper si un CSS scroll basta.
- Animar `transform`/`opacity`. Evitar animar layout en scroll de toda la página.
- Code splitting solo si hay rutas o chunks pesados reales.
- Video: poster + no autoplay con sonido.

## Proceso

1. ¿Esta dependencia se justifica en el hero? Si no, no.
2. Comprimir y recortar imágenes al tamaño de uso.
3. Preload solo la fuente display o el hero, no todo.
4. Revisar bundle: una lib de motion máximo.

## Checklist

- [ ] Lazy salvo LCP
- [ ] Imágenes con width/height o aspect-ratio
- [ ] Fuentes swap + pocos pesos
- [ ] Sin JS de relleno
- [ ] Reduced-motion no carga animaciones pesadas
- [ ] Grain CSS, no PNG enorme a pantalla completa

## Errores que evitar

- Importar Framer en cada card por separado sin tree-shake
- Unsplash sin `w=` ni srcset
- Cuatro archivos de Google Fonts
- Background-video 4K en móvil
