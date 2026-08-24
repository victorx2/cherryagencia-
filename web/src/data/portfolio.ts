export type StudioKind = "slides" | "diseno";

export type DesignPiece = {
  src: string;
  alt: string;
  title: string;
};

export type DesignLine = {
  id: string;
  title: string;
  kind: StudioKind;
  cover: string;
  pieces: DesignPiece[];
};

export type PhotoAlbum = {
  id: string;
  title: string;
  kind: string;
  cover: string;
  href?: string;
  pieces: DesignPiece[];
};

export const studioKinds: { id: StudioKind; label: string }[] = [
  { id: "slides", label: "Carruseles y diapositivas" },
  { id: "diseno", label: "Diseño" },
];

function lot(
  slug: string,
  count: number,
  label: string,
): DesignPiece[] {
  return Array.from({ length: count }, (_, index) => {
    const n = String(index + 1).padStart(2, "0");
    return {
      src: `/images/${slug}-${n}.webp`,
      alt: `${label}, pieza ${index + 1}`,
      title: `Pieza ${index + 1}`,
    };
  });
}

const nestyuriPieces: DesignPiece[] = [
  {
    src: "/images/work-nestyuri-1.webp",
    alt: "Septiembre, un mes para la esperanza",
    title: "Mes para la esperanza",
  },
  {
    src: "/images/work-nestyuri-2.webp",
    alt: "¿Por qué hablamos de esto?",
    title: "¿Por qué hablamos de esto?",
  },
  {
    src: "/images/work-nestyuri-4.webp",
    alt: "La prevención empieza con la información",
    title: "Prevención e información",
  },
  {
    src: "/images/work-nestyuri-5.webp",
    alt: "Campaña de prevención Nestyuri Briceño",
    title: "Campaña",
  },
  {
    src: "/images/work-nestyuri-7.webp",
    alt: "La prevención empieza contigo",
    title: "Empieza contigo",
  },
];

