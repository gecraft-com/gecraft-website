import { StrictMode } from 'react'

import { createRoot } from 'react-dom/client'

import { App } from './App'

import './index.css'

import { BrowserRouter } from 'react-router-dom'

import { RouteTracker } from './analytics/RouteTracker'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <RouteTracker />
      <App />
    </BrowserRouter>
  </StrictMode>
)
