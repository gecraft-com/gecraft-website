import { useEffect, useRef } from 'react'

import appBarButtons from '../../data/appBarButtons.json'

function GroupButton() {
  const groupButtonRef = useRef(null)

  useEffect(() => {
    const groupButton = groupButtonRef.current
    const text = document.getElementById('text')

    const coordAppBar = groupButton.getBoundingClientRect().top
    const coordText = text.getBoundingClientRect().top

    window.addEventListener('scroll', handleScroll)

    function handleScroll() {
      if (window.scrollY > coordAppBar - 40) {
        groupButton.classList.add('fixed')
        text.classList.add('mt-48')
      } else if (window.scrollY <= coordText) {
        groupButton.classList.remove('fixed')
        text.classList.remove('mt-48')
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={groupButtonRef}
      className="top-10 z-30 hidden items-center gap-2.5 rounded-full bg-buttonGroup p-1.5 sm:flex"
    >
      <a
        className="flex h-20 w-20 items-center justify-center rounded-full bg-buttonHover"
        href="#"
      >
        <img src="img/logo.svg" alt="logo GeCraft" className="h-14 w-14" />
      </a>
      {appBarButtons.map(({ label, href }, index) => (
        <a
          key={index}
          className="flex h-20 items-center justify-center rounded-full bg-transparent px-11 text-xl font-bold text-basic last:bg-buttonHover hover:bg-buttonHover"
          href={href}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default GroupButton
