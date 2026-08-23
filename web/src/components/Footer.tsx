import { brand } from "../data/brand";
import { Mark, type MarkName } from "./ui/Mark";

const links: { href: string; label: string; icon: MarkName; external?: boolean }[] =
  [
    { href: "#servicios", label: "Servicios", icon: "branding" },
    { href: "#oficio", label: "Oficio", icon: "cultura" },
    { href: "#galerias", label: "Fotografía", icon: "foto" },
    { href: "#videos", label: "Vídeos", icon: "video" },
    { href: "#nosotros", label: "Esencia", icon: "corporativo" },
    { href: "#beneficios", label: "Cómo empezamos", icon: "briefing" },
    { href: "#carta", label: "Carta", icon: "carta" },
    { href: "#presentacion", label: "Presentación", icon: "presentacion" },
    {
      href: brand.phones[0].href,
      label: "Contacto",
      icon: "whatsapp",
      external: true,
    },
  ];

const oficioLinks: { href: string; label: string; icon: MarkName; external?: boolean }[] =
  [
    { href: "#oficio", label: "Cultura e ingeniería", icon: "cultura" },
    { href: "#galerias", label: "Fotografía", icon: "foto" },
    { href: "#videos", label: "Vídeos", icon: "video" },
    {
      href: brand.carta.href,
      label: brand.carta.label,
      icon: "carta",
      external: true,
    },
  ];

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-inner footer-grid">
        <div>
          <p className="footer-brand">
            {brand.name}
            <span className="ml-2 font-sans text-[0.65rem] font-medium uppercase tracking-[0.22em] text-gold">
              Agencia
            </span>
          </p>
          <p className="footer-meta footer-line">
            <Mark name="pin" size={16} />
            <span>Agencia creativa. {brand.city}</span>
          </p>
          {brand.phones.map((phone) => (
            <p key={phone.href} className="footer-meta footer-line">
              <Mark
                name={phone.href.startsWith("tel:") ? "phone" : "whatsapp"}
                size={16}
              />
              <a href={phone.href}>{phone.label}</a>
            </p>
          ))}
          <p className="footer-meta footer-line">
            <Mark name="mail" size={16} />
            <a href={brand.email.href}>{brand.email.label}</a>
          </p>
          <p className="footer-meta footer-line">
            <Mark name="instagram" size={16} />
            <a href={brand.instagram.href} target="_blank" rel="noreferrer">
              @{brand.instagram.handle}
            </a>
          </p>
        </div>

        <nav className="footer-links" aria-label="Pie de página">
          <p className="footer-heading">
            <Mark name="presentacion" size={16} />
            Presentación
          </p>
          {links.map((item) => (
            <a
              key={item.label}
              href={item.href}
              {...(item.external
                ? { target: "_blank", rel: "noreferrer" }
                : {})}
            >
              <Mark name={item.icon} size={15} />
              {item.label}
            </a>
          ))}
        </nav>

        <div>
          <p className="footer-heading">
            <Mark name="oficio" size={16} />
            Oficio
          </p>
          <div className="footer-links">
            {oficioLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                {...(item.external
                  ? { target: "_blank", rel: "noreferrer" }
                  : {})}
              >
                <Mark name={item.icon} size={15} />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </div>
      <p className="footer-copy section-inner" style={{ marginTop: "3rem" }}>
        © {brand.year} Cherry Agencia. Todos los derechos reservados.
      </p>
    </footer>
  );
}
