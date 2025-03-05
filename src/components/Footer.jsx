import clsx from 'clsx'
import { NavLink } from 'react-router-dom'

import Form from './Form'
import LinkedinIcon from './icons/LinkedinIcon'
import LogoIcon from './icons/LogoIcon'

function Footer() {
  const today = new Date()
  const currentYear = today.getFullYear()

  return (
    <footer className="w-full bg-primary-100 px-4 pb-4 pt-6 text-left sm:px-8 sm:pb-7 sm:pt-11 xl:px-20 xl:pb-9 xl:pt-14 2xl:px-40">
      <div className="mx-auto max-w-[100.188rem]">
        <div className="border-b border-primary-200 pb-4 sm:flex sm:justify-between sm:gap-6">
          <div className="flex justify-between sm:flex-col">
            <div className="flex flex-col font-readexPro">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  clsx('pb-0.5 duration-100 hover:font-semibold', {
                    'font-semibold': isActive,
                  })
                }
              >
                Services
              </NavLink>
              <NavLink
                to="/work"
                className={({ isActive }) =>
                  clsx('py-1 duration-100 hover:font-semibold sm:mt-3', {
                    'font-semibold': isActive,
                  })
                }
              >
                Work
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  clsx('pt-0.5 duration-100 hover:font-semibold sm:mt-3', {
                    'font-semibold': isActive,
                  })
                }
              >
                About
              </NavLink>
              <a
                href="https://www.linkedin.com/company/gecraft/?viewAsMember=true"
                target="_blank"
                className="mt-3 sm:mt-6"
              >
                <LinkedinIcon />
              </a>
            </div>
            <p className="w-40 text-sm sm:mt-9 sm:w-80 sm:text-base sm:leading-5 xl:w-full">
              We want to make IT solutions affordable <br className="hidden xl:block" />{' '}
              and help businesses achieve great results through innovation
            </p>
          </div>
          <Form />
        </div>
        <div className="flex items-center justify-between pt-4 sm:pt-6">
          <a href="/">
            <LogoIcon width={80} height={20} />
          </a>
          <div className="hidden gap-4 text-base text-primary-300 underline sm:flex">
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <p className="text-xs text-primary-300 sm:text-base">
            © {currentYear} All rights reserved
          </p>
        </div>
        <div className="flex gap-4 pt-3 text-xs text-primary-300 underline sm:hidden">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
