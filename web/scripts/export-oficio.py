from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "web" / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)


def export(src: Path, dest_name: str, max_w: int = 1400) -> None:
    if not src.exists():
        raise FileNotFoundError(src)
    image = Image.open(src)
    image = image.convert("RGB")
    width, height = image.size
    if width > max_w:
        image = image.resize(
            (max_w, int(height * max_w / width)),
            Image.Resampling.LANCZOS,
        )
    dest = OUT / dest_name
    image.save(dest, "WEBP", quality=80, method=6)
    print(f"{dest_name} <- {src.name}")


jobs = [
    (ROOT / "fuente/disenos/bremen/bremen-05.jpeg", "work-bremen-5.webp"),
    (ROOT / "fuente/disenos/bremen/bremen-06.jpeg", "work-bremen-6.webp"),
    (ROOT / "fuente/disenos/bremen/bremen-07.jpeg", "work-bremen-7.webp"),
    (ROOT / "fuente/disenos/bremen/bremen-08.jpeg", "work-bremen-8.webp"),
    (ROOT / "fuente/disenos/cmqa/cmqa-01.jpeg", "work-cmqa-1.webp"),
    (ROOT / "fuente/disenos/cmqa/cmqa-02.jpeg", "work-cmqa-2.webp"),
    (ROOT / "fuente/disenos/cmqa/cmqa-03.jpeg", "work-cmqa-3.webp"),
    (ROOT / "fuente/disenos/cmqa/cmqa-04.jpeg", "work-cmqa-4.webp"),
    (ROOT / "fuente/disenos/rim-urbano/rim-urbano-01.jpeg", "work-rim-urbano.webp"),
    (ROOT / "fuente/disenos/rim-urbano/rim-urbano-02.jpeg", "work-rim-urbano-1.webp"),
    (ROOT / "fuente/disenos/rim-urbano/rim-urbano-03.jpeg", "work-rim-urbano-2.webp"),
    (ROOT / "fuente/disenos/rim-urbano/rim-urbano-04.jpeg", "work-rim-urbano-3.webp"),
    (ROOT / "fuente/fotos/nestyuri/nestyuri-06.jpeg", "work-nestyuri-6.webp"),
    (ROOT / "fuente/fotos/nestyuri/nestyuri-07.jpeg", "work-nestyuri-7.webp"),
    (ROOT / "fuente/fotos/raizel/quirofano-gimbal.jpeg", "raizel-1.webp"),
    (ROOT / "fuente/fotos/raizel/set-diastasis-01.jpeg", "raizel-2.webp"),
    (ROOT / "fuente/fotos/raizel/set-diastasis-02.jpeg", "raizel-3.webp"),
    (ROOT / "fuente/fotos/raizel/set-diastasis-03.jpeg", "raizel-4.webp"),
    (ROOT / "fuente/fotos/raizel/live-nasal-02.jpeg", "raizel-5.webp"),
    (ROOT / "fuente/fotos/raizel/live-nasal-03.jpeg", "raizel-6.webp"),
    (ROOT / "fuente/fotos/raizel/live-nasal-04.jpeg", "raizel-7.webp"),
    (ROOT / "fuente/fotos/raizel/live-nasal-05.jpeg", "raizel-8.webp"),
    (ROOT / "fuente/fotos/raizel/live-hormonales.jpeg", "raizel-9.webp"),
]

for src, dest in jobs:
    export(src, dest)
