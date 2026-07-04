"use client";

import { useEffect, useRef, useState } from "react";

interface AudioGuideProps {
  /** Path to the audio file, e.g. /audio/exhibit1-en.mp3. Optional — the
   * bar still renders as a graceful placeholder if no file exists yet. */
  src?: string;
  label: string;
}

function formatTime(seconds: number) {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60);
  return `${m}:${s.toString().padStart(2, "0")}`;
}

export default function AudioGuide({ src, label }: AudioGuideProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0-1
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onLoaded = () => {
      setDuration(audio.duration || 0);
      setReady(true);
    };
    const onTime = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? audio.currentTime / audio.duration : 0);
    };
    const onEnded = () => setPlaying(false);

    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", onEnded);
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", onEnded);
    };
  }, [src]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
      setPlaying(false);
    } else {
      audio.play().catch(() => setPlaying(false));
      setPlaying(true);
    }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const value = Number(e.target.value);
    audio.currentTime = value * duration;
    setProgress(value);
  };

  return (
    <div className="flex items-center gap-3 rounded-2xl border border-gold/25 bg-ink-900/60 px-4 py-3 shadow-folio sm:gap-4 sm:px-5">
      {src ? <audio ref={audioRef} src={src} preload="metadata" /> : null}

      <button
        onClick={togglePlay}
        disabled={!src}
        aria-label={playing ? "Pause audio guide" : "Play audio guide"}
        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold text-ink-950 shadow-gilt transition-transform active:scale-95 disabled:opacity-40 sm:h-12 sm:w-12"
      >
        {playing ? (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <rect x="2" y="1" width="4" height="14" rx="1" />
            <rect x="10" y="1" width="4" height="14" rx="1" />
          </svg>
        ) : (
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3 1.5v13l11-6.5z" />
          </svg>
        )}
      </button>

      <div className="min-w-0 flex-1">
        <div className="mb-1.5 flex items-center justify-between font-mono text-[0.68rem] text-vellum-dim/70">
          <span className="truncate pe-2">{label}</span>
          <span className="shrink-0">
            {formatTime(currentTime)} / {src && ready ? formatTime(duration) : "--:--"}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={1}
          step={0.001}
          value={progress}
          onChange={seek}
          disabled={!src}
          aria-label="Audio guide progress"
          className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-gold disabled:cursor-not-allowed"
        />
      </div>
    </div>
  );
}
