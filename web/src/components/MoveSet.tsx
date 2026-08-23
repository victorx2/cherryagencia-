import { useRef } from "react";
import { gsap, useGSAP } from "../lib/motion";

export type MoveCard = {
  id: string;
  src?: string;
  alt?: string;
  kicker?: string;
  title: string;
  body?: string;
};

type MoveSetProps = {
  items: readonly MoveCard[];
  label: string;
};

function CardFace({ item }: { item: MoveCard }) {
  return (
    <>
      {item.src ? (
        <img src={item.src} alt={item.alt ?? ""} draggable={false} />
      ) : null}
      <div className="moveset-caption">
        {item.kicker ? (
          <span className="moveset-kicker">{item.kicker}</span>
        ) : null}
        <strong>{item.title}</strong>
        {item.body ? <p>{item.body}</p> : null}
      </div>
    </>
  );
}

function shortestDelta(from: number, toIndex: number, total: number) {
  const fromNorm = ((from % total) + total) % total;
  let delta = toIndex - fromNorm;
  if (delta > total / 2) delta -= total;
  if (delta < -total / 2) delta += total;
  return delta;
}

export function MoveSet({ items, label }: MoveSetProps) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const rootEl = root.current;
      if (!rootEl || items.length < 2) return;

      const stage = rootEl.querySelector<HTMLElement>(".moveset-stage");
      if (!stage) return;

      const cards = gsap.utils.toArray<HTMLElement>(".moveset-card", stage);
      const total = cards.length;
      if (total < 2) return;

      const wrap = gsap.utils.wrap(0, total);
      const state = { progress: 0, paused: false };
      let spacing = 280;
      let pointerId: number | null = null;
      let lastX = 0;
      let traveled = 0;

      const measure = () => {
        spacing = Math.max(cards[0].offsetWidth * 0.68, 200);
      };

      const relOf = (index: number) => {
        let offset = wrap(index - state.progress);
        if (offset > total / 2) offset -= total;
        return offset;
      };

      const render = () => {
        const t = gsap.ticker.time;
        cards.forEach((card, index) => {
          const rel = relOf(index);
          const depth = Math.abs(rel);
          gsap.set(card, {
            xPercent: -50,
            yPercent: -50,
            x: rel * spacing,
            y: Math.sin(t * 1.4 + index * 0.7) * 14,
            z: 90 - depth * 150,
            rotationY: gsap.utils.clamp(-48, 48, rel * -26),
            rotationZ: rel * -1.6,
            scale: Math.max(0.7, 1 - depth * 0.09),
            opacity: depth > 3.5 ? 0 : 1,
            zIndex: Math.round(50 - depth * 10),
            transformOrigin: "50% 50%",
            force3D: true,
          });
        });
      };

      measure();
      render();

      const onTick = () => {
        if (!state.paused) state.progress += 0.008;
        render();
      };
      gsap.ticker.add(onTick);

      const goTo = (next: number) => {
        gsap.killTweensOf(state);
        state.paused = true;
        gsap.to(state, {
          progress: next,
          duration: 0.7,
          ease: "power3.out",
          onUpdate: render,
          onComplete: () => {
            state.paused = false;
          },
        });
      };

      const step = (dir: number) => goTo(state.progress + dir);

      const onPointerDown = (event: PointerEvent) => {
        if ((event.target as HTMLElement).closest(".moveset-prev, .moveset-next")) {
          return;
        }
        pointerId = event.pointerId;
        lastX = event.clientX;
        traveled = 0;
        state.paused = true;
        gsap.killTweensOf(state);
        stage.setPointerCapture(event.pointerId);
      };

      const onPointerMove = (event: PointerEvent) => {
        if (pointerId !== event.pointerId) return;
        const dx = event.clientX - lastX;
        lastX = event.clientX;
        traveled += Math.abs(dx);
        state.progress -= dx / spacing;
        render();
      };

      const onPointerUp = (event: PointerEvent) => {
        if (pointerId !== event.pointerId) return;
        pointerId = null;
        if (traveled > 8) {
          state.paused = false;
          return;
        }
        const card = (event.target as HTMLElement).closest(".moveset-card");
        if (card) {
          const index = cards.indexOf(card as HTMLElement);
          if (index >= 0) {
            const delta = shortestDelta(state.progress, index, total);
            if (Math.abs(delta) >= 0.15) {
              goTo(state.progress + delta);
              return;
            }
          }
        }
        state.paused = false;
      };

      stage.addEventListener("pointerdown", onPointerDown);
      stage.addEventListener("pointermove", onPointerMove);
      stage.addEventListener("pointerup", onPointerUp);
      stage.addEventListener("pointercancel", onPointerUp);

      const prev = rootEl.querySelector(".moveset-prev");
      const next = rootEl.querySelector(".moveset-next");
      const onPrev = (event: Event) => {
        event.stopPropagation();
        step(-1);
      };
      const onNext = (event: Event) => {
        event.stopPropagation();
        step(1);
      };
      prev?.addEventListener("click", onPrev);
      next?.addEventListener("click", onNext);

      const onKey = (event: KeyboardEvent) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          step(-1);
        }
        if (event.key === "ArrowRight") {
          event.preventDefault();
          step(1);
        }
      };
      rootEl.addEventListener("keydown", onKey);

      const onResize = () => {
        measure();
        render();
      };
      window.addEventListener("resize", onResize);

      return () => {
        gsap.ticker.remove(onTick);
        gsap.killTweensOf(state);
        stage.removeEventListener("pointerdown", onPointerDown);
        stage.removeEventListener("pointermove", onPointerMove);
        stage.removeEventListener("pointerup", onPointerUp);
        stage.removeEventListener("pointercancel", onPointerUp);
        prev?.removeEventListener("click", onPrev);
        next?.removeEventListener("click", onNext);
        rootEl.removeEventListener("keydown", onKey);
        window.removeEventListener("resize", onResize);
      };
    },
    { scope: root, dependencies: [items] },
  );

  if (items.length === 1) {
    const item = items[0];
    return (
      <div className="moveset">
        <div className="gallery-card moveset-solo">
          <CardFace item={item} />
        </div>
      </div>
    );
  }

  return (
    <div ref={root} className="moveset" tabIndex={0} aria-label={label}>
      <div className="moveset-stage">
        {items.map((item) => (
          <figure key={item.id} className="moveset-card" data-id={item.id}>
            <CardFace item={item} />
          </figure>
        ))}
      </div>
      <div className="moveset-nav">
        <button type="button" className="moveset-prev">
          Anterior
        </button>
        <button type="button" className="moveset-next">
          Siguiente
        </button>
      </div>
    </div>
  );
}
