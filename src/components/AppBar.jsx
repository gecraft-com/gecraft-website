import { useEffect, useRef } from 'react'

import appBarButtons from '../../data/appBarButtons.json'

function AppBar() {
  const AppBarRef = useRef(null)

  useEffect(() => {
    const AppBar = AppBarRef.current
    const text = document.getElementById('text')

    const coordAppBar = AppBar.getBoundingClientRect().top
    const coordText = text.getBoundingClientRect().top

    document.addEventListener('scroll', handleScroll)

    function handleScroll() {
      if (window.scrollY > coordAppBar - 40) {
        AppBar.classList.remove(
          'sm:absolute',
          'sm:top-[52vw]',
          'lg:top-[48vw]',
          '2xl:top-[49vw]'
        )
        AppBar.classList.add('sm:fixed', 'sm:top-10', 'lg:top-10', '2xl:top-10')
      } else if (window.scrollY <= coordText) {
        AppBar.classList.add(
          'sm:absolute',
          'sm:top-[52vw]',
          'lg:top-[48vw]',
          '2xl:top-[49vw]'
        )
        AppBar.classList.remove('sm:fixed', 'sm:top-10', 'lg:top-10', '2xl:top-10')
      }
    }

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div
      ref={AppBarRef}
      className="animation-timeline top-10 z-30 hidden animate-emergence items-center gap-2.5 rounded-full bg-buttonGroup backdrop-blur-3xl sm:absolute sm:top-[52vw] sm:flex sm:p-[0.53vw] lg:top-[48vw] lg:p-[0.32vw] 2xl:top-[49vw] 2xl:p-[0.175vw]"
    >
      <a
        className="flex items-center justify-center rounded-full bg-buttonHover sm:h-[4.95vw] sm:w-[4.95vw] lg:h-[4.43vw] lg:w-[4.43vw] 2xl:h-[2.53vw] 2xl:w-[2.53vw]"
        href="#"
      >
        <img
          src="img/logo.svg"
          alt="logo GeCraft"
          className="sm:h-[3.01vw] sm:w-[3.01vw] lg:h-[2.5vw] lg:w-[2.5vw] 2xl:h-[1.43vw] 2xl:w-[1.43vw]"
        />
      </a>
      {appBarButtons.map(({ label, href }, index) => (
        <a
          key={index}
          className="flex items-center justify-center whitespace-nowrap rounded-full bg-transparent font-bold text-basic duration-150 last:bg-buttonHover sm:h-[4.95vw] sm:px-[1.86vw] sm:text-[1.42vw] lg:h-[4.43vw] lg:px-[1.6vw] lg:text-[1.1vw] lg:hover:bg-buttonHover lg:hover:duration-150 lg:active:bg-buttonHover lg:active:duration-150 2xl:h-[2.53vw] 2xl:px-[0.88vw] 2xl:text-[0.61vw]"
          href={href}
        >
          {label}
        </a>
      ))}
    </div>
  )
}

export default AppBar
