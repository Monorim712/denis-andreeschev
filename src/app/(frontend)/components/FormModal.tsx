'use client'

import { useState, useEffect, type FormEvent, type KeyboardEvent, type ChangeEvent } from 'react'
import { createPortal } from 'react-dom'

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '')
  let rest = digits
  if (rest.startsWith('7')) rest = rest.slice(1)
  else if (rest.startsWith('8')) rest = rest.slice(1)
  rest = rest.slice(0, 10)

  let out = '+7 '
  if (rest.length > 0) out += '(' + rest.slice(0, 3)
  if (rest.length >= 3) out += ') ' + rest.slice(3, 6)
  if (rest.length >= 6) out += '-' + rest.slice(6, 8)
  if (rest.length >= 8) out += '-' + rest.slice(8, 10)
  return out
}

declare global {
  interface Window {
    ym?: (id: number, method: string, goal: string) => void
  }
}

type Props = {
  title: string
  buttonText: string
  className?: string
  page?: string
  children: React.ReactNode
}

export function FormModal({ title, buttonText, className, page, children }: Props) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+7 ')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  useEffect(() => {
    if (!open) return
    const onKey = (e: globalThis.KeyboardEvent) => { if (e.key === 'Escape') setOpen(false) }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKey); document.body.style.overflow = '' }
  }, [open])

  const onPhoneKey = (e: KeyboardEvent<HTMLInputElement>) => {
    const el = e.currentTarget
    if ((e.key === 'Backspace' || e.key === 'Delete') && (el.selectionStart ?? 0) <= 3) {
      e.preventDefault()
    }
  }

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 11) return

    setStatus('sending')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, phone, email, message, page: page || 'main' }),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      window.ym?.(108580980, 'reachGoal', 'form_submit')
    } catch {
      setStatus('error')
    }
  }

  const onClose = () => {
    setOpen(false)
    if (status === 'sent' || status === 'error') {
      setName('')
      setPhone('+7 ')
      setEmail('')
      setMessage('')
      setStatus('idle')
    }
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm overflow-y-auto no-scrollbar p-4" onClick={onClose}>
          <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl mx-auto min-h-0" style={{ marginTop: 'max(1rem, 3vh)', marginBottom: '160px' }} onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={onClose} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white z-10 text-lg">✕</button>

            <div className="bg-navy-900 px-8 pt-8 pb-6">
              <h3 className="font-serif text-2xl font-bold text-white pr-12">{title}</h3>
              <p className="text-gray-400 text-sm mt-2">Оставьте заявку и я свяжусь с Вами в ближайшее время</p>
            </div>

            {status === 'sent' ? (
              <div className="px-8 py-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                </div>
                <h4 className="font-serif text-xl font-bold text-navy-900 mb-2">Заявка отправлена!</h4>
                <p className="text-gray-500">Спасибо за обращение. Я свяжусь с Вами в ближайшее время.</p>
                <button type="button" onClick={onClose} className="mt-6 btn-gold px-8 py-3 text-navy-900 font-semibold text-sm">Закрыть</button>
              </div>
            ) : status === 'error' ? (
              <div className="px-8 py-12 text-center">
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </div>
                <h4 className="font-serif text-xl font-bold text-navy-900 mb-2">Ошибка отправки</h4>
                <p className="text-gray-500">Позвоните напрямую: <a href="tel:+79507770608" className="text-navy-900 font-semibold underline">8 (950) 777-06-08</a></p>
                <button type="button" onClick={() => setStatus('idle')} className="mt-6 btn-gold px-8 py-3 text-navy-900 font-semibold text-sm">Попробовать ещё раз</button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="px-8 py-6 pb-10 space-y-4">
                <div>
                  <label className="text-navy-900 text-sm font-semibold mb-1.5 block">Ваше имя</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder="Как к Вам обращаться?"
                    className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-navy-900 text-sm font-semibold mb-1.5 block">Телефон</label>
                  <input
                    type="tel"
                    value={phone}
                    onChange={onPhoneChange}
                    onKeyDown={onPhoneKey}
                    onFocus={() => { if (!phone || phone.length < 3) setPhone('+7 ') }}
                    required
                    placeholder="+7 (___) ___-__-__"
                    className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-navy-900 text-sm font-semibold mb-1.5 block">Электронная почта <span className="text-gray-400 font-normal">(необязательно)</span></label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="example@mail.ru"
                    className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-navy-900 text-sm font-semibold mb-1.5 block">Сообщение <span className="text-gray-400 font-normal">(необязательно)</span></label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Кратко опишите Вашу ситуацию"
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="w-full btn-gold py-4 text-navy-900 font-bold text-base transition-transform hover:scale-[0.98] disabled:opacity-70"
                >
                  {status === 'sending' ? 'Отправка...' : buttonText}
                </button>
                <p className="text-gray-400 text-xs text-center">
                  Нажимая кнопку, Вы соглашаетесь с{' '}
                  <a href="/data-processing" className="text-navy-900 underline hover:text-gold-500">политикой обработки персональных данных</a>{' '}и даёте{' '}
                  <a href="/consent" className="text-navy-900 underline hover:text-gold-500">согласие на обработку персональных данных</a>
                </p>
              </form>
            )}
          </div>
        </div>,
        document.body
      )}
    </>
  )
}
