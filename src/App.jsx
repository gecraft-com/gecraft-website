import { lazy, Suspense } from 'react'

import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import AboutPage from './pages/AboutPage'
import ContactUsPage from './pages/ContactUsPage'
import HomePage from './pages/HomePage'
import ServicesPage from './pages/ServicesPage'
import WorkPage from './pages/WorkPage'

const TermsPage = lazy(() => import('./pages/TermsPage'))
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'))

function App() {
  return (
    <Layout>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </Suspense>
    </Layout>
  )
}

export default App
