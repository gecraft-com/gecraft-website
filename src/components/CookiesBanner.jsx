import { useEffect, useState } from 'react'

import Cookies from 'js-cookie'
import { Link } from 'react-router-dom'

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
        <div className="bg-secondary-200/90 fixed right-0 bottom-0 left-0 z-40 p-4">
          <div className="container mx-auto flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm select-none">
              We use cookies to improve your experience and deliver personalized content.
              You can customize the use of cookies or accept all cookies. Read more in our{' '}
              <Link to="/privacy" className="underline">
                Privacy Policy
              </Link>
              .
            </p>
            <div className="mt-3 flex w-full flex-col gap-4 md:mt-0 md:w-max md:flex-row">
              <CookiesModal handleAfterClick={() => setShowBanner(false)}>
                <GCButton view="primary" className="w-full py-2 md:w-50">
                  Manage Cookies
                </GCButton>
              </CookiesModal>
              <GCButton
                view="secondary"
                className="w-full py-2.5 md:w-50"
                onClick={handleAcceptAll}
              >
                Accept All
              </GCButton>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
