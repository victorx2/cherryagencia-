export type ShowreelClip = {
  id: string;
  src: string;
  poster: string;
};

export const showreel = {
  kicker: "Pantalla",
  title: "Presentación",
  listen: "Escuchar el vídeo",
  mute: "Silenciar",
  clips: [
    {
      id: "presentacion",
      src: "/videos/presentacion.mp4",
      poster: "/images/poster-presentacion.webp",
    },
    {
      id: "reciente",
      src: "/videos/reciente.mp4",
      poster: "/images/poster-reciente.webp",
    },
  ] satisfies ShowreelClip[],
} as const;
