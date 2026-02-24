import React, { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import DomeGallery from './reactbits/DomeGallery'
import './DomeGallerySection.css'

import post1 from '../assets/posts/1 Why flutter.png'
import post2 from '../assets/posts/2.jpeg'
import post3 from '../assets/posts/3.png'
import post4 from '../assets/posts/4.jpeg'
import post5 from '../assets/posts/5.jpeg'
import post6 from '../assets/posts/6.jpeg'
import post7 from '../assets/posts/7.jpeg'
import post8 from '../assets/posts/8 Square.png'
import post9 from '../assets/posts/9.jpeg'
import post11 from '../assets/posts/11.png'
import post12 from '../assets/posts/12.png'
import post13 from '../assets/posts/13.png'
import post14 from '../assets/posts/14.png'
import post15 from '../assets/posts/15.png'

const DomeGallerySection = () => {
  const { t } = useTranslation()
  const [previewSize, setPreviewSize] = useState({ width: '500px', height: '700px' })

  useEffect(() => {
    const updatePreviewSize = () => {
      const width = window.innerWidth
      if (width < 640) {
        setPreviewSize({ width: '250px', height: '350px' })
      } else if (width < 1024) {
        setPreviewSize({ width: '350px', height: '500px' })
      } else {
        setPreviewSize({ width: '500px', height: '700px' })
      }
    }
    updatePreviewSize()
    window.addEventListener('resize', updatePreviewSize)
    return () => window.removeEventListener('resize', updatePreviewSize)
  }, [])

  const galleryImages = [
    { src: post1, alt: 'Why Flutter' },
    { src: post2, alt: 'Post 2' },
    { src: post3, alt: 'Post 3' },
    { src: post4, alt: 'Post 4' },
    { src: post5, alt: 'Post 5' },
    { src: post6, alt: 'Post 6' },
    { src: post7, alt: 'Post 7' },
    { src: post8, alt: 'Post 8' },
    { src: post9, alt: 'Post 9' },
    { src: post11, alt: 'Post 11' },
    { src: post12, alt: 'Post 12' },
    { src: post13, alt: 'Post 13' },
    { src: post14, alt: 'Post 14' },
    { src: post15, alt: 'Post 15' }
  ]

  return (
    <>
      <div className="section-divider"></div>
      <section id="gallery" className="dome-gallery-section section">
        <div className="container">
          <FadeIn direction="up" distance={30} duration={0.6}>
            <div className="section-header">
              <h2>{t('gallery.title')}</h2>
              <p className="section-description">
                {t('gallery.description')}
              </p>
            </div>
          </FadeIn>

          <FadeIn direction="up" distance={40} duration={0.7} delay={0.2}>
            <div className="dome-gallery-wrapper">
              <DomeGallery
                images={galleryImages}
                fit={0.8}
                minRadius={500}
                maxVerticalRotationDeg={10}
                segments={28}
                dragDampening={2}
                grayscale={false}
                overlayBlurColor="#030207"
                openedImageWidth={previewSize.width}
                openedImageHeight={previewSize.height}
              />
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

export default DomeGallerySection
