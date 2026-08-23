import { useState } from "react";
import { galleries } from "../data/portfolio";
import { CardSlider } from "./CardSlider";
import { StudioDialog } from "./StudioDialog";
import { IdleFace } from "./ui/IdleFace";
import { Section } from "./ui/Section";

function pieceLabel(count: number) {
  return count === 1 ? "1 foto" : `${count} fotos`;
}

export function Galleries() {
  const [openId, setOpenId] = useState<string | null>(null);
  const album = galleries.albums.find((item) => item.id === openId) ?? null;

  return (
    <Section
      id="galerias"
      kicker={galleries.kicker}
      title={galleries.title}
      lead={galleries.lead}
    >
      <div className="gallery-grid" data-count={galleries.albums.length}>
        {galleries.albums.map((item, index) => (
          <button
            key={item.id}
            type="button"
            className="gallery-card line-cover"
            aria-haspopup="dialog"
            aria-expanded={openId === item.id}
            onClick={() => setOpenId(item.id)}
          >
            <IdleFace beat={index}>
              <span className="gallery-shot">
                <img src={item.cover} alt="" />
              </span>
              <p>
                <span className="block text-[0.7rem] uppercase tracking-[0.18em] text-gold">
                  {item.kind} · {pieceLabel(item.pieces.length)}
                </span>
                {item.title}
              </p>
            </IdleFace>
          </button>
        ))}
      </div>

      {album ? (
        <StudioDialog
          kicker={album.kind}
          title={album.title}
          onClose={() => setOpenId(null)}
        >
          <CardSlider pieces={album.pieces} />
        </StudioDialog>
      ) : null}
    </Section>
  );
}
