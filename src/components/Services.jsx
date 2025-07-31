import { useEffect } from 'react'

import clsx from 'clsx'
import { Link, useLocation } from 'react-router-dom'

function Services({ location = 'home' }) {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  return (
    <div className="font-readexPro grid grid-cols-2 grid-rows-2 gap-1 font-semibold sm:grid-cols-6 sm:gap-1.5 sm:text-xl xl:gap-4 xl:text-3xl">
      <Link
        to="/services#management"
        className={clsx(
          'bg-primary-400 relative flex items-end justify-end rounded-tl-3xl px-3 py-2.5 text-right duration-1000 sm:col-span-2 sm:p-4 xl:rounded-tl-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/chat.webp"
          alt="chat"
          className={clsx(
            'absolute',
            location === 'home' &&
              'top-1 left-1 w-[4.5rem] duration-1000 group-hover:scale-125 group-hover:-rotate-12 sm:top-3 sm:left-3 sm:w-[8.3rem] xl:top-5 xl:left-7 xl:w-[15rem] 2xl:-top-3 2xl:w-[18rem]',
            location === 'services' &&
              '-top-2 -left-1.5 w-[6.2rem] opacity-20 sm:-top-4 sm:-left-3.5 sm:w-[12rem] xl:-top-12 xl:-left-10 xl:w-[20rem]'
          )}
        />
        <span className="z-10 duration-1000 group-hover:-translate-x-6">
          Product Management
        </span>
      </Link>
      <Link
        to="/services#design"
        className={clsx(
          'bg-primary-400 relative flex items-end justify-end rounded-tr-3xl px-3 py-2.5 text-right duration-1000 sm:col-span-2 sm:rounded-none xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/frame.webp"
          alt="frame"
          className={clsx(
            'absolute',
            location === 'home' &&
              'top-2 left-3 w-[3.5rem] duration-1000 group-hover:scale-125 group-hover:-rotate-12 sm:top-1 sm:left-3.5 sm:w-[8.5rem] xl:top-7 xl:left-8 xl:w-[13.5rem] 2xl:top-1 2xl:left-8 2xl:w-[16.5rem]',
            location === 'services' &&
              '-top-2 left-0.5 w-[5.5rem] -rotate-6 opacity-20 sm:-top-3 sm:left-0 sm:w-[11.9rem] xl:-top-9 xl:-left-16 xl:w-[18rem]'
          )}
        />
        <span className="duration-1000 group-hover:-translate-x-6">Product Design</span>
      </Link>
      <Link
        to="/services#quality"
        className={clsx(
          'bg-primary-400 relative flex items-end justify-end px-3 py-2.5 text-right duration-1000 sm:col-span-2 sm:rounded-tr-3xl xl:rounded-tr-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/security.webp"
          alt="security"
          className={clsx(
            'absolute',
            location === 'home' &&
              'top-2 left-2.5 w-[4rem] duration-1000 group-hover:scale-125 group-hover:-rotate-12 sm:top-3 sm:left-2 sm:w-[8rem] xl:top-7 xl:left-3 xl:w-[13rem] 2xl:top-4 2xl:left-4 2xl:w-[15rem]',
            location === 'services' &&
              'top-0 -left-1 w-[5.5rem] opacity-20 sm:-top-0.5 sm:-left-7 sm:w-[10rem] xl:-top-7 xl:-left-14 xl:w-[17rem]'
          )}
        />
        <span className="z-10 duration-1000 group-hover:-translate-x-6">
          Quality Assurance
        </span>
      </Link>
      <Link
        to="/services#engineering"
        className={clsx(
          'bg-primary-400 relative flex items-end justify-end px-3 py-2.5 text-right duration-1000 sm:col-span-3 sm:rounded-bl-3xl xl:rounded-bl-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/code.webp"
          alt="code"
          className={clsx(
            'absolute',
            location === 'home' &&
              'top-3 left-2 w-[3.2rem] duration-1000 group-hover:scale-125 group-hover:-rotate-12 sm:top-2.5 sm:left-5 sm:w-[8rem] xl:top-5 xl:left-10 xl:w-[14rem] 2xl:left-10 2xl:w-[17.4rem]',
            location === 'services' &&
              '-top-1 -left-0.5 w-[5rem] -rotate-12 opacity-20 sm:-top-3.5 sm:left-0.5 sm:w-[12rem] xl:-top-4 xl:left-5 xl:w-[16.5rem]'
          )}
        />
        <span className="z-10 duration-1000 group-hover:-translate-x-6">
          Software Engineering
        </span>
      </Link>
      <Link
        to="/services#fullCycle"
        className={clsx(
          'bg-primary-400 relative col-span-2 flex items-end justify-end rounded-b-3xl px-3 py-2.5 text-right duration-1000 sm:col-span-3 sm:rounded-bl-none xl:rounded-br-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/analytics.webp"
          alt="analytics"
          className={clsx(
            'absolute',
            location === 'home' &&
              'top-2 left-6 w-[5.6rem] duration-1000 group-hover:scale-125 group-hover:-rotate-12 sm:top-1.5 sm:left-5 sm:w-[8.5rem] xl:top-5 xl:left-10 xl:w-[14rem] 2xl:top-1 2xl:left-9 2xl:w-[16.5rem]',
            location === 'services' &&
              'top-0 left-6 w-[6rem] -rotate-6 opacity-20 sm:-top-3 sm:left-1 sm:w-[11rem] xl:-top-10 xl:-left-8 xl:w-[19.5rem]'
          )}
        />
        <span className="z-10 duration-1000 group-hover:-translate-x-6">
          Digital Product <br className="xl:hidden" />
          Full-Cycle Service
        </span>
      </Link>
    </div>
  )
}

export default Services
