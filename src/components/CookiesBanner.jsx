import { useEffect, useState } from 'react'

import Cookies from 'js-cookie'

import { CookiesModal } from './CookiesModal'
import { GCButton } from './GCButton'

export const CookiesBanner = () => {
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
        <div className="bg-primary-400/80 fixed right-0 bottom-0 left-0 z-40 p-4">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm select-none">
              We use cookies to improve your experience and deliver personalized content.
              You can customize the use of cookies or accept all cookies. Read more in our{' '}
              <a href="/privacy" className="underline">
                Privacy Policy
              </a>
              .
            </p>
            <div className="mt-3 flex gap-4 md:mt-0">
              <CookiesModal handleAfterClick={() => setShowBanner(false)}>
                <GCButton view="cookies-first">Manage Cookies</GCButton>
              </CookiesModal>
              <GCButton view="cookies-second" onClick={handleAcceptAll}>
                Accept All
              </GCButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
