import Link from 'next/link'
import { ReviewsBlock } from './components/ReviewsBlock'
import { CertificatesBlock } from './components/CertificatesBlock'
import { FormModal } from './components/FormModal'
import { MobileToolbar } from './components/MobileToolbar'
import { getServices, getAdvantages, getSteps, getFaq, getReviews, getCertificates, getPricing } from '@/lib/data'

export const revalidate = 60

const defaultFaqItems = [
  { q: 'Муж/жена не даёт видеться с ребёнком. Что делать?', a: 'Это нарушение закона. Оба родителя имеют равные права на общение с ребёнком. Подаём в суд заявление об определении порядка общения — суд установит точный график, который обязаны соблюдать обе стороны. За нарушение — штраф и даже изменение места жительства ребёнка.' },
  { q: 'Супруг спрятал имущество или переписал на родственников. Можно что-то сделать?', a: 'Да. Сделки по выводу имущества можно оспорить в суде, если они совершены без вашего согласия. Также суд вправе наложить арест на спорное имущество, чтобы его не продали до раздела. Чем раньше обратитесь — тем больше шансов вернуть.' },
  { q: 'Сколько длится развод и можно ли ускорить?', a: 'Простой развод без споров — 1-2 месяца. С разделом имущества и детьми — от 3 до 8 месяцев. Ускорить можно: грамотная подготовка документов, правильная подсудность и отсутствие процессуальных ошибок экономят 2-3 месяца.' },
  { q: 'Сколько стоят услуги адвоката?', a: 'Стоимость услуг адвоката фиксируется в договоре после анализа Вашей ситуации. Судебные расходы (экспертизы, госпошлины) зависят от хода дела — заранее предупрежу о возможных затратах. Точные цены — в разделе «Стоимость услуг» на этой странице.' },
  { q: 'Можно ли отсудить ребёнка отцу?', a: 'Да, и таких решений всё больше. Суд смотрит не на пол родителя, а на интересы ребёнка: жилищные условия, доход, участие в воспитании, мнение самого ребёнка (с 10 лет). Правильно собранная доказательная база — ключ к успеху.' },
  { q: 'Нужно ли мне лично ходить в суд?', a: 'Нет. По доверенности я полностью представляю ваши интересы — от подачи иска до получения решения. Вам не придётся видеться с бывшим супругом, отпрашиваться с работы или нервничать в коридоре суда.' },
  { q: 'Бывший супруг подал на алименты больше, чем я зарабатываю. Что делать?', a: 'Размер алиментов определяется судом на основе подтверждённого дохода. Если требования завышены — предоставим справки, докажем реальный заработок. Также можно подать встречный иск об уменьшении размера алиментов.' },
  { q: 'Квартира куплена до брака, но супруг претендует на неё. Заберут?', a: 'Добрачное имущество разделу не подлежит. Но если в браке делался капитальный ремонт за общие деньги — суд может признать увеличение стоимости совместным имуществом. Важно доказать, когда и на чьи средства приобретено жильё.' },
]

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Адвокат Андреещев Денис Валерьевич',
  description: 'Адвокат по семейным делам в Воронеже',
  url: 'https://denis-andreeschev.ru',
  telephone: '+79507770608',
  email: 'denis.andreeschev2015@yandex.ru',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'ул. Урицкого, д. 70',
    addressLocality: 'Воронеж',
    addressRegion: 'Воронежская область',
    addressCountry: 'RU',
  },
  areaServed: { '@type': 'City', name: 'Воронеж' },
  priceRange: 'от 3000 ₽',
}

