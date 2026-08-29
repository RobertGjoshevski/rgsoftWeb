import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import { getLangFromPath, localizePath } from '../seo/paths'
import './Footer.css'

const SocialIcon = ({ name }) => {
  const iconProps = {
    width: '20',
    height: '20',
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: '1.5',
    strokeLinecap: 'round',
    strokeLinejoin: 'round'
  }

  switch (name) {
    case 'LinkedIn':
      return (
        <img
          src="/assets/linkedin.png"
          alt="LinkedIn"
          className="social-icon-img"
        />
      )
    case 'Facebook':
      return (
        <img
          src="/assets/facebook.png"
          alt="Facebook"
          className="social-icon-img"
        />
      )
    case 'Instagram':
      return (
        <img
          src="/assets/instagram.png"
          alt="Instagram"
          className="social-icon-img"
        />
      )
    case 'WhatsApp':
      return (
        <img
          src="/assets/whatsapp.png"
          alt="WhatsApp"
          className="social-icon-img"
        />
      )
    case 'YouTube':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
        </svg>
      )
    case 'X':
      return (
        <svg {...iconProps} viewBox="0 0 24 24">
          <path d="M18 6L6 18M6 6l12 12" strokeWidth="2" />
        </svg>
      )
    default:
      return null
  }
}

const Footer = () => {
  const { t } = useTranslation()
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  const to = (path) => localizePath(path, lang)
  const socialLinks = [
    { name: 'LinkedIn', url: 'https://www.linkedin.com/company/110668405', color: '#0A66C2' },
    { name: 'Facebook', url: 'https://www.facebook.com/profile.php?id=61585767831959', color: '#1877F2' },
    { name: 'Instagram', url: 'https://www.instagram.com/rgsoftmk/', color: '#E4405F' },
    { name: 'WhatsApp', url: 'https://wa.me/38979394134', color: '#25D366' },
  ]

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <FadeIn direction="up" distance={30} duration={0.6} className="footer-content">
          <div className="footer-brand">
            <img src="/assets/logo.png" alt={t('header.logoAlt')} className="footer-logo" />
            <p>{t('footer.tagline')}</p>
          </div>

          <div className="footer-contact">
            <h4>{t('footer.contactInfo')}</h4>
            <div className="contact-info">
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
          </div>

          <div className="footer-links">
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><Link to={to('/')}>{t('footer.navHome')}</Link></li>
              <li><Link to={to('/app-development')}>{t('footer.navAppDevelopment')}</Link></li>
              <li><Link to={to('/website-development')}>{t('footer.navWebDevelopment')}</Link></li>
              <li><Link to={to('/about')}>{t('footer.navContact')}</Link></li>
              <li><Link to={to('/privacy')}>{t('footer.navPrivacy')}</Link></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>{t('footer.connectWithUs')}</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <FadeIn key={link.name} delay={index * 0.1} direction="up" distance={20} duration={0.4}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    style={{ '--social-color': link.color }}
                  >
                    <span className="social-icon">
                      <SocialIcon name={link.name} />
                    </span>
                    <span className="social-name">{link.name}</span>
                  </a>
                </FadeIn>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.3} duration={0.6} className="footer-bottom">
          <p>{t('footer.copyright', { year: new Date().getFullYear() })}</p>
          <p>{t('footer.builtWith')}</p>
        </FadeIn>
      </div>
    </footer>
  )
}

export default Footer
