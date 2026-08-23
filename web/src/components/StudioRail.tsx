import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type StudioRailProps = {
  label: string;
  count: number;
  children: ReactNode;
};

export function StudioRail({ label, count, children }: StudioRailProps) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        el.classList.toggle("is-off", !entry.isIntersecting);
      },
      { threshold: 0.12 },
    );
    io.observe(el);

    const clone = el.querySelector("[data-rail-clone]");
    clone?.querySelectorAll("button, a").forEach((node) => {
      node.setAttribute("tabindex", "-1");
    });

    return () => io.disconnect();
  }, []);

  if (count < 2) {
    return (
      <div className="gallery-grid" data-count={count}>
        {children}
      </div>
    );
  }

  return (
    <div
      ref={root}
      className="studio-rail"
      style={{ "--rail-seconds": `${Math.max(count, 3) * 9}s` } as CSSProperties}
      aria-label={label}
    >
      <div className="studio-rail-track">
        <div className="studio-rail-set">{children}</div>
        <div className="studio-rail-set" data-rail-clone aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
