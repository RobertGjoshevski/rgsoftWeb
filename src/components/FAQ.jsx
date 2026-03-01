import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import './FAQ.css'

const FAQ_KEYS = [
  'crossPlatform',
  'whyFlutter',
  'websitesToo',
  'process',
  'howLong',
  'maintenance',
  'whatIsWebsiteDev',
  'whoNeeds'
]

const FAQItem = ({ itemKey, isOpen, onToggle, question, answer }) => (
  <article className={`faq-item ${isOpen ? 'faq-item--open' : ''}`}>
    <button
      type="button"
      className="faq-question"
      onClick={onToggle}
      aria-expanded={isOpen}
      aria-controls={`faq-answer-${itemKey}`}
      id={`faq-question-${itemKey}`}
    >
      <span className="faq-question-text">{question}</span>
      <span className="faq-icon" aria-hidden="true">{isOpen ? '−' : '+'}</span>
    </button>
    <div
      id={`faq-answer-${itemKey}`}
      className="faq-answer"
      role="region"
      aria-labelledby={`faq-question-${itemKey}`}
      hidden={!isOpen}
    >
      <div className="faq-answer-inner">
        <p>{answer}</p>
      </div>
    </div>
  </article>
)

const FAQ = () => {
  const { t } = useTranslation()
  const [openKey, setOpenKey] = useState(null)

  const handleToggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <section className="faq section" aria-labelledby="faq-heading">
      <div className="container">
        <FadeIn direction="up" distance={30} duration={0.6}>
          <div className="section-header">
            <h2 id="faq-heading">{t('faq.title')}</h2>
            <p className="section-description">{t('faq.description')}</p>
          </div>
        </FadeIn>
        <div className="faq-list">
          {FAQ_KEYS.map((key, index) => (
            <FadeIn key={key} delay={index * 0.05} duration={0.5} direction="up" distance={20}>
              <FAQItem
                itemKey={key}
                isOpen={openKey === key}
                onToggle={() => handleToggle(key)}
                question={t(`faq.${key}Question`)}
                answer={t(`faq.${key}Answer`)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
