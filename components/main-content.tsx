"use client"

import { useEffect, useState } from "react"
import { PhotoCarousel } from "@/components/photo-carousel"
import { Calendar } from "@/components/calendar"
import { Heart } from "lucide-react"

// Componente para o divisor romântico
function RomanticDivider() {
  return (
    <div className="flex items-center justify-center gap-4 my-8">
      <div className="h-px w-16 bg-border" />
      <Heart className="w-4 h-4 text-primary/50" />
      <div className="h-px w-16 bg-border" />
    </div>
  )
}

export function MainContent() {
  // Estados para a contagem
  const [years, setYears] = useState(0)
  const [months, setMonths] = useState(0)
  const [days, setDays] = useState(0)
  const [hours, setHours] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)

  // --- 1. NOVO ESTADO PARA O TEMA DINÂMICO ---
  const [timeOfDayTheme, setTimeOfDayTheme] = useState("theme-night") // Padrão é noite

  useEffect(() => {
    const startDate = new Date("2025-06-12T00:00:00")

    const updateCounter = () => {
      const now = new Date()
      const diff = now.getTime() - startDate.getTime()

      // Lógica da contagem (Anos, Meses, Dias, etc.)
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
      const s = Math.floor((diff % (1000 * 60)) / 1000)
      setHours(h)
      setMinutes(m)
      setSeconds(s)
      let yearCount = now.getFullYear() - startDate.getFullYear()
      let monthCount = now.getMonth() - startDate.getMonth()
      let dayCount = now.getDate() - startDate.getDate()
      if (dayCount < 0) {
        monthCount--
        dayCount += new Date(now.getFullYear(), now.getMonth(), 0).getDate()
      }
      if (monthCount < 0) {
        yearCount--
        monthCount += 12
      }
      setYears(yearCount < 0 ? 0 : yearCount)
      setMonths(monthCount < 0 ? 0 : monthCount)
      setDays(dayCount < 0 ? 0 : dayCount)

      // --- 2. LÓGICA PARA DEFINIR O TEMA DO FUNDO ---
      const currentHour = now.getHours();
      if (currentHour >= 5 && currentHour < 12) {
        setTimeOfDayTheme("theme-morning"); // Manhã
      } else if (currentHour >= 12 && currentHour < 18) {
        setTimeOfDayTheme("theme-afternoon"); // Tarde
      } else {
        setTimeOfDayTheme("theme-night"); // Noite
      }
    }

    updateCounter()
    const interval = setInterval(updateCounter, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    // --- 3. APLICANDO A CLASSE DINÂMICA AO FUNDO ---
    <div className={`min-h-screen bg-background transition-colors duration-1000 ${timeOfDayTheme}`}>
      <div className="container mx-auto px-4 py-12 md:py-20 space-y-12 max-w-7xl">
        <div className="text-center space-y-4 md:space-y-6 animate-fade-in">
          <h1 className="text-5xl md:text-8xl font-serif text-balance text-foreground tracking-tight">
            Lucas & Luisa
          </h1>
          <p className="text-sm md:text-lg text-muted-foreground font-light tracking-wider">
            DESDE 12 DE JUNHO DE 2025
          </p>
        </div>

        <div className="animate-fade-in-up">
            <h2 className="text-2xl font-serif text-center text-foreground/80 mb-8">Nosso Tempo Juntos</h2>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-4 md:gap-6 max-w-4xl mx-auto">
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm border border-border/50 text-center">
                    <div className="text-4xl md:text-6xl font-serif text-primary mb-2">{years}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Anos</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm border border-border/50 text-center">
                    <div className="text-4xl md:text-6xl font-serif text-primary mb-2">{months}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Meses</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm border border-border/50 text-center">
                    <div className="text-4xl md:text-6xl font-serif text-primary mb-2">{days}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Dias</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm border border-border/50 text-center">
                    <div className="text-4xl md:text-6xl font-serif text-primary mb-2">{hours}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Horas</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm border border-border/50 text-center">
                    <div className="text-4xl md:text-6xl font-serif text-primary mb-2">{minutes}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Minutos</div>
                </div>
                <div className="bg-card/80 backdrop-blur-sm rounded-lg p-4 md:p-6 shadow-sm border border-border/50 text-center">
                    <div className="text-4xl md:text-6xl font-serif text-primary mb-2">{seconds}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">Segundos</div>
                </div>
            </div>
        </div>

        <RomanticDivider />

        <div
          className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="w-full lg:w-1/2 bg-card rounded-lg p-8 md:p-10 shadow-sm border border-border">
            <h2 className="text-3xl md:text-4xl font-serif text-foreground mb-6 md:mb-8 text-center lg:text-left tracking-tight">
              Nossa História
            </h2>
            <div className="space-y-5 text-sm md:text-base text-foreground/80 leading-relaxed font-light">
              <p>
                Tudo começou no dia 12 de abril, em uma festa chamada Cai de Bico. Foi lá, em meio à música e à energia
                daquela noite, que o destino resolveu cruzar nossos caminhos. Um beijo foi o início de tudo — e logo
                depois dele, eu disse pra ela que iria atrás dela até o fim. E foi exatamente o que fiz.
              </p>
              <p>
                Depois daquela festa, começamos a conversar pelo Instagram, e não demorou muito para marcarmos de nos
                encontrar no Gela Guela. Aquele dia foi especial — foi quando percebi que ela era muito mais do que eu
                imaginava. Conversando, rindo e olhando nos olhos dela, eu descobri que era com ela que eu queria viver
                a minha vida e realizar todos os meus sonhos.
              </p>
              <p>
                Desde então, a gente nunca mais se desgrudou. E no dia 12 de junho, mesmo com pouco tempo pra planejar,
                fiz o pedido de namoro. Queria algo mais elaborado, mas o que realmente importava era o sentimento — e
                aquele momento foi perfeito do nosso jeito.
              </p>
              <p>
                Pouco tempo depois, viajamos pra Campinas, pra casa dos pais dela. E foi lá que eu tive a maior prova do
                amor dela por mim. Ali, percebi o quanto era verdadeiro, o quanto ela me queria por perto, e como fazia
                questão que a família soubesse que estávamos juntos.
              </p>
              <p className="text-foreground font-normal italic">
                Desde aquele dia, tenho certeza de que encontrei o amor da minha vida. E se tudo começou com um beijo em
                uma festa, hoje é uma história que quero continuar escrevendo ao lado dela, todos os dias.
              </p>
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <PhotoCarousel />
          </div>
        </div>

        <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <Calendar />
        </div>
      </div>
    </div>
  )
}
