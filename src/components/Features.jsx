import React from 'react'
import { TiltedCard, FadeIn } from './reactbits'
import './Features.css'

const FeatureCard = ({ icon, title, description, index }) => {
  return (
    <FadeIn delay={index * 0.1} duration={0.6} direction="up" distance={50}>
      <TiltedCard className="feature-card" intensity={20} scale={1.08}>
      <div className="feature-icon">{icon}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      </TiltedCard>
    </FadeIn>
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
    <>
      <div className="section-divider"></div>
      <section className="features section">
        <div className="container">
        <FadeIn direction="up" distance={30} duration={0.6}>
          <div className="section-header">
          <h2>Why Choose Flutter?</h2>
          <p className="section-description">
            We leverage Flutter's powerful capabilities to deliver exceptional mobile applications
          </p>
          </div>
        </FadeIn>

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
    </>
  )
}

export default Features

