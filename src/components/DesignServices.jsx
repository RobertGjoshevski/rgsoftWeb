import React from 'react'
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

          <div className="design-services-grid">
            {designServices.map((service, index) => (
              <DesignServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                features={service.features}
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
