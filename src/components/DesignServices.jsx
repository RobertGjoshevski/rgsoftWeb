import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import './DesignServices.css'

const DesignServiceCard = ({ title, description, features, index }) => {
  return (
    <FadeIn
      delay={index * 0.15}
      duration={0.6}
      direction="up"
      distance={40}
    >
      <div className="design-service-card">
        <div className="design-card-header">
          <h3>{title}</h3>
        </div>
        <p className="design-card-description">{description}</p>
        <div className="design-card-features">
          {features.map((feature, idx) => (
            <div key={idx} className="design-feature-item">
              <span className="design-feature-marker"></span>
              <span>{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  )
}

const DesignServices = () => {
  const { t } = useTranslation()

  const designServiceKeys = ['logoDesign', 'storeImages', 'websiteDesign']

  return (
    <>
      <div className="section-divider"></div>
      <section id="design-services" className="design-services section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h2>{t('designServices.title')}</h2>
              <p className="section-description">
                {t('designServices.description')}
              </p>
            </div>
          </FadeIn>

          <div className="design-services-grid">
            {designServiceKeys.map((key, index) => (
              <DesignServiceCard
                key={key}
                title={t(`designServices.${key}.title`)}
                description={t(`designServices.${key}.description`)}
                features={t(`designServices.${key}.features`, { returnObjects: true })}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DesignServices
