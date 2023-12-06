import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Background from '@/Components/Background'
import Link from 'next/link'


const montserrat = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Bülent Akarcalı Anadolu Lisesi Girişimcilik Kulübü',
  description: 'Bülent Akarcalı Anadolu Lisesi Girişimcilik Kulübü, öğrencileri girişimcilikle buluşturan bir platform. İlham veren projeler ve etkinliklerle genç girişimcileri destekliyoruz.',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body className={`${montserrat.className}`}>
        <Background />
        <Header />
        {children}
        <footer className='flex items-center text-center justify-center gap-4 text-sm md:text-base '>
          ©2023 <Link className='underline' href="https://makiftasci.xyz">Mehmet Akif Taşçı 10/C</Link> tarafından 💖 ile yapıldı.
        </footer>
      </body>
    </html>
  )
}
