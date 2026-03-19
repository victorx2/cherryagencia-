import { motion } from "framer-motion";
import { MapPin, Phone, Instagram } from "lucide-react";

const FOOTER_LINKS = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#galerias", label: "Galerías" },
  { href: "#auditoria", label: "Auditoría Gratis" },
];

const INSTAGRAM_URL = "https://www.instagram.com/cherryagencia";
const THREADS_URL = "https://www.threads.net/@cherryagencia";
const PHONE_1 = "0424-3363648";
const PHONE_1_LINK = "tel:+584243363648";
const PHONE_2 = "+58 412-8730210";
const PHONE_2_LINK = "tel:+584128730210";

export default function Footer() {
  return (
    <footer
      className="text-white py-16 px-4 sm:px-6 lg:px-8"
      style={{
        background: 'linear-gradient(135deg, #600018 0%, #800020 100%)',
      }}
      role="contentinfo"
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-4"
            >
              <img
                src="/logo-cherry.jpg"
                alt=""
                className="h-10 w-10 object-contain rounded-lg"
                width={40}
                height={40}
                aria-hidden="true"
              />
              <span className="font-serif text-xl font-semibold">Cherry</span>
            </motion.div>
            <p className="text-white/90 text-sm">
              Agencia Creativa. Maracay, Edo. Aragua, Venezuela.
            </p>
          </div>

          {/* Enlaces */}
          <nav aria-label="Enlaces del sitio" className="lg:col-span-1">
            <h3 className="font-serif font-semibold text-white mb-4">
              Enlaces
            </h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-white/90 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cherry-red rounded"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contacto */}
          <div className="lg:col-span-2">
            <h3 className="font-serif font-semibold text-white mb-4">
              Contacto
            </h3>
            <ul className="space-y-3 text-white/90">
              <li className="flex items-start gap-3">
                <MapPin
                  className="h-5 w-5 flex-shrink-0 mt-0.5"
                  aria-hidden="true"
                />
                <span>Maracay, Edo. Aragua, Venezuela</span>
              </li>
              <li>
                <a
                  href={PHONE_1_LINK}
                  className="flex items-center gap-3 hover:text-cherry-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cherry-red rounded"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {PHONE_1}
                </a>
              </li>
              <li>
                <a
                  href={PHONE_2_LINK}
                  className="flex items-center gap-3 hover:text-cherry-gold transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cherry-red rounded"
                >
                  <Phone className="h-5 w-5 flex-shrink-0" aria-hidden="true" />
                  {PHONE_2}
                </a>
              </li>
            </ul>
            <div className="mt-6 flex gap-4" aria-label="Redes sociales">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cherry-red"
                aria-label="Instagram de Cherry Agencia"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href={THREADS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-cherry-red text-sm font-medium"
                aria-label="Threads de Cherry Agencia"
              >
                Threads
              </a>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/20 text-center text-white/80 text-sm"
        >
          &copy; {new Date().getFullYear()} Cherry Agencia Creativa. Todos los
          derechos reservados.
        </motion.div>
      </div>
    </footer>
  );
}
