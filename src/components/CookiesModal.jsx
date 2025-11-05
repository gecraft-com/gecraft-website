import React, { useState } from 'react'

import Cookies from 'js-cookie'

import { disableGA, enableGA } from '../analytics/analytics'
import { GCButton } from './GCButton'
import { Modal } from './Modal'

export const CookiesModal = ({ handleAfterClick, children }) => {
  const [modal, setModal] = useState(false)

  const [analytics, setAnalytics] = useState(() => {
    const consent = Cookies.get('userConsent')
    if (consent) {
      return JSON.parse(consent).analytics
    }
    return true
  })
  const [ads, setAds] = useState(() => {
    const consent = Cookies.get('userConsent')
    if (consent) {
      return JSON.parse(consent).ads
    }
    return true
  })

  const handleCustomize = (consent) => {
    Cookies.set('userConsent', JSON.stringify(consent), { expires: 365 })
    setModal(false)
  }

  const childrenWithClick = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, { onClick: () => setModal(true) })
    }
    return child
  })

  const acceptAllHandler = () => {
    setAnalytics(true)
    setAds(true)
    handleCustomize({
      analytics: true,
      ads: true,
      functional: true,
    })
    enableGA()
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
  }

  const savePreferenceHandler = () => {
    handleCustomize({
      functional: true,
      analytics,
      ads,
    })
    // Enable or disable GA based on user preference
    if (analytics) {
      enableGA()
    } else {
      disableGA()
    }
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
  }

  return (
    <>
      {childrenWithClick}
      {modal && (
        <Modal setModal={setModal}>
          <h4 className="mb-8 text-lg font-semibold md:text-3xl xl:text-4xl">
            Manage Cookies
          </h4>
          <div className="mb-5 flex items-center justify-between gap-4 text-sm font-semibold md:text-lg xl:text-xl">
            <p>Essential Cookies</p>
            <p className="mr-5">Always On</p>
          </div>

          <div className="text-medium mb-5">
            <label className="flex cursor-pointer items-center justify-between gap-4 text-sm md:text-lg xl:text-xl">
              Analytics Cookies
              <input
                type="checkbox"
                checked={analytics}
                onChange={() => {
                  setAnalytics((prev) => !prev)
                }}
                className="peer hidden"
              />
              <span className="border-primary-500 after:text-primary-600 peer-checked:border-primary-600 md:hover:border-primary-600 relative mr-10 inline-block h-8 w-8 cursor-pointer rounded-md border-4 duration-100 after:absolute after:-top-6 after:left-0 after:hidden after:text-5xl after:content-['\2713'] peer-checked:after:block"></span>
            </label>
          </div>
          <div className="text-medium mb-5">
            <label className="flex cursor-pointer items-center justify-between gap-4 text-sm md:text-lg xl:text-xl">
              Advertising Cookies
              <input
                type="checkbox"
                checked={ads}
                onChange={() => {
                  setAds((prev) => !prev)
                }}
                className="peer hidden"
              />
              <span className="border-primary-500 after:text-primary-600 peer-checked:border-primary-600 md:hover:border-primary-600 relative mr-10 inline-block h-8 w-8 cursor-pointer rounded-md border-4 duration-100 after:absolute after:-top-6 after:left-0 after:hidden after:text-5xl after:content-['\2713'] peer-checked:after:block"></span>
            </label>
          </div>
          <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">
            <GCButton
              view="primary"
              className="w-full py-2 md:w-50"
              onClick={savePreferenceHandler}
            >
              Save Preferences
            </GCButton>
            <GCButton
              view="secondary"
              className="w-full py-2.5 md:w-50"
              onClick={acceptAllHandler}
            >
              Accept All Cookies
            </GCButton>
          </div>
        </Modal>
      )}
    </>
  )
}
