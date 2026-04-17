'use client'
import Link from 'next/link'

const nav = [
  { href: '/#services', label: 'Услуги' },
  { href: '/#about', label: 'Об адвокате' },
  { href: '/#reviews', label: 'Отзывы' },
  { href: '/#contacts', label: 'Контакты' },
]

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="header-logo">
          Адвокат <span>Андреещев</span>
        </Link>
        <nav>
          <ul className="header-nav">
            {nav.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <a href="tel:+79204130096" className="header-phone">
          8 (920) 413-00-96
        </a>
      </div>
    </header>
  )
}
