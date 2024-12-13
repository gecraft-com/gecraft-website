'use client'

import React, { useState } from 'react'

// import { Switch } from '@nextui-org/react'
import Cookies from 'js-cookie'

import ModalWindow from './ModalWindow'

function CookiesModal({ handleAfterClick, children }) {
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
    hideBanner()
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
  }

  const hideBanner = () => {
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
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
  }

  return (
    <>
      {childrenWithClick}
      {modal && (
        <ModalWindow modalIsOpen={modal} onCloseModal={hideBanner}>
          <div className="rounded-xlarge bg-background text-semixlarge text-secondary p-10 font-medium">
            <p className="mb-8 font-semibold">Manage Cookies</p>
            <div className="text-medium mb-5 flex items-center justify-between gap-4">
              <p>Essential Cookies</p>
              <p className="text-small mr-5">Always On</p>
            </div>

            <div className="text-medium mb-5 flex items-center justify-between gap-4">
              <p>Analytics Cookies</p>
              {/* <Switch
                isSelected={analytics}
                onChange={() => {
                  setAnalytics((prev) => !prev)
                }}
                classNames={{
                  wrapper: 'mr-5',
                }}
              /> */}
            </div>

            <div className="text-medium mb-5 flex items-center justify-between gap-4">
              <p>Advertising Cookies</p>
              {/* <Switch
                isSelected={ads}
                onChange={() => {
                  setAds((prev) => !prev)
                }}
                classNames={{
                  wrapper: 'mr-5',
                }}
              /> */}
            </div>
            <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">
              <button color="secondary" onClick={savePreferenceHandler}>
                Save Preferences
              </button>
              <button onClick={acceptAllHandler}>Accept All Cookies</button>
            </div>
          </div>
        </ModalWindow>
      )}
    </>
  )
}

export default CookiesModal
