'use client'

import { useEffect, useRef, useState, useCallback } from 'react'

type Certificate = {
  src: string
  alt: string
}

export function CertificatesBlock({ certificates }: { certificates: Certificate[] }) {
  const [doc, setDoc] = useState<Certificate | null>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef = useRef(0)
  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null)
  const touchRef = useRef<{ x: number; y: number } | null>(null)

  const total = certificates.length
  const slides = total > 0 ? [...certificates, ...certificates.slice(0, Math.min(3, total))] : []
  const CARD_W = 256 + 24

  const moveTo = useCallback((pos: number) => {
    const track = trackRef.current
    if (!track) return
    posRef.current = pos
    track.style.transition = 'transform 0.7s ease-in-out'
    track.style.transform = `translateX(-${pos * CARD_W}px)`
    if (pos >= total) {
      setTimeout(() => {
        track.style.transition = 'none'
        posRef.current = 0
        track.style.transform = 'translateX(0)'
      }, 750)
    }
  }, [total, CARD_W])

  const goNext = useCallback(() => {
    moveTo(posRef.current + 1)
  }, [moveTo])

  const goPrev = useCallback(() => {
    if (posRef.current <= 0) {
      const track = trackRef.current
      if (!track) return
      track.style.transition = 'none'
      posRef.current = total
      track.style.transform = `translateX(-${total * CARD_W}px)`
      requestAnimationFrame(() => moveTo(total - 1))
    } else {
      moveTo(posRef.current - 1)
    }
  }, [moveTo, total, CARD_W])

  const resetAuto = useCallback(() => {
    if (autoRef.current) clearInterval(autoRef.current)
    autoRef.current = setInterval(goNext, 3000)
  }, [goNext])

  useEffect(() => {
    if (total === 0) return
    autoRef.current = setInterval(goNext, 3000)
    return () => { if (autoRef.current) clearInterval(autoRef.current) }
  }, [total, goNext])

  const onTouchStart = useCallback((e: React.TouchEvent) => {
    touchRef.current = { x: e.touches[0].clientX, y: e.touches[0].clientY }
  }, [])

  const onTouchEnd = useCallback((e: React.TouchEvent) => {
    if (!touchRef.current) return
    const dx = e.changedTouches[0].clientX - touchRef.current.x
    const dy = e.changedTouches[0].clientY - touchRef.current.y
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 40) {
      if (dx < 0) goNext()
      else goPrev()
      resetAuto()
    }
    touchRef.current = null
  }, [goNext, goPrev, resetAuto])

  useEffect(() => {
    if (!doc) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setDoc(null) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [doc])

  return (
    <section id="credentials" className="py-12 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <div className="gold-line mx-auto mb-6" />
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Образование и сертификаты</h2>
          <p className="text-gray-500">Подтверждение квалификации и профессионального развития</p>
        </div>

        <div className="relative overflow-hidden">
          <button
            onClick={() => { goPrev(); resetAuto() }}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy-900/70 hover:bg-navy-900 flex items-center justify-center text-white text-xl transition-colors"
          >
            ←
          </button>
          <button
            onClick={() => { goNext(); resetAuto() }}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-navy-900/70 hover:bg-navy-900 flex items-center justify-center text-white text-xl transition-colors"
          >
            →
          </button>

          <div ref={trackRef} className="flex gap-6" style={{ willChange: 'transform' }} onTouchStart={onTouchStart} onTouchEnd={onTouchEnd}>
            {slides.map((cert, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setDoc(cert)}
                className="flex-shrink-0 w-64 h-80 overflow-hidden cursor-pointer relative group"
                style={{ border: '6px solid #3A4A2C', borderRadius: '16px', boxShadow: '0 8px 24px rgba(0,0,0,0.2)' }}
                aria-label={`Открыть ${cert.alt}`}
              >
                <img src={cert.src} alt={cert.alt} className="w-full h-full object-cover" />
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
