import type { Metadata } from 'next'
import Image from 'next/image'
import { FormModal } from '../components/FormModal'
import { MobileToolbar } from '../components/MobileToolbar'

export const metadata: Metadata = {
  title: 'Адвокат для женщин при разводе в Воронеже — защита прав матерей',
  description: 'Защита прав женщин при разводе. Алименты, раздел имущества, определение места жительства ребёнка. Адвокат Андреещев — 10+ лет опыта.',
}

const painPoints = [
  { icon: 'account_balance_wallet', title: 'Муж скрывает доходы и платит копейки', text: 'Официально получает 15 000 ₽, а ездит на новой машине и отдыхает за границей. Есть способы <strong>доказать реальный доход</strong> и взыскать справедливые алименты — даже с «серой» зарплаты.' },
  { icon: 'home_work', title: 'Говорит «всё моё, ты не работала»', text: 'Квартира, машина, накопления — всё записано на него. По закону <strong>совместно нажитое делится пополам</strong>, независимо от того, кто зарабатывал, а кто воспитывал детей.' },
  { icon: 'family_restroom', title: 'Угрожает забрать детей', text: '«У меня деньги и связи — заберу детей». Это манипуляция. Суд оценивает <strong>привязанность ребёнка, условия жизни и участие в воспитании</strong>. В 85% случаев дети остаются с матерью.' },
  { icon: 'block', title: 'Перестал платить алименты', text: 'Долг копится месяцами, а он «не может найти работу». Есть механизмы <strong>принудительного взыскания</strong>: арест счетов, запрет на выезд, лишение прав, вплоть до уголовной ответственности.' },
  { icon: 'shield', title: 'Давит, угрожает, запугивает', text: 'Контролирует каждый шаг, угрожает, не отпускает. Ваша безопасность — приоритет. Поможем получить <strong>защитные меры</strong>, зафиксировать доказательства и привлечь к ответственности.' },
  { icon: 'description', title: 'Отказывается давать развод', text: 'Тянет время, не приходит в суд, манипулирует. Согласие мужа <strong>не обязательно</strong>. Развод возможен в одностороннем порядке — даже если он против.' },
]

const whatIDo = [
  'Взыщу реальные алименты — даже если муж прячет доходы и работает «в чёрную»',
  'Защищу Вашу долю в имуществе — квартира, машина, бизнес, накопления',
  'Оставлю детей с Вами — определю место жительства через суд',
  'Заставлю платить — взыщу долги по алиментам с неустойкой и штрафами',
  'Разведу без его согласия — быстро, через суд, в одностороннем порядке',
  'Возьму всё на себя — Вам не придётся видеться с ним в суде',
]

