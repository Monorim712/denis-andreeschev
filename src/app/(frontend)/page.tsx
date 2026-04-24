import Link from 'next/link'
import { ReviewsBlock } from './components/ReviewsBlock'
import { CertificatesBlock } from './components/CertificatesBlock'
import { AskFormClient } from './components/AskFormClient'
import { FormModal } from './components/FormModal'
import { MobileToolbar } from './components/MobileToolbar'

const services = [
  { icon: 'description', title: 'Наследственные дела', desc: 'Вступление в наследство, оспаривание завещаний, раздел наследственного имущества.' },
  { icon: 'home_work', title: 'Раздел имущества', desc: 'Защита Ваших интересов при разделе квартир, бизнеса, автомобилей и накоплений.' },
  { icon: 'family_restroom', title: 'Споры о детях', desc: 'Определение места жительства ребёнка и порядка общения.' },
  { icon: 'account_balance_wallet', title: 'Алименты', desc: 'Взыскание, изменение размера, задолженность по алиментам.' },
  { icon: 'shield_person', title: 'Лишение родительских прав', desc: 'Лишение или ограничение родительских прав в интересах ребёнка.' },
  { icon: 'handshake', title: 'Досудебное урегулирование', desc: 'Мировые соглашения и медиация без судебных войн.' },
]

const advantages = [
  { title: '15+ лет судебной практики', desc: '<strong>Глубокое знание судебной практики</strong>.<br />500+ дел — это не теория, это опыт.' },
  { title: 'Активная позиция с первого дня', desc: 'Занимаю <strong>активную позицию в защите Ваших интересов</strong> — формирую встречные иски, подаю ходатайства, фиксирую доказательства. Пока другие «готовятся», я уже действую.' },
  { title: 'Узкая специализация — глубокие знания', desc: 'Семейное и наследственное право — <strong>моя узкая специализация</strong>, которая позволяет видеть то, что другие адвокаты даже не замечают.' },
  { title: 'Прозрачная стоимость услуг', desc: '<strong>Стоимость услуг адвоката фиксируется в договоре</strong>. Судебные расходы (экспертизы, госпошлины) зависят от хода дела — заранее предупрежу о возможных затратах.' },
  { title: 'Честная оценка перспектив', desc: 'Без прикрас <strong>максимально объективно доложу об обстоятельствах и перспективах</strong> дела — Вы не потратите деньги впустую и будете иметь чёткое представление о путях разрешения проблемы.' },
  { title: 'Всегда на связи', desc: 'Семейные дела не ждут рабочих часов. <strong>Вы всегда можете обратиться</strong> — отвечу, проконсультирую, поддержу. Потому что для Вас это не «рабочий вопрос» — это жизнь.' },
]

const steps = [
  { n: '1', title: 'Бесплатная консультация', desc: 'Оценим ситуацию, расскажем о рисках и перспективах. 15 минут — без обязательств.' },
  { n: '2', title: 'Анализ и стратегия', desc: 'Изучим документы, оценим риски, разработаем план действий.' },
  { n: '3', title: 'Досудебное урегулирование', desc: 'Пытаемся договориться мирно. В 40% случаев удаётся избежать суда.' },
  { n: '4', title: 'Сбор доказательств', desc: 'Фиксируем ваши права: чеки, переписки, свидетели.' },
  { n: '5', title: 'Судебное представительство', desc: 'Представляем ваши интересы в суде. Вам не обязательно присутствовать.' },
  { n: '6', title: 'Контроль исполнения', desc: 'Следим за исполнением решения суда. Работаем до результата.' },
]

