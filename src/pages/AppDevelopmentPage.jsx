import React from 'react'
import Features from '../components/Features'
import Services from '../components/Services'
import DesignServices from '../components/DesignServices'
import Portfolio from '../components/Portfolio'
import Referral from '../components/Referral'

const APP_SERVICE_KEYS = [
  { id: 'customFlutter', isReversed: false },
  { id: 'maintenance', isReversed: true },
  { id: 'consulting', isReversed: false }
]

const APP_DESIGN_SERVICE_KEYS = ['logoDesign', 'storeImages']

const AppDevelopmentPage = () => {
  return (
    <>
      <Features scope="app" />
      <Services serviceKeys={APP_SERVICE_KEYS} />
      <DesignServices designServiceKeys={APP_DESIGN_SERVICE_KEYS} />
      <Portfolio />
      <Referral />
    </>
  )
}

export default AppDevelopmentPage
