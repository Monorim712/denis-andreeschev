import type { ReactNode } from 'react'
import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Адвокат Андреещев Денис — Юридическая помощь',
  description: 'Адвокат Андреещев Денис. Уголовные, гражданские, административные дела. Профессиональная юридическая помощь.',
}

export default function FrontendLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru">
      <body>{children}</body>
    </html>
  )
}
