import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import './Services.css'

const ServiceItem = ({ serviceId, title, description, details, features, index, isReversed }) => {
  return (
    <FadeIn
      delay={index * 0.15}
      duration={0.5}
      direction={isReversed ? 'left' : 'right'}
      distance={40}
      className={`service-item ${isReversed ? 'reversed' : ''}`}
    >
      <div className="service-content-full">
        <h3 className="service-title">{title}</h3>
        <p className="service-description">{description}</p>
        {Array.isArray(details) && details.length > 0 && (
          <div className="service-details">
            {details.map((paragraph, idx) => (
              <p key={idx} className="service-detail-paragraph">{paragraph}</p>
            ))}
          </div>
        )}
        <ul className="service-features">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
    </FadeIn>
  )
}

const DEFAULT_SERVICE_KEYS = [
  { id: 'customFlutter', isReversed: false },
  { id: 'maintenance', isReversed: true },
  { id: 'consulting', isReversed: false },
  { id: 'webDesign', isReversed: true }
]

const Services = ({ serviceKeys: serviceKeysProp = null }) => {
  const { t } = useTranslation()
  const serviceKeys = serviceKeysProp ?? DEFAULT_SERVICE_KEYS

  return (
    <>
      <div className="section-divider"></div>
      <section id="services" className="services section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h2>{t('services.title')}</h2>
              <p className="section-description">
                {t('services.description')}
              </p>
            </div>
          </FadeIn>

          <div className="services-list">
            {serviceKeys.map((item, index) => (
              <ServiceItem
                key={item.id}
                serviceId={item.id}
                title={t(`services.${item.id}.title`)}
                description={t(`services.${item.id}.description`)}
                details={t(`services.${item.id}.details`, { returnObjects: true })}
                features={t(`services.${item.id}.features`, { returnObjects: true })}
                index={index}
                isReversed={item.isReversed}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
