import { useMemo, useState } from "react";
import {
  designLines,
  portfolio,
  studioKinds,
  type DesignLine,
  type StudioKind,
} from "../data/portfolio";
import { CardSlider } from "./CardSlider";
import { StudioDialog } from "./StudioDialog";
import { StudioRibbon } from "./StudioRibbon";
import { IdleFace } from "./ui/IdleFace";
import { Mark } from "./ui/Mark";
import { Section } from "./ui/Section";

function pieceLabel(count: number) {
  return count === 1 ? "1 pieza" : `${count} piezas`;
}

function kindLabel(kind: StudioKind) {
  return studioKinds.find((item) => item.id === kind)?.label ?? kind;
}

function LineCard({
  item,
  beat,
  onOpen,
  expanded,
}: {
  item: DesignLine;
  beat: number;
  onOpen: () => void;
  expanded: boolean;
}) {
  return (
    <button
      type="button"
      className="gallery-card line-cover"
      onClick={onOpen}
      aria-haspopup="dialog"
      aria-expanded={expanded}
    >
      <IdleFace beat={beat}>
        <span className="gallery-shot">
          <img src={item.cover} alt="" />
        </span>
        <p>
          <span className="line-kind">
            <Mark name={item.kind} size={14} />
            {kindLabel(item.kind)} · {pieceLabel(item.pieces.length)}
          </span>
          {item.title}
        </p>
      </IdleFace>
    </button>
  );
}

export function PortfolioBento() {
  const [openId, setOpenId] = useState<string | null>(null);
  const line = designLines.find((item) => item.id === openId) ?? null;

  const grouped = useMemo(
    () =>
      studioKinds
        .map((kind) => ({
          kind,
          items: designLines.filter((item) => item.kind === kind.id),
        }))
        .filter((group) => group.items.length),
    [],
  );

  return (
    <Section id="oficio" title={portfolio.title}>
      {grouped.map(({ kind, items }) => (
        <div key={kind.id} className="studio-group">
          <StudioRibbon>
            <h3 className="studio-group-title">
              <Mark name={kind.id} size={28} />
              {kind.label}
            </h3>
          </StudioRibbon>
          <div className="gallery-grid" data-count={items.length}>
            {items.map((item, index) => (
              <LineCard
                key={item.id}
                item={item}
                beat={index}
                expanded={openId === item.id}
                onOpen={() => setOpenId(item.id)}
              />
            ))}
          </div>
        </div>
      ))}

      {line ? (
        <StudioDialog
          kicker={kindLabel(line.kind)}
          title={line.title}
          onClose={() => setOpenId(null)}
        >
          <CardSlider pieces={line.pieces} />
        </StudioDialog>
      ) : null}
    </Section>
  );
}
