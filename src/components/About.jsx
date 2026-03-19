import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Target, Users, TrendingUp } from 'lucide-react'

const values = [
  {
    icon: Heart,
    title: 'Autenticidad Dual',
    description: 'Creemos que la verdad es la herramienta de marketing más poderosa. Honramos la esencia de cada cliente con honestidad y transparencia.',
  },
  {
    icon: Target,
    title: 'Creatividad con Propósito',
    description: 'Cada diseño y cada palabra firmada por nuestra agencia tiene un objetivo claro: conectar de manera real con tu comunidad.',
  },
  {
    icon: Users,
    title: 'Empatía y Cercanía',
    description: 'Tratamos cada marca con el cuidado y la dedicación que nos define. Para nosotras, tu éxito es un compromiso personal.',
  },
  {
    icon: TrendingUp,
    title: 'Evolución Constante',
    description: 'En un entorno que cambia cada segundo, nos mantenemos a la vanguardia para que tu mensaje nunca pierda su relevancia ni su alma.',
  },
]

export default function About() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <section
      id="nosotros"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-section-cherry relative"
      aria-labelledby="nosotros-heading"
      ref={ref}
    >
      <div className="relative max-w-4xl mx-auto">
        <motion.h2
          id="nosotros-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900 text-center mb-6"
        >
          Nuestra Esencia
        </motion.h2>
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-center text-lg sm:text-xl text-cherry-red font-serif italic mb-12 max-w-2xl mx-auto tracking-wide"
        >
          &ldquo;En Cherry, de la mano de Raizel e Irma, convertimos tu visión en una conexión emocional que perdura.&rdquo;
        </motion.blockquote>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="prose prose-lg mx-auto text-gray-600 text-center space-y-4 tracking-wide"
        >
          <p>
            En el corazón de Cherry Agencia Creativa palpita la visión compartida de dos profesionales apasionadas: <strong className="text-gray-900">Raizel Bolivar</strong> e <strong className="text-gray-900">Irma Gabriela</strong>. Más que una agencia, somos un espacio donde la experiencia en marketing y la sensibilidad del branding se fusionan para dar vida a proyectos con propósito.
          </p>
          <p>
            Entendemos que el mundo digital no se trata solo de algoritmos, sino de historias. Bajo el liderazgo de Raizel e Irma, transformamos la presencia en redes sociales en una extensión auténtica de quién eres. Combinamos la <strong className="text-gray-900">estrategia analítica</strong> con la <strong className="text-gray-900">chispa creativa</strong> para que cada marca no solo destaque, sino que trascienda.
          </p>
        </motion.div>

        <div className="flex items-center justify-center gap-3 my-12" aria-hidden="true">
          <div className="h-px w-16 bg-cherry-gold" />
          <span className="text-cherry-gold font-serif text-sm">◆</span>
          <div className="h-px w-16 bg-cherry-gold" />
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-serif text-xl font-semibold text-gray-900 text-center mb-10"
        >
          Nuestros Valores Fundamentales
        </motion.p>
        <div className="grid sm:grid-cols-2 gap-6">
          {values.map((v, i) => {
            const Icon = v.icon
            return (
            <motion.article
              key={v.title}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.25 + i * 0.06 }}
              className="p-6 rounded-2xl bg-white/90 backdrop-blur-md border border-cherry-red/10 shadow-soft hover:shadow-soft-lg hover:border-cherry-gold/40 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-cherry-gold/15 flex items-center justify-center text-cherry-gold">
                  <Icon className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="font-serif font-semibold text-gray-900">{v.title}</h3>
                  <p className="mt-1 text-gray-600 text-sm leading-relaxed tracking-wide">{v.description}</p>
                </div>
              </div>
            </motion.article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
