import React, { useState, useEffect } from 'react'
import { TiltedCard, FadeIn } from './reactbits'
import { useDrag } from '@use-gesture/react'
import { motion, AnimatePresence } from 'framer-motion'
import './Portfolio.css'
import iphoneImg from '../assets/iphone.png'
import paymentImg from '../assets/payment.png'
import financeImg from '../assets/finance.png'
import foodImg from '../assets/food.png'
import utilityKingsImg from '../assets/utilityKings.png'
import fitnessImg from '../assets/fitness.png'
import gameImg from '../assets/game.png'

const PortfolioItem = ({ image, title, description, index }) => {
  // Use iPhone image as background for Portfolio cards
  const backgroundImage = iphoneImg;

  // Special handling for Fitness Tracker: use fitness.png in overlayContent for parallax effect
  const isFitnessTracker = title === 'Fitness Tracker';
  const isSocialMedia = title === 'Social Media Platform';
  const isECommerce = title === 'E-Commerce App';
  const isFoodDelivery = title === 'Food Delivery';
  const isFinance = title === 'Finance Manager';
  const isPayment = title === 'Travel Companion';
  const isHealthTracker = title === 'Health Tracker';
  const isWeatherApp = title === 'Weather App';
  const isNewsApp = title === 'News App';
  const isMusicApp = title === 'Music App';

  // If you pass `image`, pass an imported asset (URL string) from the parent
  const imageSrc = image || null;

  // iPhone image dimensions: height: 2160, width: 1024
  // Aspect ratio: 2160/1024 = 2.109375
  const iPhoneAspectRatio = 2160 / 1024;

  // All cards use the same smaller size
  const containerWidth = '280px';
  const containerHeight = `${Math.round(280 * iPhoneAspectRatio)}px`; // 591px

  return (
    <FadeIn delay={index * 0.1} duration={0.5} direction="up" distance={20}>
      <TiltedCard
        imageSrc={imageSrc}
        altText={title}
        captionText={title}
        containerHeight={containerHeight}
        containerWidth={containerWidth}
        imageHeight={containerHeight}
        imageWidth={containerWidth}
        rotateAmplitude={12}
        scaleOnHover={1.05}
        showMobileWarning={false}
        showTooltip={false}
        displayOverlayContent={true}
        backgroundImage={backgroundImage}
        className={isFitnessTracker || isSocialMedia || isECommerce || isFoodDelivery || isFinance || isPayment ? 'portfolio-phone-content' : ''}
        overlayContent={
          isPayment ? (
            <img
              src={paymentImg}
              alt={title}
              className="portfolio-overlay-image"
            />
          ) :
            isFinance ? (
              <img
                src={financeImg}
                alt={title}
                className="portfolio-overlay-image"
              />
            ) :
              isFoodDelivery ? (
                <img
                  src={foodImg}
                  alt={title}
                  className="portfolio-overlay-image"
                />
              ) :
                isECommerce ? (
                  <img
                    src={utilityKingsImg}
                    alt={title}
                    className="portfolio-overlay-image"
                  />
                ) :
                  isFitnessTracker ? (
                    <img
                      src={fitnessImg}
                      alt={title}
                      className="portfolio-overlay-image"
                    />
                  ) :
                    isSocialMedia ? (
                      <img
                        src={gameImg}
                        alt={title}
                        className="portfolio-overlay-image"
                      />
                    ) : (
                      <div className="portfolio-overlay-content">
                        <h3 className="portfolio-overlay-title">{title}</h3>
                        <p className="portfolio-overlay-description">{description}</p>
                      </div>
                    )
        }
      />
    </FadeIn>
  )
}

const Portfolio = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024) // Use 1024px as breakpoint for carousel
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Placeholder portfolio items - user can add their own images
  const portfolioItems = [
    {
      image: null, // Add image path here, e.g., './assets/portfolio/app1.png'
      title: 'E-Commerce App',
      description: 'A beautiful shopping experience built with Flutter'
    },
    {
      image: null,
      title: 'Social Media Platform',
      description: 'Engaging social features with smooth animations'
    },
    {
      image: null,
      title: 'Fitness Tracker',
      description: 'Health and wellness app with real-time tracking'
    },
    {
      image: null,
      title: 'Food Delivery',
      description: 'Seamless ordering and delivery experience'
    },
    {
      image: null,
      title: 'Finance Manager',
      description: 'Secure and intuitive financial management'
    },
    {
      image: null,
      title: 'Travel Companion',
      description: 'Plan and book your next adventure'
    }
  ]

  // Carousel navigation handlers
  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItems.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItems.length) % portfolioItems.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  // Drag handler for carousel
  const carouselRef = React.useRef(null)
  const hasNavigatedRef = React.useRef(false)
  
  const bind = useDrag(
    ({ direction: [dx], movement: [mx], velocity, last }) => {
      if (!isMobile) return
      
      const threshold = 50
      const swipeVelocity = 0.5

      // Reset navigation flag when a new drag starts
      if (Math.abs(mx) < 5) {
        hasNavigatedRef.current = false
      }

      // Only navigate when drag ends and we haven't navigated yet
      if (last && !hasNavigatedRef.current) {
        if (Math.abs(mx) > threshold || Math.abs(velocity[0]) > swipeVelocity) {
          hasNavigatedRef.current = true
          if (dx > 0) {
            goToPrevious()
          } else {
            goToNext()
          }
        }
      }
    },
    { axis: 'x', pointer: { touch: true } }
  )

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

          {/* Desktop Grid Layout */}
          <div className={`portfolio-grid ${isMobile ? 'portfolio-grid-mobile-hidden' : ''}`}>
            {portfolioItems.map((item, index) => (
              <PortfolioItem
                key={index}
                image={item.image}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>

          {/* Mobile Carousel Layout */}
          {isMobile && (
            <div className="portfolio-carousel-wrapper">
              <div className="portfolio-carousel" ref={carouselRef} {...bind()}>
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={currentIndex}
                    className="portfolio-carousel-item"
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                  >
                    <PortfolioItem
                      image={portfolioItems[currentIndex].image}
                      title={portfolioItems[currentIndex].title}
                      description={portfolioItems[currentIndex].description}
                      index={currentIndex}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Dots Indicator with Navigation */}
              <div className="portfolio-carousel-controls">
                <button
                  className="portfolio-carousel-button portfolio-carousel-button-prev"
                  onClick={goToPrevious}
                  aria-label="Previous item"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>
                
                <div className="portfolio-carousel-dots">
                  {portfolioItems.map((_, index) => (
                    <button
                      key={index}
                      className={`portfolio-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={`Go to slide ${index + 1}`}
                    />
                  ))}
                </div>

                <button
                  className="portfolio-carousel-button portfolio-carousel-button-next"
                  onClick={goToNext}
                  aria-label="Next item"
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  )
}

export default Portfolio
