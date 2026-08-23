"""Recorte de alta calidad: fuente 5.38.23 + rembg, fallback flood blanco."""

from __future__ import annotations

from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(r"c:\Users\pc\Desktop\Nueva carpeta")
SRC_HIRES = ROOT / "WhatsApp Image 2026-08-17 at 5.38.23 PM.jpeg"
SRC_WHITE = ROOT / "IMG_0822.JPG.jpeg"
OUT_DIR = ROOT / "web" / "public" / "images"


def crop_to_subject(rgba: np.ndarray, pad: int = 16) -> np.ndarray:
    a = rgba[:, :, 3]
    ys, xs = np.where(a > 10)
    y0 = max(0, int(ys.min()) - pad)
    y1 = min(rgba.shape[0], int(ys.max()) + pad + 1)
    x0 = max(0, int(xs.min()) - pad)
    x1 = min(rgba.shape[1], int(xs.max()) + pad + 1)
    return rgba[y0:y1, x0:x1]


def sharpen(img: Image.Image) -> Image.Image:
    return img.filter(ImageFilter.UnsharpMask(radius=1.3, percent=125, threshold=2))


def save(out: Image.Image) -> None:
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    png_path = OUT_DIR / "hero-raizel.png"
    webp_path = OUT_DIR / "hero-raizel.webp"
    out.save(png_path, optimize=True)
    out.save(webp_path, "WEBP", lossless=True, quality=100, method=6)
    print("wrote", png_path, out.size, png_path.stat().st_size // 1024, "KB")
    print("wrote", webp_path, webp_path.stat().st_size // 1024, "KB")


def via_rembg(src: Path) -> Image.Image:
    from rembg import remove

    raw = Image.open(src).convert("RGBA")
    cut = remove(raw)
    rgba = np.array(cut)
    rgba = crop_to_subject(rgba, pad=12)
    img = Image.fromarray(rgba, mode="RGBA")
    rgb = sharpen(img.convert("RGB"))
    out = Image.merge("RGBA", (*rgb.split(), img.getchannel("A")))
    return out


def main() -> None:
    try:
        print("source:", SRC_HIRES.name, Image.open(SRC_HIRES).size)
        out = via_rembg(SRC_HIRES)
        print("cutout: rembg on 5.38.23")
        save(out)
        return
    except Exception as exc:
        print("rembg failed:", exc)

    from cutout_hero import decontaminate, eat_halo, feather_alpha, flood_mask

    rgb = np.array(Image.open(SRC_WHITE).convert("RGB"))
    bg = eat_halo(flood_mask(rgb, max_dist=44), radius=3)
    alpha = feather_alpha(bg)
    color = decontaminate(rgb, alpha)
    rgba = crop_to_subject(np.dstack([color, alpha]))
    img = Image.fromarray(rgba, mode="RGBA")
    rgb_s = sharpen(img.convert("RGB"))
    out = Image.merge("RGBA", (*rgb_s.split(), img.getchannel("A")))
    print("cutout: flood on IMG_0822")
    save(out)


if __name__ == "__main__":
    main()
