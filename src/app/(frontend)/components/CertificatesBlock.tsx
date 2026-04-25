'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

type Certificate = {
  src: string
  alt: string
}

export function CertificatesBlock({ certificates }: { certificates: Certificate[] }) {
  const [doc, setDoc] = useState<Certificate | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const sectionRef = useRef<HTMLElement>(null)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const visibleRef = useRef(true)

  const total = certificates.length
  const CARD_W = 280

  const scrollNext = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    const maxScroll = track.scrollWidth - track.clientWidth
    if (track.scrollLeft >= maxScroll - 10) {
      track.scrollTo({ left: 0, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: CARD_W, behavior: 'smooth' })
    }
  }, [CARD_W])

  const scrollPrev = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    if (track.scrollLeft <= 10) {
      track.scrollTo({ left: track.scrollWidth, behavior: 'smooth' })
    } else {
      track.scrollBy({ left: -CARD_W, behavior: 'smooth' })
    }
  }, [CARD_W])

  const startAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    if (!visibleRef.current) return
    autoRef.current = setInterval(scrollNext, 3000)
  }, [scrollNext])

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(scrollNext, 3000)
  }, [scrollNext])

  useEffect(() => {
    if (total === 0 || !sectionRef.current) return
    const observer = new IntersectionObserver(([entry]) => {
      visibleRef.current = entry.isIntersecting
      if (entry.isIntersecting) {
        startAuto()
      } else {
        if (autoRef.current) clearInterval(autoRef.current)
      }
    }, { threshold: 0.1 })
    observer.observe(sectionRef.current)
    return () => { observer.disconnect(); if (autoRef.current) clearInterval(autoRef.current) }
  }, [total, startAuto])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return
    let timeout: ReturnType<typeof setTimeout>
    const onScroll = () => {
      if (autoRef.current) clearInterval(autoRef.current)
      clearTimeout(timeout)
      timeout = setTimeout(startAuto, 3000)
    }
    track.addEventListener('scroll', onScroll, { passive: true })
    return () => { track.removeEventListener('scroll', onScroll); clearTimeout(timeout) }
  }, [startAuto])

  useEffect(() => {
    if (!doc) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDoc(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [doc])

  return (
    <section id="credentials" ref={sectionRef} className="py-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Образование и сертификаты</h2>
          <p className="text-gray-500">Подтверждение квалификации и профессионального развития</p>
        </div>

        <div className="relative">
          <button
            onClick={() => { scrollPrev(); resetAuto() }}
            aria-label="Предыдущий сертификат"
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy-900/70 hover:bg-navy-900 flex items-center justify-center text-white text-xl transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => { scrollNext(); resetAuto() }}
            aria-label="Следующий сертификат"
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy-900/70 hover:bg-navy-900 flex items-center justify-center text-white text-xl transition-colors"
          >
            →
          </button>

          <div
            ref={trackRef}
            className="flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory py-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {certificates.map((cert, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setDoc(cert)}
                className="flex-shrink-0 w-64 h-80 overflow-hidden cursor-pointer relative group snap-center"
                style={{ border: '6px solid #3A4A2C', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                aria-label={`Открыть ${cert.alt}`}
              >
                <img src={cert.src} alt={cert.alt} loading="lazy" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-navy-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-3xl">🔍</span>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {doc && (
        <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setDoc(null)}>
          <div className="relative max-w-3xl max-h-[90vh] mx-4" onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setDoc(null)} className="absolute -top-12 right-0 text-white hover:text-gold-400 transition-colors text-3xl" aria-label="Закрыть">✕</button>
            <img src={doc.src} alt={doc.alt} className="max-w-full max-h-[85vh] rounded-2xl shadow-2xl" />
          </div>
        </div>
      )}
    </section>
  )
}