export default async function HomePage() {
  const [services, advantages, steps, faqData, reviews, certificates, pricing] = await Promise.all([
    getServices(),
    getAdvantages(),
    getSteps(),
    getFaq('main'),
    getReviews(),
    getCertificates(),
    getPricing(),
  ])

  const faqItems = faqData || defaultFaqItems

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white border-b border-gray-100 shadow-sm lg:bg-white/95 lg:backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-center lg:justify-start gap-8 flex-nowrap">
          <a href="#" className="shrink-0 leading-tight flex items-center gap-3">
            <img src="/images/logo.webp" alt="Логотип" width={96} height={96} className="w-10 h-10 object-contain" />
            <div>
              <span className="font-serif text-navy-900 text-sm block">Адвокат по семейным делам</span>
              <span className="font-serif font-bold text-navy-900 text-lg block">Андреещев Д.В.</span>
            </div>
          </a>
          <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 flex-nowrap">
            <div className="relative group">
              <a href="#services" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 min-h-[48px] flex items-center gap-1">Услуги <span className="text-[10px] leading-none group-hover:rotate-180 transition-transform">▼</span></a>
              <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                  <Link href="/dlya-muzhchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав мужчин</Link>
                  <Link href="/dlya-zhenshchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав женщин</Link>
                  <Link href="/nasledstvo" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Наследство</Link>
                </div>
              </div>
            </div>
            <a href="#advantages" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 min-h-[48px] flex items-center">Преимущества</a>
            <a href="#about" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 min-h-[48px] flex items-center">Об адвокате</a>
            <a href="#pricing" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 min-h-[48px] flex items-center">Цены</a>
            <a href="#credentials" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 min-h-[48px] flex items-center">Сертификаты</a>
            <a href="#reviews" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 min-h-[48px] flex items-center">Отзывы</a>
            <a href="#contacts" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap py-2 min-h-[48px] flex items-center">Контакты</a>
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
      <header className="hero-contain relative lg:min-h-[70vh] flex items-end lg:items-center bg-navy-900 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 via-transparent to-navy-900/60 hidden lg:block" />
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 w-full">
          <div className="relative flex flex-col lg:flex-row items-center lg:items-end">
            <div className="relative z-20 flex-1 pt-8 lg:pt-40 pb-0 lg:pb-16 flex flex-col items-center lg:items-start">
              <span className="text-gold-400 font-serif tracking-[0.25em] uppercase text-sm block leading-tight text-center lg:text-left lg:absolute lg:top-4 lg:left-0 mb-[60px] lg:mb-0">Адвокат<br />по семейному и<br />наследственному праву</span>
              <h1 className="font-serif text-6xl md:text-7xl xl:text-8xl text-white font-bold leading-[0.95] mb-0 lg:mb-10 text-center lg:text-left -mt-[20px] lg:mt-0">
                Денис<br /><span className="text-gold-400">Андреещев</span>
              </h1>
              <div className="flex justify-center lg:hidden -mb-5" style={{ marginTop: '10px', paddingLeft: '10px' }}>
                <img src="/images/photos/hero-main-mobile.webp" alt="Адвокат Андреещев" width={360} height={417} fetchPriority="high" decoding="sync" className="h-[45vh] w-auto object-contain object-bottom" />
              </div>
              <a href="tel:+79507770608" className="btn-gold px-10 py-5 text-navy-900 font-bold text-lg transition-transform w-full text-center lg:hidden">
                Бесплатная консультация
              </a>
              <FormModal title="Бесплатная консультация" buttonText="Бесплатная консультация" className="btn-gold px-10 py-5 text-navy-900 font-bold text-lg transition-transform lg:inline-block text-center hidden lg:block">
                Бесплатная консультация
              </FormModal>
            </div>
            <div className="desktop-hero-wrap relative z-10 justify-center lg:absolute lg:-bottom-[116px] lg:left-[calc(50%+130px)] lg:-translate-x-1/2" style={{ display: 'none' }}>
              <img src="/images/photos/hero-main.webp" alt="Адвокат Андреещев" width={518} height={600} loading="lazy" decoding="async" className="h-[127vh] w-auto object-contain object-bottom" style={{ mask: 'linear-gradient(to top, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMask: 'linear-gradient(to top, transparent 0%, black 10%, black 90%, transparent 100%)' }} />
            </div>
            <div className="relative z-20 flex-1 self-start pt-4 pb-0 hidden lg:flex justify-end">
              <p className="font-serif text-white text-5xl xl:text-6xl font-bold leading-[2.1] text-right">Защита того,<br />что <span className="text-gold-400">дороже</span><br /><span className="text-gold-400">всего!</span></p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="cv-auto bg-gold-50 py-12">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-navy-900 flex items-center justify-center mb-3">
                <span className="font-serif text-2xl font-bold text-gold-400">500+</span>
              </div>
              <div className="text-navy-900 text-sm font-semibold">выигранных дел</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-navy-900 flex items-center justify-center mb-3">
                <span className="font-serif text-2xl font-bold text-gold-400">15+</span>
              </div>
              <div className="text-navy-900 text-sm font-semibold">лет опыта</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-navy-900 flex items-center justify-center mb-3">
                <span className="font-serif text-2xl font-bold text-gold-400">95%</span>
              </div>
              <div className="text-navy-900 text-sm font-semibold">положительных решений</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-24 h-24 rounded-full bg-navy-900 flex items-center justify-center mb-3">
                <span className="font-serif text-2xl font-bold text-gold-400">24/7</span>
              </div>
              <div className="text-navy-900 text-sm font-semibold">на связи</div>
            </div>
          </div>
        </div>
      </section>

      {/* Gender Choice */}
      <section id="gender" className="cv-auto py-20" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Выберите Вашу ситуацию</h2>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 max-w-3xl mx-auto">
            <Link href="/dlya-muzhchin" className="group">
              <img src="/images/photos/gender-female.webp" alt="Я муж / отец" loading="lazy" width={288} height={288} className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl transition-transform group-hover:scale-105" />
            </Link>
            <Link href="/dlya-zhenshchin" className="group">
              <img src="/images/photos/gender-male.webp" alt="Я жена / мать" loading="lazy" width={288} height={288} className="w-56 h-56 md:w-72 md:h-72 rounded-full shadow-xl transition-transform group-hover:scale-105" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="cv-auto py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Чем я могу помочь</h2>
            <p className="text-gray-300 text-lg">Специализируюсь на семейных и наследственных делах — это моя основная практика</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            <Link href="/dlya-muzhchin" className="relative overflow-hidden rounded-3xl p-8 card-hover flex items-center gap-4 text-navy-900 border border-gold-400/30 hover:border-gold-400/60 transition-colors min-h-[80px]" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
              <span className="material-symbols-outlined text-3xl text-navy-900/70">shield_person</span>
              <span className="font-bold text-lg">Защита прав мужчин</span>
            </Link>
            <Link href="/dlya-zhenshchin" className="relative overflow-hidden rounded-3xl p-8 card-hover flex items-center gap-4 text-navy-900 border border-gold-400/30 hover:border-gold-400/60 transition-colors min-h-[80px]" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
              <span className="material-symbols-outlined text-3xl text-navy-900/70">shield</span>
              <span className="font-bold text-lg">Защита прав женщин</span>
            </Link>
            <Link href="/nasledstvo" className="relative overflow-hidden rounded-3xl p-8 card-hover flex items-center gap-4 text-navy-900 border border-gold-400/30 hover:border-gold-400/60 transition-colors min-h-[80px]" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
              <span className="material-symbols-outlined text-3xl text-navy-900/70">account_balance_wallet</span>
              <span className="font-bold text-lg">Наследство</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s, i) => {
              const big = i === 0 || i === 3 || i === 4
              return (
                <div
                  key={i}
                  className={`relative overflow-hidden rounded-3xl p-8 card-hover flex flex-col justify-between min-h-[220px] ${
                    big ? 'lg:col-span-2 bg-navy-800 text-white' : 'bg-white text-navy-900 border border-gold-200'
                  }`}
                >
                  <div>
                    <div className={`mb-4 ${big ? 'text-gold-400' : 'text-navy-900/60'}`}><span className="material-symbols-outlined text-3xl">{s.icon}</span></div>
                    <h3 className={`font-bold mb-3 ${big ? 'text-2xl md:text-3xl' : 'text-xl'}`}>{s.title}</h3>
                    {big && <p className="text-gray-300 text-base leading-relaxed max-w-xl">{s.desc}</p>}
                    {!big && <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section id="advantages" className="cv-auto relative py-24 bg-white overflow-hidden">
        <img src="/images/photos/advantages-bg.webp" alt="" loading="lazy" width={1440} height={900} className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
        <div className="absolute inset-0 bg-white/50 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-4">Почему выбирают меня</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advantages.map((a, i) => {
              const variants = ['p-7', 'p-9', 'p-6', 'p-8', 'p-7', 'p-9']
              const rotations = ['-rotate-1', 'rotate-1', '-rotate-[0.5deg]', 'rotate-[0.5deg]', '-rotate-1', 'rotate-1']
              const bg = i % 2 === 0 ? 'bg-[#FAF5E6] text-navy-900' : 'bg-navy-900 text-white'
              return (
                <div
                  key={i}
                  className={`${variants[i]} ${bg} ${rotations[i]} card-hover relative`}
                  style={{
                    border: '10px solid #8B6F3A',
                    outline: '2px solid #D4B877',
                    outlineOffset: '-14px',
                    borderRadius: '4px',
                    boxShadow: '0 20px 40px rgba(0,0,0,0.35), 0 6px 12px rgba(0,0,0,0.25), inset 0 0 0 2px rgba(0,0,0,0.15)',
                  }}
                >
                  <div className="w-10 h-10 rounded-lg btn-gold flex items-center justify-center text-navy-900 font-bold mb-5">{i + 1}</div>
                  <h3 className={`text-lg font-bold mb-3 ${i % 2 === 0 ? 'text-navy-900' : 'text-white'}`}>{a.title}</h3>
                  <p className={`text-sm leading-relaxed ${i % 2 === 0 ? 'text-navy-900/70' : 'text-gray-300'}`} dangerouslySetInnerHTML={{ __html: a.desc }} />
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* About / Quote */}
      <section id="about" className="cv-auto pt-12 pb-0 bg-gold-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-shrink-0 hidden lg:block">
              <img src="/images/photos/about.webp" alt="Адвокат Андреещев" loading="lazy" width={480} height={600} className="block" style={{ marginBottom: '-1px', marginLeft: '-30px' }} />
            </div>
            <div className="text-center lg:text-left">
              <div className="gold-line mb-6 mx-auto lg:mx-0" />
              <p className="text-navy-900 font-semibold tracking-[0.15em] uppercase text-sm mb-4">Адвокат по семейным и наследственным спорам</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-8">Андреещев Денис Валерьевич</h2>
              <p className="text-navy-900/80 text-xl leading-relaxed mb-6">
                Всю свою карьеру я посвятил <strong className="text-navy-900">семейному и наследственному праву.<br />15 лет. Более 500 дел</strong>. Узкая специализация позволяет глубоко разбираться в каждом деле и находить решения там, где другие их не видят.
              </p>
              <p className="text-navy-900/80 text-xl leading-relaxed mb-8">
                Когда на кону Ваша семья, дом и будущее детей — нужен тот, кто <strong className="text-navy-900">прошёл через сотни таких дел и знает каждый поворот</strong>. Я сделаю так, чтобы Вы прошли через это один раз и правильно — без лишних заседаний, без сюрпризов, без потерь.
              </p>
              <p className="text-navy-900/80 text-xl leading-relaxed mb-8">
                Моя задача — <strong className="text-navy-900">защитить Ваши интересы и добиться лучшего результата</strong>. Вы занимаетесь своей жизнью, я — Вашим делом.
              </p>
              <div className="text-navy-900 font-semibold text-lg">Адвокат, рег. номер 36/2348 в реестре адвокатов Воронежской области</div>
            </div>
          </div>
        </div>
        <div className="lg:hidden flex justify-center mt-0">
          <img src="/images/photos/about.webp" alt="Адвокат Андреещев" loading="lazy" width={480} height={600} className="w-full max-w-[720px] object-contain block" style={{ marginBottom: '-1px' }} />
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="cv-auto relative py-24 bg-navy-900 overflow-hidden">
        <img src="/images/photos/steps-bg.webp" alt="" loading="lazy" width={1440} height={900} className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }} />
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
      <section id="pricing" className="cv-auto py-24 bg-navy-900">
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

      {/* Consultation CTA */}
      <section className="cv-auto py-6 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border-2 border-navy-900 shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-end gap-0 lg:gap-8">
              <div className="flex-1 p-8 md:p-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 mb-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 line-through text-lg">3 000 ₽</span>
                    <span className="bg-gold-400 text-navy-900 font-bold text-2xl px-3 py-0.5 rounded-lg">Бесплатно</span>
                  </div>
                  <span className="text-gray-600 text-sm">/ первичная консультация — 15 минут</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center lg:text-left">15 минут, которые могут сэкономить вам миллионы</h2>
                <ul className="space-y-3 mb-8">
                  {['Покажу слабые места — где вы теряете деньги, детей или имущество прямо сейчас', 'Разберём ошибки, которые ещё можно исправить, пока не поздно', 'Сообщу, в каких случаях без адвоката не обойтись', 'Подскажу, какие документы подготовить заранее, чтобы не терять время'].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-600">
                      <span className="text-gold-500 mt-0.5">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="flex flex-col sm:flex-row gap-4">
                  <FormModal title="Записаться на консультацию" buttonText="Записаться" className="btn-gold rounded-xl px-10 py-5 text-navy-900 font-bold text-lg text-center transition-transform">
                    Записаться
                  </FormModal>
                  <a href="tel:+79507770608" className="bg-navy-900 rounded-xl px-10 py-5 text-white font-semibold text-center hover:bg-navy-800 transition-colors">
                    Позвонить
                  </a>
                </div>
              </div>
              <div className="flex-shrink-0 self-end -mt-5 lg:mt-0">
                <img src="/images/photos/cta-photo.webp" alt="Адвокат Андреещев" loading="lazy" width={300} height={400} className="h-[250px] lg:h-[400px] w-auto object-contain block mx-auto" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certificates */}
      <CertificatesBlock certificates={certificates} />

      {/* Reviews */}
      <ReviewsBlock reviews={reviews} />

      {/* FAQ */}
      <section id="faq" className="cv-auto py-24 bg-white">
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
      <section id="contacts" className="cv-auto py-20 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Контакты</h2>
            <p className="text-gray-300 text-lg">Свяжитесь со мной любым удобным способом — на связи 24/7!</p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex flex-col items-center text-center px-4">
              <div className="w-80 h-80 lg:w-52 lg:h-52 rounded-full border-4 border-gold-400 overflow-hidden mb-6 mt-4">
                <img src="/images/photos/about.webp" alt="Адвокат Андреещев" loading="lazy" width={480} height={600} className="w-full h-full object-cover object-top" />
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
                loading="lazy"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      </section>

      <MobileToolbar />

      {/* Footer */}
      <footer className="cv-auto bg-navy-900 pt-16 pb-32 lg:pb-40">
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
                  <span>denis.andreeschev2015@yandex.ru</span>
                </a>
              </div>
            </div>

            <div className="hidden lg:block">
              <h3 className="font-serif text-white font-bold uppercase tracking-wider text-sm mb-6">Разделы сайта</h3>
              <div className="flex flex-col gap-3">
                <div className="relative group">
                  <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm flex items-center gap-1">Услуги <span className="text-[10px] leading-none group-hover:rotate-180 transition-transform">▼</span></a>
                  <div className="absolute bottom-full left-0 pb-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 min-w-[220px]">
                      <a href="/dlya-muzhchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав мужчин</a>
                      <a href="/dlya-zhenshchin" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Защита прав женщин</a>
                      <a href="/nasledstvo" className="block px-5 py-3 text-sm text-navy-900/70 hover:text-navy-900 hover:bg-gold-50 transition-colors">Наследство</a>
                    </div>
                  </div>
                </div>
                <a href="#advantages" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Преимущества</a>
                <a href="#about" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Об адвокате</a>
                <a href="#pricing" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Цены</a>
                <a href="#credentials" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Сертификаты</a>
                <a href="#reviews" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Отзывы</a>
                <a href="#contacts" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Контакты</a>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h3 className="font-serif text-white font-bold uppercase tracking-wider text-sm mb-6">Правовая информация</h3>
              <div className="flex flex-col gap-3">
                <a href="/privacy" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">Политика конфиденциальности</a>
                <a href="/data-processing" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">Политика обработки персональных данных</a>
                <a href="/cookies" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">Соглашение об использовании Cookie</a>
                <a href="/consent" className="text-gray-300 hover:text-gold-400 transition-colors text-sm">Согласие на обработку персональных данных</a>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-gray-300 text-sm">© 2025 Адвокат Андреещев Денис Валерьевич. Все права защищены.</div>
            <div className="text-gray-300 text-sm text-center md:text-right">Содержимое сайта не является публичной офертой.<br />Рег. номер 36/2348 в реестре адвокатов Воронежской области</div>
          </div>
        </div>
      </footer>
    </>
  )
}
