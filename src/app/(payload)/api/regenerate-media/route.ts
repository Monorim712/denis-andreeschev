import { getPayload } from 'payload'
import config from '@/payload.config'
import { NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

export async function GET() {
  const payload = await getPayload({ config })
  const results: string[] = []

  const { docs } = await payload.find({ collection: 'media', limit: 100, depth: 0 })

  for (const doc of docs) {
    const filename = doc.filename as string
    if (!filename) continue

    const mediaDir = path.join(process.cwd(), 'media')
    const filePath = path.join(mediaDir, filename)

    if (!fs.existsSync(filePath)) {
      results.push(`SKIP ${filename}: file not found`)
      continue
    }

    try {
      const data = fs.readFileSync(filePath)
      const ext = path.extname(filename).toLowerCase()
      const mimetype = ext === '.webp' ? 'image/webp' : ext === '.jpg' || ext === '.jpeg' ? 'image/jpeg' : 'image/png'

      await payload.update({
        collection: 'media',
        id: doc.id,
        data: {},
        file: { data, name: filename, mimetype, size: data.length },
      })
      results.push(`OK ${filename}`)
    } catch (e: any) {
      results.push(`ERR ${filename}: ${e.message}`)
    }
  }

  return NextResponse.json({ total: docs.length, results })
}