const faqItems = [
  { q: 'Муж/жена не даёт видеться с ребёнком. Что делать?', a: 'Это нарушение закона. Оба родителя имеют равные права на общение с ребёнком. Подаём в суд заявление об определении порядка общения — суд установит точный график, который обязаны соблюдать обе стороны. За нарушение — штраф и даже изменение места жительства ребёнка.' },
  { q: 'Супруг спрятал имущество или переписал на родственников. Можно что-то сделать?', a: 'Да. Сделки по выводу имущества можно оспорить в суде, если они совершены без вашего согласия. Также суд вправе наложить арест на спорное имущество, чтобы его не продали до раздела. Чем раньше обратитесь — тем больше шансов вернуть.' },
  { q: 'Сколько длится развод и можно ли ускорить?', a: 'Простой развод без споров — 1-2 месяца. С разделом имущества и детьми — от 3 до 8 месяцев. Ускорить можно: грамотная подготовка документов, правильная подсудность и отсутствие процессуальных ошибок экономят 2-3 месяца.' },
  { q: 'Сколько стоят услуги адвоката?', a: 'Стоимость услуг адвоката фиксируется в договоре после анализа Вашей ситуации. Судебные расходы (экспертизы, госпошлины) зависят от хода дела — заранее предупрежу о возможных затратах. Точные цены — в разделе «Стоимость услуг» на этой странице.' },
  { q: 'Можно ли отсудить ребёнка отцу?', a: 'Да, и таких решений всё больше. Суд смотрит не на пол родителя, а на интересы ребёнка: жилищные условия, доход, участие в воспитании, мнение самого ребёнка (с 10 лет). Правильно собранная доказательная база — ключ к успеху.' },
  { q: 'Нужно ли мне лично ходить в суд?', a: 'Нет. По доверенности я полностью представляю ваши интересы — от подачи иска до получения решения. Вам не придётся видеться с бывшим супругом, отпрашиваться с работы или нервничать в коридоре суда.' },
  { q: 'Бывший супруг подал на алименты больше, чем я зарабатываю. Что делать?', a: 'Размер алиментов определяется судом на основе подтверждённого дохода. Если требования завышены — предоставим справки, докажем реальный заработок. Также можно подать встречный иск об уменьшении размера алиментов.' },
  { q: 'Квартира куплена до брака, но супруг претендует на неё. Заберут?', a: 'Добрачное имущество разделу не подлежит. Но если в браке делался капитальный ремонт за общие деньги — суд может признать увеличение стоимости совместным имуществом. Важно доказать, когда и на чьи средства приобретено жильё.' },
  { q: 'Пропущен срок вступления в наследство. Можно ли его восстановить?', a: 'Да, если причина пропуска уважительная — болезнь, незнание о смерти наследодателя, нахождение за границей. Суд восстановит срок, если Вы обратитесь в течение 6 месяцев после того, как причина пропуска отпала. Также можно признать фактическое принятие наследства, если Вы пользовались имуществом, оплачивали коммунальные услуги или долги.' },
  { q: 'Родственники не пускают в квартиру умершего и забрали документы. Что делать?', a: 'Это незаконно. Нужно немедленно подать заявление нотариусу о принятии наследства — для этого документы на имущество не обязательны, нотариус запросит их сам. Параллельно можно обратиться в полицию по факту самоуправства и в суд за защитой наследственных прав.' },
  { q: 'Можно ли оспорить завещание?', a: 'Да, если есть основания: завещатель не понимал значения своих действий, находился под давлением, был недееспособен, или завещание оформлено с нарушениями. Назначается посмертная психиатрическая экспертиза, исследуются медицинские документы. Оспорить можно в течение 1 года с момента, когда Вы узнали о нарушении.' },
  { q: 'Как делится наследство, если нет завещания?', a: 'По закону наследники призываются по очередям. Первая очередь — дети, супруг и родители. Всё делится поровну между наследниками одной очереди. Если кто-то из наследников первой очереди умер раньше — его доля переходит к внукам по праву представления.' },
  { q: 'Один из наследников при жизни ухаживал за умершим. Может ли он получить больше?', a: 'Сам по себе уход не даёт права на увеличенную долю. Но если наследник вкладывал свои деньги в имущество (ремонт, содержание), это можно учесть при разделе. Также завещатель мог составить завещание в пользу того, кто за ним ухаживал, или заключить договор ренты.' },
]

const certificates = [
  { src: '/images/certificates/gramota-new.webp', alt: 'Почётная грамота' },
  { src: '/images/certificates/certificate 1_page-0001.webp', alt: 'Сертификат 1' },
  { src: '/images/certificates/certificate 2_page-0001.webp', alt: 'Сертификат 2' },
  { src: '/images/certificates/certificate 3_page-0001.webp', alt: 'Сертификат 3' },
  { src: '/images/certificates/certificate 4_page-0001.webp', alt: 'Сертификат 4' },
  { src: '/images/certificates/certificate 5_page-0001.webp', alt: 'Сертификат 5' },
  { src: '/images/certificates/certificate 6_page-0001.webp', alt: 'Сертификат 6' },
]

