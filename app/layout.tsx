// Arquivo: app/layout.tsx (VERSÃO FINAL CORRIGIDA)
import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import { inter } from "@/lib/fonts" // Importando do novo arquivo central
import "../styles/globals.css"

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
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={inter.className}>
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
