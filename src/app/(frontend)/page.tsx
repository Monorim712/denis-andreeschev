import { getPayload } from 'payload'
import config from '@/payload.config'

export default async function HomePage() {
  const payload = await getPayload({ config })
  const settings = await payload.findGlobal({ slug: 'site-settings' })

  const services = (settings.services as Array<{ title: string; description: string }>) || []

  return (
    <main>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <h1>{settings.heroTitle}</h1>
          <p className="subtitle">{settings.heroSubtitle}</p>
          <a href={`tel:${(settings.phone as string)?.replace(/[\s()-]/g, '')}`} className="btn">
            Позвонить
          </a>
        </div>
      </section>

      {/* Services */}
      <section className="services" id="services">
        <div className="container">
          <h2>Услуги</h2>
          <div className="services-grid">
            {services.map((service, i) => (
              <div key={i} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="about" id="about">
        <div className="container">
          <h2>{settings.aboutTitle}</h2>
          <p>{settings.aboutText}</p>
        </div>
      </section>

      {/* Contacts */}
      <section className="contacts" id="contacts">
        <div className="container">
          <h2>Контакты</h2>
          <div className="contacts-grid">
            <div className="contact-item">
              <strong>Телефон</strong>
              <a href={`tel:${(settings.phone as string)?.replace(/[\s()-]/g, '')}`}>
                {settings.phone}
              </a>
            </div>
            <div className="contact-item">
              <strong>Email</strong>
              <a href={`mailto:${settings.email}`}>{settings.email}</a>
            </div>
            <div className="contact-item">
              <strong>Адрес</strong>
              <p>{settings.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Адвокат Андреещев Денис. Все права защищены.</p>
        </div>
      </footer>
    </main>
  )
}
