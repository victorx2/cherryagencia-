import { motion } from 'framer-motion'
import { MessageCircle, LayoutGrid } from 'lucide-react'

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

const WHATSAPP_NUMBER = '584243363648'
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden bg-cream-white"
      aria-labelledby="hero-heading"
    >
      {/* Gradiente y formas de fondo */}
      <div className="absolute inset-0 bg-cherry-gradient-soft" aria-hidden="true" />
      <div className="absolute top-1/4 right-0 w-[60%] max-w-xl h-[70%] bg-gradient-to-br from-cherry-red/10 to-cherry-gold/10 rounded-full blur-3xl -z-0" aria-hidden="true" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-cherry-red/5 rounded-full blur-2xl -z-0" aria-hidden="true" />

      {/* Formas orgánicas flotantes (derecha) */}
      <div className="absolute right-[5%] top-1/2 -translate-y-1/2 hidden lg:block w-72 h-72 -z-0" aria-hidden="true">
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, 3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-0 right-0 w-40 h-40 rounded-[40%_60%_70%_30%] bg-cherry-red/20"
        />
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -2, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 right-16 w-28 h-28 rounded-[60%_40%_30%_70%] bg-cherry-gold/15"
        />
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-24 w-20 h-20 rounded-full bg-cherry-red/10 border border-cherry-gold/20"
        />
      </div>

      <div className="relative max-w-6xl mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
        {/* Contenido izquierdo - estilo revista */}
        <div className="max-w-2xl lg:max-w-xl">
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="space-y-6 sm:space-y-8"
          >
            {/* Floating Badge */}
            <motion.div
              variants={item}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 backdrop-blur-md border border-cherry-gold/30 shadow-glass text-cherry-red font-serif text-sm font-medium"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-cherry-gold" aria-hidden="true" />
              Estrategia & Chispa
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-[1.15]"
            >
              Donde las ideas florecen y las marcas crecen.
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed tracking-wide"
            >
              Transformamos tu visión en una conexión emocional que perdura. Estrategia y Branding con sabor a innovación.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-cherry-gradient text-white font-semibold rounded-lg shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2"
              >
                <LayoutGrid className="h-5 w-5" aria-hidden="true" />
                Ver Servicios
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 border-2 border-cherry-red text-cherry-red font-semibold rounded-lg hover:bg-cherry-red hover:text-white transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Directo
              </a>
            </motion.div>
          </motion.div>
        </div>

        {/* Espacio derecho para formas en desktop (el contenido visual está en absolute) */}
        <div className="hidden lg:block w-80 flex-shrink-0" aria-hidden="true" />
      </div>
    </section>
  )
}
