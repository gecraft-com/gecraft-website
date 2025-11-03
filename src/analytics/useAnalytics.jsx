import { useCallback } from 'react'

import { hasAnalyticsConsent, trackEvent, trackPageView } from './analytics'

export const useAnalytics = () => {
  const hasConsent = useCallback(() => {
    return hasAnalyticsConsent()
  }, [])

  const trackCustomEvent = useCallback((eventName, eventParams = {}) => {
    trackEvent(eventName, eventParams)
  }, [])

  const trackCustomPageView = useCallback((path) => {
    trackPageView(path)
  }, [])

  return {
    trackEvent: trackCustomEvent,
    trackPageView: trackCustomPageView,
    hasConsent,
  }
}
