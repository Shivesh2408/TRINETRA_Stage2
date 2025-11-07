import './globals.css'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BSIN – Bharat Sports Intelligence Network',
  description: 'AI for Sports Policy',
  icons: {
    icon: '/fav-icon.jpg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} min-h-screen flex flex-col bg-white text-gray-900 antialiased`}>
        {/* Decorative background layers */}
        <div className="pointer-events-none fixed inset-0 -z-10 bg-grid" />
        <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
          <div className="absolute -top-40 left-1/2 h-[32rem] w-[32rem] -translate-x-1/2 rounded-full blur-3xl"
               style={{ background: 'conic-gradient(from 210deg, rgba(14,165,233,0.1), rgba(59,130,246,0.08), rgba(139,92,246,0.08), transparent 65%)' }} />
        </div>
        <Header />
        <main id="main" className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

