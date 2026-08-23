import { useEffect, useRef, useState } from "react";
import { videos, type StudioVideo } from "../data/videos";
import { Showreel } from "./Showreel";
import { Section } from "./ui/Section";

function VideoCard({
  item,
  active,
  onPlay,
}: {
  item: StudioVideo;
  active: boolean;
  onPlay: () => void;
}) {
  const node = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (!active) {
      node.current?.pause();
    }
  }, [active]);

  function start() {
    onPlay();
    void node.current?.play();
  }

  return (
    <figure className="video-card">
      <div className="video-frame">
        <video
          ref={node}
          src={item.src}
          poster={item.poster}
          preload="none"
          playsInline
          controls={active}
          onPlay={onPlay}
        >
          Tu navegador no reproduce este vídeo.
        </video>
        {active ? null : (
          <button
            type="button"
            className="video-play"
            onClick={start}
            aria-label={`Reproducir ${item.title}`}
          >
            Play
          </button>
        )}
      </div>
      <figcaption>
        <span>
          {item.kind} · vídeo
        </span>
        {item.title}
      </figcaption>
    </figure>
  );
}

export function Videos() {
  const [playingId, setPlayingId] = useState<string | null>(null);

  return (
    <Section id="videos" kicker={videos.kicker} title={videos.title} lead={videos.lead}>
      <div className="video-grid">
        {videos.items.map((item) => (
          <VideoCard
            key={item.id}
            item={item}
            active={playingId === item.id}
            onPlay={() => setPlayingId(item.id)}
          />
        ))}
      </div>
      <Showreel />
    </Section>
  );
}
