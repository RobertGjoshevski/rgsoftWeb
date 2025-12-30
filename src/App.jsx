import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Features from './components/Features'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Features />
        <Services />
        <Portfolio />
      </main>
      <Footer />
    </div>
  )
}

export default App

