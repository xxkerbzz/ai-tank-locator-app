import './globals.css'
import type { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  metadataBase: new URL('https://web-lid3egsog-kerbzs-projects-9972489a.vercel.app'),
  title: 'SepticSleuth - AI-Powered Septic Tank Locator for Service Providers',
  description: 'Find hidden septic tanks in minutes, not hours. AI-powered location service using satellite imagery, property records, and machine learning. Transform your septic service operations today.',
  keywords: ['septic tank locator', 'septic service', 'AI septic finder', 'satellite imagery', 'property records', 'GPS coordinates', 'septic maintenance'],
  authors: [{ name: 'SepticSleuth' }],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'SepticSleuth - Find Hidden Septic Tanks in Minutes',
    description: 'AI-powered location service for septic service providers. Get GPS coordinates, depth estimates, and photos instantly.',
    url: 'https://web-lid3egsog-kerbzs-projects-9972489a.vercel.app',
    siteName: 'SepticSleuth',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SepticSleuth - AI-Powered Septic Tank Locator',
    description: 'Find hidden septic tanks in minutes using AI and satellite imagery.',
    site: '@SepticSleuth',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes when available:
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
    // bing: 'your-bing-verification-code',
  },
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
