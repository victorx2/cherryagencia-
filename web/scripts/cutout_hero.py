"""Recorte editorial de Raizel: fondo blanco a alfa, sin halo."""

from __future__ import annotations

from collections import deque
from pathlib import Path

import numpy as np
from PIL import Image, ImageFilter

ROOT = Path(r"c:\Users\pc\Desktop\Nueva carpeta")
SRC = ROOT / "fuente" / "fotos" / "raizel" / "gimbal-blanco.jpeg"
OUT_DIR = ROOT / "web" / "public" / "images"
WHITE = np.array([254.0, 254.0, 254.0])


def flood_mask(rgb: np.ndarray, max_dist: float) -> np.ndarray:
    h, w = rgb.shape[:2]
    dist = np.linalg.norm(rgb.astype(np.float32) - WHITE, axis=2)
    sat = rgb.max(axis=2).astype(np.int16) - rgb.min(axis=2).astype(np.int16)
    visitable = (dist < max_dist) & (sat < 32)
    bg = np.zeros((h, w), dtype=bool)
    q: deque[tuple[int, int]] = deque()

    def seed(y: int, x: int) -> None:
        if visitable[y, x] and not bg[y, x]:
            bg[y, x] = True
            q.append((y, x))

    for x in range(w):
        seed(0, x)
        seed(h - 1, x)
    for y in range(h):
        seed(y, 0)
        seed(y, w - 1)

    while q:
        y, x = q.popleft()
        for ny, nx in ((y - 1, x), (y + 1, x), (y, x - 1), (y, x + 1)):
            if 0 <= ny < h and 0 <= nx < w and visitable[ny, nx] and not bg[ny, nx]:
                bg[ny, nx] = True
                q.append((ny, nx))
    return bg


def eat_halo(bg: np.ndarray, radius: int = 2) -> np.ndarray:
    fg = Image.fromarray((~bg).astype(np.uint8) * 255, mode="L")
    for _ in range(radius):
        fg = fg.filter(ImageFilter.MinFilter(3))
    return np.array(fg) < 128


def feather_alpha(bg: np.ndarray) -> np.ndarray:
    fg = (~bg).astype(np.uint8) * 255
    mask = Image.fromarray(fg, mode="L")
    mask = mask.filter(ImageFilter.GaussianBlur(radius=1.15))
    alpha = np.array(mask).astype(np.float32)
    alpha = np.clip((alpha - 10) * (255.0 / 225.0), 0, 255)
    return alpha.astype(np.uint8)


def decontaminate(rgb: np.ndarray, alpha: np.ndarray) -> np.ndarray:
    a = alpha.astype(np.float32) / 255.0
    a3 = np.clip(a[..., None], 0.12, 1.0)
    cleaned = (rgb.astype(np.float32) - WHITE * (1.0 - a3)) / a3
    cleaned = np.clip(cleaned, 0, 255)
    mix = np.clip((a[..., None] - 0.4) / 0.6, 0, 1)
    out = rgb.astype(np.float32) * mix + cleaned * (1.0 - mix)
    out[a < 0.05] = 0
    return np.clip(out, 0, 255).astype(np.uint8)


def crop_to_subject(rgba: np.ndarray, pad: int = 12) -> np.ndarray:
    a = rgba[:, :, 3]
    ys, xs = np.where(a > 12)
    y0, y1 = max(0, int(ys.min()) - pad), min(rgba.shape[0], int(ys.max()) + pad + 1)
    x0, x1 = max(0, int(xs.min()) - pad), min(rgba.shape[1], int(xs.max()) + pad + 1)
    return rgba[y0:y1, x0:x1]


def main() -> None:
    rgb = np.array(Image.open(SRC).convert("RGB"))
    bg = flood_mask(rgb, max_dist=44)
    bg = eat_halo(bg, radius=3)
    alpha = feather_alpha(bg)
    color = decontaminate(rgb, alpha)
    rgba = np.dstack([color, alpha])
    rgba = crop_to_subject(rgba)

    out = Image.fromarray(rgba, mode="RGBA")
    OUT_DIR.mkdir(parents=True, exist_ok=True)
    png_path = OUT_DIR / "hero-raizel.png"
    webp_path = OUT_DIR / "hero-raizel.webp"
    out.save(png_path, optimize=True)
    out.save(webp_path, "WEBP", quality=88, method=6)
    print("wrote", png_path, out.size)
    print("opaque px", int((rgba[:, :, 3] > 12).sum()))


if __name__ == "__main__":
    main()
