import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TiltedCard from './TiltedCard'
import './Portfolio.css'

const PortfolioItem = ({ image, title, description, index, size = 'medium' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <TiltedCard className={`portfolio-item portfolio-item-${size}`} intensity={10}>
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
    </motion.div>
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
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2>Our Portfolio</h2>
          <p className="section-description">
            Showcasing our latest Flutter applications and mobile solutions
          </p>
        </motion.div>

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

