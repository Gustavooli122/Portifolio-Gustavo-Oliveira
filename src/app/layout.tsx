import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { personal } from '@/lib/data'
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-geist-sans',
})

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

const description =
  'Portfólio de ' +
  personal.name +
  ', ' +
  personal.role +
  '. Interfaces modernas, acessíveis e performáticas com Next.js, React e Tailwind CSS.'

export const metadata: Metadata = {
  title: {
    default: `${personal.name} — ${personal.role}`,
    template: `%s — ${personal.name}`,
  },
  description,
  keywords: [
    'Front-end Developer',
    'Desenvolvedor Front-end',
    'React',
    'Next.js',
    'Tailwind CSS',
    'JavaScript',
    personal.name,
  ],
  authors: [{ name: personal.name }],
  creator: personal.name,
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: `${personal.name} — ${personal.role}`,
    description,
    siteName: `${personal.name} | Portfólio`,
  },
  twitter: {
    card: 'summary_large_image',
    title: `${personal.name} — ${personal.role}`,
    description,
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#1a1a24',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
