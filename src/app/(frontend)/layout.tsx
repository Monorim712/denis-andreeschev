import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Адвокат по семейным делам в Воронеже — Андреещев Денис Валерьевич',
    template: '%s | Адвокат Андреещев',
  },
  description: 'Семейный адвокат в Воронеже. Развод, алименты, раздел имущества, споры о детях. Бесплатная первичная консультация. Опыт 10+ лет.',
  keywords: 'адвокат воронеж, семейный адвокат, развод воронеж, алименты, раздел имущества, адвокат по семейным делам',
  openGraph: {
    type: 'website',
    locale: 'ru_RU',
    siteName: 'Адвокат Андреещев Денис Валерьевич',
  },
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
