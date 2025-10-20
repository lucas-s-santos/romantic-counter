"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

// Sua lista de fotos
const photos = [
  { url: "/nossas-fotos/image1.jpeg" },
  { url: "/nossas-fotos/image2.jpeg" },
  { url: "/nossas-fotos/image3.jpeg" },
  { url: "/nossas-fotos/image4.jpeg" },
  { url: "/nossas-fotos/image5.jpeg" },
  { url: "/nossas-fotos/image6.jpeg" },
  { url: "/nossas-fotos/image7.jpeg" },
  { url: "/nossas-fotos/image8.jpeg" },
  { url: "/nossas-fotos/image9.jpeg" },
  { url: "/nossas-fotos/image10.jpeg" },
  { url: "/nossas-fotos/image11.jpeg" },
  { url: "/nossas-fotos/image12.jpeg" },
  { url: "/nossas-fotos/image13.jpeg" },
  { url: "/nossas-fotos/image14.jpeg" },
  { url: "/nossas-fotos/image15.jpeg" },
  { url: "/nossas-fotos/image16.jpeg" },
  { url: "/nossas-fotos/image17.jpeg" },
  { url: "/nossas-fotos/image18.jpeg" },
  { url: "/nossas-fotos/image19.jpeg" },
  { url: "/nossas-fotos/image20.jpeg" },
  { url: "/nossas-fotos/image21.jpeg" },
]

export function PhotoCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    if (photos.length <= 1) return
    const interval = setInterval(() => {
      handleNext()
    }, 3000) 
    return () => clearInterval(interval)
  }, [currentIndex])

  const handleNext = () => {
    if (photos.length <= 1) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % photos.length)
      setIsTransitioning(false)
    }, 100)
  }

  const handlePrev = () => {
    if (photos.length <= 1) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + photos.length) % photos.length)
      setIsTransitioning(false)
    }, 100)
  }

  if (photos.length === 0) {
    return (
      <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm border border-border text-center">
        <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 md:mb-8 tracking-tight">Nossas Memórias</h2>
        <p className="text-muted-foreground">Adicione suas fotos para vê-las aqui!</p>
      </div>
    )
  }

  return (
    // --- MUDANÇA PRINCIPAL: CRIAÇÃO DO CARD ---
    // Esta div agora funciona como o "card" principal, com o mesmo estilo do card "Nossa História".
    <div className="bg-card rounded-lg p-8 md:p-10 shadow-sm border border-border">
      {/* O título agora está DENTRO do card. */}
      <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 md:mb-8 text-center lg:text-left tracking-tight">
        Nossas Memórias
      </h2>

      {/* Esta div contém apenas o carrossel em si. */}
      {/* Removi as classes de borda e sombra daqui, pois já estão no card principal. */}
      <div className="relative rounded-lg overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary/30">
          <img
            src={photos[currentIndex]?.url || "/placeholder.svg"}
            alt="Nossa foto"
            className={`w-full h-full object-cover transition-all duration-150 ${
              isTransitioning ? "opacity-0" : "opacity-100"
            }`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
        </div>

        {photos.length > 1 && (
          <>
            <div className="absolute top-1/2 left-4 right-4 -translate-y-1/2 flex justify-between pointer-events-none">
              <Button onClick={handlePrev} variant="ghost" size="icon" className="pointer-events-auto rounded-full bg-card/90 hover:bg-card shadow-md border border-border backdrop-blur-sm">
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </Button>
              <Button onClick={handleNext} variant="ghost" size="icon" className="pointer-events-auto rounded-full bg-card/90 hover:bg-card shadow-md border border-border backdrop-blur-sm">
                <ChevronRight className="w-5 h-5 text-foreground" />
              </Button>
            </div>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true)
                    setTimeout(() => {
                      setCurrentIndex(index)
                      setIsTransitioning(false)
                    }, 100)
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-foreground w-8" : "bg-foreground/30 hover:bg-foreground/50 w-1.5"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}
