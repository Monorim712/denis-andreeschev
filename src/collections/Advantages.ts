import type { CollectionConfig } from 'payload'

export const Advantages: CollectionConfig = {
  slug: 'advantages',
  labels: { singular: 'Преимущество', plural: 'Преимущества' },
  access: { read: () => true },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order'],
    group: 'Контент',
  },
  fields: [
    {
      name: 'title',
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Описание (HTML)',
      type: 'textarea',
      required: true,
      admin: { description: 'Можно использовать <strong>, <br /> для форматирования' },
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
