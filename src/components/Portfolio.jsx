import React from 'react'
import { TiltedCard, FadeIn } from './reactbits'
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
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
