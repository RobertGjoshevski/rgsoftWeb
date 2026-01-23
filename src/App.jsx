import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import DesignServices from './components/DesignServices'
import Portfolio from './components/Portfolio'
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
        <Referral />
      </main>
      <Footer />
    </>
  )
}

function App() {
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

