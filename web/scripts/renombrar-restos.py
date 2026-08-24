from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
F = ROOT / "fuente"


def rename(src: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    if not src.exists():
        print("missing", src)
        return
    if dest.exists() and dest.resolve() != src.resolve():
        print("exists", dest)
        return
    src.rename(dest)
    print(f"{src.relative_to(ROOT)} -> {dest.relative_to(ROOT)}")


jobs = [
    (F / "disenos/lote-09/diseno-09-01.jpg", F / "disenos/cejas/cejas-01.jpg"),
    (F / "disenos/lote-11/diseno-11-01.jpg", F / "disenos/cmqa/jornada-cirugia.jpg"),
    (F / "disenos/lote-11/diseno-11-02.jpg", F / "disenos/cmqa/sorteo-scooter.jpg"),
    (F / "disenos/lote-11/diseno-11-03.jpg", F / "disenos/cmqa/jornada-bariatrica.jpg"),
    (F / "fotos/whatsapp/whatsapp-01.jpeg", F / "fotos/raizel/gimbal-negro.jpeg"),
    (F / "fotos/raizel/raizel-01.jpeg", F / "fotos/raizel/gimbal-blanco.jpeg"),
    (F / "fotos/raizel/raizel-02.jpeg", F / "fotos/raizel/live-nasal-01.jpeg"),
    (F / "fotos/raizel/raizel-03.jpeg", F / "fotos/raizel/quirofano-gimbal.jpeg"),
    (F / "fotos/raizel/raizel-04.jpeg", F / "fotos/raizel/set-diastasis-01.jpeg"),
    (F / "fotos/raizel/raizel-05.jpeg", F / "fotos/raizel/set-diastasis-02.jpeg"),
    (F / "fotos/raizel/raizel-06.jpeg", F / "fotos/raizel/set-diastasis-03.jpeg"),
    (F / "fotos/raizel/raizel-07.jpeg", F / "fotos/raizel/live-hormonales.jpeg"),
    (F / "fotos/raizel/raizel-08.jpeg", F / "fotos/eventos/stand-cmqa.jpeg"),
    (F / "fotos/raizel/raizel-09.jpeg", F / "fotos/raizel/selfie-scrubs.jpeg"),
    (F / "fotos/raizel/raizel-10.jpeg", F / "fotos/raizel/live-nasal-02.jpeg"),
    (F / "fotos/raizel/raizel-11.jpeg", F / "fotos/raizel/live-nasal-03.jpeg"),
    (F / "fotos/raizel/raizel-12.jpeg", F / "fotos/raizel/live-nasal-04.jpeg"),
    (F / "fotos/raizel/raizel-13.jpeg", F / "fotos/raizel/live-nasal-05.jpeg"),
    (F / "fotos/raizel/raizel-14.jpeg", F / "fotos/raizel/jornada-salon.jpeg"),
]

for src, dest in jobs:
    rename(src, dest)

for empty in (
    F / "disenos/lote-09",
    F / "disenos/lote-11",
    F / "fotos/whatsapp",
):
    if empty.exists() and not any(empty.iterdir()):
        empty.rmdir()
        print("rmdir", empty.relative_to(ROOT))
