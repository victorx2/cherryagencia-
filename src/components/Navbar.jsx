import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#galerias", label: "Galerías" },
];

function CherryLogo({ className = "h-10 w-10", ...props }) {
  return (
    <img
      src="/logo-cherry.jpg"
      alt=""
      className={`object-contain ${className}`}
      width={40}
      height={40}
      {...props}
    />
  );
}

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-md border-b border-white/5 shadow-lg">
      <nav
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Navegación principal"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a
            href="#"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cherry-gold focus:ring-offset-2 focus:ring-offset-gray-900 rounded"
            aria-label="Cherry Agencia Creativa - Inicio"
          >
            <CherryLogo className="h-10 w-10 rounded-lg" aria-hidden="true" />
            <span className="font-serif text-xl font-semibold text-white">
              Cherry
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-white/90 hover:text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cherry-gold focus:ring-offset-2 focus:ring-offset-gray-900 rounded px-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#auditoria"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-white text-gray-900 font-semibold rounded-lg hover:bg-cherry-gold hover:text-gray-900 transition-all duration-300 hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-cherry-gold focus:ring-offset-2 focus:ring-offset-gray-900"
            >
              Auditoría Gratis
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-white/90 hover:text-white focus:outline-none focus:ring-2 focus:ring-cherry-gold rounded"
            onClick={() => setOpen(!open)}
            aria-expanded={open}
            aria-controls="mobile-menu"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        <AnimatePresence>
          {open && (
            <motion.div
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-white/10 bg-gray-900/98 backdrop-blur-md"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2 px-4 text-white/90 hover:text-white hover:bg-white/5 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#auditoria"
                  className="block mx-4 mt-4 py-3 text-center bg-white text-gray-900 font-semibold rounded-lg hover:bg-cherry-gold"
                  onClick={() => setOpen(false)}
                >
                  Auditoría Gratis
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
