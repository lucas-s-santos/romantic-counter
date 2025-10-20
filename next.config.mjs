// Arquivo: next.config.mjs

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Adicione este bloco para desativar o streaming
  experimental: {
    serverComponentsExternalPackages: ["@react-email/components"],
    ppr: false, // Desativa o Prerendering Parcial, que usa streaming
  },
};

export default nextConfig;

