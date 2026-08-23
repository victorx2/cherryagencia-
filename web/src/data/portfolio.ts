export type StudioKind = "cultura" | "ingenieria" | "salud" | "set";

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

export const studioKinds: { id: StudioKind; label: string }[] = [
  { id: "cultura", label: "Cultura" },
  { id: "ingenieria", label: "Ingeniería" },
  { id: "salud", label: "Salud" },
  { id: "set", label: "En set" },
];

export const designLines: DesignLine[] = [
  {
    id: "nestyuri",
    title: "Nestyuri Briceño",
    kind: "salud",
    cover: "/images/work-nestyuri-1.webp",
    pieces: [
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
    ],
  },
  {
    id: "bisturi",
    title: "Entre Bisturí",
    kind: "salud",
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
  {
    id: "cmqa",
    title: "CMQA",
    kind: "salud",
    cover: "/images/work-pulso.webp",
    pieces: [
      {
        src: "/images/work-pulso.webp",
        alt: "Pulso Informativo del Centro Médico Quirúrgico Aragua",
        title: "Pulso Informativo",
      },
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
        src: "/images/work-nestyuri-6.webp",
        alt: "Stand del Centro Médico Quirúrgico Aragua",
        title: "Stand",
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
    id: "rim",
    title: "RIM",
    kind: "ingenieria",
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
    title: "Bremen",
    kind: "ingenieria",
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
    id: "simbolos",
    title: "Símbolos del estado",
    kind: "cultura",
    cover: "/images/work-guarico-patrios.webp",
    pieces: [
      {
        src: "/images/work-guarico-ubicacion.webp",
        alt: "Ubicación geográfica de Guárico, entre la cordillera y el llano",
        title: "Ubicación geográfica",
      },
      {
        src: "/images/work-guarico-himno.webp",
        alt: "Himno Honor al Grado y palma real",
        title: "Himno y palma",
      },
      {
        src: "/images/work-guarico-patrios.webp",
        alt: "Bandera y escudo del estado",
        title: "Símbolos patrios",
      },
      {
        src: "/images/work-guarico-gastronomia.webp",
        alt: "Mondongo, carato de maíz y queso de mano",
        title: "Gastronomía",
      },
      {
        src: "/images/work-guarico-poblacion.webp",
        alt: "Población de Guárico",
        title: "Población",
      },
      {
        src: "/images/work-guarico-origen.webp",
        alt: "Origen e historia del estado Guárico",
        title: "Origen e historia",
      },
      {
        src: "/images/work-guarico-naturaleza.webp",
        alt: "Flor de loto y turpial",
        title: "Naturaleza",
      },
      {
        src: "/images/work-guarico-esteros.webp",
        alt: "Esteros de Camagúan",
        title: "Esteros",
      },
      {
        src: "/images/work-guarico-turismo.webp",
        alt: "Turismo y gastronomía: Morros, termales y embalse",
        title: "Turismo",
      },
      {
        src: "/images/work-guarico-musica.webp",
        alt: "Traje típico y música llanera",
        title: "Traje y música",
      },
    ],
  },
  {
    id: "monaco",
    title: "Circuit de Monaco",
    kind: "cultura",
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
    kind: "cultura",
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
    kind: "cultura",
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
    id: "raizel-set",
    title: "Raizel en set",
    kind: "set",
    cover: "/images/raizel-4.webp",
    pieces: [
      {
        src: "/images/raizel-4.webp",
        alt: "Producción con trípode, luces y pantalla",
        title: "Producción",
      },
      {
        src: "/images/raizel-1.webp",
        alt: "Raizel Bolivar cubriendo un quirófano con gimbal",
        title: "Quirófano",
      },
      {
        src: "/images/raizel-2.webp",
        alt: "Grabación educativa con pantalla y trípode",
        title: "Live",
      },
      {
        src: "/images/raizel-3.webp",
        alt: "Set con luces de estudio y entrevista",
        title: "Entrevista",
      },
      {
        src: "/images/raizel-5.webp",
        alt: "Raizel en set, pieza V",
        title: "Set V",
      },
      {
        src: "/images/raizel-6.webp",
        alt: "Raizel en set, pieza VI",
        title: "Set VI",
      },
      {
        src: "/images/raizel-8.webp",
        alt: "Raizel en set, pieza VIII",
        title: "Set VIII",
      },
      {
        src: "/images/raizel-9.webp",
        alt: "Raizel en set, pieza IX",
        title: "Set IX",
      },
      {
        src: "/images/work-nestyuri-3.webp",
        alt: "Raizel Bolivar trabajando con gimbal en un evento",
        title: "Gimbal en evento",
      },
    ],
  },
];

export const portfolio = {
  title: "Cultura, ingeniería, salud y set. Cada encargo en su sitio.",
} as const;

export const galleries = {
  kicker: "Fotografía",
  title: "Sesiones y cobertura. Cada álbum, sus fotos.",
  lead: "Retrato de evento, set y quirófano. Entras y ves la serie.",
  albums: [
    {
      id: "dore",
      title: "Cumpleaños Lic. Dore",
      kind: "Evento",
      cover: "/images/oficio-set.webp",
      pieces: [
        {
          src: "/images/oficio-set.webp",
          alt: "Producción en lounge durante el cumpleaños",
          title: "En lounge",
        },
        {
          src: "/images/oficio-crew.webp",
          alt: "Equipo filmando en el lounge",
          title: "El set",
        },
      ],
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
    {
      id: "quirofano",
      title: "Quirófano CMQA",
      kind: "Clínica",
      cover: "/images/raizel-1.webp",
      pieces: [
        {
          src: "/images/raizel-1.webp",
          alt: "Cobertura fotográfica en quirófano del Centro Médico Quirúrgico Aragua",
          title: "En quirófano",
        },
      ],
    },
  ],
} as const;
