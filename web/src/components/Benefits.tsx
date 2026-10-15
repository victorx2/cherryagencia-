import { benefits } from "../data/benefits";
import { brand } from "../data/brand";
import { Button } from "./ui/Button";
import { CardRail } from "./ui/CardRail";
import { Section } from "./ui/Section";

export function Benefits() {
  return (
    <Section id="beneficios" kicker={benefits.kicker} title={benefits.title}>
      <div className="deck-block">
        <p className="section-kicker">{benefits.methodTitle}</p>
        <CardRail label={benefits.methodTitle}>
          {benefits.method.map((item, index) => (
            <article key={item.title} className="value-card">
              <span className="edition-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p className="card-copy">{item.body}</p>
            </article>
          ))}
        </CardRail>
      </div>

      <div className="deck-block">
        <p className="section-kicker">{benefits.perksTitle}</p>
        <CardRail label={benefits.perksTitle}>
          {benefits.perks.map((item, index) => (
            <article key={item.title} className="perk">
              <span className="edition-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p className="card-copy">{item.body}</p>
            </article>
          ))}
        </CardRail>
      </div>

      <div className="btn-row" id="contacto">
        <Button href={brand.phones[0].href} external>
          {benefits.cta}
        </Button>
      </div>
    </Section>
  );
}
