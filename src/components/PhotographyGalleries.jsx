import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Camera, ExternalLink } from 'lucide-react'

const PIXIESET_BASE = 'https://raizelbolivar.pixieset.com'

const galleries = [
  { slug: 'familialeoncolmenares', title: 'Familia Leon Colmenares' },
  { slug: 'cumpleanoslicdore', title: 'Cumpleaños Lic. Dore' },
  { slug: 'cumpleanosdepaulina', title: 'Cumpleaños de Paulina' },
  { slug: 'quirofanocmqa', title: 'Quirófano CMQA' },
  { slug: 'jornadaaniversariadetraumatologiayortopedia', title: 'Jornada Aniversaria de Traumatología y Ortopedia' },
]

export default function PhotographyGalleries() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="galerias"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-section-cherry relative"
      aria-labelledby="galerias-heading"
      ref={ref}
    >
      <div className="relative max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="h-px w-12 bg-cherry-gold" aria-hidden="true" />
            <h2
              id="galerias-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900"
            >
              Servicio de fotografía
            </h2>
            <div className="h-px w-12 bg-cherry-gold" aria-hidden="true" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto tracking-wide">
            Nuestras galerías están alojadas en Pixieset con la marca de agua Cherry. Cada sesión se entrega con identidad y calidad profesional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center mb-12"
        >
          <a
            href={PIXIESET_BASE}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-cherry-gradient text-white font-semibold rounded-lg shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2 focus:ring-offset-white"
            style={{
              background: 'linear-gradient(135deg, #600018 0%, #800020 100%)',
            }}
          >
            <Camera className="h-5 w-5" aria-hidden="true" />
            Ver galerías
          </a>
          <p className="mt-3 text-sm text-gray-500">
            Se abre en una nueva pestaña · Raizelbolivar.pixieset.com
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {galleries.map((g, i) => (
            <a
              key={g.slug}
              href={`${PIXIESET_BASE}/${g.slug}/`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-cherry-red/10 shadow-soft hover:shadow-soft-lg hover:border-cherry-gold/40 transition-all duration-300 group"
            >
              <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cherry-gold/15 flex items-center justify-center text-cherry-gold group-hover:bg-cherry-gold/25 transition-colors">
                <Camera className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
              </div>
              <span className="font-serif font-semibold text-gray-900 text-sm sm:text-base flex-1 min-w-0 truncate">
                {g.title}
              </span>
              <ExternalLink className="h-4 w-4 flex-shrink-0 text-gray-400 group-hover:text-cherry-red transition-colors" aria-hidden="true" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
