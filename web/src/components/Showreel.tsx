import { useRef, useState } from "react";
import { showreel } from "../data/showreel";

export function Showreel() {
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
    <figure className="cinema" id="presentacion">
      <div className="cinema-bezel">
        <div className="cinema-screen">
          <video
            ref={video}
            poster={showreel.poster}
            autoPlay
            muted={!soundOn}
            loop
            playsInline
            preload="metadata"
          >
            <source src={showreel.src} type="video/mp4" />
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
      <figcaption>
        <span>{showreel.kicker}</span>
        {showreel.title}
      </figcaption>
    </figure>
  );
}
