// Arquivo: app/layout.tsx (VERSÃO CORRIGIDA PARA O TEMA)
import type React from "react"
import type { Metadata } from "next"
import { Inter, Roboto_Mono, Playfair_Display } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider" // Verifique se o caminho está correto
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] })
const roboto_mono = Roboto_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Lucas e Luisa ❤️",
  description: "Um contador especial do nosso relacionamento",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning> {/* suppressHydrationWarning é importante para o next-themes */}
      <body className={inter.className}>
        {/* --- CORREÇÃO APLICADA AQUI --- */}
        {/* Agora estamos passando as propriedades necessárias para o ThemeProvider */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
