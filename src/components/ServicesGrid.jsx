import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Megaphone, Presentation, FileText, Share2, Palette, Sparkles } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const universitario = [
  {
    icon: Megaphone,
    title: 'Diseño de Flyers',
    description: 'Material visual que comunica con claridad y estilo.',
  },
  {
    icon: Presentation,
    title: 'Diapositivas de impacto',
    description: 'Presentaciones que captan la atención y transmiten tu mensaje.',
  },
  {
    icon: FileText,
    title: 'Formatos profesionales',
    description: 'Documentos y formatos listos para entregas y proyectos.',
  },
]

const corporativo = [
  {
    icon: Share2,
    title: 'Gestión de Redes Sociales',
    description: 'Social Media con estrategia y contenido que conecta.',
  },
  {
    icon: Palette,
    title: 'Branding e Identidad Visual',
    description: 'Una identidad coherente que refleja tu esencia.',
  },
  {
    icon: Sparkles,
    title: 'Marketing Creativo',
    description: 'Campañas y piezas que destacan en el ruido digital.',
  },
]

function ServiceCard({ icon: Icon, title, description, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.article
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl border border-gray-200 bg-white hover:border-cherry-red/30 hover:shadow-lg hover:shadow-cherry-red/5 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cherry-red/10 flex items-center justify-center text-cherry-red">
          <Icon className="h-6 w-6" aria-hidden="true" />
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.article>
  )
}

export default function ServicesGrid() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="servicios"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gray-50"
      aria-labelledby="servicios-heading"
    >
      <div className="max-w-6xl mx-auto" ref={ref}>
        <motion.h2
          id="servicios-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-4"
        >
          Servicios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16"
        >
          Soluciones para el ámbito universitario y corporativo.
        </motion.p>

        {/* Universitario */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-16"
        >
          <h3 className="font-serif text-xl font-semibold text-cherry-red mb-2">Segmento Universitario</h3>
          <p className="text-gray-600 mb-6">¿El semestre te tiene a tope? Nosotros lo hacemos visual.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {universitario.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} />
            ))}
          </div>
        </motion.div>

        {/* Corporativo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="font-serif text-xl font-semibold text-cherry-red mb-2">Segmento Corporativo</h3>
          <p className="text-gray-600 mb-6">Estrategia y creatividad para marcas que quieren trascender.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporativo.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i + 3} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
