import { useRef, useState } from 'react';

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleClick = () => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      videoRef.current?.play();
    } else {
      videoRef.current?.pause();
    }
  };

  return (
    <div style={{ marginBottom: '20px', border: '2px solid red' }}>
      <video
        style={{ width: '250px' }}
        ref={videoRef}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source src='https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4' />
        <track default kind='captions' srcLang='ko' src='' />
      </video>
      <button onClick={handleClick}>{isPlaying ? 'Pause' : 'Play'}</button>
    </div>
  );
}
