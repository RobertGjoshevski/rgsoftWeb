import React from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from '../components/reactbits'
import './AboutPage.css'

const SocialIcon = ({ name }) => {
  switch (name) {
    case 'LinkedIn':
      return <img src="./assets/linkedin.png" alt="LinkedIn" className="about-social-icon-img" />
    case 'Facebook':
      return <img src="./assets/facebook.png" alt="Facebook" className="about-social-icon-img" />
    case 'Instagram':
      return <img src="./assets/instagram.png" alt="Instagram" className="about-social-icon-img" />
    case 'WhatsApp':
      return <img src="./assets/whatsapp.png" alt="WhatsApp" className="about-social-icon-img" />
    default:
      return null
  }
}

const AboutPage = () => {
  const { t } = useTranslation()
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/110668405', color: '#0A66C2' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585767831959', color: '#1877F2' },
    { name: 'Instagram', url: 'https://www.instagram.com/rgsoftmk/', color: '#E4405F' },
    { name: 'WhatsApp', url: 'https://wa.me/38979394134', color: '#25D366' }
  ]

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
              <h2>{t('footer.contactInfo')}</h2>
              <div className="about-contact-info">
                <div className="contact-item">
                  <span className="contact-label">{t('footer.email')}:</span>
                  <a href="mailto:info@rgsoft.org" className="contact-link">info@rgsoft.org</a>
                </div>
                <div className="contact-item">
                  <span className="contact-label">{t('footer.city')}:</span>
                  <span className="contact-text">{t('footer.skopje')}</span>
                </div>
                <div className="contact-item">
                  <span className="contact-label">{t('footer.country')}:</span>
                  <span className="contact-text">{t('footer.northMacedonia')}</span>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2} direction="up" distance={30} duration={0.6} className="about-block">
              <h2>{t('pages.about.location')}</h2>
              <p className="about-location-text">{t('about.locationText')}</p>
            </FadeIn>

            <FadeIn delay={0.3} direction="up" distance={30} duration={0.6} className="about-block">
              <h2>{t('footer.connectWithUs')}</h2>
              <div className="about-social-links">
                {socialLinks.map((link, index) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-social-link"
                    style={{ '--social-color': link.color }}
                  >
                    <span className="about-social-icon">
                      <SocialIcon name={link.name} />
                    </span>
                    <span className="about-social-name">{link.name}</span>
                  </a>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutPage
