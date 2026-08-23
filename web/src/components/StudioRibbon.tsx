import { useRef, type PointerEvent, type ReactNode } from "react";

type StudioRibbonProps = {
  children: ReactNode;
};

export function StudioRibbon({ children }: StudioRibbonProps) {
  const root = useRef<HTMLDivElement>(null);

  function onMove(event: PointerEvent<HTMLDivElement>) {
    const el = root.current;
    if (!el) return;
    const box = el.getBoundingClientRect();
    const x = (event.clientX - box.left) / box.width - 0.5;
    const y = (event.clientY - box.top) / box.height - 0.5;
    el.style.setProperty("--shift-x", `${(x * 14).toFixed(1)}px`);
    el.style.setProperty("--shift-y", `${(y * 8).toFixed(1)}px`);
  }

  function onLeave() {
    const el = root.current;
    if (!el) return;
    el.style.setProperty("--shift-x", "0px");
    el.style.setProperty("--shift-y", "0px");
  }

  return (
    <div
      ref={root}
      className="studio-ribbon"
      onPointerMove={onMove}
      onPointerLeave={onLeave}
    >
      {children}
    </div>
  );
}
