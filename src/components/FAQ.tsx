'use client'
import { useState } from 'react'

type FAQItem = { q: string; a: string }

export default function FAQ({ items, id }: { items: FAQItem[]; id?: string }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="faq-section" id={id}>
      <div className="container">
        <div className="section-header center">
          <div className="section-tag">FAQ</div>
          <h2 className="section-title">Часто задаваемые вопросы</h2>
        </div>
        <div className="faq-list">
          {items.map((item, i) => (
            <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
              <button
                className="faq-question"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                {item.q}
                <span className="faq-chevron">▼</span>
              </button>
              <div className="faq-answer">{item.a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
