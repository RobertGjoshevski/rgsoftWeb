import React from 'react'
import { TiltedCard, FadeIn } from './reactbits'
import Hyperspeed from './reactbits/Hyperspeed'
import LightPillar from './reactbits/LightPillar'
import Galaxy from './reactbits/Galaxy'
import './Features.css'

const FeatureCard = ({ icon, title, description, index, hasHyperspeed = false, hasLightPillar = false, hasGalaxy = false }) => {
  return (
    <FadeIn delay={index * 0.1} duration={0.6} direction="up" distance={50}>
      <TiltedCard
        className={`feature-card ${hasLightPillar ? 'has-light-pillar' : ''} ${hasGalaxy ? 'has-galaxy' : ''}`}
        rotateAmplitude={20}
        scaleOnHover={1.08}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={true}
        overlayContent={
          <>
            {hasHyperspeed && (
              <div className="hyperspeed-background">
                <Hyperspeed />
              </div>
            )}
            {hasLightPillar && (
              <div className="light-pillar-background">
                <LightPillar
                  topColor="#5227FF"
                  bottomColor="#FF9FFC"
                  intensity={1}
                  rotationSpeed={0.6}
                  glowAmount={0.003}
                  pillarWidth={2.8}
                  pillarHeight={0.4}
                  noiseIntensity={0.5}
                  pillarRotation={33}
                  interactive
                  mixBlendMode="screen"
                  quality="high"
                />
              </div>
            )}
            {hasGalaxy && (
              <div className="galaxy-background">
                <Galaxy
                  mouseRepulsion
                  mouseInteraction
                  density={1}
                  glowIntensity={0.3}
                  saturation={0}
                  hueShift={140}
                  twinkleIntensity={0.3}
                  rotationSpeed={0.1}
                  repulsionStrength={2}
                  autoCenterRepulsion={0}
                  starSpeed={0.5}
                  speed={1}
                />
              </div>
            )}
            <div className="feature-icon">{icon}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </>
        }
      />
    </FadeIn>
  )
}

const Features = () => {
  const features = [
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
      description: 'Optimized apps that run smoothly with 120fps animations and fast load times.'
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
                hasHyperspeed={feature.title === 'High Performance'}
                hasLightPillar={feature.title === 'Beautiful UI/UX'}
                hasGalaxy={feature.title === 'Cross-Platform'}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features

