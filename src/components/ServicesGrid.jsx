import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Megaphone, Presentation, FileText, Share2, Palette, Sparkles, GraduationCap } from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const corporativo = [
  { icon: Share2, title: 'Gestión de Redes Sociales', description: 'Social Media con estrategia y contenido que conecta.' },
  { icon: Palette, title: 'Branding e Identidad Visual', description: 'Una identidad coherente que refleja tu esencia.' },
  { icon: Sparkles, title: 'Marketing Creativo', description: 'Campañas y piezas que destacan en el ruido digital.' },
]

const academicPlus = [
  { icon: Megaphone, title: 'Diseño de Flyers', description: 'Material visual que comunica con claridad y estilo.' },
  { icon: Presentation, title: 'Diapositivas de impacto', description: 'Presentaciones que captan la atención y transmiten tu mensaje.' },
  { icon: FileText, title: 'Formatos profesionales', description: 'Documentos y formatos listos para entregas y proyectos.' },
]

function ServiceCard({ icon: Icon, title, description, index, useGold }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  return (
    <motion.article
      ref={ref}
      variants={fadeIn}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-cherry-red/10 shadow-soft hover:shadow-soft-lg hover:border-cherry-gold/40 transition-all duration-300"
    >
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${useGold ? 'bg-cherry-gold/15 text-cherry-gold' : 'bg-cherry-red/10 text-cherry-red'}`}>
          <Icon className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
        </div>
        <div>
          <h3 className="font-serif text-lg font-semibold text-gray-900">{title}</h3>
          <p className="mt-1 text-gray-600 text-sm leading-relaxed tracking-wide">{description}</p>
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
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative"
      aria-labelledby="servicios-heading"
    >
      <div className="relative max-w-6xl mx-auto" ref={ref}>
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
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16 tracking-wide"
        >
          Soluciones para el ámbito universitario y corporativo.
        </motion.p>

        {/* Segmento Corporativo - Main focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-20"
        >
          <div className="flex items-center gap-3 mb-2">
            <div className="h-px flex-1 max-w-[60px] bg-cherry-gold" aria-hidden="true" />
            <h3 className="font-serif text-xl font-semibold text-cherry-red">Segmento Corporativo</h3>
          </div>
          <p className="text-gray-600 mb-6 tracking-wide">Estrategia y creatividad para marcas que quieren trascender.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {corporativo.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i} useGold={false} />
            ))}
          </div>
        </motion.div>

        {/* Academic Plus - Boutique */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative p-8 sm:p-10 rounded-3xl bg-white/90 backdrop-blur-md border border-cherry-red/10 shadow-soft-lg hover:border-cherry-gold/30 overflow-hidden transition-all duration-300"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cherry-gold/5 rounded-full blur-2xl -z-0" aria-hidden="true" />
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 rounded-xl bg-cherry-gold/15 flex items-center justify-center text-cherry-gold">
              <GraduationCap className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
            </div>
            <h3 className="font-serif text-xl font-semibold text-cherry-red">Academic Plus</h3>
          </div>
          <p className="text-gray-600 mb-6 tracking-wide font-medium">¿Estudias? Nosotros elevamos tu presentación.</p>
          <p className="text-gray-500 text-sm mb-8 tracking-wide">Piezas de diseño editorial para tu vida universitaria: flyers, diapositivas y formatos que marcan la diferencia.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {academicPlus.map((s, i) => (
              <ServiceCard key={s.title} {...s} index={i + 3} useGold={true} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
