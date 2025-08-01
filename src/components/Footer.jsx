import clsx from 'clsx'
import { Link, NavLink } from 'react-router-dom'

import { Form } from './Form'
import { LinkedinIcon } from './icons/LinkedinIcon'
import { LogoIcon } from './icons/LogoIcon'

const navLinks = [
  {
    to: '/services',
    label: 'Services',
  },
  {
    to: '/work',
    label: 'Work',
  },
  {
    to: '/about',
    label: 'About',
  },
]

export const Footer = () => {
  const today = new Date()
  const currentYear = today.getFullYear()

  return (
    <footer className="bg-secondary-950 text-black-00 w-full px-4 pt-6 pb-4 md:px-8 md:pt-11 md:pb-7 xl:px-20 xl:pt-14 xl:pb-9 2xl:px-40">
      <div className="mx-auto max-w-400">
        <div className="border-secondary-800 border-b pb-4 md:flex md:justify-between md:gap-6 md:pb-6">
          <div className="flex justify-between md:flex-col">
            <div className="flex flex-col text-lg font-medium md:gap-0.5">
              {navLinks.map(({ to, label }) => (
                <NavLink
                  key={label}
                  to={to}
                  className={({ isActive }) =>
                    clsx(
                      'hover:border-black-00 w-max py-1.5 duration-100 hover:border-b',
                      isActive
                        ? 'border-black-00 border-b'
                        : 'border-b border-transparent'
                    )
                  }
                >
                  {label}
                </NavLink>
              ))}
              <a
                href="https://www.linkedin.com/company/gecraft/?viewAsMember=true"
                target="_blank"
                className="mt-3 md:mt-6"
              >
                <LinkedinIcon />
              </a>
            </div>
            <p className="w-36 text-right text-sm md:mt-9 md:w-80 md:text-left md:text-base md:leading-5 xl:w-full">
              We want to make IT solutions <br className="hidden md:block xl:hidden" />
              affordable <br className="hidden xl:block" /> and help businesses achieve
              great results through innovation
            </p>
          </div>
          <Form />
        </div>
        <div className="flex items-center justify-between pt-4 md:pt-6">
          <Link to="/">
            <LogoIcon className="h-5 w-20" />
          </Link>
          <div className="text-black-200 hidden gap-4 text-base underline md:flex">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
          </div>
          <p className="text-black-200 text-xs md:text-base">
            © {currentYear} All rights reserved
          </p>
        </div>
        <div className="text-black-200 flex gap-4 pt-3 text-xs underline md:hidden">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Service</Link>
        </div>
      </div>
    </footer>
  )
}
