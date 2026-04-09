import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Настройки сайта',
  fields: [
    {
      name: 'heroTitle',
      label: 'Заголовок (Hero)',
      type: 'text',
      defaultValue: 'Адвокат Андреещев Денис',
    },
    {
      name: 'heroSubtitle',
      label: 'Подзаголовок',
      type: 'textarea',
      defaultValue: 'Профессиональная юридическая помощь',
    },
    {
      name: 'phone',
      label: 'Телефон',
      type: 'text',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'email',
    },
    {
      name: 'address',
      label: 'Адрес',
      type: 'text',
    },
    {
      name: 'aboutTitle',
      label: 'О себе — заголовок',
      type: 'text',
      defaultValue: 'Об адвокате',
    },
    {
      name: 'aboutText',
      label: 'О себе — текст',
      type: 'textarea',
      defaultValue: 'Адвокат с многолетним опытом работы. Специализируюсь на уголовных, гражданских и административных делах. Индивидуальный подход к каждому клиенту.',
    },
    {
      name: 'services',
      label: 'Услуги',
      type: 'array',
      fields: [
        { name: 'title', label: 'Название', type: 'text', required: true },
        { name: 'description', label: 'Описание', type: 'textarea' },
      ],
      defaultValue: [
        { title: 'Уголовные дела', description: 'Защита по уголовным делам на всех стадиях судопроизводства' },
        { title: 'Гражданские дела', description: 'Представительство в гражданских спорах, арбитражных делах' },
        { title: 'Административные дела', description: 'Защита прав в административном производстве' },
        { title: 'Консультации', description: 'Юридические консультации по любым правовым вопросам' },
      ],
    },
  ],
}
