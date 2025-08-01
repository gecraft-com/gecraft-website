import { useEffect, useState } from 'react'

import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import { DropdownMenu } from './DropdownMenu'
import { GCButton } from './GCButton'
import { BurgerMenuIcon } from './icons/BurgerMenuIcon'
import { LogoIcon } from './icons/LogoIcon'

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

  return (
    <>
      <header className="border-primary-100 bg-primary-100 fixed z-20 h-16 w-full border-b px-4 drop-shadow-xl sm:px-8 sm:py-2.5 xl:h-20 xl:px-20 2xl:px-40">
        <div className="mx-auto flex h-full max-w-[100.188rem] items-center justify-between">
          <a href="/" className="xl:hidden">
            <LogoIcon width={88} height={22} />
          </a>
          <a href="/" className="hidden xl:block">
            <LogoIcon name="logo" width={150} height={36} />
          </a>
          <div className="font-readexPro hidden justify-between sm:flex sm:w-44 sm:items-center xl:w-48 xl:text-lg">
            <div className="relative h-full">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  clsx(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 duration-100 hover:font-semibold',
                    {
                      'font-semibold': isActive,
                    }
                  )
                }
              >
                Services
              </NavLink>
            </div>
            <div className="relative h-full">
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  clsx(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 duration-100 hover:font-semibold',
                    {
                      'font-semibold': isActive,
                    }
                  )
                }
              >
                Work
              </NavLink>
            </div>
            <div className="relative h-full">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  clsx(
                    'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 duration-100 hover:font-semibold',
                    {
                      'font-semibold': isActive,
                    }
                  )
                }
              >
                About
              </NavLink>
            </div>
          </div>
          <div className="flex h-full items-center sm:hidden">
            <GCButton onClick={() => setIsShow(true)}>
              <BurgerMenuIcon />
            </GCButton>
          </div>
          <div className="hidden sm:block">
            <GCButton asLink link="/contact-us" view="green-header">
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
