import { workLinks } from "../data/portfolio";
import { Mark, type MarkName } from "./ui/Mark";
import { Section } from "./ui/Section";

export function WorkLinks() {
  return (
    <Section
      id="portafolio"
      kicker={workLinks.kicker}
      title={workLinks.title}
      lead={workLinks.lead}
    >
      <div className="pillars">
        {workLinks.items.map((item) => (
          <a key={item.href} href={item.href} className="pillar work-link">
            <Mark name={item.icon as MarkName} size={26} well />
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </a>
        ))}
      </div>
    </Section>
  );
}
