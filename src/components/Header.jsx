import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
  const { t, i18n } = useTranslation()
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng)
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <img src="./assets/logo.png" alt={t('header.logoAlt')} className="logo" />
            <span className="logo-text">RGsoft</span>
          </div>

          <nav className="header-nav">
            <a href="#home" className="nav-link">{t('header.navHome')}</a>
            <a href="#services" className="nav-link">{t('header.navServices')}</a>
            <a href="#portfolio" className="nav-link">{t('header.navPortfolio')}</a>
            <a href="#referral" className="nav-link">{t('header.navReferral')}</a>
            <a href="#contact" className="nav-link">{t('header.navContact')}</a>
            <div className="language-switcher">
              <button
                type="button"
                className={`lang-btn ${i18n.language === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-label="English"
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${i18n.language === 'mk' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('mk')}
                aria-label="Macedonian"
              >
                MK
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
