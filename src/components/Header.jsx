import React, { useState, useEffect } from 'react'
import { FadeIn } from './reactbits'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ]

  return (
    <FadeIn direction="down" distance={100} duration={0.5} className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <header>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <img src="/assets/logo.png" alt="RGsoft Logo" className="logo" />
            <span className="logo-text">RGsoft</span>
          </div>

          <nav className={`nav ${isMobileMenuOpen ? 'open' : ''}`}>
            {navItems.map((item, index) => (
              <FadeIn key={item.label} delay={index * 0.1} direction="down" distance={20} duration={0.3}>
                <a
                  href={item.href}
                  className="nav-link"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.label}
                </a>
              </FadeIn>
            ))}
          </nav>

          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
      </header>
    </FadeIn>
  )
}

export default Header

