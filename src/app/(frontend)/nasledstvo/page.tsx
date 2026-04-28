import type { Metadata } from 'next'
import Image from 'next/image'
import { FormModal } from '../components/FormModal'
import { MobileToolbar } from '../components/MobileToolbar'
import { CertificatesBlock } from '../components/CertificatesBlock'
import { ReviewsBlock } from '../components/ReviewsBlock'
import { getSteps, getFaq, getReviews, getCertificates, getPricing } from '@/lib/data'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Юрист по наследству в Воронеже — оформление, споры, восстановление сроков',
  description: 'Юрист по наследственным делам. Оформление наследства, восстановление пропущенных сроков, оспаривание завещаний, наследственные споры. Бесплатная консультация.',
}

const situations = [
  { icon: 'timer_off', title: 'Пропущен срок', text: 'Пропущен 6-месячный срок для подачи заявления нотариусу.' },
  { icon: 'home', title: 'Фактическое принятие', text: 'Вы фактически приняли наследство (жили в квартире, оплачивали счета), но документально это не оформили.' },
  { icon: 'gavel', title: 'Оспаривание завещания', text: 'В завещании обнаружились сомнительные формулировки или есть основания для его оспаривания.' },
  { icon: 'group_add', title: 'Неучтённые наследники', text: 'Появились неучтённые наследники, претендующие на вашу долю.' },
  { icon: 'partner_exchange', title: 'Супружеская доля', text: 'Необходимо выделить супружескую долю из наследственной массы.' },
  { icon: 'real_estate_agent', title: 'Спор о разделе', text: 'Возник спор о разделе неделимого имущества (автомобиль, однокомнатная квартира).' },
  { icon: 'public', title: 'Наследство за рубежом', text: 'Вы вступаете в наследство за границей или у наследодателя были активы в другом регионе.' },
  { icon: 'block', title: 'Отказ от наследства', text: 'Вы хотите грамотно отказаться от наследства (в том числе не вступать в долги наследодателя).' },
]

const services = [
  {
    title: 'Консультация и анализ ситуации',
    items: [
      'Устная или письменная консультация по вашей ситуации.',
      'Определение круга наследников и вашей законной доли.',
      'Прогноз развития событий при пропуске сроков или наличии спора.',
    ],
  },
  {
    title: 'Восстановление пропущенного срока (6 месяцев)',
    items: [
      'Анализ причин пропуска и выбор тактики (судебный или внесудебный порядок).',
      'Подготовка иска и сбор доказательств уважительности пропуска (тяжелая болезнь, неграмотность, сокрытие информации).',
      'Представительство в суде для включения вас в число наследников и передела наследственных долей.',
    ],
  },
  {
    title: 'Наследственные споры и судебная защита',
    items: [
      'Оспаривание завещания: доказывание невменяемости наследодателя, порока воли или нарушений формы документа.',
      'Признание наследника недостойным: если претендент уклонялся от алиментов или совершил преступление против наследодателя.',
      'Восстановление права на обязательную долю (для несовершеннолетних детей, нетрудоспособных иждивенцев).',
      'Раздел недвижимого и движимого имущества в суде при конфликте наследников.',
      'Признание права собственности в порядке наследования (например, на самовольные постройки, паи, гаражи, незарегистрированную землю).',
    ],
  },
  {
    title: 'Выделение супружеской доли',
    items: [
      'Расчет и выдел доли пережившего супруга из имущества, нажитого в браке.',
      'Защита ваших интересов, если нотариус не учитывает совместно нажитое.',
    ],
  },
  {
    title: 'Фактическое принятие наследства',
    items: [
      'Обращение в суд для установления юридического факта принятия наследства, если нотариус отказал в выдаче свидетельства.',
    ],
  },
]

