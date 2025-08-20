import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'

import { navLinks } from '../constants/Navigate'
import { DropdownMenu } from './DropdownMenu'
import { GCButton } from './GCButton'
import { BurgerMenuIcon } from './icons/BurgerMenuIcon'
import { LogoHeaderIcon } from './icons/LogoHeaderIcon'

export const Header = () => {
  const [isShow, setIsShow] = useState(false)

  useEffect(() => {
    if (isShow) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }

    return () => {
      document.body.style.overflow = 'auto'
    }
  }, [isShow])

  const closeMenu = (e) => {
    if (e.target.closest('.dropdown-menu')) return
    setIsShow(false)
  }

  const handleLogoClick = () => {
    setIsShow(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <header className="border-primary-100 bg-primary-100 fixed z-20 h-15 w-full border-b px-4 drop-shadow-xl md:px-8 md:py-2 xl:h-20 xl:px-20 2xl:px-40">
        <div className="mx-auto flex h-full max-w-[100.188rem] items-center justify-between">
          <Link to="/" onClick={handleLogoClick} className="xl:hidden">
            <LogoHeaderIcon className="h-5.5 w-22" />
          </Link>
          <Link to="/" onClick={handleLogoClick} className="hidden xl:block">
            <LogoHeaderIcon className="h-9 w-37.5" />
          </Link>
          <div className="font-readexPro hidden justify-between md:flex md:w-44 md:items-center xl:w-48 xl:text-lg">
            <div className="relative h-full space-x-2.5">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={label}
                  to={to}
                  onClick={() => setIsShow(false)}
                  className={({ isActive }) =>
                    clsx(
                      'hover:border-black-950 w-max px-4 py-1.5 font-medium duration-100 hover:border-b',
                      isActive
                        ? 'border-black-950 border-b'
                        : 'border-b border-transparent'
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="flex h-full items-center md:hidden">
            <GCButton onClick={() => setIsShow(true)}>
              <BurgerMenuIcon />
            </GCButton>
          </div>
          <div className="hidden md:block">
            <GCButton
              asLink
              link="/contact-us"
              view="secondary"
              className="flex h-9.5 w-36 items-center justify-center xl:h-12 xl:w-46.5"
            >
              Contact us
            </GCButton>
          </div>
        </div>
      </header>
      {isShow && (
        <div className="fixed inset-0 z-30" onClick={closeMenu}>
          <div className="dropdown-menu" onClick={(e) => e.stopPropagation()}>
            <DropdownMenu setIsShow={setIsShow} />
          </div>
        </div>
      )}
    </>
  )
}