export const designLines: DesignLine[] = [
  {
    id: "carruseles",
    title: "Carruseles y diapositivas",
    kind: "slides",
    cover: "/images/work-nestyuri-1.webp",
    pieces: nestyuriPieces,
  },
  {
    id: "slides-tratamiento",
    title: "Obesidad · cómo se trata",
    kind: "slides",
    cover: "/images/slides-tratamiento-01.webp",
    pieces: lot("slides-tratamiento", 6, "Carrusel de obesidad"),
  },
  {
    id: "slides-abundancia",
    title: "Principios de abundancia",
    kind: "slides",
    cover: "/images/slides-abundancia-01.webp",
    pieces: lot("slides-abundancia", 9, "Principios de abundancia"),
  },
  {
    id: "slides-ii",
    title: "Dinámica del tiempo",
    kind: "slides",
    cover: "/images/slides-ii-01.webp",
    pieces: lot("slides-ii", 9, "Dinámica del tiempo"),
  },
  {
    id: "slides-iv",
    title: "Cierre e impresión",
    kind: "slides",
    cover: "/images/slides-iv-01.webp",
    pieces: lot("slides-iv", 10, "Cierre e impresión"),
  },
  {
    id: "slides-v",
    title: "CMQA · compartir",
    kind: "slides",
    cover: "/images/slides-v-01.webp",
    pieces: lot("slides-v", 6, "CMQA compartir"),
  },
  {
    id: "slides-vi",
    title: "Tips para los riñones",
    kind: "slides",
    cover: "/images/slides-vi-01.webp",
    pieces: lot("slides-vi", 5, "Tips para los riñones"),
  },
  {
    id: "slides-vii",
    title: "Cáncer de mama",
    kind: "slides",
    cover: "/images/slides-vii-01.webp",
    pieces: lot("slides-vii", 6, "Cáncer de mama"),
  },
  {
    id: "slides-viii",
    title: "Anzoátegui",
    kind: "slides",
    cover: "/images/slides-viii-01.webp",
    pieces: lot("slides-viii", 6, "Anzoátegui"),
  },
  {
    id: "diseno-guia",
    title: "Guía de estudio",
    kind: "diseno",
    cover: "/images/diseno-guia-01.webp",
    pieces: lot("diseno-guia", 5, "Guía de estudio"),
  },
  {
    id: "diseno-ii",
    title: "Curso de pestañas",
    kind: "diseno",
    cover: "/images/diseno-ii-01.webp",
    pieces: lot("diseno-ii", 1, "Curso de pestañas"),
  },
  {
    id: "diseno-iii",
    title: "Plato saludable",
    kind: "diseno",
    cover: "/images/diseno-iii-01.webp",
    pieces: lot("diseno-iii", 3, "Plato saludable"),
  },
  {
    id: "diseno-iv",
    title: "Taller de rodamientos",
    kind: "diseno",
    cover: "/images/diseno-iv-01.webp",
    pieces: lot("diseno-iv", 7, "Taller de rodamientos"),
  },
  {
    id: "diseno-v",
    title: "Sellos mecánicos",
    kind: "diseno",
    cover: "/images/diseno-v-01.webp",
    pieces: lot("diseno-v", 1, "Sellos mecánicos"),
  },
  {
    id: "diseno-vi",
    title: "Día del corazón",
    kind: "diseno",
    cover: "/images/diseno-vi-01.webp",
    pieces: lot("diseno-vi", 1, "Día del corazón"),
  },
  {
    id: "diseno-vii",
    title: "Flyer Nestyuri",
    kind: "diseno",
    cover: "/images/diseno-vii-01.webp",
    pieces: lot("diseno-vii", 2, "Flyer Nestyuri"),
  },
  {
    id: "diseno-viii",
    title: "Rapid Express",
    kind: "diseno",
    cover: "/images/diseno-viii-01.webp",
    pieces: lot("diseno-viii", 4, "Rapid Express"),
  },
  {
    id: "diseno-ix",
    title: "Micropigmentación de cejas",
    kind: "diseno",
    cover: "/images/diseno-ix-01.webp",
    pieces: lot("diseno-ix", 1, "Micropigmentación de cejas"),
  },
  {
    id: "diseno-x",
    title: "Rosas eternas",
    kind: "diseno",
    cover: "/images/diseno-x-01.webp",
    pieces: lot("diseno-x", 5, "Rosas eternas"),
  },
  {
    id: "diseno-xi",
    title: "CMQA · jornadas y sorteo",
    kind: "diseno",
    cover: "/images/diseno-xi-01.webp",
    pieces: lot("diseno-xi", 3, "CMQA jornadas y sorteo"),
  },
  {
    id: "monaco",
    title: "Circuit de Monaco",
    kind: "diseno",
    cover: "/images/work-monaco.webp",
    pieces: [
      {
        src: "/images/work-monaco.webp",
        alt: "Póster Circuit de Monaco",
        title: "Póster",
      },
    ],
  },
  {
    id: "alfredo",
    title: "Alfredo Alexander",
    kind: "diseno",
    cover: "/images/work-alfredo.webp",
    pieces: [
      {
        src: "/images/work-alfredo.webp",
        alt: "Diseño Alfredo Alexander",
        title: "Pieza",
      },
    ],
  },
  {
    id: "isaias",
    title: "Isaias Mateo",
    kind: "diseno",
    cover: "/images/work-isaias.webp",
    pieces: [
      {
        src: "/images/work-isaias.webp",
        alt: "Diseño Isaias Mateo",
        title: "Pieza",
      },
    ],
  },
  {
    id: "rim",
    title: "RiM urbano",
    kind: "diseno",
    cover: "/images/work-rim-urbano.webp",
    pieces: [
      {
        src: "/images/work-rim-urbano.webp",
        alt: "Póster Rodaindustria Maracay, del galpón al skatepark",
        title: "Del galpón al skatepark",
      },
      {
        src: "/images/work-rim-urbano-1.webp",
        alt: "Ilustración de suministros industriales RIM",
        title: "Suministros industriales",
      },
      {
        src: "/images/work-rim-urbano-2.webp",
        alt: "Marca RiM urbana con engranaje",
        title: "Marca urbana",
      },
      {
        src: "/images/work-rim-urbano-3.webp",
        alt: "El problema de la fricción, rueda y eje",
        title: "El problema de la fricción",
      },
      {
        src: "/images/work-rim-urbano-6.webp",
        alt: "Pieza RIM urbana VI",
        title: "Urbano VI",
      },
      {
        src: "/images/work-rim-urbano-7.webp",
        alt: "Pieza RIM urbana VII",
        title: "Urbano VII",
      },
      {
        src: "/images/work-rim-urbano-8.webp",
        alt: "Pieza RIM urbana VIII",
        title: "Urbano VIII",
      },
      {
        src: "/images/work-rim-urbano-10.webp",
        alt: "Pieza RIM urbana X",
        title: "Urbano X",
      },
      {
        src: "/images/work-rim-urbano-11.webp",
        alt: "Pieza RIM urbana XI",
        title: "Urbano XI",
      },
      {
        src: "/images/work-rim-urbano-12.webp",
        alt: "Pieza RIM urbana XII",
        title: "Urbano XII",
      },
      {
        src: "/images/work-rim-urbano-13.webp",
        alt: "Pieza RIM urbana XIII",
        title: "Urbano XIII",
      },
      {
        src: "/images/work-rodaindustria.webp",
        alt: "Pieza Rodaindustria Maracay",
        title: "En la industria o en la pista",
      },
      {
        src: "/images/work-rim.webp",
        alt: "Logo Rim",
        title: "Identidad",
      },
      {
        src: "/images/work-rim-industria-5.webp",
        alt: "Pieza Rodaindustria Maracay V",
        title: "Rodaindustria V",
      },
    ],
  },
  {
    id: "bremen",
    title: "Bremen · sellos",
    kind: "diseno",
    cover: "/images/work-bremen-1.webp",
    pieces: [
      {
        src: "/images/work-bremen-1.webp",
        alt: "Sellos mecánicos Bremen",
        title: "Sellos mecánicos",
      },
      {
        src: "/images/work-bremen-2.webp",
        alt: "Función esencial de los sellos",
        title: "Función esencial",
      },
      {
        src: "/images/work-bremen-3.webp",
        alt: "Tecnología alemana Bremen",
        title: "Ingeniería",
      },
      {
        src: "/images/work-bremen-4.webp",
        alt: "Catálogo de tipos de sellos",
        title: "Catálogo",
      },
      {
        src: "/images/work-bremen-5.webp",
        alt: "Pieza Bremen V",
        title: "Pieza V",
      },
      {
        src: "/images/work-bremen-6.webp",
        alt: "Pieza Bremen VI",
        title: "Pieza VI",
      },
      {
        src: "/images/work-bremen-7.webp",
        alt: "Pieza Bremen VII",
        title: "Pieza VII",
      },
      {
        src: "/images/work-bremen-8.webp",
        alt: "Pieza Bremen VIII",
        title: "Pieza VIII",
      },
      {
        src: "/images/work-bremen-11.webp",
        alt: "Pieza Bremen XI",
        title: "Pieza XI",
      },
    ],
  },
  {
    id: "cmqa",
    title: "CMQA",
    kind: "diseno",
    cover: "/images/work-cmqa-1.webp",
    pieces: [
      {
        src: "/images/work-cmqa-1.webp",
        alt: "Pieza Centro Médico Quirúrgico Aragua",
        title: "Centro médico",
      },
      {
        src: "/images/work-cmqa-2.webp",
        alt: "Pieza II Centro Médico Quirúrgico Aragua",
        title: "Centro médico II",
      },
      {
        src: "/images/work-cmqa-3.webp",
        alt: "Pieza III Centro Médico Quirúrgico Aragua",
        title: "Centro médico III",
      },
      {
        src: "/images/work-cmqa-4.webp",
        alt: "Pieza IV Centro Médico Quirúrgico Aragua",
        title: "Centro médico IV",
      },
      {
        src: "/images/work-pulso.webp",
        alt: "Pulso Informativo del Centro Médico Quirúrgico Aragua",
        title: "Pulso Informativo",
      },
      {
        src: "/images/work-instrumentista.webp",
        alt: "Homenaje al instrumentista quirúrgico",
        title: "Instrumentista",
      },
      {
        src: "/images/work-migrana.webp",
        alt: "Consejos para prevenir la migraña",
        title: "Migraña",
      },
      {
        src: "/images/work-cmqa-8.webp",
        alt: "Pieza VIII Centro Médico Quirúrgico Aragua",
        title: "Centro médico VIII",
      },
      {
        src: "/images/work-cmqa-11.webp",
        alt: "Pieza XI Centro Médico Quirúrgico Aragua",
        title: "Centro médico XI",
      },
    ],
  },
  {
    id: "bisturi",
    title: "Entre Bisturí",
    kind: "diseno",
    cover: "/images/work-bisturi.webp",
    pieces: [
      {
        src: "/images/work-bisturi.webp",
        alt: "Logo del podcast Entre Bisturí",
        title: "Identidad",
      },
      {
        src: "/images/work-bisturi-2.webp",
        alt: "Producción en quirófano",
        title: "En set",
      },
      {
        src: "/images/work-bisturi-3.webp",
        alt: "Grabación educativa Entre Bisturí",
        title: "Diálogo abierto",
      },
    ],
  },
];