const stepsData = [
  { n: '1', title: 'Заявка и первичный анализ', desc: 'Оставьте заявку на сайте или позвоните. Я внимательно выслушаю вас и в течение 15 минут оценю юридическую перспективу дела. Первая консультация — бесплатно.' },
  { n: '2', title: 'Разработка стратегии', desc: 'На личной встрече или онлайн я фиксирую задачу, предлагаю план действий, согласую чёткую стоимость услуг (чаще всего — фиксированная цена за этап). Никаких скрытых платежей.' },
  { n: '3', title: 'Работа с документами и инстанциями', desc: 'Самостоятельно запрашиваю архивы, готовлю иски, взаимодействую с нотариусами, Росреестром, судами и банками. Вам остаётся только подписывать готовые бумаги и получать результат.' },
  { n: '4', title: 'Передача оформленного имущества', desc: 'Вы получаете на руки свидетельства о праве на наследство, регистрируете право собственности. При судебном споре — добиваюсь вступления решения суда в законную силу и его реального исполнения.' },
]

const advantages = [
  { icon: 'target', title: 'Узкая специализация', text: 'Я не универсал, а практикующий юрист по наследственному праву. Знаю все «подводные камни», включая нюансы наследственного договора и совместного завещания супругов.' },
  { icon: 'schedule', title: 'Честные сроки', text: 'Не обещаю «выиграть за день», но даю реальный прогноз и всегда соблюдаю дедлайны.' },
  { icon: 'public', title: 'Работаю по всей России', text: 'Дистанционное сопровождение «под ключ» для клиентов из любого региона. При необходимости личного присутствия в суде — выезжаю сам.' },
  { icon: 'payments', title: 'Прозрачные условия оплаты', text: 'Фиксированная цена за услугу, никаких скрытых платежей.' },
]

