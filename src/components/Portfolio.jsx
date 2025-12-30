import React from 'react'
import { TiltedCard, FadeIn } from './reactbits'
import './Portfolio.css'

const PortfolioItem = ({ image, title, description, index, size = 'medium' }) => {
  // Use a placeholder image if no image is provided
  const imageSrc = image || 'https://via.placeholder.com/400x600/1a1a1a/88c444?text=' + encodeURIComponent(title);

  // Determine container size based on size prop
  const containerSize = size === 'large' ? '400px' : size === 'small' ? '300px' : '350px';

  return (
    <FadeIn delay={index * 0.1} duration={0.5} direction="up" distance={20}>
      <TiltedCard
        imageSrc={imageSrc}
        altText={title}
        captionText={title}
        containerHeight={containerSize}
        containerWidth="100%"
        imageHeight={containerSize}
        imageWidth="100%"
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={true}
        overlayContent={
          <div className="portfolio-overlay-content">
            <h3 className="portfolio-overlay-title">{title}</h3>
            <p className="portfolio-overlay-description">{description}</p>
          </div>
        }
      />
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
    <>
      <div className="section-divider"></div>
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
    </>
  )
}

export default Portfolio

