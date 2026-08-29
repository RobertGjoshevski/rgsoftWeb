import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { StaggerContainer, StaggerItem } from './reactbits'
import LightRays from './reactbits/LightRays'
import { getLangFromPath, localizePath } from '../seo/paths'
import './Hero.css'

const Hero = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const to = (path) => localizePath(path, lang)

  return (
    <section id="home" className="hero section">
      <div className="hero-background">
        <LightRays
          raysOrigin="top-center"
          raysColor="#8B5CF6"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="hero-light-rays"
        />
      </div>
      <div className="container">
        <StaggerContainer className="hero-content" staggerDelay={0.2} initialDelay={0.3}>
          <div className="hero-text">
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <span className="hero-kicker">
                {t('hero.kicker')}
              </span>
            </StaggerItem>
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <h1>
                {t('hero.titleLine1')}
                <br />
                <span className="gradient-text">{t('hero.titleHighlight')}</span>
                <br />
                {t('hero.titleLine2')}
              </h1>
            </StaggerItem>
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <p className="hero-description">
                {t('hero.description')}
              </p>
            </StaggerItem>
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <div className="hero-cta">
                <Link to={to('/about')} className="btn btn-primary">
                  {t('hero.ctaGetStarted')}
                </Link>
                <Link to={to('/app-development')} className="btn btn-secondary">
                  {t('hero.ctaViewWork')}
                </Link>
              </div>
            </StaggerItem>
          </div>
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Hero