export const portfolio = {
  kicker: "Oficio",
  title: "Diseños, carruseles y diapositivas.",
  lead: "Entras a la serie y recorres las piezas. Nada suelto en la portada.",
} as const;

export const workLinks = {
  kicker: "Portafolio",
  title: "El oficio, en su sitio.",
  lead: "La home no abre con portadas. Diseños, fotos y vídeos van cada uno en su enlace.",
  items: [
    {
      href: "#disenos",
      icon: "branding" as const,
      title: "Diseños",
      body: "Carruseles, diapositivas y piezas gráficas. Una serie, un clic.",
    },
    {
      href: "#galerias",
      icon: "foto" as const,
      title: "Fotografía",
      body: "Álbumes en Pixieset y cobertura de set, evento y quirófano.",
    },
    {
      href: "#videos",
      icon: "video" as const,
      title: "Vídeos",
      body: "Play cuando tú quieras. Portada acorde a cada pieza.",
    },
  ],
} as const;

export const galleries = {
  kicker: "Fotografía",
  title: "Sesiones y cobertura.",
  lead: "Primero ella en oficio. Los álbumes grandes viven en Pixieset.",
  albums: [
    {
      id: "raizel-set",
      title: "Raizel en set",
      kind: "Set",
      cover: "/images/set-portada.webp",
      pieces: [
        {
          src: "/images/set-portada.webp",
          alt: "Raizel Bolivar con gimbal, luz azul",
          title: "Portada",
        },
        {
          src: "/images/set-lets-talk.webp",
          alt: "Raizel Bolivar en café, foto suya",
          title: "Raizel",
        },
        {
          src: "/images/galeria-lounge.webp",
          alt: "Raizel en evento, lounge y cava",
          title: "Evento",
        },
        {
          src: "/images/set-quirofano-grabando.webp",
          alt: "Raizel grabando una cirugía con gimbal",
          title: "Quirófano",
        },
        {
          src: "/images/set-gimbal-espejo.webp",
          alt: "Raizel en scrubs con gimbal",
          title: "En set",
        },
        {
          src: "/images/set-neumonologa.webp",
          alt: "Raizel en set con bata, live de salud",
          title: "Live",
        },
        {
          src: "/images/set-taburete.webp",
          alt: "Raizel en scrubs, set clínico",
          title: "Set",
        },
        {
          src: "/images/set-equipo.webp",
          alt: "Raizel con el equipo en evento",
          title: "Equipo",
        },
        {
          src: "/images/oficio-crew.webp",
          alt: "Equipo filmando en el lounge",
          title: "El set",
        },
        {
          src: "/images/raizel-1.webp",
          alt: "Raizel Bolivar cubriendo un quirófano con gimbal",
          title: "Gimbal",
        },
        {
          src: "/images/raizel-4.webp",
          alt: "Raizel Bolivar en set de producción",
          title: "Producción",
        },
      ],
    },
    {
      id: "familia-leon",
      title: "Familia León Colmenares",
      kind: "Pixieset",
      cover: "/images/cover-familia-leon.webp",
      href: "https://raizelbolivar.pixieset.com/familialeoncolmenares/",
      pieces: [],
    },
    {
      id: "paulina",
      title: "Cumpleaños de Paulina",
      kind: "Sesión",
      cover: "/images/cover-paulina.webp",
      pieces: [
        {
          src: "/images/cover-paulina.webp",
          alt: "Paulina en su cumpleaños, princess y cupcake",
          title: "Paulina",
        },
      ],
    },
    {
      id: "jornada",
      title: "Jornada de traumatología y ortopedia",
      kind: "Pixieset",
      cover: "/images/cover-jornada.webp",
      href: "https://raizelbolivar.pixieset.com/jornadaaniversariadetraumatologiayortopedia/",
      pieces: [],
    },
    {
      id: "televen",
      title: "Entrevista Televén",
      kind: "Evento",
      cover: "/images/evento-televen.webp",
      pieces: [
        {
          src: "/images/evento-televen.webp",
          alt: "Entrevista con micrófono Televén",
          title: "Cobertura",
        },
      ],
    },
  ] satisfies PhotoAlbum[],
} as const;
