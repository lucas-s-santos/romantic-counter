// Arquivo: components/MusicPlayer.tsx (VERSÃO COM VOLUME NO MOBILE)
"use client"

import { type RefObject } from "react"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX } from "lucide-react"

interface MusicPlayerProps {
  audioRef: RefObject<HTMLAudioElement | null>;
  trackName: string;
  onNext: () => void;
  onPrev: () => void;
}

export function MusicPlayer({ audioRef, trackName, onNext, onPrev }: MusicPlayerProps) {
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
    // A estrutura principal responsiva é mantida
    <div className="fixed bottom-0 right-0 w-full p-3 
                    md:top-4 md:right-4 md:w-auto md:bottom-auto md:rounded-lg 
                    bg-card/80 backdrop-blur-sm border-t md:border border-border 
                    shadow-lg flex items-center justify-between gap-4 text-foreground z-50">
      
      {/* --- MUDANÇA 1: NOME DA MÚSICA NA ESQUERDA --- */}
      {/* O nome da música agora fica à esquerda, ocupando o espaço disponível. */}
      <span className="font-bold text-sm truncate max-w-[100px] sm:max-w-[150px]">
        {trackName}
      </span>

      {/* --- MUDANÇA 2: CONTROLES DE MÚSICA NO CENTRO --- */}
      {/* Os botões de play, etc., agora ficam no meio. */}
      <div className="flex items-center gap-4">
        <button onClick={onPrev} className="hover:text-primary transition-colors">
          <SkipBack size={20} />
        </button>
        <button onClick={togglePlayPause} className="hover:text-primary transition-colors">
          <Play size={20} />
        </button>
        <button onClick={onNext} className="hover:text-primary transition-colors">
          <SkipForward size={20} />
        </button>
      </div>
      
      {/* --- MUDANÇA 3: CONTROLE DE VOLUME NA DIREITA (SEMPRE VISÍVEL) --- */}
      {/* Removi a classe 'hidden' e 'sm:flex'. Agora ele aparece em todos os tamanhos de tela. */}
      <div className="flex items-center gap-2">
        <VolumeX size={18} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.1"
          onChange={handleVolumeChange}
          className="w-12 sm:w-16 md:w-20 h-1 accent-primary" // A largura é menor em telas pequenas
        />
        <Volume2 size={18} />
      </div>
    </div>
  )
}
