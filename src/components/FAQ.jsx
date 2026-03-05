import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import './FAQ.css'

const FAQ_HOME_KEYS = [
  'whatIsRGsoft',
  'howRGsoftWorks',
  'whatDoesRGsoftOffer',
  'whoIsRGsoftFor',
  'howToGetStarted',
  'whereIsRGsoft',
  'pricingOverview'
]

const FAQ_APP_KEYS = [
  'whatIsFlutter',
  'process',
  'howLong',
  'maintenance',
  'appPricing'
]

const FAQ_WEBSITE_KEYS = [
  'whatWeBuild',
  'process',
  'howLong',
  'websitePricing'
]

const FAQ_KEYS_BY_VARIANT = {
  home: FAQ_HOME_KEYS,
  app: FAQ_APP_KEYS,
  website: FAQ_WEBSITE_KEYS
}

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

const FAQ = ({ variant = 'home' }) => {
  const { t } = useTranslation()
  const [openKey, setOpenKey] = useState(null)
  const namespace = variant === 'app' ? 'faqApp' : variant === 'website' ? 'faqWebsite' : 'faq'
  const keys = FAQ_KEYS_BY_VARIANT[variant] ?? FAQ_HOME_KEYS

  const handleToggle = (key) => {
    setOpenKey((prev) => (prev === key ? null : key))
  }

  return (
    <section className="faq section" aria-labelledby="faq-heading">
      <div className="container">
        <FadeIn direction="up" distance={30} duration={0.6}>
          <div className="section-header">
            <h2 id="faq-heading">{t(`${namespace}.title`)}</h2>
            <p className="section-description">{t(`${namespace}.description`)}</p>
          </div>
        </FadeIn>
        <div className="faq-list">
          {keys.map((key, index) => (
            <FadeIn key={key} delay={index * 0.05} duration={0.5} direction="up" distance={20}>
              <FAQItem
                itemKey={key}
                isOpen={openKey === key}
                onToggle={() => handleToggle(key)}
                question={t(`${namespace}.${key}Question`)}
                answer={t(`${namespace}.${key}Answer`)}
              />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ
