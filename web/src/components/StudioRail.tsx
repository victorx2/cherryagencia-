import {
  Children,
  useCallback,
  useRef,
  type ReactNode,
} from "react";

function Chevron({ dir }: { dir: "prev" | "next" }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      aria-hidden="true"
    >
      <path
        d={dir === "prev" ? "M11.5 3.5 6 9l5.5 5.5" : "M6.5 3.5 12 9l-5.5 5.5"}
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function StudioRail({
  label,
  count,
  children,
}: {
  label: string;
  count: number;
  children: ReactNode;
}) {
  const scroller = useRef<HTMLDivElement>(null);

  const move = useCallback((dir: -1 | 1) => {
    const el = scroller.current;
    if (!el) return;
    const item = el.querySelector<HTMLElement>(".snap-rail-item");
    const gap = 20;
    const delta = (item?.getBoundingClientRect().width ?? 280) + gap;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * delta, behavior: reduce ? "auto" : "smooth" });
  }, []);

  if (count < 2) {
    return (
      <div className="gallery-grid" data-count={count}>
        {children}
      </div>
    );
  }

  return (
    <div className="snap-rail">
      <div className="snap-rail-bar">
        <button
          type="button"
          className="snap-rail-nav"
          aria-label={`${label}: anterior`}
          onClick={() => move(-1)}
        >
          <Chevron dir="prev" />
        </button>
        <button
          type="button"
          className="snap-rail-nav"
          aria-label={`${label}: siguiente`}
          onClick={() => move(1)}
        >
          <Chevron dir="next" />
        </button>
      </div>
      <div
        ref={scroller}
        className="snap-rail-scroller"
        role="list"
        aria-label={label}
      >
        {Children.map(children, (child) => (
          <div className="snap-rail-item" role="listitem">
            {child}
          </div>
        ))}
      </div>
    </div>
  );
}
