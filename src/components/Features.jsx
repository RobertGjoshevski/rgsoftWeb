import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltedCard from './TiltedCard'
import './Features.css'

const FeatureCard = ({ icon, title, description, index }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      <TiltedCard className="feature-card" intensity={8}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      </TiltedCard>
    </motion.div>
  )
}

const Features = () => {
  const features = [
    {
      icon: '🚀',
      title: 'Fast Development',
      description: 'Rapid prototyping and development cycles to bring your ideas to market faster.'
    },
    {
      icon: '📱',
      title: 'Cross-Platform',
      description: 'One codebase for iOS and Android, reducing development time and costs.'
    },
    {
      icon: '🎨',
      title: 'Beautiful UI/UX',
      description: 'Custom designs that match your brand and provide exceptional user experiences.'
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimized apps that run smoothly with 60fps animations and fast load times.'
    }
  ]

  return (
    <section className="features section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Why Choose Flutter?</h2>
          <p className="section-description">
            We leverage Flutter's powerful capabilities to deliver exceptional mobile applications
          </p>
        </motion.div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features

