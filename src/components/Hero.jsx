import { motion } from "framer-motion";
import { MessageCircle, LayoutGrid } from "lucide-react";
import { featuredCherryVideo } from "../data/cherryVideos";

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const WHATSAPP_NUMBER = "584243363648";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden hero-grain"
      style={{
        background:
          "linear-gradient(105deg, #500014 0%, #450012 25%, #2d000c 50%, #1a0008 75%, #0a0a0a 100%)",
      }}
      aria-labelledby="hero-heading"
    >
      {/* Capa radial suave para profundidad */}
      <div
        className="absolute inset-0 pointer-events-none -z-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 80% at 20% 50%, rgba(80,0,20,0.4) 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      {/* Blob orgánico grande (derecha) — tono vinotinto suave y desenfocado */}
      <div
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[min(75vw,42rem)] h-[min(75vw,42rem)] rounded-[45%_55%_60%_40%] bg-[#8b2942]/35 blur-[80px] -z-0 hidden sm:block"
        aria-hidden="true"
      />

      {/* Círculo con trazo blanco fino, sin relleno — contraste geométrico */}
      <div
        className="absolute right-[15%] top-1/2 -translate-y-1/2 w-72 h-72 rounded-full border border-white/25 bg-transparent -z-0 hidden lg:block"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto w-full flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12">
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
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-cherry-gold font-serif text-sm font-medium"
            >
              <span
                className="w-1.5 h-1.5 rounded-full bg-cherry-gold"
                aria-hidden="true"
              />
              Estrategia & Chispa
            </motion.div>

            <motion.h1
              id="hero-heading"
              variants={item}
              className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-[1.15]"
            >
              Donde las ideas florecen y las marcas crecen.
            </motion.h1>
            <motion.p
              variants={item}
              className="text-lg sm:text-xl text-white/85 leading-relaxed tracking-wide"
            >
              Transformamos tu visión en una conexión emocional que perdura.
              Estrategia y Branding con sabor a innovación.
            </motion.p>
            <motion.div
              variants={item}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#servicios"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-cherry-gold hover:text-gray-900 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <LayoutGrid className="h-5 w-5" aria-hidden="true" />
                Ver Servicios
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3.5 border-2 border-white/80 text-white font-semibold rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              >
                <MessageCircle className="h-5 w-5" aria-hidden="true" />
                WhatsApp Directo
              </a>
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full max-w-lg mx-auto lg:mx-0 lg:max-w-md xl:max-w-lg flex-shrink-0">
          <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/25 shadow-2xl bg-black/40 ring-1 ring-white/10">
            <video
              className="absolute inset-0 w-full h-full object-cover"
              src={featuredCherryVideo.src}
              controls
              playsInline
              preload="metadata"
              title={featuredCherryVideo.title}
            >
              Tu navegador no reproduce vídeo HTML5.
            </video>
          </div>
          <p className="mt-3 text-center lg:text-left text-xs text-white/60 tracking-wide">
            {featuredCherryVideo.title} · más abajo, todos los clips en{" "}
            <a
              href="#videos"
              className="text-cherry-gold hover:text-white underline-offset-2 hover:underline focus:outline-none focus:ring-2 focus:ring-cherry-gold rounded"
            >
              Videos
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
