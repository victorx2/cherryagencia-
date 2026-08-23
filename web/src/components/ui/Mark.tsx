import type { ReactNode } from "react";

export type MarkName =
  | "todos"
  | "cultura"
  | "ingenieria"
  | "salud"
  | "set"
  | "corporativo"
  | "redes"
  | "branding"
  | "marketing"
  | "briefing"
  | "oficio"
  | "entrega"
  | "auditoria"
  | "fullbrand"
  | "referido"
  | "pin"
  | "phone"
  | "whatsapp"
  | "foto"
  | "video"
  | "carta"
  | "presentacion"
  | "mail"
  | "instagram";

const tones: Record<MarkName, string> = {
  todos: "var(--gold)",
  cultura: "var(--mark-cultura)",
  ingenieria: "var(--mark-ingenieria)",
  salud: "var(--mark-salud)",
  set: "var(--mark-set)",
  corporativo: "var(--gold)",
  redes: "var(--mark-rose)",
  branding: "var(--mark-cultura)",
  marketing: "var(--mark-ingenieria)",
  briefing: "var(--gold)",
  oficio: "var(--mark-cultura)",
  entrega: "var(--mark-salud)",
  auditoria: "var(--mark-ingenieria)",
  fullbrand: "var(--mark-cultura)",
  referido: "var(--mark-rose)",
  pin: "var(--gold)",
  phone: "var(--mark-cultura)",
  whatsapp: "var(--mark-salud)",
  foto: "var(--mark-set)",
  video: "var(--mark-rose)",
  carta: "var(--gold)",
  presentacion: "var(--mark-cultura)",
  mail: "var(--gold)",
  instagram: "var(--mark-rose)",
};

