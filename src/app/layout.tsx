import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Header from '@/Components/Header'
import Background from '@/Components/Background'
import Link from 'next/link'
import {PHProvider, PostHogPageview } from "@/providers";
import { Suspense } from 'react'


const montserrat = Montserrat({ subsets: ['latin'] })

const meta = {
title: 'Bülent Akarcalı Anadolu Lisesi Girişimcilik Kulübü',
  description: 'Bülent Akarcalı Anadolu Lisesi Girişimcilik Kulübü, öğrencileri girişimcilikle buluşturan bir platform. İlham veren projeler ve etkinliklerle genç girişimcileri destekliyoruz.',
  image: `/girisimcilik-logo.jpg`,
}
export const metadata: Metadata = {
  title: meta.title,
  keywords: [
    "Bülent Akarcalı Anadolu Lisesi",
    "Girişimcilik",
    "Girişimcilik Kulübü",
    "Baal Girişimcilik",
    "Baal Girişimcilik Kulübü",
    "Baal Girişimcilik Kulübü Web Sitesi",
    "Mehmet Akif Taşçı",
    "İlhan Arda Çiftçi",
    "İstanbul Girişimcilik",
    "Lise Girişimcilik Kulübü"
  ],
  description: meta.description,
  openGraph:{
    url: "https://www.baalgirisimcilik.com",
    title: meta.title,
    description: meta.description,
    locale: "tr_TR",
    type: "website",
    images: [
      {url: meta.image}
    ]
  },
    twitter: {
    title: meta.title,
    description: meta.description,
    images: meta.image,
    card: 'summary_large_image',
  },
  alternates: {
    canonical: "https://baalgirisimcilik.com",
  },
  authors: [
    {
      name: "Mehmet Akif Taşçı",
      url: "https://makiftasci.xyz"
    }
  ]
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
       <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
      <body className={`${montserrat.className}`}>
        <Background />
        <Header />
        {children}
        <footer className='grid place-items-center text-center justify-center text-sm md:text-base '>
          ©2023 BAAL Girişimcilik Kulübü <Link className='underline' href="https://makiftasci.xyz">-Mehmet Akif Taşçı</Link>
        </footer>
      </body>
      </PHProvider>
    </html>
  )
}
