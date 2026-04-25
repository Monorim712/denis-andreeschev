import type { Metadata } from 'next'
import Image from 'next/image'
import { FormModal } from '../components/FormModal'
import { MobileToolbar } from '../components/MobileToolbar'
import { CertificatesBlock } from '../components/CertificatesBlock'
import { ReviewsBlock } from '../components/ReviewsBlock'
import { getSteps, getFaq, getReviews, getCertificates, getPricing, getSiteSettings } from '@/lib/data'

export const revalidate = 60

export const metadata: Metadata = {
  title: 'Адвокат для мужчин при разводе в Воронеже — защита прав отцов',
  description: 'Защита прав мужчин при разводе. Сохранение имущества, бизнеса, общение с детьми. Адвокат Андреещев — 15+ лет опыта в семейных делах.',
}

const defaultPainPoints = [
  { icon: 'block', title: 'Ограничивают общение с ребёнком', text: 'После развода бывшая жена решает, когда и сколько Вы видитесь с детьми. <strong>По закону у отца равные права.</strong> Суд установит чёткий график, который обязаны соблюдать обе стороны.' },
  { icon: 'home_work', title: 'Несправедливый раздел имущества', text: 'Квартира, машина, накопления — всё записано на неё или «на маму». <strong>Совместно нажитое делится пополам</strong>, независимо от того, на кого оформлено.' },
  { icon: 'account_balance_wallet', title: 'Завышенные алименты', text: 'Бывшая заявляет доход, которого у Вас нет, или требует платить <strong>сверх закона</strong>. Установим реальный размер алиментов на основе подтверждённого дохода.' },
  { icon: 'description', title: 'Ложные обвинения в суде', text: 'Заявления о побоях, угрозах, ненадлежащем отцовстве — <strong>частая тактика давления</strong>. Грамотная защита и доказательная база снимают все обвинения.' },
  { icon: 'family_restroom', title: 'Хотите оставить ребёнка себе', text: 'Суд может определить место жительства ребёнка <strong>с отцом</strong>. Нужны доказательства: жильё, доход, участие в воспитании, характеристики.' },
  { icon: 'hourglass_top', title: 'Жена затягивает развод', text: 'Не является в суд, подаёт встречные иски, просит отложить заседание. <strong>Есть законные способы</strong> завершить процесс в разумные сроки.' },
]

const defaultWhatIDo = [
  'Определю порядок общения с детьми через суд',
  'Защищу имущество и бизнес при разделе',
  'Установлю справедливый размер алиментов',
  'Добьюсь определения места жительства ребёнка с отцом',
  'Представлю Ваши интересы — Вам не нужно видеться с бывшей в суде',
  'Соберу доказательную базу для суда',
]

