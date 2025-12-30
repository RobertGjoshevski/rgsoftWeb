import React, { useState, useEffect } from 'react'
import './Header.css'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="header-content">
          <div className="logo-container">
            <img src="/assets/logo.png" alt="RGsoft Logo" className="logo" />
            <span className="logo-text">RGsoft</span>
          </div>

          <a
            href="mailto:rgsoftmk@gmail.com"
            className="header-email"
            aria-label="Contact us via email"
          >
            rgsoftmk@gmail.com
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header

