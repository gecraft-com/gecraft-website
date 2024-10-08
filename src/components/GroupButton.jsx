import { useEffect, useRef } from 'react'

import appBarButtons from '../../data/appBarButtons.json'

function GroupButton() {
  const groupButtonRef = useRef(null)

  useEffect(() => {
    const groupButton = groupButtonRef.current
    const text = document.getElementById('text')

    const coordAppBar = groupButton.getBoundingClientRect().top
    const coordText = text.getBoundingClientRect().top

    document.addEventListener('scroll', handleScroll)

    function handleScroll() {
      if (window.scrollY > coordAppBar - 40) {
        groupButton.classList.add('fixed')
        text.classList.add('lg:mt-48', 'md:mt-40')
      } else if (window.scrollY <= coordText) {
        groupButton.classList.remove('fixed')
        text.classList.remove('lg:mt-48', 'md:mt-40')
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={groupButtonRef}
      className="top-10 z-30 hidden items-center gap-2.5 rounded-full bg-buttonGroup p-1.5 backdrop-blur-sm md:flex"
    >
      <a
        className="flex items-center justify-center rounded-full bg-buttonHover sm:h-14 sm:w-14 lg:h-20 lg:w-20"
        href="#"
      >
        <img
          src="img/logo.svg"
          alt="logo GeCraft"
          className="sm:h-11 sm:w-11 lg:h-14 lg:w-14"
        />
      </a>
      {appBarButtons.map(({ label, href }, index) => (
        <a
          key={index}
          className="flex items-center justify-center whitespace-nowrap rounded-full bg-transparent font-bold text-basic last:bg-buttonHover hover:bg-buttonHover sm:h-14 sm:px-5 sm:text-base lg:h-20 lg:px-11 lg:text-xl"
          href={href}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default GroupButton
