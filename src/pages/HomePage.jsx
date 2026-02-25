import React from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FadeIn } from '../components/reactbits'
import Hero from '../components/Hero'
import Features from '../components/Features'
import './HomePage.css'

const HomePage = () => {
  const { t } = useTranslation()

  return (
    <>
      <Hero />
      <Features />
      <section className="home-links section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h2>{t('home.whatWeDo')}</h2>
              <p className="section-description">{t('home.whatWeDoDescription')}</p>
            </div>
          </FadeIn>
          <div className="home-links-grid">
            <FadeIn delay={0.1} duration={0.6} direction="up" distance={40}>
              <Link to="/app-development" className="home-link-card">
                <span className="home-link-icon">📱</span>
                <h3>{t('home.appDevelopmentCard')}</h3>
                <p>{t('home.appDevelopmentCardDescription')}</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.2} duration={0.6} direction="up" distance={40}>
              <Link to="/website-development" className="home-link-card">
                <span className="home-link-icon">🌐</span>
                <h3>{t('home.websiteDevelopmentCard')}</h3>
                <p>{t('home.websiteDevelopmentCardDescription')}</p>
              </Link>
            </FadeIn>
            <FadeIn delay={0.3} duration={0.6} direction="up" distance={40}>
              <Link to="/about" className="home-link-card">
                <span className="home-link-icon">📍</span>
                <h3>{t('home.aboutCard')}</h3>
                <p>{t('home.aboutCardDescription')}</p>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

export default HomePage
