'use client'

import { useState, useMemo, useEffect, useRef, useCallback } from 'react'

type Review = {
  id: string | number
  name: string
  source: string
  date: string
  text: string
}

const SOURCE_LABELS: Record<string, string> = {
  'yandex-karty': 'Яндекс.Карты',
  'yandex-uslugi': 'Яндекс.Услуги',
  harant: 'Harant.ru',
  avito: 'Авито',
}

const SOURCE_ICONS: Record<string, string> = {
  'yandex-karty': '/images/icons/yandex-karty.webp',
  'yandex-uslugi': '/images/icons/yandex-uslugi.webp',
  harant: '/images/icons/harant.webp',
  avito: '/images/icons/avito.webp',
}

const FILTERS = [
  { value: 'all', label: 'Все', icon: '' },
  { value: 'yandex-karty', label: 'Яндекс.Карты', icon: '/images/icons/yandex-karty.webp' },
  { value: 'yandex-uslugi', label: 'Яндекс.Услуги', icon: '/images/icons/yandex-uslugi.webp' },
  { value: 'harant', label: 'Harant.ru', icon: '/images/icons/harant.webp' },
  { value: 'avito', label: 'Авито', icon: '/images/icons/avito.webp' },
]

function PhoneFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex-shrink-0 w-[320px] mx-3">
      <div className="relative bg-black rounded-[40px] p-3 shadow-2xl">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-6 bg-black rounded-b-2xl z-10" />
        <div className="bg-white rounded-[28px] overflow-hidden min-h-[500px] flex flex-col">
          {children}
        </div>
      </div>
    </div>
  )
}

