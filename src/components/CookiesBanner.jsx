'use client'

import { useEffect, useState } from 'react'

import Cookies from 'js-cookie'

import CookiesModal from './CookiesModal'

function CookiesBanner() {
  const [showBanner, setShowBanner] = useState(false)

  const handleAcceptAll = () => {
    Cookies.set(
      'userConsent',
      JSON.stringify({
        analytics: true,
        ads: true,
        functional: true,
      }),
      { expires: 365 }
    )
    setShowBanner(false)
  }

  useEffect(() => {
    const consent = Cookies.get('userConsent')
    if (!consent) {
      setShowBanner(true)
    }
  }, [])
  return (
    <>
      {showBanner && (
        <div className="bg-secondary-600/90 fixed bottom-0 left-0 right-0 z-40 p-4 text-white">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-small">
              We use cookies to improve your experience and deliver personalized content.
              You can customize the use of cookies or accept all cookies. Read more in our{' '}
              <a href="/pages/privacy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
            <div className="mt-3 flex gap-4 md:mt-0">
              <CookiesModal handleAfterClick={() => setShowBanner(false)}>
                <button color="secondary">Manage Cookies</button>
              </CookiesModal>
              <button color="primary" onClick={handleAcceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default CookiesBanner
