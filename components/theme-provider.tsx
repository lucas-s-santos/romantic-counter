// Arquivo: components/theme-provider.tsx (VERSÃO FINAL ABSOLUTA)
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

// A versão antiga do 'next-themes' não precisa da importação de 'ThemeProviderProps'.
// Esta é a forma correta e mais simples.
export function ThemeProvider({ children, ...props }: { children: React.ReactNode; [key: string]: any }) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
