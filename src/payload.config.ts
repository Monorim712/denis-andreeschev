import { buildConfig } from 'payload'
import { sqliteAdapter } from '@payloadcms/db-sqlite'
import { lexicalEditor } from '@payloadcms/richtext-lexical'
import { ru } from '@payloadcms/translations/languages/ru'
import sharp from 'sharp'
import path from 'path'
import { fileURLToPath } from 'url'
import { Users } from './collections/Users'
import { Media } from './collections/Media'
import { Services } from './collections/Services'
import { Reviews } from './collections/Reviews'
import { Certificates } from './collections/Certificates'
import { FAQ } from './collections/FAQ'
import { Steps } from './collections/Steps'
import { Pricing } from './collections/Pricing'
import { SiteSettings } from './globals/SiteSettings'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [Users, Media, Services, Reviews, Certificates, FAQ, Steps, Pricing],
  globals: [SiteSettings],
  editor: lexicalEditor(),
  i18n: {
    supportedLanguages: { ru },
    fallbackLanguage: 'ru',
  },
  localization: {
    locales: ['ru'],
    defaultLocale: 'ru',
  },
  secret: process.env.PAYLOAD_SECRET || 'andreeschev-super-secret-key-change-me',
  typescript: {
    outputFile: path.resolve(dirname, 'payload-types.ts'),
  },
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || 'file:./database.db',
    },
  }),
  sharp,
})
