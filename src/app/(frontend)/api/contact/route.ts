import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const SMTP_USER = process.env.SMTP_USER || 'denis.andreeschev2015@yandex.ru'
const SMTP_PASS = process.env.SMTP_PASS || ''
const NOTIFY_EMAIL = 'denis.andreeschev2015@yandex.ru'

export async function POST(request: Request) {
  try {
    const { name, phone, email, message, page } = await request.json()

    if (!name || !phone) {
      return NextResponse.json({ error: 'Имя и телефон обязательны' }, { status: 400 })
    }

    const digits = phone.replace(/\D/g, '')
    if (digits.length < 11) {
      return NextResponse.json({ error: 'Неверный номер телефона' }, { status: 400 })
    }

    if (!SMTP_PASS) {
      console.log('SMTP_PASS not set, logging form submission:', { name, phone, email, message, page })
      return NextResponse.json({ success: true })
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.yandex.ru',
      port: 465,
      secure: true,
      auth: { user: SMTP_USER, pass: SMTP_PASS },
    })

    const pageLabels: Record<string, string> = { male: 'Для мужчин', female: 'Для женщин', inheritance: 'Наследство', main: 'Главная' }
    const pageLabel = pageLabels[page] || 'Главная'

    await transporter.sendMail({
      from: `"Сайт адвоката" <${SMTP_USER}>`,
      to: NOTIFY_EMAIL,
      subject: `Новая заявка с сайта — ${name}`,
      html: `
        <h2>Новая заявка с сайта</h2>
        <table style="border-collapse:collapse;font-size:16px;">
          <tr><td style="padding:8px;font-weight:bold;">Имя:</td><td style="padding:8px;">${name}</td></tr>
          <tr><td style="padding:8px;font-weight:bold;">Телефон:</td><td style="padding:8px;"><a href="tel:${digits}">${phone}</a></td></tr>
          ${email ? `<tr><td style="padding:8px;font-weight:bold;">Email:</td><td style="padding:8px;">${email}</td></tr>` : ''}
          ${message ? `<tr><td style="padding:8px;font-weight:bold;">Сообщение:</td><td style="padding:8px;">${message}</td></tr>` : ''}
          <tr><td style="padding:8px;font-weight:bold;">Страница:</td><td style="padding:8px;">${pageLabel}</td></tr>
        </table>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (e: any) {
    console.error('Contact form error:', e)
    return NextResponse.json({ error: 'Ошибка отправки' }, { status: 500 })
  }
}