const strokes: Record<MarkName, ReactNode> = {
  todos: (
    <>
      <path d="M7.5 8.5h6v6h-6z" />
      <circle cx="22" cy="11.5" r="3.1" />
      <path d="M7.5 22.5 10.2 26l5.3-7" />
      <path d="M19.5 19.5h6v6h-6z" />
    </>
  ),
  cultura: (
    <>
      <path d="M8 25c2.8-9 13.2-9 16 0" />
      <path d="M10.2 23c2-6.2 9.6-6.2 11.6 0" />
      <path d="M16 7.5v17" />
      <path d="M10 8.5h12" />
      <path d="M7 11.5 10 9.4M25 11.5 22 9.4" />
      <circle cx="16" cy="16.5" r="1.15" fill="currentColor" stroke="none" />
    </>
  ),
  ingenieria: (
    <>
      <path d="M11 6.5 16 25.5 21 6.5" />
      <path d="M9 13.5h14" />
      <path d="M10.5 18h11" />
      <circle cx="16" cy="25.5" r="1.6" />
      <path d="M13 9.5h6" />
    </>
  ),
  salud: (
    <>
      <path d="M20.5 7.5 25 12l-10.2 10.2-4.4-4.4z" />
      <path d="M6 21h5.2l2-4.6 2.8 8.2L18.6 21H26" />
    </>
  ),
  set: (
    <>
      <circle cx="16" cy="12.8" r="7" />
      <circle cx="16" cy="12.8" r="3.2" />
      <path d="M16 19.8V27" />
      <path d="M12 27h8" />
      <path d="M21.2 8.4 24.4 6" />
      <path d="M14.6 12.8h2.8" />
    </>
  ),
  corporativo: (
    <>
      <rect x="7" y="8" width="18" height="16.5" rx="1.4" />
      <path d="M7 13.2h18" />
      <circle cx="16" cy="19.4" r="2.6" />
      <path d="M16 16.8v5.2" />
    </>
  ),
  redes: (
    <>
      <rect x="5.5" y="11" width="9.5" height="13" rx="1.6" />
      <rect x="11.2" y="8" width="9.5" height="13" rx="1.6" />
      <rect x="17" y="5" width="9.5" height="13" rx="1.6" />
      <path d="M8 26.5h16" />
    </>
  ),
  branding: (
    <>
      <rect x="7" y="7" width="18" height="18" rx="2" />
      <path d="M12 22V11.2h5.1a3.4 3.4 0 0 1 0 6.8H12" />
      <path d="M17.4 18.1 21 22" />
    </>
  ),
  marketing: (
    <>
      <rect x="9.5" y="8.5" width="13" height="16.5" rx="0.8" />
      <path d="M6 8.5h2.2M6 8.5v2.2M23.8 8.5H26M26 8.5v2.2M6 23.8v2.2H8.2M23.8 26H26v-2.2" />
      <path d="M12.4 13.4h7.2M12.4 17.2h5.4" />
    </>
  ),
  briefing: (
    <>
      <path d="M7 23.5v-8.2h6.4v8.2" />
      <path d="M18.6 23.5v-8.2H25v8.2" />
      <path d="M8.2 15.3 16 8.4l7.8 6.9" />
      <path d="M12.6 23.5h6.8" />
    </>
  ),
  oficio: (
    <>
      <path d="M16 5.8 19.4 13H12.6z" />
      <path d="M16 13v12.4" />
      <path d="M11.4 25.4h9.2" />
      <path d="M9.8 16.6h12.4" />
    </>
  ),
  entrega: (
    <>
      <rect x="6" y="11" width="20" height="13.2" rx="1.2" />
      <path d="M6 11 16 18.2 26 11" />
      <circle cx="16" cy="19.2" r="2.4" />
    </>
  ),
  auditoria: (
    <>
      <rect x="7" y="7" width="18" height="18" rx="1.2" />
      <path d="M7 16h18" />
      <rect x="10.2" y="10" width="4.4" height="3.6" />
      <rect x="17.4" y="10" width="4.4" height="3.6" />
      <rect x="10.2" y="18.4" width="4.4" height="3.6" />
    </>
  ),
  fullbrand: (
    <>
      <rect x="6.5" y="8" width="11.5" height="16.5" rx="1.6" />
      <rect x="10.8" y="6.4" width="11.5" height="16.5" rx="1.6" />
      <rect x="15.2" y="4.8" width="11.5" height="16.5" rx="1.6" />
      <path d="M18 10.6h5.4" />
    </>
  ),
  referido: (
    <>
      <circle cx="10.2" cy="13.2" r="4.1" />
      <circle cx="21.8" cy="18.6" r="4.1" />
      <path d="M13.6 15.4c2.6 3.8 5.2 1.2 5.8.4" />
      <path d="M10.2 17.4v6.8M8.4 24.2 10.2 22l1.8 2.2" />
    </>
  ),
  pin: (
    <>
      <path d="M16 5.8c4.1 0 7.1 3.1 7.1 6.9 0 6-7.1 13.5-7.1 13.5S8.9 18.7 8.9 12.7C8.9 8.9 11.9 5.8 16 5.8z" />
      <circle cx="16" cy="12.4" r="2.15" />
      <path d="M16 5.8v1.8" />
    </>
  ),
  phone: (
    <>
      <rect x="11" y="5.5" width="10" height="21" rx="2.2" />
      <path d="M14 8.2h4" />
      <path d="M14.4 23.8h3.2" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M8.2 8.4h11.2a3.8 3.8 0 0 1 3.8 3.8v5.2a3.8 3.8 0 0 1-3.8 3.8h-5.4L8 26.2v-4.8H8.2A3.6 3.6 0 0 1 4.6 17.8v-5.6a3.8 3.8 0 0 1 3.6-3.8z" />
      <path d="M10.6 13.6h7.4M10.6 17h5" />
    </>
  ),
  foto: (
    <>
      <rect x="5.5" y="11" width="8.4" height="10.4" rx="1.1" />
      <path d="M13.9 13.2 25.2 9.4v13.4L13.9 19z" />
      <circle cx="9.7" cy="16.2" r="2" />
    </>
  ),
  video: (
    <>
      <rect x="8" y="8" width="16" height="16" rx="1.2" />
      <path d="M8 12.2h16M8 19.8h16" />
      <circle cx="11" cy="10.1" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="21" cy="10.1" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="11" cy="21.9" r="0.7" fill="currentColor" stroke="none" />
      <circle cx="21" cy="21.9" r="0.7" fill="currentColor" stroke="none" />
    </>
  ),
  carta: (
    <>
      <rect x="6.5" y="8.5" width="19" height="15" rx="1.2" />
      <path d="M6.5 8.5 16 16.2 25.5 8.5" />
      <circle cx="16" cy="17.6" r="2.1" />
    </>
  ),
  presentacion: (
    <>
      <rect x="5.5" y="8.5" width="21" height="13.5" rx="1.4" />
      <path d="M12 26.2h8" />
      <path d="M16 22v4.2" />
      <path d="M13.2 13.4 19.6 16.2 13.2 19z" />
    </>
  ),
  mail: (
    <>
      <rect x="5.5" y="9" width="21" height="14" rx="1.4" />
      <path d="M5.5 11.2 16 18.2 26.5 11.2" />
    </>
  ),
  instagram: (
    <>
      <rect x="7" y="7" width="18" height="18" rx="5" />
      <circle cx="16" cy="16" r="4.2" />
      <circle cx="21.4" cy="10.6" r="1.1" fill="currentColor" stroke="none" />
    </>
  ),
};

export function Mark({
  name,
  size = 28,
  well = false,
}: {
  name: MarkName;
  size?: number;
  well?: boolean;
}) {
  const glyph = (
    <span
      className="mark"
      style={{ color: tones[name], width: size, height: size }}
    >
      <svg
        viewBox="0 0 32 32"
        width={size}
        height={size}
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        {strokes[name]}
      </svg>
    </span>
  );

  return well ? <span className="mark-well">{glyph}</span> : glyph;
}
