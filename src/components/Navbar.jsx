import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#nosotros', label: 'Nosotros' },
  { href: '#beneficios', label: 'Beneficios' },
]

function CherryLogo() {
  return (
    <svg
      className="h-9 w-9 text-cherry-red"
      viewBox="0 0 40 40"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20 6c-2.5 5-7.5 10-12.5 12.5 2.5 5 7.5 7.5 12.5 7.5s10-2.5 12.5-7.5C27.5 16 22.5 11 20 6zm0 5c1.25 2.5 3.75 5 6.25 6.25-1.25 2.5-3.75 3.75-6.25 3.75s-5-1.25-6.25-3.75C16.25 16 18.75 13.5 20 11z" />
      <circle cx="20" cy="22" r="7.5" />
    </svg>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100/80 shadow-glass">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Navegación principal">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <a href="#" className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2 rounded" aria-label="Cherry Agencia Creativa - Inicio">
            <CherryLogo />
            <span className="font-serif text-xl font-semibold text-gray-900">Cherry</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-gray-600 hover:text-cherry-red font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2 rounded px-1"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#auditoria"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-cherry-gradient text-white font-semibold rounded-lg shadow-soft hover:shadow-soft-lg hover:scale-[1.02] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-cherry-red focus:ring-offset-2"
            >
              Auditoría Gratis
            </a>
          </div>

          <button
            type="button"
            className="md:hidden p-2 text-gray-600 hover:text-cherry-red focus:outline-none focus:ring-2 focus:ring-cherry-red rounded"
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
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-gray-100 bg-white/95 backdrop-blur-md"
            >
              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="block py-2 px-4 text-gray-600 hover:text-cherry-red hover:bg-gray-50 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="#auditoria"
                  className="block mx-4 mt-4 py-3 text-center bg-cherry-gradient text-white font-semibold rounded-lg"
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
  )
}
