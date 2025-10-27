import React, { createContext, useContext, useEffect, useRef, useState } from "react";

// The MP3 is served from the public folder so it can be requested at runtime.
// Place the file in public/audio/ (e.g. public/audio/japanese-nostalgia-flute-and-stringed-instruments-166930.mp3)
const AUDIO_SRC = "/audio/japanese-nostalgia-flute-and-stringed-instruments-166930.mp3";

type AudioContextValue = {
  muted: boolean;
  toggle: () => void;
};

const AudioContext = createContext<AudioContextValue | undefined>(undefined);

export const useAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error("useAudio must be used within BackgroundAudio provider");
  return ctx;
};

const BackgroundAudio: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [muted, setMuted] = useState<boolean>(() => {
    try {
      const v = localStorage.getItem("site-audio-muted");
      return v === null ? true : v === "true"; // default muted to true (autoplay allowed)
    } catch (e) {
      return true;
    }
  });

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.loop = true;
    // set a comfortable default volume
    try {
      audio.volume = 0.65;
    } catch (e) {
      // ignore
    }
    audio.muted = muted;
    // try to play; browsers allow autoplay if muted
    audio.play().catch(() => {
      // ignore play errors (user gesture required in some browsers)
    });
  }, [muted]);

  const toggle = () => {
    const audio = audioRef.current;
    const next = !muted;
    setMuted(next);
    try {
      localStorage.setItem("site-audio-muted", String(next));
    } catch (e) {
      /* ignore */
    }
    if (audio) {
      audio.muted = next;
      if (!next) {
        // unmuting - try to play
        audio.play().catch(() => {});
      }
    }
  };

  return (
    <AudioContext.Provider value={{ muted, toggle }}>
      <audio
        ref={audioRef}
        src={AUDIO_SRC}
        preload="auto"
        playsInline
        loop
        autoPlay
        muted={muted}
      />
      {children}
    </AudioContext.Provider>
  );
};

export default BackgroundAudio;
