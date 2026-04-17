import type { CollectionConfig } from 'payload'

export const Steps: CollectionConfig = {
  slug: 'steps',
  labels: { singular: 'Этап', plural: 'Этапы работы' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['number', 'title', 'order'],
    group: 'Контент',
  },
  fields: [
    {
      name: 'number',
      label: 'Номер этапа',
      type: 'text',
      required: true,
      admin: { description: 'Например: 1, 2, 3...' },
    },
    {
      name: 'title',
      label: 'Заголовок',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      label: 'Описание',
      type: 'textarea',
      required: true,
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
