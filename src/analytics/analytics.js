import Cookies from 'js-cookie'
import ReactGA from 'react-ga4'

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID

let isInitialized = false

const getCookieConsent = () => {
  if (typeof window === 'undefined') return null

  try {
    const consentCookie = Cookies.get('userConsent')
    if (!consentCookie) return null

    return JSON.parse(consentCookie)
  } catch (error) {
    console.error('Error reading cookie consent:', error)
    return null
  }
}

export const hasAnalyticsConsent = () => {
  const consent = getCookieConsent()
  return consent?.analytics === true
}

export const initGA = () => {
  if (typeof window === 'undefined') return

  if (!MEASUREMENT_ID) {
    console.warn(
      'Google Analytics Measurement ID is not set. Please set VITE_GA_MEASUREMENT_ID in .env file'
    )
    return
  }

  if (isInitialized) {
    return
  }

  if (hasAnalyticsConsent()) {
    try {
      ReactGA.initialize(MEASUREMENT_ID)
      isInitialized = true
    } catch (error) {
      console.error('Error initializing Google Analytics:', error)
    }
  }
}

export const trackPageView = (path) => {
  if (typeof window === 'undefined') return

  if (!hasAnalyticsConsent()) {
    return
  }

  if (!isInitialized) {
    initGA()
  }

  if (isInitialized && ReactGA) {
    try {
      ReactGA.send({ hitType: 'pageview', page: path })
    } catch (error) {
      console.error('Error tracking page view:', error)
    }
  }
}

export const trackEvent = (eventName, eventParams = {}) => {
  if (typeof window === 'undefined') return

  if (!hasAnalyticsConsent()) {
    return
  }

  if (!isInitialized) {
    initGA()
  }

  if (isInitialized && ReactGA) {
    try {
      ReactGA.event(eventName, eventParams)
    } catch (error) {
      console.error('Error tracking event:', error)
    }
  }
}

export const enableGA = () => {
  if (typeof window === 'undefined') return

  if (!MEASUREMENT_ID) {
    console.warn('Google Analytics Measurement ID is not set')
    return
  }

  if (!isInitialized) {
    try {
      ReactGA.initialize(MEASUREMENT_ID)
      isInitialized = true

      const currentPath = window.location.pathname + window.location.search
      ReactGA.send({ hitType: 'pageview', page: currentPath })
    } catch (error) {
      console.error('Error enabling Google Analytics:', error)
    }
  }
}

export const disableGA = () => {
  if (typeof window === 'undefined') return

  isInitialized = false
}
