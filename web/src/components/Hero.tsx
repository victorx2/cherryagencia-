import { brand } from "../data/brand";

const ticker = Array.from({ length: 4 }, () => brand.ticker).join("");

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="21"
      height="16"
      viewBox="0 0 21 16"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M19.916 8.99a1.25 1.25 0 0 0 0-1.768L13.552 1.212a1.25 1.25 0 0 0-1.768 1.768L17.795 8.283l-6.011 6.011a1.25 1.25 0 0 0 1.768 1.768l6.364-6.072ZM.791 8.283v1h18.418v-2H.791v1Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="hero-glow" aria-hidden="true" />

      <div className="hero-ticker" aria-hidden="true">
        <div className="hero-ticker-track">
          <span>{ticker}</span>
          <span>{ticker}</span>
        </div>
      </div>

      <div className="hero-figure">
        <picture>
          <source type="image/webp" srcSet="/images/hero-raizel-set.webp" />
          <img
            src="/images/hero-raizel-set.webp"
            alt="Raizel Bolivar trabajando con gimbal"
            width={983}
            height={1280}
            fetchPriority="high"
          />
        </picture>
      </div>

      <div className="hero-content">
        <div className="hero-bar">
          <div className="hero-copy">
            <h1 id="hero-heading" className="hero-title">
              {brand.headline.map((line, index) => (
                <span key={index}>
                  {line.map((part) =>
                    part.shine ? (
                      <em key={part.text} className="hero-emphasis">
                        {part.text}
                      </em>
                    ) : (
                      <span key={part.text}>{part.text}</span>
                    ),
                  )}
                </span>
              ))}
            </h1>
            <p className="hero-sub">{brand.subhead}</p>
          </div>

          <div className="hero-cta">
            <a
              href={brand.phones[0].href}
              className="hero-btn"
              target="_blank"
              rel="noreferrer"
            >
              <span>{brand.ctaPrimary}</span>
              <ArrowIcon />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
