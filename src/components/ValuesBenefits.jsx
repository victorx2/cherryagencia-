import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Zap, Crosshair, RefreshCw, ClipboardCheck, Package, Gift } from 'lucide-react'

const valueCards = [
  {
    icon: Zap,
    title: 'Vitalidad',
    description: 'Energía y dinamismo en cada proyecto. Trabajamos con pasión para que tu marca brille.',
  },
  {
    icon: Crosshair,
    title: 'Precisión',
    description: 'Cada detalle cuenta. Estrategia y ejecución alineadas con tus objetivos.',
  },
  {
    icon: RefreshCw,
    title: 'Adaptabilidad',
    description: 'Nos adaptamos a tu sector, audiencia y momento. Tu mensaje, nuestro enfoque.',
  },
]

const benefits = [
  {
    icon: ClipboardCheck,
    title: 'Auditoría de cortesía',
    description: 'Un diagnóstico gratuito del estado actual de tus redes sociales antes de contratar cualquier plan.',
  },
  {
    icon: Package,
    title: 'Paquete Full Brand',
    description: 'Si contratas la identidad visual, el diseño de tus primeras 5 plantillas para Instagram va por nuestra cuenta.',
  },
  {
    icon: Gift,
    title: 'Referidos Premium',
    description: 'Obtén un 15% de crédito en tu próximo proyecto por cada cliente que contrate a la agencia por tu recomendación.',
  },
]

function ValueCard({ icon: Icon, title, description, index }) {
  const [hover, setHover] = useState(false)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="p-6 sm:p-8 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-soft hover:shadow-soft-lg hover:border-cherry-gold/30 transition-all duration-300"
    >
      <motion.div
        animate={{ scale: hover ? 1.05 : 1 }}
        className="w-14 h-14 rounded-xl bg-cherry-gold/15 flex items-center justify-center text-cherry-gold mb-4"
      >
        <Icon className="h-7 w-7" aria-hidden="true" />
      </motion.div>
      <h3 className="font-serif text-xl font-semibold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600 leading-relaxed tracking-wide">{description}</p>
    </motion.article>
  )
}

export default function ValuesBenefits() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="beneficios"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-cream-white relative"
      aria-labelledby="beneficios-heading"
      ref={ref}
    >
      <div className="absolute inset-0 bg-cherry-gradient-soft pointer-events-none" aria-hidden="true" />
      <div className="relative max-w-6xl mx-auto">
        <motion.h2
          id="beneficios-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-4"
        >
          Valores y Beneficios
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.08 }}
          className="text-center text-gray-600 max-w-2xl mx-auto mb-16 tracking-wide"
        >
          Lo que nos define y lo que te ofrecemos al trabajar con nosotras.
        </motion.p>

        <div className="mb-20">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-12 bg-cherry-gold" aria-hidden="true" />
            <h3 className="font-serif text-xl font-semibold text-cherry-red">Nuestros valores</h3>
            <div className="h-px w-12 bg-cherry-gold" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {valueCards.map((v, i) => (
              <ValueCard key={v.title} {...v} index={i} />
            ))}
          </div>
        </div>

        {/* Beneficios - Badges */}
        <div id="auditoria">
          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="h-px w-12 bg-cherry-gold" aria-hidden="true" />
            <h3 className="font-serif text-xl font-semibold text-cherry-red">Beneficios para ti</h3>
            <div className="h-px w-12 bg-cherry-gold" aria-hidden="true" />
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b, i) => {
              const BenefitIcon = b.icon
              return (
              <motion.article
                key={b.title}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                className="flex gap-4 p-6 rounded-2xl bg-white/80 backdrop-blur-md border border-white/60 shadow-soft"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cherry-gold/15 flex items-center justify-center text-cherry-gold">
                  <BenefitIcon className="h-6 w-6" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-gray-900">{b.title}</h4>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed">{b.description}</p>
                </div>
              </motion.article>
              )
            })}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="https://wa.me/584243363648"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-cherry-gradient text-white font-semibold rounded-lg shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2"
          >
            Solicitar Auditoría Gratis
          </a>
        </motion.div>
      </div>
    </section>
  )
}
