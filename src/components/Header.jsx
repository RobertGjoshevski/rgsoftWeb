import React, { useState, useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { getLangFromPath, localizePath, stripLangPrefix } from '../seo/paths'
import './Header.css'

const Header = () => {
  const { t, i18n } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const lang = getLangFromPath(location.pathname)
  const currentBare = stripLangPrefix(location.pathname)
  const activeLang = lang === 'mk' ? 'mk' : 'en'

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleLanguageChange = (lng) => {
    const next = localizePath(location.pathname, lng)
    i18n.changeLanguage(lng)
    const current = location.pathname.replace(/\/+$/, '') || '/'
    if (next !== current) {
      navigate(next)
    }
  }

  const navLinks = [
    { to: localizePath('/', lang), labelKey: 'header.navHome', bare: '/' },
    { to: localizePath('/app-development', lang), labelKey: 'header.navAppDevelopment', bare: '/app-development' },
    { to: localizePath('/website-development', lang), labelKey: 'header.navWebDevelopment', bare: '/website-development' },
    { to: localizePath('/about', lang), labelKey: 'header.navAbout', bare: '/about' }
  ]

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <Link to={localizePath('/', lang)} className="logo-container">
            <img src="/assets/logo.png" alt={t('header.logoAlt')} className="logo" />
            <span className="logo-text">RGsoft</span>
          </Link>

          <nav className="header-nav">
            {navLinks.map(({ to, labelKey, bare }) => (
              <Link
                key={to}
                to={to}
                className={`nav-link ${currentBare === bare ? 'active' : ''}`}
              >
                {t(labelKey)}
              </Link>
            ))}
            <div className="language-switcher" aria-label="Language">
              <button
                type="button"
                className={`lang-btn ${activeLang === 'en' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('en')}
                aria-label="English"
              >
                EN
              </button>
              <button
                type="button"
                className={`lang-btn ${activeLang === 'mk' ? 'active' : ''}`}
                onClick={() => handleLanguageChange('mk')}
                aria-label="Macedonian"
              >
                MK
              </button>
            </div>
          </nav>

          <button
            type="button"
            className="header-menu-btn"
            onClick={() => setMobileMenuOpen((open) => !open)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
          >
            <span className="header-menu-icon" />
            <span className="header-menu-icon" />
            <span className="header-menu-icon" />
          </button>
        </div>

        <div className={`header-mobile-nav ${mobileMenuOpen ? 'open' : ''}`} aria-hidden={!mobileMenuOpen}>
          {navLinks.map(({ to, labelKey, bare }) => (
            <Link
              key={to}
              to={to}
              className={`nav-link ${currentBare === bare ? 'active' : ''}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              {t(labelKey)}
            </Link>
          ))}
          <div className="language-switcher header-mobile-lang" aria-label="Language">
            <button
              type="button"
              className={`lang-btn ${activeLang === 'en' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('en')}
              aria-label="English"
            >
              EN
            </button>
            <button
              type="button"
              className={`lang-btn ${activeLang === 'mk' ? 'active' : ''}`}
              onClick={() => handleLanguageChange('mk')}
              aria-label="Macedonian"
            >
              MK
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
