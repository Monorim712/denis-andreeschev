import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

async function uploadImage(
  payload: any,
  filePath: string,
  alt: string,
  category: string,
) {
  const data = fs.readFileSync(filePath)
  const name = path.basename(filePath)
  const ext = path.extname(name).toLowerCase()
  const mimetype = ext === '.webp' ? 'image/webp' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png'

  const doc = await payload.create({
    collection: 'media',
    data: { alt, category },
    file: { data, name, mimetype, size: data.length },
  })
  return doc.id
}

export async function GET() {
  const payload = await getPayload({ config })
  const results: string[] = []
  const mediaIds: Record<string, number> = {}

  const publicDir = path.join(process.cwd(), 'public', 'images')

  const { totalDocs } = await payload.count({ collection: 'media' })
  if (totalDocs > 0) {
    return NextResponse.json({ results: ['Media already seeded, skipping. Delete all media first to re-seed.'] })
  }

  // === Upload photos ===
  const photos: Array<{ file: string; alt: string; category: string; key: string }> = [
    { file: 'photos/hero-main.webp', alt: 'Адвокат Андреещев — главное фото', category: 'lawyer', key: 'heroMain' },
    { file: 'photos/about.webp', alt: 'Адвокат Андреещев — фото для блока О себе', category: 'lawyer', key: 'about' },
    { file: 'photos/cta-photo.webp', alt: 'Адвокат Андреещев — консультация', category: 'lawyer', key: 'ctaPhoto' },
    { file: 'photos/hero-male.webp', alt: 'Адвокат Андреещев — страница для мужчин', category: 'lawyer', key: 'heroMale' },
    { file: 'photos/hero-female.webp', alt: 'Адвокат Андреещев — страница для женщин', category: 'lawyer', key: 'heroFemale' },
    { file: 'photos/quote-male.webp', alt: 'Цитата — мужская страница', category: 'lawyer', key: 'quoteMale' },
    { file: 'photos/quote-female.webp', alt: 'Цитата — женская страница', category: 'lawyer', key: 'quoteFemale' },
    { file: 'photos/quote-male-white.webp', alt: 'Цитата (белый фон) — мужская', category: 'lawyer', key: 'quoteMaleWhite' },
    { file: 'photos/quote-female-white.webp', alt: 'Цитата (белый фон) — женская', category: 'lawyer', key: 'quoteFemaleWhite' },
    { file: 'photos/gender-male.webp', alt: 'Мужчина — выбор страницы', category: 'lawyer', key: 'genderMale' },
    { file: 'photos/gender-female.webp', alt: 'Женщина — выбор страницы', category: 'lawyer', key: 'genderFemale' },
    { file: 'photos/advantages-bg.webp', alt: 'Фон — секция преимуществ', category: 'background', key: 'advantagesBg' },
    { file: 'photos/steps-bg.webp', alt: 'Фон — секция шагов', category: 'background', key: 'stepsBg' },
    { file: 'photos/scales.webp', alt: 'Весы правосудия', category: 'background', key: 'scales' },
  ]

  for (const p of photos) {
    const filePath = path.join(publicDir, p.file)
    if (!fs.existsSync(filePath)) {
      results.push(`SKIP: ${p.file} not found`)
      continue
    }
    try {
      mediaIds[p.key] = await uploadImage(payload, filePath, p.alt, p.category)
      results.push(`Uploaded: ${p.file}`)
    } catch (e: any) { results.push(`ERROR ${p.file}: ${e.message}`) }
  }

  // === Upload logos ===
  for (const logo of ['logo.webp', 'logo-white.webp']) {
    const filePath = path.join(publicDir, logo)
    if (!fs.existsSync(filePath)) continue
    try {
      mediaIds[logo.replace('.webp', '').replace('-', '')] = await uploadImage(
        payload, filePath, logo === 'logo.webp' ? 'Логотип' : 'Логотип (белый)', 'other',
      )
      results.push(`Uploaded: ${logo}`)
    } catch (e: any) { results.push(`ERROR ${logo}: ${e.message}`) }
  }

  // === Upload icons ===
  const icons: Array<{ file: string; alt: string }> = [
    { file: 'icons/avito.webp', alt: 'Авито' },
    { file: 'icons/harant.webp', alt: 'Гарант' },
    { file: 'icons/max-icon.webp', alt: 'Max (иконка)' },
    { file: 'icons/max.webp', alt: 'Max' },
    { file: 'icons/yandex-karty.webp', alt: 'Яндекс Карты' },
    { file: 'icons/yandex-uslugi.webp', alt: 'Яндекс Услуги' },
  ]

  for (const ic of icons) {
    const filePath = path.join(publicDir, ic.file)
    if (!fs.existsSync(filePath)) continue
    try {
      await uploadImage(payload, filePath, ic.alt, 'icons')
      results.push(`Uploaded: ${ic.file}`)
    } catch (e: any) { results.push(`ERROR ${ic.file}: ${e.message}`) }
  }

  // === Upload certificates and create Certificate entries ===
  const certs: Array<{ file: string; title: string; order: number }> = [
    { file: 'certificates/gramota-new.webp', title: 'Грамота', order: 1 },
    { file: 'certificates/certificate 1_page-0001.webp', title: 'Сертификат 1', order: 2 },
    { file: 'certificates/certificate 2_page-0001.webp', title: 'Сертификат 2', order: 3 },
    { file: 'certificates/certificate 3_page-0001.webp', title: 'Сертификат 3', order: 4 },
    { file: 'certificates/certificate 4_page-0001.webp', title: 'Сертификат 4', order: 5 },
    { file: 'certificates/certificate 5_page-0001.webp', title: 'Сертификат 5', order: 6 },
    { file: 'certificates/certificate 6_page-0001.webp', title: 'Сертификат 6', order: 7 },
    { file: 'certificates/diplom.webp', title: 'Диплом', order: 8 },
    { file: 'certificates/udostoverenie.webp', title: 'Удостоверение адвоката', order: 9 },
  ]

  const { totalDocs: existingCerts } = await payload.count({ collection: 'certificates' })

  for (const cert of certs) {
    const filePath = path.join(publicDir, cert.file)
    if (!fs.existsSync(filePath)) {
      results.push(`SKIP cert: ${cert.file} not found`)
      continue
    }
    try {
      const imgId = await uploadImage(payload, filePath, cert.title, 'certificates')
      if (existingCerts === 0) {
        await payload.create({
          collection: 'certificates',
          data: { title: cert.title, image: imgId, order: cert.order },
        })
      }
      results.push(`Certificate: ${cert.title}`)
    } catch (e: any) { results.push(`ERROR cert ${cert.file}: ${e.message}`) }
  }
  if (existingCerts === 0) {
    results.push('Certificates collection: created')
  } else {
    results.push('Certificates collection: already exists, media uploaded but entries not recreated')
  }

  // === Update SiteSettings with media references (merge with existing) ===
  try {
    const current = await payload.findGlobal({ slug: 'site-settings' }) as any
    const updateData: any = {}

    if (mediaIds.heroMain) {
      updateData.hero = { ...(current.hero || {}), heroImage: mediaIds.heroMain }
    }
    if (mediaIds.about) {
      updateData.about = { ...(current.about || {}), photo: mediaIds.about }
    }
    if (mediaIds.ctaPhoto) {
      updateData.cta = { ...(current.cta || {}), ctaPhoto: mediaIds.ctaPhoto }
    }
    if (mediaIds.heroMale || mediaIds.quoteMale) {
      updateData.malePage = {
        ...(current.malePage || {}),
        ...(mediaIds.heroMale ? { heroImage: mediaIds.heroMale } : {}),
        ...(mediaIds.quoteMale ? { quotePhoto: mediaIds.quoteMale } : {}),
      }
    }
    if (mediaIds.heroFemale || mediaIds.quoteFemale) {
      updateData.femalePage = {
        ...(current.femalePage || {}),
        ...(mediaIds.heroFemale ? { heroImage: mediaIds.heroFemale } : {}),
        ...(mediaIds.quoteFemale ? { quotePhoto: mediaIds.quoteFemale } : {}),
      }
    }

    if (Object.keys(updateData).length) {
      await payload.updateGlobal({ slug: 'site-settings', data: updateData })
      results.push('SiteSettings: updated with media references')
    }
  } catch (e: any) { results.push(`SiteSettings update: ${e.message}`) }

  return NextResponse.json({ results })
}
