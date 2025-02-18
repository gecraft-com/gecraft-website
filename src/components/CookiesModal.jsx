import React, { useState } from 'react'

import Cookies from 'js-cookie'

import { Modal } from './Modal'

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
    setModal(false)
    if (typeof handleAfterClick === 'function') {
      handleAfterClick()
    }
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
        <Modal setModal={setModal}>
          <div className="rounded-xlarge bg-background text-semixlarge text-secondary select-none p-10 font-medium">
            <p className="mb-8 text-xl font-semibold text-white">Manage Cookies</p>
            <div className="text-medium mb-5 flex items-center justify-between gap-4 text-white">
              <p>Essential Cookies</p>
              <p className="text-small mr-5">Always On</p>
            </div>

            <div className="text-medium mb-5 text-white">
              <label className="flex cursor-pointer items-center justify-between gap-4">
                Analytics Cookies
                <input
                  type="checkbox"
                  onChange={() => {
                    setAnalytics((prev) => !prev)
                  }}
                  className="peer hidden"
                />
                <span className="relative mr-10 inline-block h-8 w-8 cursor-pointer rounded-md border-4 border-primary-500 after:absolute after:-top-6 after:left-0 after:hidden after:text-5xl after:text-primary-300 after:content-['\\2713'] hover:border-primary-200 active:border-primary-100 peer-checked:border-primary-300 peer-checked:after:block"></span>
              </label>
            </div>
            <div className="text-medium mb-5 text-white">
              <label className="flex cursor-pointer items-center justify-between gap-4">
                Advertising Cookies
                <input
                  type="checkbox"
                  onChange={() => {
                    setAds((prev) => !prev)
                  }}
                  className="peer hidden"
                />
                <span className="relative mr-10 inline-block h-8 w-8 cursor-pointer rounded-md border-4 border-primary-500 after:absolute after:-top-6 after:left-0 after:hidden after:text-5xl after:text-primary-300 after:content-['\\2713'] hover:border-primary-200 active:border-primary-100 peer-checked:border-primary-300 peer-checked:after:block"></span>
              </label>
            </div>
            <div className="mt-12 flex flex-col justify-center gap-6 md:flex-row">
              <button
                onClick={savePreferenceHandler}
                className="font-lexend mt-[2.09vh] h-[6.29vh] w-full select-none whitespace-nowrap rounded-lg bg-primary-500 px-6 text-sm text-white hover:bg-primary-200 hover:text-primary-500 active:bg-primary-100 md:mt-[1.67vh] md:h-[5.03vh] xl:mt-4 xl:h-12"
              >
                Save Preferences
              </button>
              <button
                onClick={acceptAllHandler}
                className="font-lexend mt-[2.09vh] h-[6.29vh] w-full select-none whitespace-nowrap rounded-lg bg-primary-300 px-6 text-sm text-primary-500 hover:bg-primary-200 active:bg-primary-100 md:mt-[1.67vh] md:h-[5.03vh] xl:mt-4 xl:h-12"
              >
                Accept All Cookies
              </button>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}

export default CookiesModal
