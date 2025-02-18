import { useState } from 'react'

import { NavLink } from 'react-router-dom'

import DropdownMenu from './DropdownMenu'
import GCButton from './GCButton'
import Icons from './Icons'

function Header() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <header className="fixed z-20 flex h-16 w-full items-center justify-between border-b border-primary-100 bg-primary-100 px-4 drop-shadow-xl sm:px-8 sm:py-2.5 xl:h-20 xl:px-20 2xl:px-40">
        <a href="/" className="xl:hidden">
          <Icons name="logo" width={88} height={22} />
        </a>
        <a href="/" className="hidden xl:block">
          <Icons name="logo" width={150} height={36} />
        </a>
        <div className="hidden sm:block xl:text-lg">
          <NavLink
            to="/services"
            className={({ isActive }) =>
              `${isActive ? 'font-semibold' : ''} "mr-2.5 py-3" px-4`
            }
          >
            Services
          </NavLink>
          <NavLink
            to="/work"
            className={({ isActive }) =>
              `${isActive ? 'font-semibold' : ''} "mr-2.5 py-3" px-4`
            }
          >
            Work
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `${isActive ? 'font-semibold' : ''} "mr-2.5 py-3" px-4`
            }
          >
            About
          </NavLink>
        </div>
        <div className="sm:hidden">
          <GCButton type="menu" onClick={() => setIsShow(true)}>
            <Icons name="menu" />
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
