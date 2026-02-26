import React from 'react'
import Services from '../components/Services'
import DesignServices from '../components/DesignServices'
import DomeGallerySection from '../components/DomeGallerySection'

const WEB_SERVICE_KEYS = [
  { id: 'webDesign', isReversed: true }
]

const WEB_DESIGN_SERVICE_KEYS = [
  'websiteDesign',
  'landingPageDesign',
  'uiUxWeb',
  'designSystems',
  'wireframesPrototyping',
  'brandIdentityWeb'
]

const WebsiteDevelopmentPage = () => {
  return (
    <>
      <Services serviceKeys={WEB_SERVICE_KEYS} />
      <DesignServices designServiceKeys={WEB_DESIGN_SERVICE_KEYS} />
      <DomeGallerySection />
    </>
  )
}

export default WebsiteDevelopmentPage
