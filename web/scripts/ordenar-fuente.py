from __future__ import annotations

import shutil
import unicodedata
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
FUENTE = ROOT / "fuente"

KEEP_DIR = {".cursor", ".git", ".vercel", "docs", "web", "fuente"}
KEEP_FILE = {".gitignore", "AGENTS.md", "DESIGN.md", "vercel.json"}

FOLDER_DEST = {
    "Diapositivo": ("diapositivas/obesidad", "obesidad"),
    "Diapositivo I": ("diapositivas/abundancia", "abundancia"),
    "Diapositivo II": ("diapositivas/dinamica-tiempo", "tiempo"),
    "Diapositivo IV": ("diapositivas/cierre-impresion", "cierre"),
    "Diapositivo V": ("diapositivas/cmqa-compartir", "compartir"),
    "Diapositivo VI": ("diapositivas/tips-rinones", "rinones"),
    "Diapositivo VII": ("diapositivas/cancer-mama", "mama"),
    "Diapositivo VIII": ("diapositivas/anzoategui", "anzoategui"),
    "Diseño": ("disenos/guia-estudio", "guia"),
    "Diseño II": ("disenos/curso-pestanas", "pestanas"),
    "Diseño V": ("disenos/sellos-mecanicos", "sellos"),
    "Diseño VI": ("disenos/dia-corazon", "corazon"),
    "Diseño VII": ("disenos/nestyuri-flyer", "nb-flyer"),
    "Diseño VIII": ("disenos/rapid-express", "rapid"),
    "Diseño IX": ("disenos/cejas", "cejas"),
    "Diseño X": ("disenos/rosas-eternas", "rosas"),
    "Diseño XI": ("disenos/cmqa", "cmqa"),
    "Diseños III": ("disenos/plato-saludable", "plato"),
    "Diseños IV": ("disenos/taller-rodamientos", "taller"),
    "Diseños XV": ("fotos/raizel", "raizel"),
}


def fold(text: str) -> str:
    nfkd = unicodedata.normalize("NFKD", text)
    return "".join(c for c in nfkd if not unicodedata.combining(c)).casefold()


def move_to(src: Path, dest_dir: Path, name: str) -> Path:
    dest_dir.mkdir(parents=True, exist_ok=True)
    dest = dest_dir / name
    if dest.exists() and dest.resolve() != src.resolve():
        stem, ext = dest.stem, dest.suffix
        n = 2
        while dest.exists():
            dest = dest_dir / f"{stem}-{n}{ext}"
            n += 1
    shutil.move(str(src), str(dest))
    print(f"{src.name} -> {dest.relative_to(ROOT)}")
    return dest


def number_move(files: list[Path], dest_rel: str, prefix: str) -> None:
    dest = FUENTE / dest_rel
    ordered = sorted(files, key=lambda p: fold(p.name))
    for index, src in enumerate(ordered, start=1):
        ext = src.suffix.lower() or ".jpg"
        move_to(src, dest, f"{prefix}-{index:02d}{ext}")


def classify_root(name: str) -> tuple[str, str] | None:
    n = fold(name)
    if name.lower().endswith(".pdf") and ("raizel" in n or "anggi" in n):
        return "carta", "carta-raizel.pdf"
    if n.endswith((".mp4", ".mov")) or "video" in n or "presentacion" in n:
        if "presentacion" in n:
            return "videos", "presentacion.mp4"
        if "video i" in n or "video 1" in n:
            return "videos", "raizel-01.mp4"
        if "video ii" in n:
            return "videos", "raizel-02.mp4"
        if "video iii" in n:
            return "videos", "raizel-03.mp4"
        if "raizel iv" in n:
            return "videos", "raizel-04.mp4"
        return "videos", name.lower().replace(" ", "-")
    if "nestyuri" in n or "netyuri" in n:
        return "fotos/nestyuri", ""
    if "bremen" in n:
        return "disenos/bremen", ""
    if "rim urbano" in n or n.startswith("rim "):
        return "disenos/rim-urbano", ""
    if "rodaindustria" in n:
        return "disenos/rodaindustria", ""
    if "monaco" in n:
        return "disenos/monaco", "monaco.jpg"
    if "alfred" in n:
        return "disenos/alfredo", "alfredo.jpg"
    if "isaias" in n:
        return "disenos/isaias", "isaias.jpg"
    if "bistur" in n:
        return "disenos/bisturi", ""
    if "ubv" in n or "ingenieria civil" in n:
        return "disenos/ubv-civil", ""
    if "cmqa" in n or "centro medico" in n or "quirurgico" in n:
        return "disenos/cmqa", ""
    if any(
        key in n
        for key in (
            "esteros",
            "flor de loto",
            "origen",
            "poblacion",
            "simbolo",
            "ubicacion",
            "deportes",
            "turismo",
            "tipico",
        )
    ):
        return "disenos/guarico", ""
    if "whatsapp" in n:
        return "fotos/whatsapp", ""
    if "raizel" in n or n.startswith("raize") or "img_0822" in n:
        return "fotos/raizel", ""
    return None


def buckets_root() -> dict[str, list[Path]]:
    groups: dict[str, list[Path]] = {}
    for item in ROOT.iterdir():
        if not item.is_file() or item.name in KEEP_FILE:
            continue
        hit = classify_root(item.name)
        if not hit:
            print("skip file", item.name)
            continue
        rel, fixed = hit
        if fixed:
            move_to(item, FUENTE / rel, fixed)
        else:
            groups.setdefault(rel, []).append(item)
    return groups


def prefix_for(rel: str) -> str:
    return rel.rsplit("/", 1)[-1]


def main() -> None:
    FUENTE.mkdir(exist_ok=True)

    for folder in list(ROOT.iterdir()):
        if not folder.is_dir() or folder.name in KEEP_DIR:
            continue
        mapped = FOLDER_DEST.get(folder.name)
        if not mapped:
            print("skip dir", folder.name)
            continue
        dest_rel, prefix = mapped
        files = [p for p in folder.iterdir() if p.is_file()]
        number_move(files, dest_rel, prefix)
        if not any(folder.iterdir()):
            folder.rmdir()

    groups = buckets_root()
    for rel, files in groups.items():
        number_move(files, rel, prefix_for(rel))


if __name__ == "__main__":
    main()
