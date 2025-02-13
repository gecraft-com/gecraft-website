import { StrictMode } from 'react'

import { NextUIProvider } from '@nextui-org/react'
import { createRoot } from 'react-dom/client'

import App from './App'

import './index.css'

import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NextUIProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NextUIProvider>
  </StrictMode>
)
