import { useRef } from "react";
import { gsap, useGSAP } from "../lib/motion";

export function Atmosphere() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const orbit = (
        target: string,
        duration: number,
        radiusX: number,
        radiusY: number,
      ) => {
        const state = { angle: 0 };
        gsap.to(state, {
          angle: 360,
          duration,
          repeat: -1,
          ease: "none",
          onUpdate: () => {
            const rad = (state.angle * Math.PI) / 180;
            gsap.set(target, {
              x: Math.cos(rad) * radiusX,
              y: Math.sin(rad) * radiusY,
            });
          },
        });
      };

      orbit(".atmosphere-bloom-a", 56, 28, 22);
      orbit(".atmosphere-bloom-b", 72, 24, 30);
      orbit(".atmosphere-bloom-c", 64, 20, 18);
    },
    { scope: root },
  );

  return (
    <div ref={root} className="atmosphere" aria-hidden="true">
      <div className="atmosphere-dots" />
      <div className="atmosphere-bloom atmosphere-bloom-a">
        <span className="atmosphere-core atmosphere-core-a" />
      </div>
      <div className="atmosphere-bloom atmosphere-bloom-b">
        <span className="atmosphere-core atmosphere-core-b" />
      </div>
      <div className="atmosphere-bloom atmosphere-bloom-c">
        <span className="atmosphere-core atmosphere-core-c" />
      </div>
      <div className="atmosphere-vignette" />
    </div>
  );
}
