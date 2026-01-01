import React from 'react'
import { FadeIn } from './reactbits'
import './Services.css'
import consultingImg from '../assets/consulting.png'
import maintanceImg from '../assets/maintance.png'

const ServiceItem = ({ title, description, features, index, isReversed }) => {
  return (
    <FadeIn
      delay={index * 0.2}
      duration={0.6}
      direction={isReversed ? 'left' : 'right'}
      distance={50}
      className={`service-item ${isReversed ? 'reversed' : ''}`}
    >
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
        {title === 'Custom Flutter Development' ? (
          <img
            src={consultingImg}
            alt="Consulting & Strategy"
            style={{
              float: 'left',
              width: '120%',
              height: '120%',
              objectFit: 'contain'
            }}
            className="service-image service-image-left"
          />
        ) : title === 'App Maintenance & Support' ? (
          <img
            src={maintanceImg}
            alt="Consulting & Strategy"
            style={{
              float: 'left',
              marginLeft: '2rem',
              width: '120%',
              height: '120%',
              objectFit: 'contain'
            }}
            className="service-image service-image-left"
          />
        ) : title === 'Consulting & Strategy' ? (
          <img
            src={consultingImg}
            alt="Consulting & Strategy"
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
    </FadeIn>
  )
}

const Services = () => {
  const services = [
    {
      title: 'Custom Flutter Development',
      description: 'From concept to deployment, we build custom Flutter applications tailored to your business needs.',
      features: [
        'Custom UI/UX design',
        'State management implementation',
        'API integration',
        'Firebase backend setup',
        'App Store & Play Store deployment'
      ]
    },
    {
      title: 'App Maintenance & Support',
      description: 'Keep your app running smoothly with regular updates, bug fixes, and feature enhancements.',
      features: [
        'Regular updates & patches',
        'Performance optimization',
        'Feature additions',
        'Technical support',
        'Security updates'
      ]
    },
    {
      title: 'Consulting & Strategy',
      description: 'Expert guidance on Flutter architecture, best practices, and development strategy.',
      features: [
        'Architecture review',
        'Code quality assessment',
        'Performance optimization',
        'Team training',
        'Development roadmap'
      ]
    }
  ]

  return (
    <>
      <div className="section-divider"></div>
      <section id="services" className="services section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h2>Our Services</h2>
              <p className="section-description">
                Comprehensive Flutter development services to bring your mobile app vision to life
              </p>
            </div>
          </FadeIn>

          <div className="services-list">
            {services.map((service, index) => (
              <ServiceItem
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

export default Services

