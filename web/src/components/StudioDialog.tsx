import { useEffect, useId, useRef, type PointerEvent } from "react";
import { gsap, useGSAP } from "../lib/motion";

const KEEP_OPEN = [
  ".moveset-card",
  ".moveset-prev",
  ".moveset-next",
  ".line-dialog-close",
  ".moveset-solo",
  ".gallery-card",
].join(", ");

type StudioDialogProps = {
  title: string;
  kicker?: string;
  onClose: () => void;
  children: React.ReactNode;
};

export function StudioDialog({
  title,
  kicker,
  onClose,
  children,
}: StudioDialogProps) {
  const titleId = useId();
  const closeRef = useRef<HTMLButtonElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const pointer = useRef<{ x: number; y: number } | null>(null);

  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    const previousFocus = document.activeElement as HTMLElement | null;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
        return;
      }
      if (event.key !== "Tab") return;
      const panel = panelRef.current;
      if (!panel) return;
      const focusable = Array.from(
        panel.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute("disabled") && el.tabIndex !== -1);
      if (!focusable.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      previousFocus?.focus();
    };
  }, [onClose]);

  useGSAP(
    () => {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.35, ease: "power2.out" },
      );
    },
    { scope: overlayRef },
  );

  const onPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    pointer.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    const start = pointer.current;
    pointer.current = null;
    if (!start) return;
    if (Math.abs(event.clientX - start.x) > 8) return;
    if (Math.abs(event.clientY - start.y) > 8) return;
    const target = event.target as HTMLElement | null;
    if (target?.closest(KEEP_OPEN)) return;
    onClose();
  };

  return (
    <div
      ref={overlayRef}
      className="line-dialog"
      role="presentation"
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div
        ref={panelRef}
        className="line-dialog-panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
      >
        <header className="line-dialog-head">
          <div>
            {kicker ? <p className="section-kicker">{kicker}</p> : null}
            <h3 id={titleId}>{title}</h3>
          </div>
          <button
            ref={closeRef}
            type="button"
            className="line-dialog-close"
            onClick={onClose}
          >
            Cerrar
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}