export function ReviewsBlock({ reviews }: { reviews: Review[] }) {
  const [filter, setFilter] = useState('all')
  const [active, setActive] = useState<Review | null>(null)
  const [current, setCurrent] = useState(0)
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const visibleRef = useRef(true)

  const filtered = useMemo(() => {
    if (filter === 'all') return reviews
    return reviews.filter((r) => r.source === filter)
  }, [reviews, filter])

  useEffect(() => { setCurrent(0) }, [filter])

  const scrollTo = useCallback((idx: number) => {
    if (!trackRef.current) return
    const cards = trackRef.current.children
    if (!cards[idx]) return
    const card = cards[idx] as HTMLElement
    trackRef.current.scrollTo({ left: card.offsetLeft - trackRef.current.offsetWidth / 2 + card.offsetWidth / 2, behavior: 'smooth' })
    setCurrent(idx)
  }, [])

  const next = useCallback(() => {
    setCurrent(prev => {
      const n = prev >= filtered.length - 1 ? 0 : prev + 1
      setTimeout(() => scrollTo(n), 0)
      return n
    })
  }, [filtered.length, scrollTo])

  const prev = useCallback(() => {
    setCurrent(prev => {
      const n = prev <= 0 ? filtered.length - 1 : prev - 1
      setTimeout(() => scrollTo(n), 0)
      return n
    })
  }, [filtered.length, scrollTo])

  useEffect(() => {
    if (!sectionRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
      if (entry.isIntersecting) {
        if (autoRef.current) clearInterval(autoRef.current)
        autoRef.current = setInterval(next, 5000)
      } else {
        if (autoRef.current) clearInterval(autoRef.current)
      }
    }, { threshold: 0.1 })
    observer.observe(sectionRef.current)
    return () => { observer.disconnect(); if (autoRef.current) clearInterval(autoRef.current) }
  }, [next])

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current)
    if (visibleRef.current) autoRef.current = setInterval(next, 5000)
  }

  useEffect(() => {
    if (!active) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setActive(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [active])

  return (
    <section id="reviews" ref={sectionRef} className="py-24 bg-navy-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Отзывы клиентов</h2>
          <p className="text-gray-300 text-lg">Реальные отзывы с Яндекс.Карт, Яндекс.Услуг, Harant.ru и Авито</p>
        </div>

        <div className="flex flex-col lg:flex-row flex-wrap items-center justify-center gap-2 mb-10">
          <button
            onClick={() => { setFilter('all'); resetAuto() }}
            className={`w-full lg:w-auto px-5 py-2 border-2 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
              filter === 'all'
                ? 'border-gold-400 bg-gold-400 text-navy-900'
                : 'border-white/20 text-white hover:border-gold-400'
            }`}
          >
            Все
          </button>
          <div className="grid grid-cols-2 lg:flex gap-2 w-full lg:w-auto">
            {FILTERS.filter(f => f.value !== 'all').map((f) => (
              <button
                key={f.value}
                onClick={() => { setFilter(f.value); resetAuto() }}
                className={`px-5 py-2 border-2 rounded-xl font-semibold text-sm transition-all flex items-center justify-center gap-2 ${
                  filter === f.value
                    ? 'border-gold-400 bg-gold-400 text-navy-900'
                    : 'border-white/20 text-white hover:border-gold-400'
                }`}
              >
                {f.icon && <img src={f.icon} alt="" loading="lazy" className="w-5 h-5" />}
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="text-center text-gray-300">Нет отзывов в этой категории</p>
        ) : (
          <div className="relative">
            <button
              onClick={() => { prev(); resetAuto() }}
              aria-label="Предыдущий отзыв"
              className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors backdrop-blur-sm"
            >
              ←
            </button>
            <button
              onClick={() => { next(); resetAuto() }}
              aria-label="Следующий отзыв"
              className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white text-xl transition-colors backdrop-blur-sm"
            >
              →
            </button>

            <div
              ref={trackRef}
              className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory py-4 scrollbar-hide"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              {filtered.map((r, i) => {
                const letter = (r.name?.[0] || '?').toUpperCase()
                return (
                  <PhoneFrame key={r.id}>
                    <div className="snap-center">
                      <div className="px-5 pt-8 pb-3 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-navy-900 font-bold flex-shrink-0">{letter}</div>
                        <div className="min-w-0 flex-1">
                          <div className="font-semibold text-navy-900 text-sm truncate">{r.name}</div>
                          <div className="text-gray-600 text-xs truncate flex items-center gap-1">
                            {SOURCE_ICONS[r.source] && <img src={SOURCE_ICONS[r.source]} alt="" loading="lazy" className="w-4 h-4 flex-shrink-0" />}
                            {SOURCE_LABELS[r.source] || r.source}
                          </div>
                        </div>
                      </div>
                      <div className="px-5 pb-2 flex items-center gap-2">
                        <div className="flex text-yellow-400 text-sm">★★★★★</div>
                        <span className="text-gray-600 text-xs">{r.date}</span>
                      </div>
                      <div className="px-5 pb-6 flex-1">
                        <p className="text-gray-700 leading-relaxed text-sm">{r.text}</p>
                      </div>
                      <div className="px-5 pb-5 flex items-center gap-4 border-t border-gray-100 pt-3">
                        <button onClick={() => setActive(r)} className="text-navy-900 font-semibold text-xs hover:text-gold-500 transition-colors">
                          Читать полностью →
                        </button>
                      </div>
                    </div>
                  </PhoneFrame>
                )
              })}
            </div>

            <div className="flex items-center justify-center gap-2 mt-6">
              {filtered.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { scrollTo(i); resetAuto() }}
                  aria-label={`Отзыв ${i + 1}`}
                  className={`w-4 h-4 rounded-full transition-all ${i === current ? 'bg-gold-400 w-6' : 'bg-white/30 hover:bg-white/50'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {active && (
        <div className="fixed inset-0 z-[100] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActive(null)}>
          <div className="relative bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <button onClick={() => setActive(null)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-navy-900 z-10">✕</button>
            <div className="pt-8 pb-5 px-8 flex items-center gap-4 border-b border-gray-100">
              <div className="w-16 h-16 rounded-full bg-navy-900 flex items-center justify-center text-gold-400 font-bold text-2xl flex-shrink-0">{(active.name?.[0] || '?').toUpperCase()}</div>
              <div className="flex-1 min-w-0 pr-10">
                <div className="text-navy-900 font-bold text-lg truncate">{active.name}</div>
                <div className="text-gray-600 text-sm flex items-center gap-1.5">
                  {SOURCE_ICONS[active.source] && <img src={SOURCE_ICONS[active.source]} alt="" className="w-5 h-5" />}
                  {SOURCE_LABELS[active.source] || active.source} · {active.date}
                </div>
                <div className="flex text-yellow-400 mt-1">★★★★★</div>
              </div>
            </div>
            <div className="p-8 overflow-y-auto">
              <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">{active.text}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
