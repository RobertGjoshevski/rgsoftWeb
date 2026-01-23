import React from 'react'
import { StaggerContainer, StaggerItem } from './reactbits'
import LightRays from './reactbits/LightRays'
import './Hero.css'

const Hero = () => {
  return (
    <section id="home" className="hero section">
      <div className="hero-background">
        <LightRays
          raysOrigin="top-center"
          raysColor="#88c444"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="hero-light-rays"
        />
      </div>
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
        </StaggerContainer>
      </div>
    </section>
  )
}

export default Hero

