---
name: animations
description: Motion Cherry discreto (300–700ms, easing suave, hover scale ≤1.04, reveal, navbar blur). Respeta prefers-reduced-motion. Usar al añadir fade-up, parallax, hover cards, timeline o transiciones.
---

# Animations

## Objetivo

Animación cara y callada: acompaña el contenido, no compite con él. No perjudicar rendimiento, a11y ni UX.

## Cuándo utilizarlo

Al implementar reveal, hover, parallax, journey line, navbar scroll o cualquier transición.

## Reglas

```css
--ease-out: cubic-bezier(0.22, 1, 0.36, 1);
--dur-fast: 300ms;
--dur-med: 500ms;
--dur-slow: 700ms;
```

Permitido: fade-up sección, reveal de palabras (stagger ≤ 80ms), parallax 4–8%, image scale hover ≤ 1.04, línea de journey, navbar transparente → blur, órbita lenta del retículo (`transform` 72s), cinta que sigue el mouse (≤14px, 500ms), blooms GSAP en círculo.

Prohibido: bounce, springs de juego, loops de atención, varios bloques moviéndose a la vez, parallax pesado en móvil.

Obligatorio:

```css
@media (prefers-reduced-motion: reduce) { /* ver DESIGN.md */ }
```

JS de motion: una lib ligera máximo, o CSS. No GSAP + Framer + Lottie juntos.

## Proceso

1. ¿Aporta jerarquía o es adorno? Si es adorno, no.
2. CSS primero; JS solo si hay scroll-linked discreto.
3. Aplicar reduced-motion (mostrar estado final, sin loop).
4. Medir: no animar `filter`/`box-shadow` en elementos enormes si hay jank; preferir `transform`/`opacity`.

## Checklist

- [ ] Duración 300–700ms
- [ ] Easing del sistema
- [ ] `prefers-reduced-motion`
- [ ] Hover no tapa texto
- [ ] Navbar no “salta” de altura
- [ ] Una animación dominante por viewport

## Errores que evitar

- Animate on every card at once
- Parallax que marea
- Autoplay de video sin control
- Confiar en animación para información crítica
