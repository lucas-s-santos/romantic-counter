// Arquivo: components/MusicPlayer.tsx

"use client"

import { useState, useEffect, RefObject } from "react"
import { Play, Pause, Volume1, Volume2, VolumeX, Music, SkipBack, SkipForward } from "lucide-react"
import { Button } from "@/components/ui/button"

// A interface agora inclui as funções para controlar a playlist
interface MusicPlayerProps {
  audioRef: React.RefObject<HTMLAudioElement>;

  trackName: string;
  onNext: () => void;
  onPrev: () => void;
}

export function MusicPlayer({ audioRef, trackName, onNext, onPrev }: MusicPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return

    audio.volume = volume

    const handlePlay = () => setIsPlaying(true)
    const handlePause = () => setIsPlaying(false)
    const handleVolumeChange = () => setVolume(audio.volume)

    audio.addEventListener("play", handlePlay)
    audio.addEventListener("pause", handlePause)
    audio.addEventListener("volumechange", handleVolumeChange)
    
    // Quando uma música acaba, automaticamente toca a próxima
    audio.addEventListener("ended", onNext);

    return () => {
      audio.removeEventListener("play", handlePlay)
      audio.removeEventListener("pause", handlePause)
      audio.removeEventListener("volumechange", handleVolumeChange)
      audio.removeEventListener("ended", onNext);
    }
  }, [audioRef, volume, onNext])

  const togglePlayPause = () => {
    const audio = audioRef.current
    if (!audio) return
    
    if (isPlaying) {
      audio.pause()
    } else {
      audio.play()
    }
    setIsPlaying(!isPlaying)
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current
    if (!audio) return
    
    const newVolume = parseFloat(e.target.value)
    audio.volume = newVolume
    setVolume(newVolume)
  }

  const VolumeIcon = volume === 0 ? VolumeX : volume < 0.5 ? Volume1 : Volume2

  return (
    // 1. MUDANÇA DE POSIÇÃO: de 'bottom-4' para 'top-4'
    <div className="fixed top-4 right-4 z-50">
      <div className="flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-border/50 rounded-lg p-3 shadow-lg">
        <Music className="w-5 h-5 text-primary" />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-foreground w-28 truncate" title={trackName}>
            {trackName}
          </span>
        </div>
        
        {/* 2. NOVOS BOTÕES DE CONTROLE DA PLAYLIST */}
        <Button onClick={onPrev} variant="ghost" size="icon" className="rounded-full">
          <SkipBack className="w-5 h-5" />
        </Button>
        <Button onClick={togglePlayPause} variant="ghost" size="icon" className="rounded-full">
          {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
        </Button>
        <Button onClick={onNext} variant="ghost" size="icon" className="rounded-full">
          <SkipForward className="w-5 h-5" />
        </Button>

        <div className="flex items-center gap-2 group">
          <VolumeIcon className="w-5 h-5 text-muted-foreground" />
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
            className="w-20 h-1 bg-muted-foreground/30 rounded-full appearance-none cursor-pointer accent-primary transition-opacity opacity-0 group-hover:opacity-100"
          />
        </div>
      </div>
    </div>
  )
}
