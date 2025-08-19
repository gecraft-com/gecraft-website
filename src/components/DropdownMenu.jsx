import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'

import { navLinks } from '../constants/Navigate'
import { GCButton } from './GCButton'
import { CloseIcon } from './icons/CloseIcon'
import { LogoHeaderIcon } from './icons/LogoHeaderIcon'

export const DropdownMenu = ({ setIsShow }) => {
  return (
    <div className="bg-primary-100 fixed z-40 w-full rounded-b-lg px-4 pb-4 drop-shadow-xl">
      <div className="border-primary-200 flex h-15 items-center justify-between border-b">
        <Link to="/">
          <LogoHeaderIcon className="h-5.5 w-22" />
        </Link>
        <GCButton onClick={() => setIsShow(false)}>
          <CloseIcon />
        </GCButton>
      </div>
      <div className="my-3 flex flex-col text-lg font-medium md:gap-0.5">
        {navLinks.map(({ to, label }) => (
          <NavLink
            key={label}
            to={to}
            onClick={() => setIsShow(false)}
            className={({ isActive }) =>
              clsx(
                'hover:border-black-950 w-max py-1.5 font-medium duration-100 hover:border-b',
                isActive ? 'border-black-950 border-b' : 'border-b border-transparent'
              )
            }
          >
            {label}
          </NavLink>
        ))}
      </div>
      <GCButton
        asLink
        link="/contact-us"
        view="secondary"
        onClick={() => setIsShow(false)}
        className="flex h-9.5 w-36 items-center justify-center"
      >
        Contact us
      </GCButton>
    </div>
  )
}
