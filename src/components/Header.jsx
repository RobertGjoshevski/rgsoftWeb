import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './Header.css'

const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
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

  const navLinks = [
    { to: '/', labelKey: 'header.navHome' },
    { to: '/app-development', labelKey: 'header.navAppDevelopment' },
    { to: '/website-development', labelKey: 'header.navWebDevelopment' },
    { to: '/about', labelKey: 'header.navAbout' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo-container">
            <img src="./assets/logo.png" alt={t('header.logoAlt')} className="logo" />
            <span className="logo-text">RGsoft</span>
          </Link>

          <nav className="header-nav">
            {navLinks.map(({ to, labelKey }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${location.pathname === to ? 'active' : ''}`}
              >
                {t(labelKey)}
              </Link>
            ))}
            <div className="language-switcher" aria-label="Language">
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