const faqItems = [
  { q: 'Имею ли я право на имущество, если не работала в браке?', a: 'Да. По закону ведение домашнего хозяйства и воспитание детей — равноценный вклад. Всё совместно нажитое делится пополам, независимо от того, кто зарабатывал. Даже если квартира оформлена на мужа — Вы имеете право на свою долю.' },
  { q: 'Муж получает зарплату «в конверте». Как взыскать нормальные алименты?', a: 'Суд может установить алименты в твёрдой денежной сумме, а не в процентах от дохода. Мы проанализируем его расходы, имущество, кредиты, поездки — всё это доказывает реальный уровень дохода.' },
  { q: 'Может ли муж забрать у меня ребёнка?', a: 'В 85% случаев суд оставляет детей с матерью. Угрозы забрать ребёнка — это манипуляция. Суд оценивает привязанность ребёнка, условия жизни, участие в воспитании. Деньги и связи мужа не являются решающим фактором.' },
  { q: 'Как развестись, если муж не даёт согласие?', a: 'Его согласие не требуется. Суд расторгнет брак по Вашему заявлению в одностороннем порядке. Обычно это 2-3 месяца. Даже если он не приходит в суд — развод состоится.' },
  { q: 'Муж перестал платить алименты. Что делать?', a: 'Подать заявление приставам о принудительном взыскании. Можно арестовать счета, наложить запрет на выезд за границу, лишить водительских прав. При злостном уклонении — уголовная ответственность до 1 года.' },
  { q: 'Могу ли я выселить бывшего мужа из квартиры после развода?', a: 'Зависит от того, кому принадлежит квартира. Если это Ваша собственность или досталась до брака — да, через суд. Если совместная — сначала раздел имущества, потом решение вопроса о проживании.' },
  { q: 'Муж угрожает, давит. Как себя защитить?', a: 'Фиксируйте все угрозы: записи, скриншоты, свидетели. Можно подать заявление в полицию и получить защитные меры через суд. Я помогу собрать доказательства и оформить всё юридически грамотно.' },
  { q: 'Сколько стоит ведение дела и есть ли рассрочка?', a: 'Стоимость от 30 000 ₽ — зависит от сложности. Есть рассрочка и поэтапная оплата. Никаких скрытых доплат. Точную цену назову после бесплатной консультации, когда пойму Вашу ситуацию.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Адвокат для женщин при разводе — Андреещев Денис',
  description: 'Защита прав женщин при разводе в Воронеже',
  url: 'https://denis-andreeschev.ru/dlya-zhenshchin',
}

export default function FemaleLandingPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-center lg:justify-start gap-8 flex-nowrap">
          <a href="/" className="shrink-0 leading-tight flex items-center gap-3">
            <img src="/images/logo.png" alt="Логотип" className="w-10 h-10" />
            <div>
              <span className="font-serif text-navy-900 text-sm block">Адвокат по семейным делам</span>
              <span className="font-serif font-bold text-navy-900 text-lg block">Андреещев Д.В.</span>
            </div>
          </a>
          <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 flex-nowrap">
            <a href="/#services" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Услуги</a>
            <a href="/#advantages" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Преимущества</a>
            <a href="/#about" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Об адвокате</a>
            <a href="/#steps" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Этапы</a>
            <a href="/#pricing" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Цены</a>
            <a href="#credentials" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Сертификаты</a>
            <a href="#reviews" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Отзывы</a>
            <a href="#faq" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">FAQ</a>
            <a href="#contacts" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Контакты</a>
          </div>
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#26A5E4] flex items-center justify-center hover:brightness-110 transition-all"><svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
            <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:brightness-110 transition-all" style={{background: 'linear-gradient(135deg, #6C3AED, #2563EB)'}}><img src="/images/icons/max-icon.png" alt="Max" className="w-5 h-5" /></a>
            <a href="tel:+79204130096" className="w-9 h-9 rounded-full bg-navy-900 flex items-center justify-center text-white hover:bg-gold-400 hover:text-navy-900 transition-colors"><span className="material-symbols-outlined text-lg">call</span></a>
            <FormModal title="Задать вопрос" buttonText="Отправить" className="font-serif btn-gold px-6 py-2.5 text-navy-900 font-semibold text-sm transition-transform whitespace-nowrap">
              Задать вопрос
            </FormModal>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative lg:min-h-screen flex items-end lg:items-center overflow-hidden pt-20" style={{ background: 'linear-gradient(165deg, #2A3A1E 0%, #3A4A2C 40%, #4D6340 100%)' }}>
        <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-end justify-center z-[1]">
          <Image src="/images/photos/hero-female.webp" alt="Адвокат Андреещев" width={600} height={700} className="h-full w-auto object-contain object-bottom" priority />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="text-gold-400 font-medium tracking-[0.15em] mb-4 block uppercase text-xs text-center lg:text-left mt-[20px] lg:mt-0">Защита прав женщин при разводе</span>
            <div className="w-[60px] h-[3px] bg-gold-400 mb-8" />
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6 text-center lg:text-left">
              Защищаю права<br /><span className="text-gold-400">женщин</span> при разводе
            </h1>
            <p className="text-xl text-gray-300 mb-10 font-light max-w-lg text-center lg:text-left">Добьюсь справедливых алиментов, защищу ваше имущество и обеспечу стабильность для вас и детей.</p>
            <div className="flex justify-center lg:hidden -mb-5">
              <img src="/images/photos/hero-female.webp" alt="Адвокат Андреещев" className="h-[55vh] w-auto object-contain object-bottom" style={{ mask: 'linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)', WebkitMask: 'linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)' }} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+79204130096" className="btn-gold rounded-xl px-8 py-4 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98]">Бесплатная консультация</a>
              <a href="#problems" className="bg-white rounded-xl px-8 py-4 text-navy-900 font-semibold text-lg text-center hover:bg-gray-100 transition-colors">С чем вы столкнулись?</a>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points */}
      <section id="problems" className="py-24" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">С чем вы столкнулись?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {painPoints.map((p, i) => {
              const big = i === 0 || i === 3 || i === 4
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-3xl p-8 card-hover flex flex-col justify-between min-h-[220px] ${
                    big ? 'lg:col-span-2 bg-navy-800 text-white' : 'bg-white text-navy-900 border border-gold-200'
                  }`}
                >
                  <div>
                    <div className={`mb-4 ${big ? 'text-gold-400' : 'text-navy-900/60'}`}><span className="material-symbols-outlined text-3xl">{p.icon}</span></div>
                    <h3 className={`font-bold mb-3 ${big ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{p.title}</h3>
                    {big && <p className="text-gray-300 text-base leading-relaxed max-w-xl" dangerouslySetInnerHTML={{ __html: p.text }} />}
                    {!big && <p className="text-gray-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: p.text }} />}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-shrink-0">
              <img src="/images/photos/quote-female.webp" alt="Адвокат Андреещев" className="w-full lg:w-[350px] h-auto rounded-2xl shadow-2xl object-cover" />
            </div>
            <div>
              <div className="w-[60px] h-[3px] bg-gold-400 mb-6" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6">Я понимаю, через что Вы проходите</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                Когда рушится семья — кажется, что весь мир против Вас. Подруги советуют одно, родственники другое, а муж давит со всех сторон. В этот момент рядом нужен не просто юрист, а человек, который выслушает, разберётся в ситуации и скажет: вот что мы будем делать.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6">
                <strong className="text-white">За 10 лет практики я помог сотням женщин пройти через развод — спокойно, достойно и с результатом.</strong> Вам не нужно разбираться в законах и воевать с бывшим мужем. Я возьму это на себя — а Вы сможете наконец выдохнуть и сосредоточиться на себе и детях.
              </p>
              <div className="text-gold-400 font-semibold">Андреещев Денис Валерьевич, адвокат</div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="relative py-24 bg-white overflow-hidden">
        <img src="/images/photos/advantages-bg.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Что я сделаю для Вас</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatIDo.map((item, i) => {
              const rotations = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]', 'rotate-[0.5deg]', '-rotate-1', 'rotate-1']
              const paddings = ['p-7', 'p-9', 'p-6', 'p-8', 'p-7', 'p-9']
              const bg = i % 2 === 0 ? 'bg-[#FAF5E6] text-navy-900' : 'bg-navy-900 text-white'
              return (
                <div
                  key={i}
                  className={`${paddings[i]} ${bg} ${rotations[i]} card-hover relative`}
                  style={{
                    border: '10px solid #8B6F3A',
                    outline: '2px solid #D4B877',
                    outlineOffset: '-14px',
                    borderRadius: '4px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(0,0,0,0.15)',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg btn-gold flex items-center justify-center text-navy-900 font-bold mb-5">{i + 1}</div>
                  <h3 className={`text-base font-bold ${i % 2 === 0 ? 'text-navy-900' : 'text-white'}`}>{item}</h3>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="p-8 md:p-12 rounded-2xl border border-gray-200 bg-white">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
              <div>
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 mb-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-lg">3 000 ₽</span>
                    <span className="text-navy-700 font-bold text-2xl">Бесплатно</span>
                  </div>
                  <span className="text-gray-400 text-sm">/ первичная консультация — 15 минут</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center lg:text-left">Не ждите, пока он спрячет имущество</h2>
                <ul className="space-y-3">
                  {['Узнаете, на что Вы имеете право — алименты, имущество, жильё', 'Поймёте, как доказать реальные доходы мужа', 'Получите план защиты на ближайшие 48 часов', 'Разберём, можно ли развестись без его согласия'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-navy-900/70">
                      <span className="text-navy-700 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <FormModal title="Записаться на консультацию" buttonText="Отправить" className="btn-gold rounded-xl px-10 py-5 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98] flex-shrink-0">Записаться на консультацию</FormModal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Частые вопросы</h2>
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

      {/* Contacts */}
      <section id="contacts" className="py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-gray-400 text-lg">Свяжитесь со мной любым удобным способом — на связи 24/7!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-52 h-52 rounded-full border-4 border-gold-400 overflow-hidden mb-6 mt-4">
                <img src="/images/photos/about.webp" alt="Адвокат Андреещев" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Андреещев Денис</h3>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Валерьевич</h3>
              <p className="text-gold-400 font-semibold text-sm mb-4">Адвокат по семейным делам</p>
              <div className="w-12 h-[2px] bg-gold-400 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Член Адвокатской палаты Воронежской области. Более 10 лет практики в сфере семейного права.</p>
              <div className="flex items-center gap-3">
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full bg-[#26A5E4] hover:brightness-110 flex items-center justify-center transition-all"><svg viewBox="0 0 24 24" className="w-6 h-6 fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
                <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:brightness-110" style={{background: 'linear-gradient(135deg, #6C3AED, #2563EB)'}}><img src="/images/icons/max-icon.png" alt="Max" className="w-6 h-6" /></a>
              </div>
            </div>

            <div className="space-y-4 flex flex-col justify-center">
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">call</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Телефон</div>
                  <a href="tel:+79204130096" className="text-white font-bold text-lg hover:text-gold-400 transition-colors block">8 (920) 413-00-96</a>
                  <a href="tel:+79507770608" className="text-white font-semibold text-sm hover:text-gold-400 transition-colors block">8 (950) 777-06-08</a>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">mail</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:denis.andreeschev2015@yandex.ru" className="text-white font-bold hover:text-gold-400 transition-colors">denis.andreeschev2015@yandex.ru</a>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">schedule</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Режим работы</div>
                  <div className="text-white font-bold">Круглосуточно, без выходных</div>
                  <div className="flex items-center gap-1.5 mt-1"><span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" /><span className="text-green-400 text-xs">На связи сейчас</span></div>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">location_on</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Адрес</div>
                  <div className="text-white font-bold">г. Воронеж</div>
                  <div className="text-gray-400 text-sm">Московский проспект, д. 90</div>
                </div>
              </div>
            </div>

            <div className="h-[500px] lg:h-auto min-h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A1&source=constructor&ll=39.2199%2C51.6615&z=16&pt=39.2199%2C51.6615%2Cpm2rdm"
                title="Карта"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <MobileToolbar />

      {/* Footer */}
      <footer className="bg-navy-900 pt-16 pb-24 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo.png" alt="Логотип" className="w-12 h-12 brightness-0 invert" />
                <span className="font-serif text-white font-bold text-lg">Адвокат Андреещев Д.В.</span>
              </div>
              <div className="space-y-3">
                <a href="tel:+79204130096" className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-gold-400 transition-colors">
                  <span className="material-symbols-outlined text-gold-400 text-lg">call</span>
                  <span>8 (920) 413-00-96</span>
                </a>
                <a href="tel:+79507770608" className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-gold-400 transition-colors">
                  <span className="material-symbols-outlined text-gold-400 text-lg">call</span>
                  <span>8 (950) 777-06-08</span>
                </a>
                <a href="mailto:denis.andreeschev2015@yandex.ru" className="flex items-center justify-center lg:justify-start gap-3 text-gray-300 hover:text-gold-400 transition-colors">
                  <span className="material-symbols-outlined text-gold-400 text-lg">mail</span>
                  <span className="text-sm lg:text-base break-all">denis.andreeschev2015@yandex.ru</span>
                </a>
              </div>
              <div className="hidden lg:flex items-center gap-3 mt-5">
                <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-[#26A5E4] hover:brightness-110 flex items-center justify-center transition-all"><svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
                <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full flex items-center justify-center hover:brightness-110 transition-all" style={{background: 'linear-gradient(135deg, #6C3AED, #2563EB)'}}><img src="/images/icons/max-icon.png" alt="Max" className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="hidden lg:block">
              <h3 className="font-serif text-white font-bold uppercase tracking-wider text-sm mb-6">Разделы</h3>
              <div className="flex flex-col gap-3">
                <a href="/" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Главная</a>
                <a href="/dlya-muzhchin" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Защита прав мужчин</a>
                <a href="/dlya-zhenshchin" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Защита прав женщин</a>
                <a href="/#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Услуги</a>
                <a href="/#reviews" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Отзывы</a>
                <a href="/#faq" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Вопросы</a>
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
            <div className="text-gray-500 text-sm text-center md:text-left">© 2025 Адвокат Андреещев Денис Валерьевич. Все права защищены.</div>
            <div className="text-gray-500 text-sm text-center md:text-right">Содержимое сайта не является публичной офертой.<br />Рег. номер 36/2348 в реестре адвокатов Воронежской области</div>
          </div>
        </div>
      </footer>
    </>
  )
}
