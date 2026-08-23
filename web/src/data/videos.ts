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
      poster: "/images/raizel-1.webp",
    },
    {
      id: "lounge",
      title: "En lounge",
      kind: "En set",
      src: "/videos/raizel-video-2.mp4",
      poster: "/images/oficio-set.webp",
    },
    {
      id: "pulso",
      title: "Pulso Informativo",
      kind: "Salud",
      src: "/videos/pulso-informativo.mp4",
      poster: "/images/work-pulso.webp",
    },
    {
      id: "produccion",
      title: "Producción",
      kind: "En set",
      src: "/videos/raizel-video-4.mp4",
      poster: "/images/video-raizel-4.jpg",
    },
  ] satisfies StudioVideo[],
} as const;
