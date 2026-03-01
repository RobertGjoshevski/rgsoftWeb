import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import Hyperspeed from './reactbits/Hyperspeed'
import LightPillar from './reactbits/LightPillar'
import Galaxy from './reactbits/Galaxy'
import './Features.css'

const FeatureCard = ({ icon, title, description, index, hasHyperspeed = false, hasLightPillar = false, hasGalaxy = false }) => {
  return (
    <FadeIn delay={index * 0.1} duration={0.6} direction="up" distance={50}>
      <div className={`feature-card ${hasLightPillar ? 'has-light-pillar' : ''} ${hasGalaxy ? 'has-galaxy' : ''}`}>
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
      </div>
    </FadeIn>
  )
}

const ALL_FEATURES = [
  { key: 'crossPlatform', icon: '📱', hasGalaxy: true },
  { key: 'beautifulUi', icon: '🎨', hasLightPillar: true },
  { key: 'highPerformance', icon: '⚡', hasHyperspeed: true },
  { key: 'iconDesign', icon: '✨' },
  { key: 'businessUi', icon: '📊' },
  { key: 'databases', icon: '🗄️' },
  { key: 'seo', icon: '🔍' },
  { key: 'saas', icon: '☁️' },
  { key: 'apiIntegration', icon: '🔌' },
  { key: 'ecommerce', icon: '🛒' },
  { key: 'landingPages', icon: '📄' },
  { key: 'responsiveWeb', icon: '📐' },
  { key: 'maintenanceSupport', icon: '🛠️' },
  { key: 'cmsIntegration', icon: '📝' },
  { key: 'analyticsTracking', icon: '📈' },
  { key: 'progressiveWeb', icon: '🌐' }
]

const APP_FEATURE_KEYS = [
  'crossPlatform', 'beautifulUi', 'highPerformance', 'iconDesign',
  'businessUi', 'databases', 'apiIntegration', 'ecommerce',
  'maintenanceSupport', 'analyticsTracking'
]

const WEB_FEATURE_KEYS = [
  'beautifulUi', 'highPerformance', 'responsiveWeb', 'seo', 'landingPages',
  'saas', 'ecommerce', 'cmsIntegration', 'progressiveWeb', 'iconDesign',
  'businessUi', 'maintenanceSupport', 'analyticsTracking'
]

const Features = ({ scope = 'all' }) => {
  const { t } = useTranslation()

  const displayFeatures = scope === 'all'
    ? ALL_FEATURES
    : ALL_FEATURES.filter((f) =>
        scope === 'app' ? APP_FEATURE_KEYS.includes(f.key) : WEB_FEATURE_KEYS.includes(f.key)
      ).map((f, i) => ({
        ...f,
        hasGalaxy: i === 0,
        hasLightPillar: i === 1,
        hasHyperspeed: i === 2
      }))

  const titleKey = scope === 'app' ? 'features.appTitle' : scope === 'web' ? 'features.webTitle' : 'features.title'
  const descriptionKey = scope === 'app' ? 'features.appDescription' : scope === 'web' ? 'features.webDescription' : 'features.description'

  return (
    <>
      <div className="section-divider"></div>
      <section className="features section">
        <div className="container">
          <FadeIn direction="up" distance={40} duration={0.6}>
            <div className="section-header">
              <h2>{t(titleKey)}</h2>
              <p className="section-description">
                {t(descriptionKey)}
              </p>
            </div>
          </FadeIn>

          <div className="features-grid">
            {displayFeatures.map((item, index) => (
              <FeatureCard
                key={item.key}
                icon={item.icon}
                title={t(`features.${item.key}.title`)}
                description={t(`features.${item.key}.description`)}
                index={index}
                hasHyperspeed={item.hasHyperspeed}
                hasLightPillar={item.hasLightPillar}
                hasGalaxy={item.hasGalaxy}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
