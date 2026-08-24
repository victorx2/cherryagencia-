import { useRef } from "react";
import { gsap, useGSAP } from "../../lib/motion";

type SectionProps = {
  id: string;
  kicker?: string;
  title: string;
  lead?: string;
  children: React.ReactNode;
};

export function Section({ id, kicker, title, lead, children }: SectionProps) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();

      media.add("(prefers-reduced-motion: no-preference)", () => {
        const head = root.current?.querySelectorAll(
          ".section-kicker, .section-title, .section-lead",
        );
        const items = root.current?.querySelectorAll(
          ".pillar, .value-card, .perk, .snap-rail, .cinema, .essence-photo, .essence-quote, .bento-card, .btn-row, .work-link",
        );

        if (head?.length) {
          gsap.from(head, {
            opacity: 0,
            y: 16,
            duration: 0.5,
            stagger: 0.07,
            scrollTrigger: {
              trigger: root.current,
              start: "top 82%",
              once: true,
            },
          });
        }

        if (items?.length) {
          gsap.from(items, {
            opacity: 0,
            y: 20,
            duration: 0.6,
            stagger: 0.07,
            clearProps: "transform",
            scrollTrigger: {
              trigger: root.current,
              start: "top 76%",
              once: true,
            },
          });
        }
      });

      return () => media.revert();
    },
    { scope: root },
  );

  return (
    <section
      ref={root}
      id={id}
      className="section"
      aria-labelledby={`${id}-heading`}
    >
      <div className="section-inner">
        {kicker ? <p className="section-kicker">{kicker}</p> : null}
        <h2 id={`${id}-heading`} className="section-title">
          {title}
        </h2>
        {lead ? <p className="section-lead">{lead}</p> : null}
        {children}
      </div>
    </section>
  );
}
