import { useRef, useState } from "react";
import { showreel, type ShowreelClip } from "../data/showreel";

function CinemaClip({ clip }: { clip: ShowreelClip }) {
  const video = useRef<HTMLVideoElement>(null);
  const [soundOn, setSoundOn] = useState(false);

  function toggleSound() {
    const next = !soundOn;
    setSoundOn(next);
    if (next) {
      void video.current?.play();
    }
  }

  return (
    <div className="cinema-item">
      <div className="cinema-bezel">
        <div className="cinema-screen">
          <video
            ref={video}
            poster={clip.poster}
            autoPlay
            muted={!soundOn}
            loop
            playsInline
            preload="metadata"
          >
            <source src={clip.src} type="video/mp4" />
          </video>
          <button
            type="button"
            className="showreel-audio"
            onClick={toggleSound}
            aria-pressed={soundOn}
          >
            {soundOn ? showreel.mute : showreel.listen}
          </button>
        </div>
      </div>
      <div className="cinema-lip" aria-hidden="true" />
    </div>
  );
}

export function Showreel() {
  return (
    <figure className="cinema" id="presentacion">
      <figcaption>
        <span>{showreel.kicker}</span>
        {showreel.title}
      </figcaption>
      <div className="cinema-stack">
        {showreel.clips.map((clip) => (
          <CinemaClip key={clip.id} clip={clip} />
        ))}
      </div>
    </figure>
  );
}
