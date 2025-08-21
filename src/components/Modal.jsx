import { useEffect } from 'react'

import { CloseIcon } from './icons/CloseIcon'

export const Modal = ({ children, setModal }) => {
  useEffect(() => {
    const originalBodyOverflow = document.body.style.overflow
    const originalBodyPaddingRight = document.body.style.paddingRight

    const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth
    if (scrollBarWidth > 0) {
      document.body.style.paddingRight = `${scrollBarWidth}px`
    }

    document.body.style.overflow = 'hidden'

    return () => {
      document.body.style.overflow = originalBodyOverflow
      document.body.style.paddingRight = originalBodyPaddingRight
    }
  }, [])

  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false)
    }
  }

  return (
    <div
      className="bg-black-500/50 fixed inset-0 z-40 flex items-center justify-center overflow-y-auto"
      onClick={closeModal}
    >
      <div className="bg-primary-100 relative w-full rounded-lg p-3 md:w-auto md:p-4 xl:p-9">
        <div
          className="absolute top-5 right-5 cursor-pointer duration-100 hover:scale-110"
          onClick={() => setModal(false)}
        >
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  )
}
