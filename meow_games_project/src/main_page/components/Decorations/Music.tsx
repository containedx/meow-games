import React, { useRef, useState } from "react";
import sound_on_img from "../../assets/sound_on.webp";
import sound_off_img from "../../assets/sound_off.webp";
import './music.css';

const Music = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current
        .play()
        .then(() => setIsPlaying(true))
        .catch(err => console.warn("Play failed:", err));
    }
  };

  return (
    <div>
      <audio ref={audioRef} src={process.env.PUBLIC_URL + "/lofi_background.mp3"} loop />

      <img
        src={isPlaying ? sound_on_img : sound_off_img}
        alt={isPlaying ? "Mute music" : "Unmute music"}
        onClick={toggleMusic}
        className="music-button"
      />
    </div>
  );
};

export default Music;
