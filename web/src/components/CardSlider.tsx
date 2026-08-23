import { useMemo } from "react";
import type { DesignPiece } from "../data/portfolio";
import { MoveSet } from "./MoveSet";

type CardSliderProps = {
  pieces: readonly DesignPiece[];
};

function uniquePieces(pieces: readonly DesignPiece[]) {
  const seen = new Set<string>();
  return pieces.filter((piece) => {
    if (seen.has(piece.src)) return false;
    seen.add(piece.src);
    return true;
  });
}

export function CardSlider({ pieces }: CardSliderProps) {
  const items = useMemo(
    () =>
      uniquePieces(pieces).map((piece) => ({
        id: piece.src,
        src: piece.src,
        alt: piece.alt,
        title: piece.title,
      })),
    [pieces],
  );

  return <MoveSet label="Carrusel de piezas" items={items} />;
}
