import type { GlobalConfig } from 'payload'

export const SiteSettings: GlobalConfig = {
  slug: 'site-settings',
  label: 'Настройки сайта',
  fields: [
    // === Контакты ===
    {
      name: 'contacts',
      label: 'Контактная информация',
      type: 'group',
      fields: [
        { name: 'phone1', label: 'Телефон основной', type: 'text', defaultValue: '8 (920) 413-00-96' },
        { name: 'phone2', label: 'Телефон дополнительный', type: 'text', defaultValue: '8 (950) 777-06-08' },
        { name: 'email', label: 'Email', type: 'email', defaultValue: 'denis.andreeschev2015@yandex.ru' },
        { name: 'address', label: 'Адрес', type: 'text', defaultValue: 'г. Воронеж, Московский проспект, д. 90' },
        { name: 'telegram', label: 'Telegram ссылка', type: 'text', defaultValue: 'https://t.me/' },
        { name: 'maxLink', label: 'Max ссылка', type: 'text', defaultValue: 'https://max.ru/' },
        { name: 'mapEmbed', label: 'Код карты (iframe src)', type: 'textarea', defaultValue: 'https://yandex.ru/map-widget/v1/?um=constructor%3A1&source=constructor&ll=39.2199%2C51.6615&z=16&pt=39.2199%2C51.6615%2Cpm2rdm' },
      ],
    },
    // === Hero секция ===
    {
      name: 'hero',
      label: 'Главная — Шапка (Hero)',
      type: 'group',
      fields: [
        { name: 'name1', label: 'Имя (первая строка)', type: 'text', defaultValue: 'Денис' },
        { name: 'name2', label: 'Фамилия (вторая строка)', type: 'text', defaultValue: 'Андреещев' },
        { name: 'sideText1', label: 'Текст справа (строка 1)', type: 'text', defaultValue: 'Защита того,' },
        { name: 'sideText2', label: 'Текст справа (строка 2)', type: 'text', defaultValue: 'что дороже' },
        { name: 'sideText3', label: 'Текст справа (строка 3)', type: 'text', defaultValue: 'всего!' },
        { name: 'ctaButton', label: 'Текст кнопки', type: 'text', defaultValue: 'Бесплатная консультация' },
        { name: 'heroImage', label: 'Фото в шапке', type: 'upload', relationTo: 'media' },
      ],
    },
    // === Статистика ===
    {
      name: 'stats',
      label: 'Главная — Статистика',
      type: 'array',
      maxRows: 4,
      fields: [
        { name: 'value', label: 'Число', type: 'text', required: true },
        { name: 'label', label: 'Подпись', type: 'text', required: true },
      ],
      defaultValue: [
        { value: '10+', label: 'Лет практики' },
        { value: '500+', label: 'Выигранных дел' },
        { value: '98%', label: 'Довольных клиентов' },
        { value: '24/7', label: 'На связи' },
      ],
    },
    // === О себе ===
    {
      name: 'about',
      label: 'Главная — Об адвокате',
      type: 'group',
      fields: [
        { name: 'subtitle', label: 'Подзаголовок', type: 'text', defaultValue: 'Адвокат по семейным спорам' },
        { name: 'title', label: 'Имя', type: 'text', defaultValue: 'Андреещев Денис' },
        { name: 'titleAccent', label: 'Имя (золотой)', type: 'text', defaultValue: 'Валерьевич' },
        { name: 'text1', label: 'Абзац 1', type: 'textarea' },
        { name: 'text2', label: 'Абзац 2', type: 'textarea' },
        { name: 'text3', label: 'Абзац 3', type: 'textarea' },
        { name: 'regNumber', label: 'Рег. номер', type: 'text', defaultValue: 'Адвокат, рег. номер 36/2348 в реестре адвокатов Воронежской области' },
        { name: 'photo', label: 'Фото', type: 'upload', relationTo: 'media' },
      ],
    },
    // === CTA секция ===
    {
      name: 'cta',
      label: 'Главная — Блок консультации (CTA)',
      type: 'group',
      fields: [
        { name: 'oldPrice', label: 'Старая цена', type: 'text', defaultValue: '3 000 ₽' },
        { name: 'newPrice', label: 'Новая цена', type: 'text', defaultValue: 'Бесплатно' },
        { name: 'priceNote', label: 'Примечание', type: 'text', defaultValue: '/ первичная консультация — 15 минут' },
        { name: 'title', label: 'Заголовок', type: 'text', defaultValue: '15 минут, которые могут сэкономить вам миллионы' },
        { name: 'points', label: 'Пункты', type: 'array', fields: [
          { name: 'text', label: 'Текст', type: 'text', required: true },
        ]},
        { name: 'ctaPhoto', label: 'Фото', type: 'upload', relationTo: 'media' },
      ],
    },
    // === Лендинг мужчин ===
    {
      name: 'malePage',
      label: 'Страница — Для мужчин',
      type: 'group',
      fields: [
        { name: 'heroTitle', label: 'Заголовок Hero', type: 'text', defaultValue: 'Защищаю права мужчин при разводе' },
        { name: 'heroSubtitle', label: 'Подзаголовок Hero', type: 'textarea', defaultValue: 'Сохраню ваше имущество, бизнес и право на общение с детьми. Без эмоций — только закон и стратегия.' },
        { name: 'heroImage', label: 'Фото Hero', type: 'upload', relationTo: 'media' },
        { name: 'quoteTitle', label: 'Заголовок цитаты', type: 'text', defaultValue: 'Вы не одиноки в этом' },
        { name: 'quoteText1', label: 'Цитата абзац 1', type: 'textarea' },
        { name: 'quoteText2', label: 'Цитата абзац 2', type: 'textarea' },
        { name: 'quotePhoto', label: 'Фото цитаты', type: 'upload', relationTo: 'media' },
        { name: 'ctaTitle', label: 'CTA заголовок', type: 'text', defaultValue: 'Каждый день промедления — в пользу другой стороны' },
        { name: 'painPoints', label: 'Боли клиентов', type: 'array', fields: [
          { name: 'icon', label: 'Иконка', type: 'text', required: true },
          { name: 'title', label: 'Заголовок', type: 'text', required: true },
          { name: 'text', label: 'Текст (HTML)', type: 'textarea', required: true },
        ]},
        { name: 'whatIDo', label: 'Что я сделаю', type: 'array', fields: [
          { name: 'text', label: 'Пункт', type: 'text', required: true },
        ]},
      ],
    },
    // === Лендинг женщин ===
    {
      name: 'femalePage',
      label: 'Страница — Для женщин',
      type: 'group',
      fields: [
        { name: 'heroTitle', label: 'Заголовок Hero', type: 'text', defaultValue: 'Защищаю права женщин при разводе' },
        { name: 'heroSubtitle', label: 'Подзаголовок Hero', type: 'textarea', defaultValue: 'Добьюсь справедливых алиментов, защищу ваше имущество и обеспечу стабильность для вас и детей.' },
        { name: 'heroImage', label: 'Фото Hero', type: 'upload', relationTo: 'media' },
        { name: 'quoteTitle', label: 'Заголовок цитаты', type: 'text', defaultValue: 'Я понимаю, через что Вы проходите' },
        { name: 'quoteText1', label: 'Цитата абзац 1', type: 'textarea' },
        { name: 'quoteText2', label: 'Цитата абзац 2', type: 'textarea' },
        { name: 'quotePhoto', label: 'Фото цитаты', type: 'upload', relationTo: 'media' },
        { name: 'ctaTitle', label: 'CTA заголовок', type: 'text', defaultValue: 'Не ждите, пока он спрячет имущество' },
        { name: 'painPoints', label: 'Боли клиентов', type: 'array', fields: [
          { name: 'icon', label: 'Иконка', type: 'text', required: true },
          { name: 'title', label: 'Заголовок', type: 'text', required: true },
          { name: 'text', label: 'Текст (HTML)', type: 'textarea', required: true },
        ]},
        { name: 'whatIDo', label: 'Что я сделаю', type: 'array', fields: [
          { name: 'text', label: 'Пункт', type: 'text', required: true },
        ]},
      ],
    },
    // === SEO ===
    {
      name: 'seo',
      label: 'SEO настройки',
      type: 'group',
      fields: [
        { name: 'mainTitle', label: 'Title главной', type: 'text', defaultValue: 'Адвокат Андреещев — семейные дела в Воронеже' },
        { name: 'mainDescription', label: 'Description главной', type: 'textarea', defaultValue: 'Адвокат по семейным делам в Воронеже. Развод, раздел имущества, алименты, споры о детях.' },
        { name: 'maleTitle', label: 'Title мужской', type: 'text' },
        { name: 'maleDescription', label: 'Description мужской', type: 'textarea' },
        { name: 'femaleTitle', label: 'Title женской', type: 'text' },
        { name: 'femaleDescription', label: 'Description женской', type: 'textarea' },
      ],
    },
  ],
}
