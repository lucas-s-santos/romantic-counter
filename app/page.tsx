"use client"

import { useState, useRef, useEffect } from "react"
import { WelcomeScreen } from "@/components/welcome-screen"
import { MainContent } from "@/components/main-content"
import { MusicPlayer } from "../components/MusicPlayer"
// --- 1. ADICIONEI A IMPORTAÇÃO DO BOTÃO DE TEMA AQUI ---
import { ThemeSwitcher } from "../components/ThemeSwitcher"

// Sua playlist completa
const playlist = [
  { url: "/Teesperando.mp3", name: "Te Esperando" },
  { url: "/OQueÉQueTem.mp3", name: "O Que É Que Tem" },
  { url: "/Antídoto.mp3", name: "Antídoto" },
  { url: "/DeixaElaSaber.mp3", name: "Deixa Ela Saber" },
  { url: "/QueSorteANossa.mp3", name: "Que Sorte A Nossa" },
  { url: "/DuasMetades.mp3", name: "Duas Metades" },
  { url: "/Planos.mp3", name: "Planos" },
  { url: "/MariadoOlhoVerde.mp3", name: "Maria do Olho Verde" },
  { url: "/Atéoinfinito.mp3", name: "Até o infinito" },
  { url: "/Talvezvocêprecisedemim.mp3", name: "Talvez Você Precise de Mim" },
  { url: "/PerdendoJuízo.mp3", name: "Perdendo Juízo" },
]

export default function Home() {
  const [showMain, setShowMain] = useState(false)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [userInteracted, setUserInteracted] = useState(false)
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0)

  const handleUserInteraction = () => {
    setUserInteracted(true)
    setShowMain(true)
  }

  useEffect(() => {
    if (userInteracted && audioRef.current) {
      audioRef.current.volume = 0.1
      audioRef.current.play().catch(console.error)
    }
  }, [userInteracted])

  useEffect(() => {
    if (audioRef.current && userInteracted) {
      audioRef.current.load()
      audioRef.current.play().catch(console.error)
    }
  }, [currentTrackIndex, userInteracted])

  const handleNextTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex + 1) % playlist.length)
  }

  const handlePrevTrack = () => {
    setCurrentTrackIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length)
  }

  return (
    <main className="min-h-screen">
      <audio ref={audioRef} preload="auto">
        <source src={playlist[currentTrackIndex].url} type="audio/mpeg" />
        Seu navegador não suporta o elemento de áudio.
      </audio>

      {/* --- 2. ADICIONEI O BOTÃO DE TEMA AQUI, AO LADO DO PLAYER --- */}
      <div className="fixed top-4 right-4 z-50 flex items-center gap-2">
        {showMain && (
          <MusicPlayer
            audioRef={audioRef}
            trackName={playlist[currentTrackIndex].name}
            onNext={handleNextTrack}
            onPrev={handlePrevTrack}
          />
        )}
        {/* O botão de tema aparece aqui */}
        <ThemeSwitcher />
      </div>

      {!showMain ? (
        <WelcomeScreen onEnter={handleUserInteraction} />
      ) : (
        <MainContent />
      )}
    </main>
  )
}
