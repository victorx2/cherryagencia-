import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Film } from "lucide-react";
import { cherryVideos } from "../data/cherryVideos";

export default function VideoShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      id="videos"
      className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-white relative"
      aria-labelledby="videos-heading"
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
              id="videos-heading"
              className="font-serif text-3xl sm:text-4xl font-semibold text-gray-900"
            >
              Momentos en movimiento
            </h2>
            <div className="h-px w-12 bg-cherry-gold" aria-hidden="true" />
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto tracking-wide">
            Reels y clips detrás del trabajo de Cherry. Pulsa play; en móvil
            usan el reproductor nativo del sistema.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {cherryVideos.map((v, i) => (
            <motion.article
              key={v.src}
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: 0.05 * i }}
              className="rounded-2xl overflow-hidden border border-cherry-red/10 bg-white shadow-soft hover:shadow-soft-lg hover:border-cherry-gold/40 transition-all duration-300"
            >
              <div className="aspect-video bg-gray-950">
                <video
                  className="w-full h-full object-cover"
                  src={v.src}
                  controls
                  playsInline
                  preload={i < 3 ? "metadata" : "none"}
                  title={v.title}
                >
                  Tu navegador no reproduce vídeo HTML5.
                </video>
              </div>
              <div className="flex items-center gap-3 p-4 border-t border-cherry-red/5">
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cherry-gold/15 flex items-center justify-center text-cherry-gold">
                  <Film className="h-5 w-5" aria-hidden="true" strokeWidth={1.5} />
                </div>
                <h3 className="font-serif font-semibold text-gray-900 text-sm sm:text-base leading-snug">
                  {v.title}
                </h3>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
