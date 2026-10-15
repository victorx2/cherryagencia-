import { workLinks } from "../data/portfolio";
import { Section } from "./ui/Section";

export function WorkLinks() {
  return (
    <Section
      id="portafolio"
      kicker={workLinks.kicker}
      title={workLinks.title}
      lead={workLinks.lead}
    >
      <ol className="edition-links">
        {workLinks.items.map((item, index) => (
          <li key={item.href}>
            <a href={item.href} className="edition-link">
              <span className="edition-index" aria-hidden="true">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="edition-link-copy">
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </span>
              <span className="edition-arrow" aria-hidden="true">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="21"
                  height="16"
                  viewBox="0 0 21 16"
                  fill="none"
                >
                  <path
                    d="M19.916 8.99a1.25 1.25 0 0 0 0-1.768L13.552 1.212a1.25 1.25 0 0 0-1.768 1.768L17.795 8.283l-6.011 6.011a1.25 1.25 0 0 0 1.768 1.768l6.364-6.072ZM.791 8.283v1h18.418v-2H.791v1Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </a>
          </li>
        ))}
      </ol>
    </Section>
  );
}
