// Arquivo: app/layout.tsx (VERSÃO FINAL COM FONTES CORRIGIDAS)
import type React from "react"
import type { Metadata } from "next"
// --- MUDANÇA AQUI: Trocamos as fontes Geist por Inter e Roboto Mono ---
import { Inter, Roboto_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "../styles/globals.css" // Garantindo que o CSS correto está sendo importado

// --- MUDANÇA AQUI: Inicializamos as novas fontes ---
const inter = Inter({ subsets: ["latin"] })
const roboto_mono = Roboto_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas e Luisa ❤️",
  description: "Um contador especial do nosso relacionamento",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // --- MUDANÇA AQUI: Usamos a nova fonte 'inter' no corpo da página ---
    <html lang="pt-BR" className="dark">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
