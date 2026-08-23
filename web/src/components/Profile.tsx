import { profile } from "../data/profile";
import { CardRail } from "./ui/CardRail";
import { Section } from "./ui/Section";

const tones = ["branding", "redes", "corporativo", "marketing"] as const;

export function Profile() {
  return (
    <Section
      id="carta"
      kicker={profile.kicker}
      title={profile.title}
      lead={profile.roles}
    >
      <p className="card-copy">{profile.place}</p>

      <div className="deck-block">
        <p className="section-kicker">{profile.civil.kicker}</p>
        <p className="section-lead" style={{ marginTop: 0 }}>
          {profile.civil.lead}
        </p>
        <CardRail label={profile.civil.kicker}>
          {profile.civil.items.map((item, index) => (
            <article
              key={item.title}
              className="perk"
              data-tone={tones[index % tones.length]}
            >
              <span className="step-disc" aria-hidden="true">
                {index + 1}
              </span>
              <h3>{item.title}</h3>
            </article>
          ))}
        </CardRail>
      </div>

      <div className="deck-block">
        <p className="section-kicker">{profile.direction.kicker}</p>
        <CardRail label={profile.direction.kicker}>
          {profile.direction.items.map((item, index) => (
            <article
              key={item.title}
              className="perk"
              data-tone={tones[index % tones.length]}
            >
              <span className="step-disc" aria-hidden="true">
                {index + 1}
              </span>
              <p className="method-index">{item.meta}</p>
              <h3>{item.title}</h3>
              <p className="card-copy">{item.body}</p>
            </article>
          ))}
        </CardRail>
      </div>

      <div className="deck-block">
        <p className="section-kicker">{profile.agency.kicker}</p>
        <CardRail label={profile.agency.kicker}>
          <article className="perk" data-tone="branding">
            <span className="step-disc" aria-hidden="true">
              1
            </span>
            <h3>{profile.agency.retailTitle}</h3>
            {profile.agency.retail.map((para) => (
              <p key={para} className="card-copy">
                {para}
              </p>
            ))}
          </article>
          <article className="perk" data-tone="corporativo">
            <span className="step-disc" aria-hidden="true">
              2
            </span>
            <h3>{profile.agency.founderTitle}</h3>
            <p className="card-copy">{profile.agency.founder}</p>
          </article>
        </CardRail>
      </div>
    </Section>
  );
}
