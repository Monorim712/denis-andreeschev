import { getPayload } from 'payload'
import config from '@/payload.config'

export async function getServices() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'services', sort: 'order', limit: 100 })
    if (docs.length > 0) return docs.map(s => ({ icon: s.icon, title: s.title, desc: s.description }))
  } catch {}
  return [
    { icon: 'description', title: 'Наследственные дела', desc: 'Вступление в наследство, оспаривание завещаний, раздел наследственного имущества.' },
    { icon: 'home_work', title: 'Раздел имущества', desc: 'Защита Ваших интересов при разделе квартир, бизнеса, автомобилей и накоплений.' },
    { icon: 'family_restroom', title: 'Споры о детях', desc: 'Определение места жительства ребёнка и порядка общения.' },
    { icon: 'account_balance_wallet', title: 'Алименты', desc: 'Взыскание, изменение размера, задолженность по алиментам.' },
    { icon: 'shield_person', title: 'Лишение родительских прав', desc: 'Лишение или ограничение родительских прав в интересах ребёнка.' },
    { icon: 'handshake', title: 'Досудебное урегулирование', desc: 'Мировые соглашения и медиация без судебных войн.' },
  ]
}

export async function getAdvantages() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'advantages', sort: 'order', limit: 100 })
    if (docs.length > 0) return docs.map(a => ({ title: a.title, desc: a.description }))
  } catch {}
  return [
    { title: '15+ лет судебной практики', desc: '<strong>Глубокое знание судебной практики</strong>.<br />500+ дел — это не теория, это опыт.' },
    { title: 'Активная позиция с первого дня', desc: 'Занимаю <strong>активную позицию в защите Ваших интересов</strong> — формирую встречные иски, подаю ходатайства, фиксирую доказательства. Пока другие «готовятся», я уже действую.' },
    { title: 'Узкая специализация — глубокие знания', desc: 'Семейное и наследственное право — <strong>моя узкая специализация</strong>, которая позволяет видеть то, что другие адвокаты даже не замечают.' },
    { title: 'Прозрачная стоимость услуг', desc: '<strong>Стоимость услуг адвоката фиксируется в договоре</strong>. Судебные расходы (экспертизы, госпошлины) зависят от хода дела — заранее предупрежу о возможных затратах.' },
    { title: 'Честная оценка перспектив', desc: 'Без прикрас <strong>максимально объективно доложу об обстоятельствах и перспективах</strong> дела — Вы не потратите деньги впустую и будете иметь чёткое представление о путях разрешения проблемы.' },
    { title: 'Всегда на связи', desc: '<strong>Вы всегда можете обратиться</strong> — отвечу, проконсультирую, поддержу. Потому что для Вас это не «рабочий вопрос» — это жизнь.' },
  ]
}

export async function getSteps() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'steps', sort: 'order', limit: 100 })
    if (docs.length > 0) return docs.map(s => ({ n: s.number, title: s.title, desc: s.description }))
  } catch {}
  return [
    { n: '1', title: 'Бесплатная консультация', desc: 'Оценим ситуацию, расскажем о рисках и перспективах. 15 минут — без обязательств.' },
    { n: '2', title: 'Анализ и стратегия', desc: 'Изучим документы, оценим риски, разработаем план действий.' },
    { n: '3', title: 'Досудебное урегулирование', desc: 'Пытаемся договориться мирно. В 40% случаев удаётся избежать суда.' },
    { n: '4', title: 'Сбор доказательств', desc: 'Фиксируем ваши права: чеки, переписки, свидетели.' },
    { n: '5', title: 'Судебное представительство', desc: 'Представляем ваши интересы в суде. Вам не обязательно присутствовать.' },
    { n: '6', title: 'Контроль исполнения', desc: 'Следим за исполнением решения суда. Работаем до результата.' },
  ]
}

export async function getFaq(page: 'main' | 'male' | 'female') {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'faq', where: { page: { equals: page } }, sort: 'order', limit: 100 })
    if (docs.length > 0) return docs.map(f => ({ q: f.question, a: f.answer }))
  } catch {}
  return null
}

