import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Autopartes De León S.A. — Refaccionaria Mayorista en León GTO',
  description: 'Más de 30 años surtiendo refacciones para autos en León y el Bajío. Inventario amplio de 3000+ piezas, precios mayoristas, asesoría experta. Llámanos al 477 762 4062.',
  keywords: 'refaccionaria león, autopartes león, refacciones automotrices, mayorista autopartes, refaccionaria guanajuato, partes para autos león',
  authors: [{ name: 'Autopartes De León S.A. de C.V.' }],
  openGraph: {
    title: 'Autopartes De León S.A. — Refaccionaria Mayorista en León GTO',
    description: 'Más de 30 años surtiendo refacciones para autos en León y el Bajío. Inventario amplio de 3000+ piezas, precios mayoristas.',
    url: 'https://autopartesdeleon.com',
    siteName: 'Autopartes De León',
    images: [
      {
        url: '/images/hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Autopartes De León - Refaccionaria Mayorista',
      },
    ],
    locale: 'es_MX',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#1E3A8A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

// Schema.org LocalBusiness JSON-LD
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'AutoPartsStore',
  name: 'Autopartes De León S.A. de C.V.',
  description: 'Refaccionaria mayorista con más de 30 años de experiencia en León, Guanajuato. Inventario amplio, precios competitivos y asesoría experta.',
  url: 'https://autopartesdeleon.com',
  telephone: '+52-477-762-4062',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'San Juan de Los Lagos 905',
    addressLocality: 'León de los Aldama',
    addressRegion: 'Guanajuato',
    postalCode: '37000',
    addressCountry: 'MX',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 21.1167,
    longitude: -101.6833,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '09:00',
      closes: '19:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: 'Saturday',
      opens: '09:00',
      closes: '15:00',
    },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '4.6',
    reviewCount: '1000',
  },
  priceRange: '$$',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth bg-background">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
