import React from 'react'
import { motion } from 'framer-motion'
import './Hero.css'

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <section id="home" className="hero section">
      <div className="container">
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.span 
              className="hero-kicker"
              variants={itemVariants}
            >
              Flutter • Dart • Mobile Development
            </motion.span>
            <motion.h1 variants={itemVariants}>
              Building Beautiful
              <br />
              <span className="gradient-text">Flutter Applications</span>
              <br />
              for Modern Businesses
            </motion.h1>
            <motion.p className="hero-description" variants={itemVariants}>
              We specialize in creating high-performance, visually stunning mobile 
              applications using Flutter. From concept to deployment, we deliver 
              cross-platform solutions that work seamlessly on iOS and Android.
            </motion.p>
            <motion.div className="hero-cta" variants={itemVariants}>
              <motion.a
                href="#contact"
                className="btn btn-primary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
              </motion.a>
              <motion.a
                href="#portfolio"
                className="btn btn-secondary"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Our Work
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            variants={itemVariants}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="hero-image-placeholder">
              <div className="floating-card card-1">
                <div className="card-content">📱</div>
              </div>
              <div className="floating-card card-2">
                <div className="card-content">⚡</div>
              </div>
              <div className="floating-card card-3">
                <div className="card-content">🎨</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero

