import type { CollectionConfig } from 'payload'

export const FAQ: CollectionConfig = {
  slug: 'faq',
  labels: { singular: 'Вопрос', plural: 'Частые вопросы (FAQ)' },
  access: { read: () => true },
  admin: {
    useAsTitle: 'question',
    defaultColumns: ['question', 'page', 'order'],
    group: 'Контент',
  },
  fields: [
    {
      name: 'question',
      label: 'Вопрос',
      type: 'text',
      required: true,
    },
    {
      name: 'answer',
      label: 'Ответ',
      type: 'textarea',
      required: true,
    },
    {
      name: 'page',
      label: 'Страница',
      type: 'select',
      options: [
        { label: 'Главная', value: 'main' },
        { label: 'Для мужчин', value: 'male' },
        { label: 'Для женщин', value: 'female' },
      ],
      required: true,
      defaultValue: 'main',
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
