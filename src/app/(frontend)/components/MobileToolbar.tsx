'use client'

import { useState, useCallback, useEffect } from 'react'

const mainLinks = [
  { href: '/dlya-muzhchin', label: 'Защита прав мужчин' },
  { href: '/dlya-zhenshchin', label: 'Защита прав женщин' },
  { href: '/#services', label: 'Услуги' },
  { href: '/#advantages', label: 'Преимущества' },
  { href: '/#about', label: 'Об адвокате' },
  { href: '/#steps', label: 'Этапы работы' },
  { href: '/#pricing', label: 'Цены' },
  { href: '/#credentials', label: 'Сертификаты' },
  { href: '/#reviews', label: 'Отзывы' },
  { href: '/#faq', label: 'Вопросы' },
  { href: '/#contacts', label: 'Контакты' },
]

const legalLinks = [
  { href: '/privacy', label: 'Политика конфиденциальности' },
  { href: '/data-processing', label: 'Обработка персональных данных' },
  { href: '/cookies', label: 'Соглашение Cookie' },
  { href: '/consent', label: 'Согласие на обработку данных' },
]

export function MobileToolbar() {
  const [open, setOpen] = useState(false)

  const close = useCallback(() => setOpen(false), [])

  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <>
      {/* Toolbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-navy-900/95 backdrop-blur-md border-t border-white/10 safe-area-bottom">
        <div className="flex items-center justify-around px-4 py-2">
          <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-1">
            <div className="w-10 h-10 rounded-full bg-[#26A5E4] flex items-center justify-center">
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            </div>
            <span className="text-white/60 text-[10px]">Telegram</span>
          </a>

          <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-1 py-1">
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #6C3AED, #2563EB)'}}>
              <img src="/images/icons/max-icon.webp" alt="Max" className="w-5 h-5" />
            </div>
            <span className="text-white/60 text-[10px]">Max</span>
          </a>

          <a href="tel:+79507770608" className="flex flex-col items-center gap-1 py-1">
            <div className="w-12 h-12 rounded-full btn-gold flex items-center justify-center -mt-4 shadow-lg shadow-gold-400/30">
              <span className="material-symbols-outlined text-navy-900 text-2xl">call</span>
            </div>
            <span className="text-gold-400 text-[10px] font-semibold">Звонок</span>
          </a>

          <a href="mailto:denis.andreeschev2015@yandex.ru" className="flex flex-col items-center gap-1 py-1">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">mail</span>
            </div>
            <span className="text-white/60 text-[10px]">Почта</span>
          </a>

          <button onClick={() => setOpen(true)} className="flex flex-col items-center gap-1 py-1">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">menu</span>
            </div>
            <span className="text-white/60 text-[10px]">Меню</span>
          </button>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="fixed inset-0 bg-black/60 z-[60] lg:hidden" onClick={close} />}

      {/* Slide-out menu */}
      <div className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-[360px] z-[70] lg:hidden bg-navy-900 transform transition-transform duration-300 ease-out ${open ? 'translate-x-0' : 'translate-x-full'} overflow-y-auto`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <img src="/images/logo.webp" alt="Логотип" className="w-10 h-10 brightness-0 invert" />
              <span className="font-serif text-white font-bold text-base">Андреещев Д.В.</span>
            </div>
            <button onClick={close} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <span className="material-symbols-outlined text-white">close</span>
            </button>
          </div>

          <nav className="mb-8">
            <h4 className="text-gold-400 font-serif font-bold uppercase tracking-wider text-xs mb-4">Разделы сайта</h4>
            <div className="flex flex-col gap-1">
              {mainLinks.map((link, i) => (
                <a key={i} href={link.href} onClick={close} className="text-gray-300 hover:text-gold-400 transition-colors py-2.5 px-3 rounded-lg hover:bg-white/5 text-sm">
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          <div className="mb-8">
            <h4 className="text-gold-400 font-serif font-bold uppercase tracking-wider text-xs mb-4">Правовая информация</h4>
            <div className="flex flex-col gap-1">
              {legalLinks.map((link, i) => (
                <a key={i} href={link.href} onClick={close} className="text-gray-500 hover:text-gold-400 transition-colors py-2 px-3 rounded-lg hover:bg-white/5 text-xs">
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          <div className="border-t border-white/10 pt-6">
            <a href="tel:+79507770608" className="flex items-center gap-3 text-white mb-4">
              <span className="material-symbols-outlined text-gold-400">call</span>
              <span className="font-semibold">8 (950) 777-06-08</span>
            </a>
            <div className="flex items-center gap-3">
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#26A5E4] flex items-center justify-center"><svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
              <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center" style={{background: 'linear-gradient(135deg, #6C3AED, #2563EB)'}}><img src="/images/icons/max-icon.webp" alt="Max" className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
