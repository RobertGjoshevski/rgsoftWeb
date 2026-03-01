import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from '../components/reactbits'
import './AboutPage.css'

const AboutPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <section className="about section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h1>{t('pages.about.title')}</h1>
              <p className="section-description about-intro">{t('about.description')}</p>
            </div>
          </FadeIn>

          <div className="about-content">
            <FadeIn delay={0.1} direction="up" distance={30} duration={0.6} className="about-block">
              <p className="about-body">{t('about.intro')}</p>
            </FadeIn>
            <FadeIn delay={0.2} direction="up" distance={30} duration={0.6} className="about-block">
              <p className="about-body about-why">{t('about.whyUs')}</p>
            </FadeIn>
            <FadeIn delay={0.3} direction="up" distance={30} duration={0.6} className="about-block">
              <p className="about-cta">
                <a href="#contact" className="about-cta-link">{t('about.cta')}</a>
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
