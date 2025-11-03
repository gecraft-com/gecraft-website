import { useCallback } from 'react'

import {
  trackEvent as analyticsTrackEvent,
  trackPageView as analyticsTrackPageView,
  hasAnalyticsConsent,
} from './analytics'

export const useAnalytics = () => {
  const hasConsent = useCallback(() => {
    return hasAnalyticsConsent()
  }, [])

  const trackEvent = useCallback((eventName, eventParams = {}) => {
    analyticsTrackEvent(eventName, eventParams)
  }, [])

  const trackPageView = useCallback((path) => {
    analyticsTrackPageView(path)
  }, [])

  return {
    trackEvent,
    trackPageView,
    hasConsent,
  }
}