export async function getReviews() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'reviews', where: { published: { equals: true } }, sort: '-date', limit: 100 })
    if (docs.length > 0) return docs.map(r => ({ id: r.id, name: r.name, source: r.source, date: r.date || '', text: r.text }))
  } catch {}
  return [
    { id: 1, name: 'Алексей М.', source: 'yandex-karty', date: '12.03.2025', text: 'Обращался к Денису Валерьевичу по вопросу раздела имущества при разводе. Очень грамотный специалист, всё объяснил простым языком, без лишней юридической воды. Дело выиграли, я остался доволен результатом. Рекомендую!' },
    { id: 2, name: 'Марина К.', source: 'yandex-uslugi', date: '05.02.2025', text: 'Денис Валерьевич помог мне с взысканием алиментов. Бывший муж скрывал доходы, но адвокат нашёл способ доказать реальный заработок. Теперь получаю справедливые алименты. Спасибо огромное!' },
    { id: 3, name: 'Ирина С.', source: 'harant', date: '18.01.2025', text: 'Разводилась через суд, муж был категорически против. Денис Валерьевич взял всё на себя — мне даже не пришлось появляться в суде. Развод оформили за 2 месяца. Профессионал своего дела.' },
    { id: 4, name: 'Дмитрий П.', source: 'avito', date: '22.12.2024', text: 'Обратился за помощью в определении порядка общения с ребёнком. Бывшая жена не давала видеться с сыном. Адвокат подготовил все документы, представил мои интересы в суде. Теперь вижу ребёнка регулярно. Очень благодарен!' },
    { id: 5, name: 'Елена В.', source: 'yandex-karty', date: '10.11.2024', text: 'Консультировалась по вопросу раздела квартиры. Денис Валерьевич сразу оценил шансы, рассказал все варианты. Выбрали оптимальную стратегию, в итоге получила свою долю. Честный и порядочный адвокат.' },
    { id: 6, name: 'Сергей Н.', source: 'yandex-uslugi', date: '03.10.2024', text: 'Нужна была помощь с уменьшением размера алиментов после рождения второго ребёнка в новой семье. Андреещев грамотно всё оформил, суд снизил алименты до справедливого размера.' },
    { id: 7, name: 'Анна Р.', source: 'harant', date: '15.09.2024', text: 'Обращалась по поводу лишения родительских прав бывшего мужа. Ситуация была сложная, но Денис Валерьевич нашёл подход. Дело выиграно, ребёнок в безопасности. Спасибо за профессионализм!' },
    { id: 8, name: 'Олег Т.', source: 'avito', date: '28.08.2024', text: 'Развод с разделом бизнеса — думал, это будет кошмар. Но адвокат Андреещев разложил всё по полочкам, предложил стратегию. В итоге удалось договориться на досудебном этапе. Сэкономил и нервы, и деньги.' },
  ]
}

export async function getCertificates() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'certificates', sort: 'order', limit: 100 })
    if (docs.length > 0) {
      return docs.map(c => {
        const img = c.image as any
        return { src: img?.url || `/media/${img?.filename}` || '', alt: c.title }
      })
    }
  } catch {}
  return [
    { src: '/images/certificates/gramota-new.webp', alt: 'Почётная грамота' },
    { src: '/images/certificates/certificate 1_page-0001.webp', alt: 'Сертификат 1' },
    { src: '/images/certificates/certificate 2_page-0001.webp', alt: 'Сертификат 2' },
    { src: '/images/certificates/certificate 3_page-0001.webp', alt: 'Сертификат 3' },
    { src: '/images/certificates/certificate 4_page-0001.webp', alt: 'Сертификат 4' },
    { src: '/images/certificates/certificate 5_page-0001.webp', alt: 'Сертификат 5' },
    { src: '/images/certificates/certificate 6_page-0001.webp', alt: 'Сертификат 6' },
  ]
}

export async function getPricing() {
  try {
    const payload = await getPayload({ config })
    const { docs } = await payload.find({ collection: 'pricing', sort: 'order', limit: 100 })
    if (docs.length > 0) return docs.map(p => ({ service: p.title, price: p.price, highlight: p.popular || false }))
  } catch {}
  return [
    { service: 'Первичная консультация по телефону', price: 'бесплатно', highlight: true },
    { service: 'Консультация юриста в офисе', price: 'от 2 000 ₽', highlight: false },
    { service: 'Помощь при расторжении брака', price: 'от 5 000 ₽', highlight: false },
    { service: 'Помощь при ограничении и лишении родительских прав', price: 'от 5 000 ₽', highlight: false },
    { service: 'Помощь при разделе совместно нажитого имущества', price: 'от 5 000 ₽', highlight: false },
    { service: 'Помощь при взыскании алиментов', price: 'от 3 000 ₽', highlight: false },
    { service: 'Помощь при установлении отцовства', price: 'от 2 500 ₽', highlight: false },
    { service: 'Разрешение семейных споров о порядке общения с детьми', price: 'от 5 000 ₽', highlight: false },
    { service: 'Составление исков о разделе совместного нажитого имущества', price: 'от 5 000 ₽', highlight: false },
    { service: 'Разрешение семейных споров о месте проживания детей', price: 'от 5 000 ₽', highlight: false },
    { service: 'Составление исков об определении порядка общения с детьми', price: 'от 5 000 ₽', highlight: false },
    { service: 'Помощь в восстановлении родительских прав', price: 'от 5 000 ₽', highlight: false },
    { service: 'Признание браков недействительными', price: 'от 10 000 ₽', highlight: false },
  ]
}

export async function getSiteSettings() {
  try {
    const payload = await getPayload({ config })
    const settings = await payload.findGlobal({ slug: 'site-settings' })
    return settings
  } catch {}
  return null
}
