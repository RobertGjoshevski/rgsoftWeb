import React from 'react'
import { TiltedCard, FadeIn } from './reactbits'
import LightRays from './reactbits/LightRays'
import './Features.css'

const FeatureCard = ({ icon, title, description, index, speed = 0.4, spread = 1.8, length = 3 }) => {
  return (
    <FadeIn delay={index * 0.1} duration={0.6} direction="up" distance={50}>
      <TiltedCard className="feature-card" intensity={20} scale={1.08}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#88c444"
          raysSpeed={speed}
          lightSpread={spread}
          rayLength={length}
          followMouse={true}
          pulsating={false}
          fadeDistance={0.8}
          className="feature-light-rays"
        />
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
      icon: '📱',
      title: 'Cross-Platform',
      description: 'One codebase for iOS and Android, reducing development time and costs.',
      speed: 0.4,
      spread: 1.3,
      length: 2
    },
    {
      icon: '🎨',
      title: 'Beautiful UI/UX',
      description: 'Custom designs that match your brand and provide exceptional user experiences.',
      speed: 0.5,
      spread: 1.8,
      length: 6
    },
    {
      icon: '⚡',
      title: 'High Performance',
      description: 'Optimized apps that run smoothly with 120fps animations and fast load times.',
      speed: 0.4,
      spread: 1.3,
      length: 2
    }
  ]

  return (
    <>
      <div className="section-divider"></div>
      <section className="features section">
        <div className="container">
          <FadeIn direction="up" distance={40} duration={0.6}>
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

