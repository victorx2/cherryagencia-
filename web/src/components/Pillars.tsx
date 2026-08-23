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
      <div className="pillars">
        {services.map((item) => (
          <article key={item.id} className="pillar" data-tone={item.id}>
            <Mark name={item.id as MarkName} size={28} well />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
      <p className="academic-note">{academicPlus.note}</p>
    </Section>
  );
}
