import { academicPlus, services } from "../data/services";
import { Mark, type MarkName } from "./ui/Mark";
import { Section } from "./ui/Section";

export function Pillars() {
  return (
    <Section
      id="servicios"
      kicker="Qué hacemos"
      title="Oficio para marcas que quieren verse con precisión."
    >
      <div className="edition">
        {services.map((item, index) => (
          <article key={item.id} className="edition-card">
            <div className="edition-head">
              <span className="edition-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <Mark name={item.id as MarkName} size={22} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <p className="academic-note">{academicPlus.note}</p>
    </Section>
  );
}
