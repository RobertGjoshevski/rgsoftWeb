import React from 'react'
import { TiltedCard, FadeIn } from './reactbits'
import './Portfolio.css'

const PortfolioItem = ({ image, title, description, index, size = 'medium' }) => {
  return (
    <FadeIn delay={index * 0.1} duration={0.5} direction="up" distance={20}>
      <TiltedCard className={`portfolio-item portfolio-item-${size}`} intensity={25} scale={1.1}>
      <div className="portfolio-image">
        {image ? (
          <img src={image} alt={title} />
        ) : (
          <div className="portfolio-placeholder">
            <span className="placeholder-icon">📱</span>
            <span className="placeholder-text">Add your app screenshot here</span>
          </div>
        )}
      </div>
      <div className="portfolio-content">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      </TiltedCard>
    </FadeIn>
  )
}

const Portfolio = () => {
  // Placeholder portfolio items - user can add their own images
  // size: 'small', 'medium', 'large' for tiled effect
  const portfolioItems = [
    {
      image: null, // Add image path here, e.g., '/assets/portfolio/app1.png'
      title: 'E-Commerce App',
      description: 'A beautiful shopping experience built with Flutter',
      size: 'large'
    },
    {
      image: null,
      title: 'Social Media Platform',
      description: 'Engaging social features with smooth animations',
      size: 'medium'
    },
    {
      image: null,
      title: 'Fitness Tracker',
      description: 'Health and wellness app with real-time tracking',
      size: 'medium'
    },
    {
      image: null,
      title: 'Food Delivery',
      description: 'Seamless ordering and delivery experience',
      size: 'small'
    },
    {
      image: null,
      title: 'Finance Manager',
      description: 'Secure and intuitive financial management',
      size: 'large'
    },
    {
      image: null,
      title: 'Travel Companion',
      description: 'Plan and book your next adventure',
      size: 'small'
    }
  ]

  return (
    <section id="portfolio" className="portfolio section">
      <div className="container">
        <FadeIn direction="up" distance={30} duration={0.6}>
          <div className="section-header">
          <h2>Our Portfolio</h2>
          <p className="section-description">
            Showcasing our latest Flutter applications and mobile solutions
          </p>
          </div>
        </FadeIn>

        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <PortfolioItem
              key={index}
              image={item.image}
              title={item.title}
              description={item.description}
              index={index}
              size={item.size}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