const reviews = [
  { id: 1, name: 'Алексей М.', source: 'yandex-karty', date: '12.03.2025', text: 'Обращался к Денису Валерьевичу по вопросу раздела имущества при разводе. Очень грамотный специалист, всё объяснил простым языком, без лишней юридической воды. Дело выиграли, я остался доволен результатом. Рекомендую!' },
  { id: 2, name: 'Марина К.', source: 'yandex-uslugi', date: '05.02.2025', text: 'Денис Валерьевич помог мне с взысканием алиментов. Бывший муж скрывал доходы, но адвокат нашёл способ доказать реальный заработок. Теперь получаю справедливые алименты. Спасибо огромное!' },
  { id: 3, name: 'Ирина С.', source: 'harant', date: '18.01.2025', text: 'Разводилась через суд, муж был категорически против. Денис Валерьевич взял всё на себя — мне даже не пришлось появляться в суде. Развод оформили за 2 месяца. Профессионал своего дела.' },
  { id: 4, name: 'Дмитрий П.', source: 'avito', date: '22.12.2024', text: 'Обратился за помощью в определении порядка общения с ребёнком. Бывшая жена не давала видеться с сыном. Адвокат подготовил все документы, представил мои интересы в суде. Теперь вижу ребёнка регулярно. Очень благодарен!' },
  { id: 5, name: 'Елена В.', source: 'yandex-karty', date: '10.11.2024', text: 'Консультировалась по вопросу раздела квартиры. Денис Валерьевич сразу оценил шансы, рассказал все варианты. Выбрали оптимальную стратегию, в итоге получила свою долю. Честный и порядочный адвокат.' },
  { id: 6, name: 'Сергей Н.', source: 'yandex-uslugi', date: '03.10.2024', text: 'Нужна была помощь с уменьшением размера алиментов после рождения второго ребёнка в новой семье. Андреещев грамотно всё оформил, суд снизил алименты до справедливого размера.' },
  { id: 7, name: 'Анна Р.', source: 'harant', date: '15.09.2024', text: 'Обращалась по поводу лишения родительских прав бывшего мужа. Ситуация была сложная, но Денис Валерьевич нашёл подход. Дело выиграно, ребёнок в безопасности. Спасибо за профессионализм!' },
  { id: 8, name: 'Олег Т.', source: 'avito', date: '28.08.2024', text: 'Развод с разделом бизнеса — думал, это будет кошмар. Но адвокат Андреещев разложил всё по полочкам, предложил стратегию. В итоге удалось договориться на досудебном этапе. Сэкономил и нервы, и деньги.' },
]

