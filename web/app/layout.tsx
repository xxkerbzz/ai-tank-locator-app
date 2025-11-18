import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'SepticSleuth - AI-Powered Septic Tank Locator for Service Providers',
  description: 'Find hidden septic tanks in minutes, not hours. AI-powered location service using satellite imagery, property records, and machine learning. Transform your septic service operations today.',
  keywords: ['septic tank locator', 'septic service', 'AI septic finder', 'satellite imagery', 'property records', 'GPS coordinates', 'septic maintenance'],
  authors: [{ name: 'SepticSleuth' }],
  openGraph: {
    title: 'SepticSleuth - Find Hidden Septic Tanks in Minutes',
    description: 'AI-powered location service for septic service providers. Get GPS coordinates, depth estimates, and photos instantly.',
    type: 'website',
    locale: 'en_US',
    siteName: 'SepticSleuth',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SepticSleuth - AI-Powered Septic Tank Locator',
    description: 'Find hidden septic tanks in minutes using AI and satellite imagery.',
  },
  robots: 'index, follow',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  )
}
