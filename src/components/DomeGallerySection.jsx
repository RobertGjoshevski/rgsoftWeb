import React, { useState, useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { FadeIn } from './reactbits'
import DomeGallery from './reactbits/DomeGallery'
import './DomeGallerySection.css'

// Load all images from assets/posts so new images show in the gallery automatically
const postModules = import.meta.glob('../assets/posts/*.{png,jpeg,jpg}', { eager: true })

const DomeGallerySection = () => {
  const { t } = useTranslation()
  const [previewSize, setPreviewSize] = useState({ width: '500px', height: '700px' })

  const galleryImages = useMemo(() => {
    return Object.entries(postModules)
      .map(([path, mod]) => {
        const filename = path.split('/').pop() || ''
        return { src: mod.default, alt: filename.replace(/\.[^.]+$/, '') }
      })
      .sort((a, b) => a.alt.localeCompare(b.alt, undefined, { numeric: true }))
  }, [])

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
