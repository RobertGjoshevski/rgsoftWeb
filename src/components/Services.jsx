import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import './Services.css'

const ServiceItem = ({ title, description, features, index, isReversed }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      className={`service-item ${isReversed ? 'reversed' : ''}`}
      initial={{ opacity: 0, x: isReversed ? -50 : 50 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isReversed ? -50 : 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
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
        <div className="service-placeholder">
          <div className="service-icon">💼</div>
        </div>
      </div>
    </motion.div>
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
    <section id="services" className="services section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Services</h2>
          <p className="section-description">
            Comprehensive Flutter development services to bring your mobile app vision to life
          </p>
        </motion.div>

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
  )
}

export default Services

