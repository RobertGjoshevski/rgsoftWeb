import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
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

const portfolioItemKeys = ['eCommerce', 'socialMedia', 'fitnessTracker', 'foodDelivery', 'financeManager', 'travelCompanion']

const PortfolioItem = ({ image, itemKey, title, description, index }) => {
  const backgroundImage = iphoneImg;

  const isFitnessTracker = itemKey === 'fitnessTracker'
  const isSocialMedia = itemKey === 'socialMedia'
  const isECommerce = itemKey === 'eCommerce'
  const isFoodDelivery = itemKey === 'foodDelivery'
  const isFinance = itemKey === 'financeManager'
  const isPayment = itemKey === 'travelCompanion'

  const imageSrc = image || null;

  const iPhoneAspectRatio = 2160 / 1024;
  const containerWidth = '280px';
  const containerHeight = `${Math.round(280 * iPhoneAspectRatio)}px`;

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
  const { t } = useTranslation()
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % portfolioItemKeys.length)
  }

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + portfolioItemKeys.length) % portfolioItemKeys.length)
  }

  const goToSlide = (index) => {
    setCurrentIndex(index)
  }

  const carouselRef = React.useRef(null)
  const hasNavigatedRef = React.useRef(false)

  const bind = useDrag(
    ({ direction: [dx], movement: [mx], velocity, last }) => {
      if (!isMobile) return
      const threshold = 50
      const swipeVelocity = 0.5
      if (Math.abs(mx) < 5) {
        hasNavigatedRef.current = false
      }
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
              <h2>{t('portfolio.title')}</h2>
              <p className="section-description">
                {t('portfolio.description')}
              </p>
            </div>
          </FadeIn>

          <div className={`portfolio-grid ${isMobile ? 'portfolio-grid-mobile-hidden' : ''}`}>
            {portfolioItemKeys.map((itemKey, index) => (
              <PortfolioItem
                key={itemKey}
                image={null}
                itemKey={itemKey}
                title={t(`portfolio.${itemKey}.title`)}
                description={t(`portfolio.${itemKey}.description`)}
                index={index}
              />
            ))}
          </div>

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
                      image={null}
                      itemKey={portfolioItemKeys[currentIndex]}
                      title={t(`portfolio.${portfolioItemKeys[currentIndex]}.title`)}
                      description={t(`portfolio.${portfolioItemKeys[currentIndex]}.description`)}
                      index={currentIndex}
                    />
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="portfolio-carousel-controls">
                <button
                  className="portfolio-carousel-button portfolio-carousel-button-prev"
                  onClick={goToPrevious}
                  aria-label={t('portfolio.carouselPrev')}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </button>

                <div className="portfolio-carousel-dots">
                  {portfolioItemKeys.map((_, index) => (
                    <button
                      key={index}
                      className={`portfolio-carousel-dot ${index === currentIndex ? 'active' : ''}`}
                      onClick={() => goToSlide(index)}
                      aria-label={t('portfolio.carouselGoTo', { index: index + 1 })}
                    />
                  ))}
                </div>

                <button
                  className="portfolio-carousel-button portfolio-carousel-button-next"
                  onClick={goToNext}
                  aria-label={t('portfolio.carouselNext')}
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
