import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import LiquidEther from './components/reactbits/LiquidEther'
import Plasma from './components/reactbits/Plasma'
import LightRays from './components/reactbits/LightRays'

import './App.css'

function App() {
  return (
    <div className="App">
      <div style={{ width: '100%', height: '100vh', position: 'fixed', top: 0, left: 0, zIndex: 0, pointerEvents: 'none' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#88c444"
          raysSpeed={1.5}
          lightSpread={0.8}
          rayLength={1.2}
          followMouse={true}
          mouseInfluence={0.1}
          noiseAmount={0.1}
          distortion={0.05}
          className="custom-rays"
        />
      </div>
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Header />
        <main>
          <Hero />
          <Features />
          <Services />
          <Portfolio />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App

