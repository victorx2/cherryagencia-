from pathlib import Path

import imageio.v2 as imageio
from PIL import Image

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / "web" / "public" / "images"

JOBS = [
    (ROOT / "web/public/videos/raizel-video-1.mp4", "poster-quirofano.webp", 2.0),
    (ROOT / "web/public/videos/raizel-video-2.mp4", "poster-lounge.webp", 2.0),
    (ROOT / "web/public/videos/pulso-informativo.mp4", "poster-pulso.webp", 2.0),
    (ROOT / "web/public/videos/raizel-video-4.mp4", "poster-produccion.webp", 2.0),
    (ROOT / "web/public/videos/presentacion.mp4", "poster-presentacion.webp", 3.0),
]


def grab(src: Path, dest_name: str, second: float) -> None:
    reader = imageio.get_reader(src)
    meta = reader.get_meta_data()
    fps = float(meta.get("fps") or 24)
    index = max(0, int(second * fps))
    try:
        frame = reader.get_data(index)
    except Exception:
        frame = reader.get_data(0)
    reader.close()
    image = Image.fromarray(frame).convert("RGB")
    width, height = image.size
    if width > 1400:
        image = image.resize(
            (1400, int(height * 1400 / width)),
            Image.Resampling.LANCZOS,
        )
    dest = OUT / dest_name
    image.save(dest, "WEBP", quality=80, method=6)
    print(f"{dest_name} <- {src.name} @{second}s")


if __name__ == "__main__":
    OUT.mkdir(parents=True, exist_ok=True)
    for src, dest, second in JOBS:
        if src.exists():
            grab(src, dest, second)
        else:
            print("missing", src)
