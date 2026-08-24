export type StudioVideo = {
  id: string;
  title: string;
  kind: string;
  src: string;
  poster: string;
};

export const videos = {
  kicker: "Vídeos",
  title: "El oficio en movimiento. Das play y ves la pieza.",
  lead: "Set, cobertura y series. Sin autoplay: tú entras.",
  items: [
    {
      id: "quirófano",
      title: "Quirófano",
      kind: "En set",
      src: "/videos/raizel-video-1.mp4",
      poster: "/images/poster-quirofano.webp",
    },
    {
      id: "lounge",
      title: "En lounge",
      kind: "En set",
      src: "/videos/raizel-video-2.mp4",
      poster: "/images/poster-lounge.webp",
    },
    {
      id: "pulso",
      title: "Pulso Informativo",
      kind: "Salud",
      src: "/videos/pulso-informativo.mp4",
      poster: "/images/poster-pulso.webp",
    },
    {
      id: "produccion",
      title: "Producción",
      kind: "En set",
      src: "/videos/raizel-video-4.mp4",
      poster: "/images/poster-produccion.webp",
    },
  ] satisfies StudioVideo[],
  recent: [
    {
      id: "chumaceras",
      title: "Chumaceras",
      kind: "En set",
      src: "/videos/chumaceras.mp4",
      poster: "/images/poster-chumaceras.webp",
    },
    {
      id: "bremen-video",
      title: "Bremen",
      kind: "En set",
      src: "/videos/bremen.mp4",
      poster: "/images/poster-bremen.webp",
    },
    {
      id: "cmqa-fachada",
      title: "Centro médico",
      kind: "Salud",
      src: "/videos/cmqa-fachada.mp4",
      poster: "/images/poster-cmqa-fachada.webp",
    },
    {
      id: "extintor",
      title: "Extintor",
      kind: "En set",
      src: "/videos/extintor.mp4",
      poster: "/images/poster-extintor.webp",
    },
  ] satisfies StudioVideo[],
} as const;