const pricing = [
  { service: 'Первичная консультация по телефону', price: 'бесплатно', highlight: true },
  { service: 'Консультация юриста в офисе', price: 'от 2 000 ₽' },
  { service: 'Помощь при расторжении брака', price: 'от 5 000 ₽' },
  { service: 'Помощь при ограничении и лишении родительских прав', price: 'от 5 000 ₽' },
  { service: 'Помощь при разделе совместно нажитого имущества', price: 'от 5 000 ₽' },
  { service: 'Помощь при взыскании алиментов', price: 'от 3 000 ₽' },
  { service: 'Помощь при установлении отцовства', price: 'от 2 500 ₽' },
  { service: 'Разрешение семейных споров о порядке общения с детьми', price: 'от 5 000 ₽' },
  { service: 'Составление исков о разделе совместного нажитого имущества', price: 'от 5 000 ₽' },
  { service: 'Разрешение семейных споров о месте проживания детей', price: 'от 5 000 ₽' },
  { service: 'Составление исков об определении порядка общения с детьми', price: 'от 5 000 ₽' },
  { service: 'Помощь в восстановлении родительских прав', price: 'от 5 000 ₽' },
  { service: 'Признание браков недействительными', price: 'от 10 000 ₽' },
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

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 py-3 flex items-center justify-center lg:justify-start gap-8 flex-nowrap">
          <a href="#" className="shrink-0 leading-tight flex items-center gap-3">
            <img src="/images/logo.webp" alt="Логотип" className="w-10 h-10" />
            <div>
              <span className="font-serif text-navy-900 text-sm block">Адвокат по семейным делам</span>
              <span className="font-serif font-bold text-navy-900 text-lg block">Андреещев Д.В.</span>
            </div>
          </a>
          <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 flex-nowrap">
            <a href="#services" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Услуги</a>
            <a href="#advantages" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Преимущества</a>
            <a href="#about" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Об адвокате</a>
            <a href="#steps" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Этапы</a>
            <a href="#pricing" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Цены</a>
            <a href="#credentials" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Сертификаты</a>
            <a href="#reviews" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Отзывы</a>
            <a href="#faq" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">FAQ</a>
            <a href="#contacts" className="font-serif text-navy-900/70 hover:text-navy-900 text-sm transition-colors whitespace-nowrap">Контакты</a>
          </div>
          <div className="hidden lg:flex items-center gap-3 shrink-0">
            <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-[#26A5E4] flex items-center justify-center hover:brightness-110 transition-all"><svg viewBox="0 0 24 24" className="w-5 h-5 fill-white"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg></a>
            <a href="https://max.ru/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full flex items-center justify-center hover:brightness-110 transition-all" style={{background: 'linear-gradient(135deg, #6C3AED, #2563EB)'}}><img src="/images/icons/max-icon.webp" alt="Max" className="w-5 h-5" /></a>
            <a href="tel:+79507770608" className="flex items-center gap-2 font-serif btn-gold px-6 py-2.5 text-navy-900 font-semibold text-sm transition-transform whitespace-nowrap">
              <span className="material-symbols-outlined text-lg">call</span>
              8 (950) 777-06-08
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative lg:min-h-screen flex items-end lg:items-center bg-navy-900 overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-900/20 via-transparent to-navy-900/60" />
        <div className="relative z-20 max-w-[1440px] mx-auto px-6 w-full">
          <div className="relative flex flex-col lg:flex-row items-center lg:items-end">
            <div className="relative z-20 flex-1 pt-8 lg:pt-40 pb-0 lg:pb-16 flex flex-col items-center lg:items-start">
              <span className="text-gold-400 font-serif tracking-[0.25em] uppercase text-sm block leading-tight text-center lg:text-left lg:absolute lg:top-4 lg:left-0 mb-[60px] lg:mb-0">Адвокат<br />по семейному и<br />наследственному праву</span>
              <h1 className="font-serif text-6xl md:text-7xl xl:text-8xl text-white font-bold leading-[0.95] mb-0 lg:mb-10 text-center lg:text-left -mt-[20px] lg:mt-0">
                Денис<br /><span className="text-gold-400">Андреещев</span>
              </h1>
              <div className="flex justify-center lg:hidden -mb-5" style={{ marginTop: '10px', paddingLeft: '10px' }}>
                <img src="/images/photos/hero-main.webp" alt="Адвокат Андреещев" className="h-[45vh] w-auto object-contain object-bottom" style={{ mask: 'linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)', WebkitMask: 'linear-gradient(to top, transparent 0%, black 15%, black 90%, transparent 100%)' }} />
              </div>
              <FormModal title="Бесплатная консультация" buttonText="Записаться" className="btn-gold px-10 py-5 text-navy-900 font-bold text-lg transition-transform w-full lg:w-auto lg:inline-block text-center">
                Бесплатная консультация
              </FormModal>
            </div>
            <div className="relative z-10 hidden lg:flex justify-center lg:absolute lg:-bottom-[116px] lg:left-[calc(50%+130px)] lg:-translate-x-1/2">
              <img src="/images/photos/hero-main.webp" alt="Адвокат Андреещев" className="h-[127vh] w-auto object-contain object-bottom" style={{ mask: 'linear-gradient(to top, transparent 0%, black 10%, black 90%, transparent 100%)', WebkitMask: 'linear-gradient(to top, transparent 0%, black 10%, black 90%, transparent 100%)' }} />
            </div>
            <div className="relative z-20 flex-1 self-start pt-4 pb-0 hidden lg:flex justify-end">
              <p className="font-serif text-white text-5xl xl:text-6xl font-bold leading-[2.1] text-right">Защита того,<br />что <span className="text-gold-400">дороже</span><br /><span className="text-gold-400">всего!</span></p>
            </div>
          </div>
        </div>
      </header>

      {/* Stats */}
      <section className="bg-gold-50 py-12">
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
      <section id="gender" className="py-20" style={{ background: 'linear-gradient(135deg, #F5EBD0 0%, #E8D19A 100%)' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-8">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900">Нажмите на гирю, чтобы увидеть решения для Вашей ситуации</h2>
          </div>
          <div className="relative max-w-4xl mx-auto">
            <img src="/images/photos/scales.webp" alt="Весы правосудия" loading="lazy" className="w-full h-auto" />
            <Link href="/dlya-muzhchin" className="absolute top-[45%] left-[3%] w-[35%] h-[35%] rounded-2xl hover:bg-gold-400/20 transition-all cursor-pointer group" title="Я муж / отец">

            </Link>
            <Link href="/dlya-zhenshchin" className="absolute top-[42%] right-[3%] w-[35%] h-[38%] rounded-2xl hover:bg-gold-400/20 transition-all cursor-pointer group" title="Я жена / мать">

            </Link>
            <div className="absolute top-[62%] -left-[6%] md:left-[2%] animate-bounce pointer-events-none">
              <span className="text-navy-900 text-6xl md:text-7xl font-bold">→</span>
            </div>
            <div className="absolute top-[59%] -right-[6%] md:right-[2%] animate-bounce pointer-events-none">
              <span className="text-navy-900 text-6xl md:text-7xl font-bold">←</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 bg-navy-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Чем я могу помочь</h2>
            <p className="text-gray-400 text-lg">Специализируюсь на семейных и наследственных делах — это моя основная практика</p>
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
      <section id="advantages" className="relative py-24 bg-white overflow-hidden">
        <img src="/images/photos/advantages-bg.webp" alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover opacity-50 pointer-events-none" />
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
      <section id="about" className="pt-12 pb-0 bg-gold-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-shrink-0 hidden lg:block">
              <img src="/images/photos/about.webp" alt="Адвокат Андреещев" loading="lazy" width={480} height={600} className="block" style={{ marginBottom: '-1px', marginLeft: '-30px' }} />
            </div>
            <div className="text-center lg:text-left">
              <div className="gold-line mb-6 mx-auto lg:mx-0" />
              <p className="text-gold-600 font-semibold tracking-[0.15em] uppercase text-sm mb-4">Адвокат по семейным и наследственным спорам</p>
              <h2 className="font-serif text-4xl md:text-5xl font-bold text-navy-900 mb-8">Андреещев Денис <span className="text-gold-400">Валерьевич</span></h2>
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
          <img src="/images/photos/about.webp" alt="Адвокат Андреещев" loading="lazy" className="w-full max-w-[720px] object-contain block" style={{ marginBottom: '-1px' }} />
        </div>
      </section>

      {/* Steps */}
      <section id="steps" className="relative py-24 bg-navy-900 overflow-hidden">
        <img src="/images/photos/steps-bg.webp" alt="" loading="lazy" className="absolute inset-0 w-full h-full object-cover pointer-events-none" style={{ filter: 'blur(8px)', transform: 'scale(1.05)' }} />
        <div className="absolute inset-0 bg-navy-900/40 pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <div className="gold-line mx-auto mb-6" />
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">Прозрачная схема работы</h2>
            <p className="text-gray-400 text-lg">6 понятных этапов от консультации до результата</p>
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
            <p className="text-gray-400 text-lg">Фиксированная цена в договоре — без скрытых доплат</p>
          </div>
          <div className="rounded-2xl border border-white/10 overflow-hidden">
            {pricing.map((row, i) => (
              <div key={i} className={`flex items-center justify-between gap-4 px-6 py-5 ${i % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.02]'} ${i < pricing.length - 1 ? 'border-b border-white/5' : ''}`}>
                <span className="text-white text-sm md:text-base">{row.service}</span>
                <span className={`font-bold text-sm md:text-base whitespace-nowrap ${row.highlight ? 'text-gold-400' : 'text-gold-300'}`}>{row.price}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-500 text-sm text-center mt-6">* Точная стоимость определяется после анализа вашей ситуации</p>
        </div>
      </section>

      {/* Consultation CTA */}
      <section className="py-6 lg:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-2xl border-2 border-navy-900 shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row items-end gap-0 lg:gap-8">
              <div className="flex-1 p-8 md:p-12">
                <div className="flex flex-col sm:flex-row items-center sm:items-center gap-1 sm:gap-3 mb-4 text-center sm:text-left">
                  <div className="flex items-center gap-3">
                    <span className="text-gray-400 line-through text-lg">3 000 ₽</span>
                    <span className="text-gold-400 font-bold text-2xl">Бесплатно</span>
                  </div>
                  <span className="text-gray-500 text-sm">/ первичная консультация — 15 минут</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-center lg:text-left">15 минут, которые могут сэкономить вам миллионы</h2>
                <ul className="space-y-3 mb-8">
                  {['Покажу слабые места — где вы теряете деньги, детей или имущество прямо сейчас', 'Разберём ошибки, которые ещё можно исправить, пока не поздно', 'Честно скажу — нужен вам адвокат или справитесь без меня', 'Назову точные сроки и стоимость — без «это зависит от многих факторов»'].map((item, i) => (
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
                <img src="/images/photos/cta-photo.webp" alt="Адвокат Андреещев" loading="lazy" className="h-[250px] lg:h-[400px] w-auto object-contain block mx-auto" />
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
              <div className="w-80 h-80 lg:w-52 lg:h-52 rounded-full border-4 border-gold-400 overflow-hidden mb-6 mt-4">
                <img src="/images/photos/about.webp" alt="Адвокат Андреещев" loading="lazy" className="w-full h-full object-cover object-top" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-white mb-1">Андреещев Денис</h3>
              <h3 className="font-serif text-2xl font-bold text-white mb-3">Валерьевич</h3>
              <p className="text-gold-400 font-semibold text-sm mb-4">Адвокат по семейным делам</p>
              <div className="w-12 h-[2px] bg-gold-400 mb-4" />
              <p className="text-gray-400 text-sm leading-relaxed mb-6">Член Адвокатской палаты Воронежской области. Более 15 лет практики в сфере семейного права.</p>
            </div>

            <div className="space-y-4 flex flex-col justify-center">
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">call</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Телефон</div>
                  <a href="tel:+79507770608" className="text-white font-bold text-lg hover:text-gold-400 transition-colors block">8 (950) 777-06-08</a>
                </div>
              </div>
              <div className="flex items-center gap-5 p-5 rounded-xl bg-white/5 border border-white/10">
                <div className="w-14 h-14 rounded-xl bg-gold-400/20 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-gold-400 text-2xl">mail</span>
                </div>
                <div>
                  <div className="text-gray-500 text-xs uppercase tracking-wider mb-1">Email</div>
                  <a href="mailto:denis.andreeschev2015@yandex.ru" className="text-white font-bold hover:text-gold-400 transition-colors text-sm lg:text-base break-all">denis.andreeschev2015@yandex.ru</a>
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
                  <div className="text-gray-400 text-sm">ул. Урицкого, д. 70</div>
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
      <footer className="bg-navy-900 pt-16 pb-24 lg:pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <div className="flex items-center gap-3 mb-6">
                <img src="/images/logo.webp" alt="Логотип" className="w-12 h-12 brightness-0 invert" />
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
                <a href="#services" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Услуги</a>
                <a href="#advantages" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Преимущества</a>
                <a href="#about" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Об адвокате</a>
                <a href="#steps" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Этапы работы</a>
                <a href="#credentials" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Сертификаты</a>
                <a href="#reviews" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Отзывы</a>
                <a href="#pricing" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Цены</a>
                <a href="#faq" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Вопросы</a>
                <a href="#contacts" className="text-gray-400 hover:text-gold-400 transition-colors text-sm">Контакты</a>
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

          <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">
            <div className="text-gray-500 text-sm">© 2025 Адвокат Андреещев Денис Валерьевич. Все права защищены.</div>
            <div className="text-gray-500 text-sm text-center md:text-right">Содержимое сайта не является публичной офертой.<br />Рег. номер 36/2348 в реестре адвокатов Воронежской области</div>
          </div>
        </div>
      </footer>
    </>
  )
}
