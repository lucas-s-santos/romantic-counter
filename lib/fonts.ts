// Arquivo: lib/fonts.ts (NOVO ARQUIVO)

import { Inter, Roboto_Mono, Playfair_Display, Cormorant_Garamond } from "next/font/google"

export const inter = Inter({ subsets: ["latin"] });

export const roboto_mono = Roboto_Mono({ subsets: ["latin"] });

export const playfair = Playfair_Display({ subsets: ["latin"] });

export const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "700"],
});
