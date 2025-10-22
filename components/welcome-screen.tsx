// Arquivo: components/welcome-screen.tsx (VERSÃO CORRIGIDA E SIMPLIFICADA)
"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"

// A interface foi simplificada, pois só precisamos da função onEnter.
interface WelcomeScreenProps {
  onEnter: () => void;
}

export function WelcomeScreen({ onEnter }: WelcomeScreenProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-background text-center p-4 animate-fade-in">
      <div className="space-y-6">
        {/* --- MUDANÇA APLICADA AQUI --- */}
        {/* Adicionamos a classe 'font-serif' para usar a fonte Playfair Display */}
        <h1 className="text-5xl md:text-7xl font-serif text-foreground tracking-wider text-balance">
          PARA O AMOR DA MINHA VIDA
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground font-light max-w-2xl mx-auto">
          Preparei algo especial para você, um pequeno espaço no universo digital que é só nosso!
        </p>
        
        <Button
          onClick={onEnter}
          size="lg"
          className="group animate-pulse"
        >
          Click Aqui
          <Heart className="w-5 h-5 ml-2 transition-transform group-hover:scale-125" />
        </Button>
      </div>
    </div>
  )
}
