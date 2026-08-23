import { brand } from "../data/brand";
import { essence } from "../data/essence";
import { Section } from "./ui/Section";

export function Essence() {
  return (
    <Section id="nosotros" kicker={essence.kicker} title="Raizel.">
      <div className="essence-grid">
        <div className="essence-photo">
          <img src={essence.photo.src} alt={essence.photo.alt} loading="lazy" />
        </div>
        <div>
          <p className="essence-quote">{essence.quote}</p>
          <p className="card-copy">{essence.p1}</p>
          <p className="card-copy" style={{ marginTop: "1.25rem" }}>
            {essence.p2}
          </p>
          <a
            href={brand.carta.href}
            className="hero-ghost"
            target="_blank"
            rel="noreferrer"
          >
            {essence.cartaLabel}
          </a>
        </div>
      </div>
    </Section>
  );
}
