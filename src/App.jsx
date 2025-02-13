import { Route, Routes } from 'react-router-dom'

import Layout from './Layout'
import About from './pages/About'
import HomePage from './pages/HomePage'
import Services from './pages/Services'
import Work from './pages/Work'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services />} />
        <Route path="/work" element={<Work />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </Layout>
  )
}

export default App
