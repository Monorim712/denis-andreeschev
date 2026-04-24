import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  labels: { singular: 'Медиа', plural: 'Медиа-библиотека' },
  access: {
    read: () => true,
  },
  upload: {
    staticDir: 'media',
    mimeTypes: ['image/*'],
    adminThumbnail: 'thumbnail',
    imageSizes: [
      { name: 'thumbnail', width: 300, height: 300, position: 'centre' },
      { name: 'medium', width: 800 },
    ],
  },
  admin: {
    useAsTitle: 'alt',
    listSearchableFields: ['alt', 'category'],
    group: 'Контент',
  },
  fields: [
    {
      name: 'alt',
      label: 'Описание (alt)',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      label: 'Категория',
      type: 'select',
      options: [
        { label: 'Фото адвоката', value: 'lawyer' },
        { label: 'Сертификаты', value: 'certificates' },
        { label: 'Иконки', value: 'icons' },
        { label: 'Фон', value: 'background' },
        { label: 'Прочее', value: 'other' },
      ],
      defaultValue: 'other',
    },
  ],
}
