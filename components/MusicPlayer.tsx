// Arquivo: components/MusicPlayer.tsx (VERSÃO RESPONSIVA)
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
    // --- PRINCIPAL MUDANÇA APLICADA AQUI ---
    // Em telas pequenas (padrão): Fixo no rodapé (bottom-0), largura total (w-full), sem bordas arredondadas.
    // Em telas médias ou maiores (md:): Volta para o canto superior direito (top-4 right-4), com largura automática (w-auto) e bordas arredondadas.
    <div className="fixed bottom-0 right-0 w-full p-3 
                    md:top-4 md:right-4 md:w-auto md:bottom-auto md:rounded-lg 
                    bg-card/80 backdrop-blur-sm border-t md:border border-border 
                    shadow-lg flex items-center justify-between gap-4 text-foreground z-50">
      
      {/* Controles da Esquerda: Anterior, Play/Pause, Próximo */}
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

      {/* Nome da Música no Meio */}
      <span className="font-bold text-sm truncate max-w-[120px] md:max-w-[150px] text-center">
        {trackName}
      </span>
      
      {/* Controle de Volume na Direita (escondido em telas muito pequenas) */}
      <div className="hidden sm:flex items-center gap-2">
        <VolumeX size={18} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          defaultValue="0.1"
          onChange={handleVolumeChange}
          className="w-16 md:w-20 h-1 accent-primary"
        />
        <Volume2 size={18} />
      </div>
    </div>
  )
}
