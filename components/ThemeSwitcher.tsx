// Arquivo: components/ThemeSwitcher.tsx (com caminho corrigido)

"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
// --- CORREÇÃO APLICADA AQUI ---
import { Button } from "./ui/button" // Usando caminho relativo para a pasta 'ui'

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      <span className="sr-only">Mudar tema</span>
    </Button>
  )
}
