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

type Props = {
  title: string
  buttonText: string
  className?: string
  children: React.ReactNode
}

export function FormModal({ title, buttonText, className, children }: Props) {
  const [open, setOpen] = useState(false)
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+7 ')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

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

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const digits = phone.replace(/\D/g, '')
    if (digits.length < 11) return
    setSent(true)
    setTimeout(() => {
      setName('')
      setPhone('+7 ')
      setEmail('')
      setMessage('')
      setSent(false)
      setOpen(false)
    }, 2000)
  }

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        {children}
      </button>

      {open && createPortal(
        <div className="fixed inset-0 z-[9999] bg-black/70 backdrop-blur-sm overflow-y-auto no-scrollbar p-4" onClick={() => setOpen(false)}>
          <div className="relative bg-white rounded-2xl max-w-md w-full shadow-2xl mx-auto min-h-0" style={{ marginTop: 'max(1rem, 3vh)', marginBottom: '160px' }} onClick={(e) => e.stopPropagation()}>
            <button type="button" onClick={() => setOpen(false)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white z-10 text-lg">✕</button>

            <div className="bg-navy-900 px-8 pt-8 pb-6">
              <h3 className="font-serif text-2xl font-bold text-white pr-12">{title}</h3>
              <p className="text-gray-400 text-sm mt-2">Оставьте заявку и я свяжусь с вами в ближайшее время</p>
            </div>

            {sent ? (
              <div className="px-8 py-12 text-center">
                <div className="text-5xl mb-4">✓</div>
                <h4 className="font-serif text-xl font-bold text-navy-900 mb-2">Заявка отправлена!</h4>
                <p className="text-gray-500">Я свяжусь с вами в ближайшее время</p>
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
                    placeholder="Как к вам обращаться?"
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
                    placeholder="Кратко опишите вашу ситуацию"
                    rows={3}
                    className="w-full rounded-xl border border-gray-200 px-5 py-3.5 text-navy-900 placeholder-gray-400 focus:outline-none focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full btn-gold py-4 text-navy-900 font-bold text-base transition-transform hover:scale-[0.98]"
                >
                  {buttonText}
                </button>
                <p className="text-gray-400 text-xs text-center">
                  Нажимая кнопку, вы соглашаетесь с{' '}
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
