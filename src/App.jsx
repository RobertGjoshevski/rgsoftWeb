import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import DesignServices from './components/DesignServices'
import Portfolio from './components/Portfolio'
import DomeGallerySection from './components/DomeGallerySection'
import Referral from './components/Referral'
import Footer from './components/Footer'
import AppRedirect from './components/AppRedirect'
import './App.css'

function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <DesignServices />
        <Portfolio />
        <DomeGallerySection />
        <Referral />
      </main>
      <Footer />
    </>
  )
}

function App() {
  const { i18n } = useTranslation()
  useEffect(() => {
    document.documentElement.lang = i18n.language || 'en'
  }, [i18n.language])

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/th" element={<AppRedirect />} />
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App

