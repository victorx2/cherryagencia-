from pathlib import Path
import shutil

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
SRC = ROOT / "Diseños XV"
DEST = ROOT / "fuente" / "fotos" / "raizel"
OUT = ROOT / "web" / "public" / "images"

MOVES = [
    ("Raizel.jpeg", "cafe-lets-talk.jpeg"),
    ("Raizel II.jpeg", "quirofano-grabando.jpeg"),
    ("Raizel III.jpeg", "set-neumonologa.jpeg"),
    ("Raizel IV.jpeg", "equipo-selfie.jpeg"),
    ("Raizel V.jpeg", "selfie-taburete.jpeg"),
    ("Raizel VI.jpeg", "gimbal-espejo.jpeg"),
]

EXPORTS = [
    ("cafe-lets-talk.jpeg", "set-lets-talk.webp"),
    ("quirofano-grabando.jpeg", "set-quirofano-grabando.webp"),
    ("set-neumonologa.jpeg", "set-neumonologa.webp"),
    ("equipo-selfie.jpeg", "set-equipo.webp"),
    ("selfie-taburete.jpeg", "set-taburete.webp"),
    ("gimbal-espejo.jpeg", "set-gimbal-espejo.webp"),
]


def export_webp(src: Path, dest_name: str, max_w: int = 1400) -> None:
    image = Image.open(src).convert("RGB")
    width, height = image.size
    if width > max_w:
        image = image.resize(
            (max_w, int(height * max_w / width)),
            Image.Resampling.LANCZOS,
        )
    dest = OUT / dest_name
    image.save(dest, "WEBP", quality=80, method=6)
    print(f"{dest_name} <- {src.name}")


def main() -> None:
    DEST.mkdir(parents=True, exist_ok=True)
    OUT.mkdir(parents=True, exist_ok=True)

    for old, new in MOVES:
        src = SRC / old
        dest = DEST / new
        if not src.exists():
            print("missing", src)
            continue
        if dest.exists():
            print("exists", dest.name)
        else:
            shutil.move(str(src), str(dest))
            print(f"{old} -> {dest.relative_to(ROOT)}")

    if SRC.exists() and not any(SRC.iterdir()):
        SRC.rmdir()
        print("rmdir Diseños XV")

    for name, dest_name in EXPORTS:
        export_webp(DEST / name, dest_name)


if __name__ == "__main__":
    main()
