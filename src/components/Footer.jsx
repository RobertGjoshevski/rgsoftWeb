import React from 'react'
import { motion } from 'framer-motion'
import './Footer.css'

const Footer = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: '📷',
      url: 'https://instagram.com/rgsoft',
      color: '#E4405F'
    },
    {
      name: 'Facebook',
      icon: '👥',
      url: 'https://facebook.com/rgsoft',
      color: '#1877F2'
    },
    {
      name: 'LinkedIn',
      icon: '💼',
      url: 'https://linkedin.com/company/rgsoft',
      color: '#0A66C2'
    },
    {
      name: 'Email',
      icon: '✉️',
      url: 'mailto:contact@rgsoft.com',
      color: '#EA4335'
    },
    {
      name: 'X (Twitter)',
      icon: '🐦',
      url: 'https://twitter.com/rgsoft',
      color: '#000000'
    }
  ]

  return (
    <footer id="contact" className="footer">
      <div className="container">
        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="footer-brand">
            <img src="/assets/logo.png" alt="RGsoft Logo" className="footer-logo" />
            <h3>RGsoft</h3>
            <p>Building exceptional Flutter applications for modern businesses</p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Portfolio</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-social">
            <h4>Connect With Us</h4>
            <div className="social-links">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  style={{ '--social-color': link.color }}
                >
                  <span className="social-icon">{link.icon}</span>
                  <span className="social-name">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p>&copy; {new Date().getFullYear()} RGsoft. All rights reserved.</p>
          <p>Built with Flutter & React</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer

