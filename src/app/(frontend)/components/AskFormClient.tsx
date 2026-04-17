'use client'

import { useState, type FormEvent, type KeyboardEvent, type ChangeEvent } from 'react'

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

export function AskFormClient() {
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('+7 ')
  const [sent, setSent] = useState(false)

  const onPhoneKey = (e: KeyboardEvent<HTMLInputElement>) => {
    const el = e.currentTarget
    if ((e.key === 'Backspace' || e.key === 'Delete') && (el.selectionStart ?? 0) <= 3) {
      e.preventDefault()
    }
  }

  const onPhoneChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(formatPhone(e.target.value))
  }

  const onPhoneFocus = () => {
    if (!phone || phone.length < 3) setPhone('+7 ')
  }

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => { setName(''); setPhone('+7 '); setSent(false) }, 2500)
  }

  return (
    <form onSubmit={onSubmit} className="flex flex-col sm:flex-row gap-3 max-w-3xl">
      <input
        type="tel"
        value={phone}
        onChange={onPhoneChange}
        onKeyDown={onPhoneKey}
        onFocus={onPhoneFocus}
        placeholder="+7 (___) ___-__-__"
        className="sm:w-56 rounded-xl bg-white/5 border border-white/15 px-5 py-4 text-white text-base placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-colors"
      />
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Имя"
        className="sm:w-56 rounded-xl bg-white/5 border border-white/15 px-5 py-4 text-white text-base placeholder-gray-500 focus:outline-none focus:border-gold-400 focus:bg-white/10 transition-colors"
      />
      <button
        type="submit"
        disabled={sent}
        className="btn-gold px-8 py-4 text-navy-900 font-bold text-base transition-transform hover:scale-[0.98] whitespace-nowrap disabled:opacity-70"
      >
        {sent ? 'Спасибо!' : 'Отправить'}
      </button>
    </form>
  )
}