const faqItems = [
  { q: 'Можно ли вступить в наследство, если прошло больше 6 месяцев, но другие наследники не против?', a: 'Да, можно. Если все уже вступившие наследники напишут у нотариуса согласие на включение вас в список, суд не требуется. Нотариус аннулирует старые свидетельства и выдаст новые. Если же кто-то возражает — дорога только в суд с иском о восстановлении срока.' },
  { q: 'Нужно ли платить налог с наследства в России?', a: 'Нет. Независимо от степени родства и стоимости имущества (квартира, машина, деньги) налог на наследство в РФ отменен. Вы оплачиваете только госпошлину нотариусу (она рассчитывается от стоимости наследства и степени родства) и услуги юриста.' },
  { q: 'Могу ли я отказаться от части наследства, например, взять квартиру, но не брать долги отца по кредитам?', a: 'Нет, закон не предусматривает «частичного» принятия. Наследство принимается целиком, включая и имущество, и долги. Однако размер ответственности по долгам наследодателя ограничен стоимостью полученного имущества. Своим личным имуществом вы не отвечаете. Юрист поможет точно рассчитать риски до подачи заявления.' },
  { q: 'Я жил с умершей мамой в её квартире, но к нотариусу не пошел. Я наследник?', a: 'Да, вы считаетесь фактически принявшим наследство. Но право собственности вам нужно доказать: через нотариуса (предоставив справку о совместной регистрации и оплате ЖКУ), а если не получится — через суд. Чем раньше начать, тем проще это сделать.' },
  { q: 'Пропущен срок вступления в наследство. Можно ли его восстановить?', a: 'Да, если причина пропуска уважительная — болезнь, незнание о смерти наследодателя, нахождение за границей. Суд восстановит срок, если Вы обратитесь в течение 6 месяцев после того, как причина пропуска отпала. Также можно признать фактическое принятие наследства, если Вы пользовались имуществом, оплачивали коммунальные услуги или долги.' },
  { q: 'Родственники не пускают в квартиру умершего и забрали документы. Что делать?', a: 'Это незаконно. Нужно немедленно подать заявление нотариусу о принятии наследства — для этого документы на имущество не обязательны, нотариус запросит их сам. Параллельно можно обратиться в полицию по факту самоуправства и в суд за защитой наследственных прав.' },
  { q: 'Можно ли оспорить завещание?', a: 'Да, если есть основания: завещатель не понимал значения своих действий, находился под давлением, был недееспособен, или завещание оформлено с нарушениями. Назначается посмертная психиатрическая экспертиза, исследуются медицинские документы. Оспорить можно в течение 1 года с момента, когда Вы узнали о нарушении.' },
  { q: 'Как делится наследство, если нет завещания?', a: 'По закону наследники призываются по очередям. Первая очередь — дети, супруг и родители. Всё делится поровну между наследниками одной очереди. Если кто-то из наследников первой очереди умер раньше — его доля переходит к внукам по праву представления.' },
  { q: 'Один из наследников при жизни ухаживал за умершим. Может ли он получить больше?', a: 'Сам по себе уход не даёт права на увеличенную долю. Но если наследник вкладывал свои деньги в имущество (ремонт, содержание), это можно учесть при разделе. Также завещатель мог составить завещание в пользу того, кто за ним ухаживал, или заключить договор ренты.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Юрист по наследству — Андреещев Денис',
  description: 'Юрист по наследственным делам в Воронеже',
  url: 'https://denis-andreeschev.ru/nasledstvo',
}

export default async function InheritancePage() {
  const [pricing, certificates, reviews] = await Promise.all([
    getPricing(),
    getCertificates(),
    getReviews(),
  ])

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-center lg:justify-start gap-8 flex-nowrap">
          <a href="/" className="shrink-0 leading-tight flex items-center gap-3">
            <img src="/images/logo.webp" alt="Логотип" width={96} height={96} className="w-10 h-10 object-contain" />
            <div>
              <span className="font-serif text-navy-900 text-sm block">Адвокат по семейным делам</span>
              <span className="font-serif font-bold text-navy-900 text-lg block">Андреещев Д.В.</span>
            </div>
          </a>
          <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 flex-nowrap">
            <div className="relative group">
              <a href="/#services" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 flex items-center gap-1">Услуги <span className="text-[10px] leading-none group-hover:rotate-180 transition-transform">▼</span></a>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  <a href="/dlya-muzhchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав мужчин</a>
                  <a href="/dlya-zhenshchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав женщин</a>
                  <a href="/nasledstvo" className="block px-5 py-3 text-sm text-navy-900 font-semibold hover:bg-gold-50 transition-colors">Наследство</a>
                </div>
              </div>
            </div>
            <a href="/#advantages" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Преимущества</a>
            <a href="/#about" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Об адвокате</a>
            <a href="/#pricing" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Цены</a>
            <a href="#credentials" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Сертификаты</a>
            <a href="#reviews" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Отзывы</a>
            <a href="#contacts" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Контакты</a>
          </div>
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="https://max.ru/u/f9LHodD0cOJCIYFhSO2FQ-tCJ6vSaJBCE6FcWrEYTFQbhNODHfY4gBYXwQ0" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:brightness-110 transition-all" style={{background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #4F46E5 100%)'}}><img src="/images/icons/max-icon.webp" alt="Max" width={20} height={20} className="w-5 h-5" /></a>
            <a href="tel:+79507770608" className="flex items-center gap-2 font-serif btn-gold px-6 py-2.5 text-navy-900 font-semibold text-sm transition-transform whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">call</span>
              8 (950) 777-06-08
            </a>
          </div>
        </div>
      </nav>

      <header className="relative lg:min-h-[70vh] flex items-end lg:items-start overflow-hidden pt-20 lg:pt-[90px]" style={{ background: 'linear-gradient(165deg, #2A3A1E 0%, #3A4A2C 40%, #4D6340 100%)' }}>
        <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-end justify-center z-[1]">
          <Image src="/images/photos/hero-main.webp" alt="Юрист по наследству" width={362} height={420} priority className="h-[90%] w-auto object-contain object-bottom" style={{ transform: 'translateX(-100px)' }} />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="text-gold-400 font-medium tracking-[0.15em] mb-4 block uppercase text-xs text-center lg:text-left mt-[20px] lg:mt-0">сопровождение и споры</span>
            <div className="w-[60px] h-[3px] bg-gold-400 mb-8 mx-auto lg:mx-0" />
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6 text-center lg:text-left">
              Юрист по<br /><span className="text-gold-400">наследству</span>
            </h1>
            <p className="text-xl text-gray-300 mb-[10px] font-light max-w-lg text-center lg:text-left lg:mb-10">Помогу принять, оформить и защитить ваше наследство. Работаю по всей стране.</p>
            <div className="flex justify-center lg:hidden" style={{ marginLeft: '-5px', marginTop: '-20px', marginBottom: '-8px' }}>
              <img src="/images/photos/hero-main.webp" alt="Юрист по наследству" width={362} height={420} className="min-w-[91vw] h-auto shrink-0 object-contain object-bottom" style={{ mask: 'linear-gradient(to top, transparent 0%, black 3%, black 100%)', WebkitMask: 'linear-gradient(to top, transparent 0%, black 3%, black 100%)' }} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+79507770608" className="lg:hidden btn-gold rounded-xl px-8 py-4 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98]">Бесплатная консультация</a>
              <FormModal title="Бесплатная консультация" buttonText="Записаться" page="inheritance" className="hidden lg:block btn-gold rounded-xl px-8 py-4 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98]">Бесплатная консультация</FormModal>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center">
            <div className="gold-line mx-auto mb-6" />
            <p className="text-navy-900/80 text-2xl md:text-4xl leading-relaxed">
              Потеря близкого человека — всегда тяжелое событие. В этот момент нужно решать не только душевные, но и бумажные вопросы, а ошибка в сроке или документе может стоить потерянного имущества. Юрист по наследственным делам возьмет на себя юридическую сторону процесса: от консультации до представления интересов в суде.
            </p>
          </div>
        </div>
      </section>

      <section id="situations" className="py-12" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-4">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Когда вам нужен юрист по наследству?</h2>
            <p className="text-navy-900/70 text-lg">Обратиться за юридической помощью стоит в любой из этих ситуаций:</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-12">
            {situations.map((s, i) => {
              const big = i === 0 || i === 3 || i === 4 || i === 7
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-3xl p-8 card-hover flex flex-col justify-between min-h-[220px] ${
                    big ? 'lg:col-span-2 bg-navy-800 text-white' : 'bg-white text-navy-900 border border-gold-200'
                  }`}
                >
                  <div>
                    <div className={`mb-4 ${big ? 'text-gold-400' : 'text-navy-900/60'}`}>
                      <span className="material-symbols-outlined text-3xl">{s.icon}</span>
                    </div>
                    <h3 className={`font-bold mb-3 ${big ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{s.title}</h3>
                    <p className={`text-sm leading-relaxed ${big ? 'text-gray-300 text-base' : 'text-gray-500'}`}>{s.text}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Услуги для наследников</h2>
          </div>
          <div className="space-y-6">
            {services.map((srv, i) => {
              const dark = i % 2 !== 0
              return (
                <div key={i} className={`rounded-2xl p-8 md:p-10 ${dark ? 'border border-gold-200' : 'bg-gold-50 border border-gold-200'}`} style={dark ? { background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' } : undefined}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-10 h-10 rounded-lg btn-gold flex items-center justify-center flex-shrink-0">
                      <span className="text-navy-900 font-bold">{i + 1}</span>
                    </div>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-navy-900">{srv.title}</h3>
                  </div>
                  <ul className="space-y-3 ml-2">
                    {srv.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-navy-900/70">
                        <span className="mt-1 text-navy-700">&#10003;</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="steps" className="relative py-24 bg-navy-900 overflow-hidden">
        <img src="/images/photos/steps-bg.webp" alt="" width={1440} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }} />
        <div className="absolute inset-0 bg-navy-900/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Как я работаю: 4 шага к вашему наследству</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {stepsData.map((s, i) => {
              const dark = i === 0 || i === 3
              return (
                <div key={s.n} className={`relative overflow-hidden rounded-3xl p-8 card-hover flex flex-col justify-between min-h-[220px] ${dark ? 'bg-white/10 backdrop-blur-md border border-white/20' : 'bg-white border border-gold-200'}`}>
                  <div>
                    <div className="w-10 h-10 rounded-lg btn-gold flex items-center justify-center flex-shrink-0 mb-4">
                      <span className="text-navy-900 font-bold">{s.n}</span>
                    </div>
                    <h3 className={`font-bold mb-3 ${dark ? 'text-white text-2xl md:text-3xl' : 'text-navy-900 text-xl'}`}>{s.title}</h3>
                    <p className={`text-sm leading-relaxed ${dark ? 'text-gray-300' : 'text-gray-500'}`}>{s.desc}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      <section id="advantages" className="relative py-24 bg-white overflow-hidden">
        <img src="/images/photos/advantages-bg.webp" alt="" width={1440} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Почему выбирают меня</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {advantages.map((adv, i) => (
              <div key={i} className="rounded-2xl p-8 card-hover border border-gold-200 shadow-sm" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
                <div className="text-navy-900/60 mb-4">
                  <span className="material-symbols-outlined text-3xl">{adv.icon}</span>
                </div>
                <h3 className="font-serif text-xl font-bold text-navy-900 mb-3">{adv.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{adv.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-2xl border border-gray-200 bg-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 mb-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 line-through text-lg">3 000 &#8381;</span>
                    <span className="text-navy-700 font-bold text-2xl">Бесплатно</span>
                  </div>
                  <span className="text-gray-600 text-sm">/ первичная консультация — 15 минут</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center lg:text-left">Каждый день промедления — риск потерять наследство</h2>
                <ul className="space-y-3">
                  {['Узнаете, есть ли у вас право на наследство', 'Получите план действий на ближайшие 48 часов', 'Разберём сроки и документы, которые нужны именно вам', 'Поймёте, нужен ли суд или можно решить через нотариуса'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-navy-900/70">
                      <span className="text-navy-700 mt-0.5">&#10003;</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <FormModal title="Записаться на консультацию" buttonText="Отправить" page="inheritance" className="btn-gold rounded-xl px-10 py-5 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98] flex-shrink-0">Записаться на консультацию</FormModal>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Стоимость услуг</h2>
            <p className="text-gray-300 text-lg">Фиксированная цена в договоре — без скрытых доплат</p>
          </div>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {pricing.map((row, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 px-6 py-5 ${i % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.02]'} ${i < pricing.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="text-white text-sm md:text-base">{row.service}</span>
                <span className={`font-bold text-sm md:text-base whitespace-nowrap ${row.highlight ? 'text-gold-400' : 'text-gold-300'}`}>{row.price}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-300 text-sm text-center mt-6">* Точная стоимость определяется после анализа вашей ситуации</p>
        </div>
      </section>

      <CertificatesBlock certificates={certificates} />

      <ReviewsBlock reviews={reviews} />

      <section id="faq" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Ответы на частые вопросы</h2>
          </div>
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <details key={i} className="group rounded-xl overflow-hidden" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
                <summary className="flex items-center justify-between p-6 cursor-pointer hover:brightness-105 transition-all">
                  <span className="font-semibold text-navy-900 pr-4">{item.q}</span>
                  <span className="text-navy-900 text-2xl flex-shrink-0 group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6 text-navy-900/80 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-gray-300 text-lg">Свяжитесь со мной любым удобным способом — на связи 24/7!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-80 h-80 lg:w-52 lg:h-52 rounded-full border-4 border-gold-400 overflow-hidden mb-6 mt-4">
                <img src="/images/photos/about.webp" alt="Адвокат Андреещев" width={480} height={600} loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Андреещев Денис</h3>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Валерьевич</h3>
              <p className="text-gold-400 font-semibold text-sm mb-4">Адвокат по семейным делам</p>
              <div className="w-12 h-[2px] bg-gold-400 mb-4" />
              <p className="text-gray-300 text-sm leading-relaxed mb-6">Член Адвокатской палаты Воронежской области. Более 15 лет практики в сфере семейного права.</p>
            </div>

            <div className="space-y-4 flex flex-col justify-center">
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">call</span>
                </div>
                <div>
                  <div className="text-gray-300 text-xs uppercase tracking-wider mb-1">Телефон</div>
                  <a href="tel:+79507770608" className="text-white font-bold text-lg hover:text-gold-400 transition-colors block">8 (950) 777-06-08</a>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">mail</span>
                </div>
                <div>
                  <div className="text-gray-300 text-xs uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:denis.andreeschev2015@yandex.ru" className="text-white font-bold hover:text-gold-400 transition-colors text-sm lg:text-base break-all">denis.andreeschev2015@yandex.ru</a>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">schedule</span>
                </div>
                <div>
                  <div className="text-gray-300 text-xs uppercase tracking-wider mb-1">Режим работы</div>
                  <div className="text-white font-bold">Круглосуточно, без выходных</div>
                  <div className="flex items-center gap-1.5 mt-1"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /><span className="text-green-400 text-xs">На связи сейчас</span></div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">location_on</span>
                </div>
                <div>
                  <div className="text-gray-300 text-xs uppercase tracking-wider mb-1">Адрес</div>
                  <div className="text-white font-bold">г. Воронеж</div>
                  <div className="text-gray-300 text-sm">ул. Урицкого, д. 70</div>
                </div>
              </div>
            </div>

            <div className="h-[500px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src="https://yandex.com/map-widget/v1/org/advokat_andreyeshchev_d_v_/240751878307/?ll=39.199631%2C51.682955&z=16"
                title="Карта"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <MobileToolbar />

      <footer className="bg-navy-900 pt-16 pb-32 lg:pb-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo.webp" alt="Логотип" width={96} height={96} className="w-12 h-12 object-contain brightness-0 invert" />
                <span className="font-serif text-white font-bold text-lg">Адвокат Андреещев Д.В.</span>
              </div>
              <div className="space-y-3">
                <a href="tel:+79507770608" className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-gold-400 transition-colors">
                  <span className="material-symbols-outlined text-gold-400 text-lg">call</span>
                  <span>8 (950) 777-06-08</span>
                </a>
                <a href="mailto:denis.andreeschev2015@yandex.ru" className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-gold-400 transition-colors">
                  <span className="material-symbols-outlined text-gold-400 text-lg">mail</span>
                  <span className="text-sm lg:text-base break-all">denis.andreeschev2015@yandex.ru</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <h3 className="font-serif text-white font-bold uppercase tracking-wider text-sm mb-6">Разделы</h3>
              <div className="flex flex-col gap-3">
                <a href="/" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Главная</a>
                <div className="relative group">
                  <a href="/#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-1">Услуги <span className="text-[10px] leading-none group-hover:rotate-180 transition-transform">▼</span></a>
                  <div className="absolute bottom-full left-0 pb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      <a href="/dlya-muzhchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав мужчин</a>
                      <a href="/dlya-zhenshchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав женщин</a>
                      <a href="/nasledstvo" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Наследство</a>
                    </div>
                  </div>
                </div>
                <a href="/#advantages" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Преимущества</a>
                <a href="/#about" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Об адвокате</a>
                <a href="/#pricing" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Цены</a>
                <a href="/#credentials" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Сертификаты</a>
                <a href="/#reviews" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Отзывы</a>
                <a href="/#contacts" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Контакты</a>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-serif text-white font-bold uppercase tracking-wider text-sm mb-6">Правовая информация</h3>
              <div className="flex flex-col gap-3">
                <a href="/privacy" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Политика конфиденциальности</a>
                <a href="/data-processing" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Политика обработки персональных данных</a>
                <a href="/cookies" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Соглашение об использовании Cookie</a>
                <a href="/consent" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Согласие на обработку персональных данных</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-gray-500 text-sm text-center md:text-left">&copy; 2025 Адвокат Андреещев Денис Валерьевич. Все права защищены.</div>
            <div className="text-gray-500 text-sm text-center md:text-right">Содержимое сайта не является публичной офертой.<br />Рег. номер 36/2348 в реестре адвокатов Воронежской области</div>
          </div>
        </div>
      </footer>
    </>
  )
}
