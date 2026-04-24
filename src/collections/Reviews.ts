import type { CollectionConfig } from 'payload'

export const Reviews: CollectionConfig = {
  slug: 'reviews',
  labels: { singular: 'Отзыв', plural: 'Отзывы' },
  access: { read: () => true },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'source', 'date', 'rating'],
    group: 'Контент',
  },
  fields: [
    {
      name: 'name',
      label: 'Имя клиента',
      type: 'text',
      required: true,
    },
    {
      name: 'text',
      label: 'Текст отзыва',
      type: 'textarea',
      required: true,
    },
    {
      name: 'source',
      label: 'Источник',
      type: 'select',
      options: [
        { label: 'Яндекс Карты', value: 'yandex-karty' },
        { label: 'Яндекс Услуги', value: 'yandex-uslugi' },
        { label: 'Harant.ru', value: 'harant' },
        { label: 'Avito', value: 'avito' },
      ],
      required: true,
    },
    {
      name: 'rating',
      label: 'Оценка (1-5)',
      type: 'number',
      min: 1,
      max: 5,
      defaultValue: 5,
    },
    {
      name: 'date',
      label: 'Дата',
      type: 'text',
      admin: { description: 'Формат: дд.мм.гггг' },
    },
    {
      name: 'published',
      label: 'Опубликован',
      type: 'checkbox',
      defaultValue: true,
      admin: { position: 'sidebar' },
    },
  ],
}
