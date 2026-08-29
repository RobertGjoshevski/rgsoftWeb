import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import AppDevelopmentPage from './pages/AppDevelopmentPage'
import WebsiteDevelopmentPage from './pages/WebsiteDevelopmentPage'
import AboutPage from './pages/AboutPage'
import PrivacyPage from './pages/PrivacyPage'
import AppRedirect from './components/AppRedirect'
import { getLangFromPath, localizePath } from './seo/paths'
import './App.css'

function LanguageLayout({ lang }) {
  const { i18n } = useTranslation()

  const current = (i18n.resolvedLanguage || i18n.language || 'en').split('-')[0]
  useEffect(() => {
    if (current !== lang) {
      i18n.changeLanguage(lang)
    }
    document.documentElement.lang = lang
  }, [lang, i18n, current])

  return <Layout />
}

function UnknownRedirect() {
  const location = useLocation()
  const lang = getLangFromPath(location.pathname)
  return <Navigate to={localizePath('/', lang)} replace />
}

function pageRoutes(prefix = '') {
  const p = (route) => (route === '/' ? (prefix || '/') : `${prefix}${route}`)
  const routes = [
    <Route key={`${prefix}-home`} path={p('/')} element={<HomePage />} />,
    <Route key={`${prefix}-app`} path={p('/app-development')} element={<AppDevelopmentPage />} />,
    <Route key={`${prefix}-app-slash`} path={`${p('/app-development')}/`} element={<AppDevelopmentPage />} />,
    <Route key={`${prefix}-web`} path={p('/website-development')} element={<WebsiteDevelopmentPage />} />,
    <Route key={`${prefix}-web-slash`} path={`${p('/website-development')}/`} element={<WebsiteDevelopmentPage />} />,
    <Route key={`${prefix}-about`} path={p('/about')} element={<AboutPage />} />,
    <Route key={`${prefix}-about-slash`} path={`${p('/about')}/`} element={<AboutPage />} />,
    <Route key={`${prefix}-privacy`} path={p('/privacy')} element={<PrivacyPage />} />,
    <Route key={`${prefix}-privacy-slash`} path={`${p('/privacy')}/`} element={<PrivacyPage />} />
  ]
  if (prefix) {
    routes.splice(1, 0, <Route key={`${prefix}-home-slash`} path={`${prefix}/`} element={<HomePage />} />)
  }
  return routes
}

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/th" element={<AppRedirect />} />
          <Route path="/th/" element={<AppRedirect />} />

          <Route element={<LanguageLayout lang="mk" />}>
            {pageRoutes('/mk')}
          </Route>

          <Route element={<LanguageLayout lang="en" />}>
            {pageRoutes('')}
          </Route>

          <Route path="*" element={<UnknownRedirect />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