const defaultFaqItems = [
  { q: 'Жена не даёт видеться с ребёнком. Что делать?', a: 'Подать в суд заявление об определении порядка общения с ребёнком. Суд установит конкретный график встреч, который мать обязана соблюдать. За нарушение — штраф, при повторных нарушениях — передача ребёнка отцу.' },
  { q: 'Могу ли я оставить детей себе после развода?', a: 'Да. Закон не отдаёт приоритет матери. Суд оценивает условия жизни, привязанность ребёнка, доход, участие в воспитании. С грамотной подготовкой доказательной базы отцы выигрывают такие дела.' },
  { q: 'Жена подала на алименты. Как не платить лишнего?', a: 'Размер алиментов можно оспорить. Если жена скрывает доход, завышает расходы на ребёнка или вы содержите других иждивенцев — суд учтёт это. Важно собрать доказательства реального финансового положения обеих сторон.' },
  { q: 'Как защитить имущество, нажитое до брака?', a: 'Добрачное имущество разделу не подлежит. Но нужно доказать, что оно приобретено до брака. Если в период брака вкладывались совместные средства (ремонт, улучшения) — суд может признать часть совместной собственностью. Готовьте документы заранее.' },
  { q: 'Жена угрожает забрать детей и уехать в другой город. Это законно?', a: 'Без согласия второго родителя увезти ребёнка в другой город — нарушение. Можно подать заявление об определении места жительства ребёнка и запрете на выезд. Суд вынесет обеспечительные меры.' },
  { q: 'Бывшая жена настраивает детей против меня. Можно что-то сделать?', a: 'Да. Это называется синдром родительского отчуждения. Суд может назначить психологическую экспертизу, привлечь органы опеки. В серьёзных случаях — пересмотреть место жительства ребёнка в пользу отца.' },
  { q: 'Как доказать, что жена тратит алименты не на ребёнка?', a: 'Можно подать в суд заявление о перечислении до 50% алиментов на счёт ребёнка. Для этого нужны доказательства нецелевого расходования: свидетельские показания, фото, информация об образе жизни матери.' },
  { q: 'Сколько стоит ведение дела и как долго длится процесс?', a: 'Стоимость зависит от сложности — от 30 000 ₽. Простой развод занимает 1-2 месяца, споры о детях и имуществе — 3-6 месяцев. Точные сроки и цену назову после анализа Вашей ситуации на бесплатной консультации.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Адвокат для мужчин при разводе — Андреещев Денис',
  description: 'Защита прав мужчин при разводе в Воронеже',
  url: 'https://denis-andreeschev.ru/dlya-muzhchin',
}

export default async function MaleLandingPage() {
  const [steps, pricing, certificates, reviews, faqData, settings] = await Promise.all([
    getSteps(),
    getPricing(),
    getCertificates(),
    getReviews(),
    getFaq('male'),
    getSiteSettings(),
  ])

  const s = settings?.malePage as any
  const painPoints: typeof defaultPainPoints = s?.painPoints?.length ? s.painPoints : defaultPainPoints
  const whatIDo: string[] = s?.whatIDo?.length ? s.whatIDo.map((w: any) => w.text) : defaultWhatIDo
  const faqItems = faqData || defaultFaqItems
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Nav */}
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
            <a href="https://max.ru/u/f9LHodD0cOJCIYFhSO2FQ-tCJ6vSaJBCE6FcWrEYTFQbhNODHfY4gBYXwQ0" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:brightness-110 transition-all" style={{background: 'linear-gradient(135deg, #7C3AED 0%, #6D28D9 50%, #4F46E5 100%)'}}><img src="/images/icons/max-icon.webp" alt="Max" width={20} height={20} className="w-5 h-5" /></a>
            <a href="tel:+79507770608" className="flex items-center gap-2 font-serif btn-gold px-6 py-2.5 text-navy-900 font-semibold text-sm transition-transform whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">call</span>
              8 (950) 777-06-08
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative lg:min-h-screen flex items-end lg:items-center overflow-hidden pt-20" style={{ background: 'linear-gradient(165deg, #2A3A1E 0%, #3A4A2C 40%, #4D6340 100%)' }}>
        <div className="absolute right-0 bottom-0 w-1/2 h-full hidden lg:flex items-end justify-center z-[1]">
          <img src="/images/photos/hero-male.webp" alt="Адвокат Андреещев" width={518} height={600} loading="lazy" className="h-[110vh] w-auto object-contain object-bottom" style={{ marginBottom: '-30px' }} />
        </div>
        <div className="relative z-20 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-2xl">
            <span className="text-gold-400 font-medium tracking-[0.15em] mb-4 block uppercase text-xs text-center lg:text-left mt-[20px] lg:mt-0">Защита прав мужчин при разводе</span>
            <div className="w-[60px] h-[3px] bg-gold-400 mb-8 mx-auto lg:mx-0" />
            <h1 className="font-serif text-5xl md:text-7xl text-white font-bold leading-tight mb-6 text-center lg:text-left">
              Защищаю права<br /><span className="text-gold-400">мужчин</span> при разводе
            </h1>
            <p className="text-xl text-gray-300 mb-[10px] font-light max-w-lg text-center lg:text-left lg:mb-10">Сохраню Ваше имущество, бизнес и право на общение с детьми. Без эмоций — только закон и стратегия.</p>
            <div className="flex justify-center lg:hidden" style={{ marginLeft: '-5px', marginTop: '-70px', marginBottom: '-8px' }}>
              <img src="/images/photos/hero-male.webp" alt="Адвокат Андреещев" width={518} height={600} className="min-w-[130vw] h-auto shrink-0 object-contain object-bottom" style={{ mask: 'linear-gradient(to top, transparent 0%, black 3%, black 100%)', WebkitMask: 'linear-gradient(to top, transparent 0%, black 3%, black 100%)' }} />
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+79507770608" className="lg:hidden btn-gold rounded-xl px-8 py-4 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98]">Бесплатная консультация</a>
              <FormModal title="Бесплатная консультация" buttonText="Записаться" page="male" className="hidden lg:block btn-gold rounded-xl px-8 py-4 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98]">Бесплатная консультация</FormModal>
              <a href="#problems" className="bg-white rounded-xl px-8 py-4 text-navy-900 font-semibold text-lg text-center hover:bg-gray-100 transition-colors">С чем Вы столкнулись?</a>
            </div>
          </div>
        </div>
      </header>

      {/* Pain Points */}
      <section id="problems" className="py-24" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">С чем Вы столкнулись?</h2>
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
          <div className="flex flex-col lg:flex-row items-center gap-6 lg:gap-12">
            <div className="flex-shrink-0 w-full lg:w-auto flex justify-center">
              <img src="/images/photos/quote-male.webp" alt="Адвокат Андреещев" width={520} height={650} loading="lazy" className="w-[85vw] max-w-[520px] lg:w-[350px] h-auto rounded-2xl object-cover" />
            </div>
            <div>
              <div className="w-[60px] h-[3px] bg-gold-400 mb-6 mx-auto lg:mx-0" />
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-6 text-center lg:text-left">Вы не одиноки в этом</h2>
              <p className="text-gray-300 text-lg leading-relaxed mb-4 text-center lg:text-left">
                Каждую неделю ко мне обращаются мужчины, которые ещё вчера думали, что у них крепкая семья. Развод застаёт врасплох — но это не конец, а начало нового этапа. Те, кто действовал грамотно, сохранили и имущество, и отношения с детьми.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed mb-6 text-center lg:text-left">
                Сейчас важно не поддаваться эмоциям и не совершать необдуманных шагов. <strong className="text-white">Я возьму на себя юридическую сторону — Вы сосредоточитесь на главном.</strong>
              </p>
              <div className="text-gold-400 font-semibold text-center lg:text-left">Андреещев Денис Валерьевич, адвокат</div>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do */}
      <section className="relative py-24 bg-white overflow-hidden">
        <img src="/images/photos/advantages-bg.webp" alt="" width={1440} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
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
                    <span className="text-gray-500 line-through text-lg">3 000 ₽</span>
                    <span className="text-navy-700 font-bold text-2xl">Бесплатно</span>
                  </div>
                  <span className="text-gray-600 text-sm">/ первичная консультация — 15 минут</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center lg:text-left">Каждый день промедления — в пользу другой стороны</h2>
                <ul className="space-y-3">
                  {['Узнаете, что из имущества под угрозой уже сейчас', 'Получите план действий на ближайшие 48 часов', 'Разберём ошибки, которые ещё не поздно исправить', 'Поймете в каких случаях без адвоката не обойтись'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-navy-900/70">
                      <span className="text-navy-700 mt-0.5">✓</span>{item}
                    </li>
                  ))}
                </ul>
              </div>
              <FormModal title="Записаться на консультацию" buttonText="Отправить" page="male" className="btn-gold rounded-xl px-10 py-5 text-navy-900 font-bold text-lg text-center transition-transform hover:scale-[0.98] flex-shrink-0">Записаться на консультацию</FormModal>
            </div>
          </div>
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="relative py-24 bg-navy-900 overflow-hidden">
        <img src="/images/photos/steps-bg.webp" alt="" width={1440} height={900} loading="lazy" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }} />
        <div className="absolute inset-0 bg-navy-900/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Прозрачная схема работы</h2>
            <p className="text-gray-300 text-lg">6 понятных этапов от консультации до результата</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {steps.map((s) => {
              const styles: Record<string, { span: string; bg: string; title: string; text: string }> = {
                '1': { span: 'lg:col-span-2', bg: 'bg-white/10 backdrop-blur-md border border-white/20', title: 'text-white text-2xl md:text-3xl', text: 'text-gray-300' },
                '2': { span: '', bg: 'bg-white border border-gold-200', title: 'text-navy-900 text-xl', text: 'text-gray-500' },
                '3': { span: '', bg: 'bg-white border border-gold-200', title: 'text-navy-900 text-xl', text: 'text-gray-500' },
                '4': { span: 'lg:col-span-2', bg: 'bg-white/10 backdrop-blur-md border border-white/20', title: 'text-white text-2xl md:text-3xl', text: 'text-gray-300' },
                '5': { span: 'lg:col-span-2', bg: 'bg-white/10 backdrop-blur-md border border-white/20', title: 'text-white text-2xl md:text-3xl', text: 'text-gray-300' },
                '6': { span: '', bg: 'bg-white border border-gold-200', title: 'text-navy-900 text-xl', text: 'text-gray-500' },
              }
              const st = styles[s.n]
              return (
              <div key={s.n} className={`relative overflow-hidden rounded-3xl p-8 card-hover flex flex-col justify-between min-h-[220px] ${st.span} ${st.bg}`}>
                <div>
                  <div className="w-10 h-10 rounded-lg btn-gold flex items-center justify-center flex-shrink-0 mb-4">
                    <span className="text-navy-900 font-bold">{s.n}</span>
                  </div>
                  <h3 className={`font-bold mb-3 ${st.title}`}>{s.title}</h3>
                  <p className={`text-sm leading-relaxed ${st.text}`}>{s.desc}</p>
                </div>
              </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Pricing */}
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
          <p className="text-gray-300 text-sm text-center mt-6">* Точная стоимость определяется после анализа Вашей ситуации</p>
        </div>
      </section>

      {/* Certificates */}
      <CertificatesBlock certificates={certificates} />

      {/* Reviews */}
      <ReviewsBlock reviews={reviews} />

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

      {/* Footer */}
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
