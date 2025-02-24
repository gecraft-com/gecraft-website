import { useState } from 'react'

import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import DropdownMenu from './DropdownMenu'
import GCButton from './GCButton'
import BurgerMenuIcon from './icons/BurgerMenuIcon'
import LogoIcon from './icons/LogoIcon'

function Header() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <header className="fixed z-20 flex h-16 w-full items-center justify-between border-b border-primary-100 bg-primary-100 px-4 drop-shadow-xl sm:px-8 sm:py-2.5 xl:h-20 xl:px-20 2xl:px-40">
        <a href="/" className="xl:hidden">
          <LogoIcon width={88} height={22} />
        </a>
        <a href="/" className="hidden xl:block">
          <LogoIcon name="logo" width={150} height={36} />
        </a>
        <div className="hidden justify-between sm:flex sm:w-44 sm:items-center xl:w-48 xl:text-lg">
          <div className="relative h-full">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                clsx(
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 hover:font-semibold',
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
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 hover:font-semibold',
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
                  'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-4 py-3 hover:font-semibold',
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
          <GCButton type="menu" onClick={() => setIsShow(true)}>
            <BurgerMenuIcon />
          </GCButton>
        </div>
        <div className="hidden sm:block">
          <GCButton type="green-header">Contact us</GCButton>
        </div>
      </header>
      {isShow && <DropdownMenu setIsShow={setIsShow} />}
    </>
  )
}

export default Header
