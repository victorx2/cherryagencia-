import { motion } from 'framer-motion'
import { MessageCircle, GraduationCap } from 'lucide-react'

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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-white overflow-hidden"
      aria-labelledby="hero-heading"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(128,0,32,0.08),transparent)]" aria-hidden="true" />
      <div className="relative max-w-4xl mx-auto text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="space-y-6 sm:space-y-8"
        >
          <motion.h1
            id="hero-heading"
            variants={item}
            className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-gray-900 leading-tight"
          >
            Donde las ideas florecen y las marcas crecen.
          </motion.h1>
          <motion.p
            variants={item}
            className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
          >
            Transformamos tu visión en una conexión emocional que perdura. Estrategia y Branding con sabor a innovación.
          </motion.p>
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-cherry-red text-white font-semibold rounded-lg hover:bg-cherry-dark transition-colors focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2"
            >
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
              Ver Planes Académicos
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 border-2 border-cherry-red text-cherry-red font-semibold rounded-lg hover:bg-cherry-red hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              WhatsApp Directo
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
