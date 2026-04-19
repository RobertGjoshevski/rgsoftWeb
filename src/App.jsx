import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AppDevelopmentPage from './pages/AppDevelopmentPage'
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import AppRedirect from './components/AppRedirect'
import './App.css'

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
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/app-development" element={<AppDevelopmentPage />} />
            <Route path="/website-development" element={<WebsiteDevelopmentPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
