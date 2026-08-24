from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "web" / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)

LOTS = [
    ("fuente/diapositivas/obesidad", "slides-tratamiento"),
    ("fuente/diapositivas/abundancia", "slides-abundancia"),
    ("fuente/diapositivas/dinamica-tiempo", "slides-ii"),
    ("fuente/diapositivas/cierre-impresion", "slides-iv"),
    ("fuente/diapositivas/cmqa-compartir", "slides-v"),
    ("fuente/diapositivas/tips-rinones", "slides-vi"),
    ("fuente/diapositivas/cancer-mama", "slides-vii"),
    ("fuente/diapositivas/anzoategui", "slides-viii"),
    ("fuente/disenos/guia-estudio", "diseno-guia"),
    ("fuente/disenos/curso-pestanas", "diseno-ii"),
    ("fuente/disenos/cejas", "diseno-ix"),
    ("fuente/disenos/sellos-mecanicos", "diseno-v"),
    ("fuente/disenos/dia-corazon", "diseno-vi"),
    ("fuente/disenos/nestyuri-flyer", "diseno-vii"),
    ("fuente/disenos/rapid-express", "diseno-viii"),
    ("fuente/disenos/rosas-eternas", "diseno-x"),
    ("fuente/disenos/cmqa", "diseno-xi"),
    ("fuente/disenos/plato-saludable", "diseno-iii"),
    ("fuente/disenos/taller-rodamientos", "diseno-iv"),
]


def export_image(src: Path, dest: Path, max_w: int = 1400) -> None:
    image = Image.open(src)
    image = image.convert("RGB")
    width, height = image.size
    if width > max_w:
        image = image.resize(
            (max_w, int(height * max_w / width)),
            Image.Resampling.LANCZOS,
        )
    dest.parent.mkdir(parents=True, exist_ok=True)
    image.save(dest, "WEBP", quality=80, method=6)
    print(f"{dest.name} <- {src.name}")


for folder, slug in LOTS:
    src_dir = ROOT / folder
    if not src_dir.is_dir():
        print(f"missing {folder}")
        continue
    files = sorted(
        p
        for p in src_dir.iterdir()
        if p.suffix.lower() in {".jpg", ".jpeg", ".png", ".webp"}
    )
    for index, src in enumerate(files, start=1):
        export_image(src, OUT / f"{slug}-{index:02d}.webp")
