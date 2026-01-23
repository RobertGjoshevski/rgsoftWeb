import React from 'react'
import { FadeIn } from './reactbits'
import './DesignServices.css'

const DesignServiceItem = ({ title, description, features, index, isReversed }) => {
  return (
    <FadeIn
      delay={index * 0.2}
      duration={0.6}
      direction={isReversed ? 'left' : 'right'}
      distance={50}
      className={`design-service-item ${isReversed ? 'reversed' : ''}`}
    >
      <div className="design-service-content">
        <h3>{title}</h3>
        <p className="design-service-description">{description}</p>
        <ul className="design-service-features">
          {features.map((feature, idx) => (
            <li key={idx}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="design-service-visual">
        <div className="design-service-placeholder">
          <div className="design-service-icon">
            {title === 'Logo Design' ? '🎨' : '🖼️'}
          </div>
        </div>
      </div>
    </FadeIn>
  )
}

const DesignServices = () => {
  const designServices = [
    {
      title: 'Logo Design',
      description: 'Create a memorable brand identity with custom logo designs that represent your business values and vision.',
      features: [
        'Custom logo concepts',
        'Multiple design variations',
        'Brand identity guidelines',
        'Vector format delivery',
        'Revisions until satisfaction'
      ]
    },
    {
      title: 'Store Images',
      description: 'Professional app store screenshots, icons, and promotional graphics that showcase your app effectively.',
      features: [
        'App Store screenshots',
        'Play Store graphics',
        'App icons & favicons',
        'Promotional banners',
        'Marketing materials'
      ]
    }
  ]

  return (
    <>
      <div className="section-divider"></div>
      <section id="design-services" className="design-services section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h2>Design Services</h2>
              <p className="section-description">
                Professional design solutions to enhance your brand and app presence
              </p>
            </div>
          </FadeIn>

          <div className="design-services-list">
            {designServices.map((service, index) => (
              <DesignServiceItem
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
                index={index}
                isReversed={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default DesignServices
