import React from 'react'
import { StaggerContainer, StaggerItem } from './reactbits'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="container">
        <StaggerContainer className="hero-content" staggerDelay={0.2} initialDelay={0.3}>
          <div className="hero-text">
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <span className="hero-kicker">
                Flutter • Dart • Mobile Development
              </span>
            </StaggerItem>
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <h1>
                Building Beautiful
                <br />
                <span className="gradient-text">Flutter Applications</span>
                <br />
                for Modern Businesses
              </h1>
            </StaggerItem>
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <p className="hero-description">
                We specialize in creating high-performance, visually stunning mobile 
                applications using Flutter. From concept to deployment, we deliver 
                cross-platform solutions that work seamlessly on iOS and Android.
              </p>
            </StaggerItem>
            <StaggerItem direction="up" distance={30} duration={0.6}>
              <div className="hero-cta">
              <a href="#contact" className="btn btn-primary">
                Get Started
              </a>
              <a href="#portfolio" className="btn btn-secondary">
                View Our Work
              </a>
            </div>
          </StaggerItem>
          </div>

          <StaggerItem direction="right" distance={50} duration={0.8} delay={0.5}>
            <div className="hero-visual">
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
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Hero

