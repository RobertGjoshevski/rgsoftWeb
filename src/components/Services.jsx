import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import './Services.css'
import consultingImg from '../assets/consulting.png'
import maintanceImg from '../assets/maintance.png'

const ServiceItem = ({ serviceId, title, description, features, index, isReversed }) => {
  const isOverlayLayout = serviceId === 'customFlutter' || serviceId === 'maintenance' || serviceId === 'consulting' || serviceId === 'webDesign'
  const isRightAligned = serviceId === 'maintenance'

  const getBackgroundImage = () => {
    if (serviceId === 'maintenance') return maintanceImg
    return consultingImg
  }

  return (
    <FadeIn
      delay={index * 0.2}
      duration={0.6}
      direction={isReversed ? 'left' : 'right'}
      distance={50}
      className={`service-item ${isReversed ? 'reversed' : ''} ${isOverlayLayout ? 'overlay-layout' : ''} ${isOverlayLayout && !isRightAligned ? 'overlay-left' : ''}`}
    >
      {isOverlayLayout ? (
        <>
          <div
            className="service-background-image"
            style={{
              backgroundImage: `url(${getBackgroundImage()})`,
            }}
          />
          <div className={`service-content-overlay ${!isRightAligned ? 'overlay-left' : ''}`}>
            <h3>{title}</h3>
            <p className="service-description">{description}</p>
            <ul className="service-features">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="service-content">
            <h3>{title}</h3>
            <p className="service-description">{description}</p>
            <ul className="service-features">
              {features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
          <div className="service-visual">
            {serviceId === 'customFlutter' ? (
              <img
                src={consultingImg}
                alt={title}
                style={{
                  float: 'left',
                  width: '120%',
                  height: '120%',
                  objectFit: 'contain'
                }}
                className="service-image service-image-left"
              />
            ) : serviceId === 'consulting' ? (
              <img
                src={consultingImg}
                alt={title}
                style={{
                  float: 'left',
                  marginRight: '2rem',
                  width: '120%',
                  height: '120%',
                  objectFit: 'contain'
                }}
                className="service-image service-image-left"
              />
            ) : (
              <div className="service-placeholder">
                <div className="service-icon">💼</div>
              </div>
            )}
          </div>
        </>
      )}
    </FadeIn>
  )
}

const Services = () => {
  const { t } = useTranslation()

  const serviceKeys = [
    { id: 'customFlutter', isReversed: false },
    { id: 'maintenance', isReversed: true },
    { id: 'consulting', isReversed: false },
    { id: 'webDesign', isReversed: true }
  ]

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
