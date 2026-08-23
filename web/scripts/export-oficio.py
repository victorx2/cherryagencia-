from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "web" / "public" / "images"
OUT.mkdir(parents=True, exist_ok=True)


def export(src_name: str, dest_name: str, max_w: int = 1400) -> None:
    src = ROOT / src_name
    if not src.exists():
        raise FileNotFoundError(src_name)
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
    ("Diseño Bremen V.jpeg", "work-bremen-5.webp"),
    ("Diseño Bremen VI.jpeg", "work-bremen-6.webp"),
    ("Diseño Bremen VII.jpeg", "work-bremen-7.webp"),
    ("Diseño Bremen VIII.jpeg", "work-bremen-8.webp"),
    ("Diseño Bremen XI.jpeg", "work-bremen-11.webp"),
    ("Diseño Centro médico quirúrgico.jpeg", "work-cmqa-1.webp"),
    ("Diseño Centro médico quirúrgico II.jpeg", "work-cmqa-2.webp"),
    ("Diseño Centro médico quirúrgico III.jpeg", "work-cmqa-3.webp"),
    ("Diseño Centro médico quirúrgico IV.jpeg", "work-cmqa-4.webp"),
    ("RIM urbano.jpeg", "work-rim-urbano.webp"),
    ("RIM urbano I.jpeg", "work-rim-urbano-1.webp"),
    ("RIM urbano II.jpeg", "work-rim-urbano-2.webp"),
    ("RIM urbano III.jpeg", "work-rim-urbano-3.webp"),
    ("NP Nestyuri Briceño VI.jpeg", "work-nestyuri-6.webp"),
    ("NP Nestyuri Briceño VII.jpeg", "work-nestyuri-7.webp"),
    ("Raizel I.jpeg", "raizel-1.webp"),
    ("Raizel II.jpeg", "raizel-2.webp"),
    ("Raizel III.jpeg", "raizel-3.webp"),
    ("Raizel IV.jpeg", "raizel-4.webp"),
    ("Raizel V.jpeg", "raizel-5.webp"),
    ("Raizel VI.jpeg", "raizel-6.webp"),
    ("Raizel VII.jpeg", "raizel-7.webp"),
    ("Raizel VIII.jpeg", "raizel-8.webp"),
    ("Raizel IX.jpeg", "raizel-9.webp"),
]

for src_name, dest in jobs:
    export(src_name, dest)
