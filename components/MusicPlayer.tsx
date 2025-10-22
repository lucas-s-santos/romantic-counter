// Arquivo: components/MusicPlayer.tsx (VERSÃO CORRIGIDA FINAL)
"use client"

import { type RefObject } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"

// --- CORREÇÃO APLICADA AQUI ---
// A propriedade 'audioRef' agora aceita o tipo 'RefObject<HTMLAudioElement | null>'
interface MusicPlayerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  trackName: string;
  onNext: () => void;
  onPrev: () => void;
}

export function MusicPlayer({ audioRef, trackName, onNext, onPrev }: MusicPlayerProps) {
  // O resto do código permanece o mesmo, pois já estava correto.
  // A única mudança foi na definição da interface acima para satisfazer a Vercel.

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play().catch(console.error);
      } else {
        audioRef.current.pause();
      }
    }
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (audioRef.current) {
      audioRef.current.volume = parseFloat(e.target.value);
    }
  };

  return (
    <div className="fixed top-4 right-4 bg-card/80 backdrop-blur-sm border border-border rounded-lg p-4 shadow-lg flex items-center gap-4 text-foreground">
      <div className="flex flex-col">
        <span className="font-bold text-sm truncate max-w-[150px]">{trackName}</span>
        <div className="flex items-center gap-3 mt-2">
          <button onClick={onPrev} className="hover:text-primary transition-colors">
            <SkipBack size={20} />
          </button>
          <button onClick={togglePlayPause} className="hover:text-primary transition-colors">
            <Play size={20} /> {/* Idealmente, este ícone mudaria para Pause */}
          </button>
          <button onClick={onNext} className="hover:text-primary transition-colors">
            <SkipForward size={20} />
          </button>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <VolumeX size={18} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.1"
          onChange={handleVolumeChange}
          className="w-20 h-1 accent-primary"
        />
        <Volume2 size={18} />
      </div>
    </div>
  )
}
