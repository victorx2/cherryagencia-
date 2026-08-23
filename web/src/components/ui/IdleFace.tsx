import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "../../lib/motion";

export function IdleFace({
  beat = 0,
  children,
}: {
  beat?: number;
  children: ReactNode;
}) {
  const root = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;

      const even = beat % 2 === 0;

      gsap.fromTo(
        el,
        {
          y: even ? 3 : 4,
          x: even ? -2 : 2,
          scale: 1,
        },
        {
          y: even ? -5 : -4,
          x: even ? 2 : -2,
          scale: 1.012,
          duration: 3.4 + (beat % 3) * 0.35,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        },
      );
    },
    { scope: root, dependencies: [beat] },
  );

  return (
    <span ref={root} className="gallery-idle">
      {children}
    </span>
  );
}
