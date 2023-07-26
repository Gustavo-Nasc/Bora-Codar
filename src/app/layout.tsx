import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
  title: 'Bora Codar | Página Inicial',
  description: 'Projeto criado a partir da #boracodar, da Rocketseat',
  authors: [
    {
      name: 'Gustavo Nascimento Souza',
      url: 'https://github.com/Gustavo-Nasc',
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`text-white ${poppins.className}`}>{children}</body>
    </html>
  )
}
