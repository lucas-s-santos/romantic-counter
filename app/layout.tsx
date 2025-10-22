// Arquivo: app/layout.tsx (VERSÃO FINAL COM A NOVA FONTE)
import type React from "react"
import type { Metadata } from "next"
// 1. IMPORTANDO A NOVA FONTE 'Cormorant_Garamond'
import { Inter, Roboto_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ThemeProvider } from "@/components/theme-provider"
import "../styles/globals.css"

const inter = Inter({ subsets: ["latin"] })
const roboto_mono = Roboto_Mono({ subsets: ["latin"] })
const playfair = Playfair_Display({ subsets: ["latin"] })

// 2. INICIALIZANDO A NOVA FONTE
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"], // Importamos os pesos que vamos usar (normal e negrito)
});

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

// 3. EXPORTANDO A CLASSE DA FONTE
// Isso permite que outros arquivos, como o 'main-content.tsx', importem e usem essa fonte.
export { cormorant };
