import type { CollectionConfig } from 'payload'

export const Pricing: CollectionConfig = {
  slug: 'pricing',
  labels: { singular: 'Тариф', plural: 'Цены' },
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'price', 'popular', 'order'],
    group: 'Контент',
  },
  fields: [
    {
      name: 'title',
      label: 'Название',
      type: 'text',
      required: true,
    },
    {
      name: 'price',
      label: 'Цена',
      type: 'text',
      required: true,
      admin: { description: 'Например: от 3 000 ₽, 15 000 ₽, Бесплатно' },
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
    },
    {
      name: 'features',
      label: 'Что входит',
      type: 'array',
      fields: [
        { name: 'text', label: 'Пункт', type: 'text', required: true },
      ],
    },
    {
      name: 'popular',
      label: 'Популярный',
      type: 'checkbox',
      defaultValue: false,
      admin: { position: 'sidebar' },
    },
    {
      name: 'order',
      label: 'Порядок',
      type: 'number',
      defaultValue: 0,
      admin: { position: 'sidebar' },
    },
  ],
}
