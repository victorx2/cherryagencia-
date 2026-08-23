---
name: seo
description: SEO y metadatos Cherry (title, description, headings, canonical, Open Graph, Twitter). Usar al crear index.html, Helmet, meta tags, sitemap o copy de cabecera.
---

# SEO

## Objetivo

HTML semántico y metadatos coherentes con la marca Cherry · cultura e ingeniería. Sin claims de millonariosconscientes.

## Cuándo utilizarlo

Al configurar `index.html`, OG, títulos de sección, canonical, o structured data.

## Reglas

- `title`: marca + promesa corta. Ejemplo de dirección: `Cherry Agencia — Cultura e ingeniería`.
- `description`: una frase humana, sin “#1” ni riqueza. ≤ 160 caracteres.
- Un `h1`. `h2` por sección alineados a `docs/BRIEF.md`.
- Canonical a la URL definitiva cuando exista.
- Open Graph: `og:title`, `og:description`, `og:image` (foto local recortada 1200×630, no collage con marcas ajenas sin permiso), `og:type=website`.
- Twitter card: `summary_large_image`.
- `lang="es"`.
- Structured data `Organization` o `ProfessionalService` solo con datos reales (nombre, url, ciudad). No inventar reseñas `AggregateRating`.

## Proceso

1. Copy de title/description desde `docs/BRIEF.md`.
2. Headings = outline de la narrativa.
3. OG image: recorte de Raizel gimbal (`docs/HERO.md`), no F1/Barça ni stand CMQA con logo de cliente.
4. Alt y headings ya cubiertos por a11y; no keyword stuffing.

## Checklist

- [ ] title y description únicos
- [ ] lang=es
- [ ] h1 único
- [ ] OG + Twitter
- [ ] Canonical cuando haya dominio
- [ ] Sin texto clonado de las referencias

## Errores que evitar

- Title con “millonarios conscientes”
- OG image con logos de clientes sin contexto
- JSON-LD de reseñas falsas
- Diez h1 por “SEO”
