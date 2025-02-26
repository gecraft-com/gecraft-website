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
    <div className="grid grid-cols-2 grid-rows-2 gap-1 font-semibold sm:grid-cols-6 sm:gap-1.5 sm:text-xl xl:gap-4 xl:text-3xl">
      <Link
        to="/services#management"
        className={clsx(
          'relative flex items-end justify-end rounded-tl-3xl bg-primary-400 px-3 py-2.5 text-right duration-1000 sm:col-span-2 sm:p-4 xl:rounded-tl-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/chat.webp"
          alt="chat"
          loading="lazy"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-1 top-1 w-[5.5rem] duration-1000 group-hover:-rotate-12 group-hover:scale-125 sm:w-[12rem] xl:left-2 xl:top-2 xl:w-[19rem] 2xl:-top-6 2xl:w-[25rem]',
            location === 'services' &&
              '-left-4 -top-1 w-[8rem] opacity-20 sm:-left-8 sm:-top-1 sm:w-[25rem] xl:-left-16 xl:-top-9 xl:w-[28rem]'
          )}
        />
        <span className="z-10 duration-1000 group-hover:-translate-x-6">
          Product Management
        </span>
      </Link>
      <Link
        to="/services#design"
        className={clsx(
          'relative flex items-end justify-end rounded-tr-3xl bg-primary-400 px-3 py-2.5 text-right duration-1000 sm:col-span-2 sm:rounded-none xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/frame.webp"
          alt="frame"
          loading="lazy"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-1 w-[4.563rem] duration-1000 group-hover:-rotate-12 group-hover:scale-125 sm:-left-1.5 sm:-top-1.5 sm:w-[12rem] xl:left-0 xl:top-2 xl:w-[17.5rem] 2xl:-left-2 2xl:-top-6 2xl:w-[22rem]',
            location === 'services' &&
              '-left-2.5 -top-3 w-[7.7rem] -rotate-6 opacity-20 sm:-left-6 sm:-top-5 sm:w-[15rem] xl:-left-28 xl:-top-12 xl:w-[28rem] 2xl:w-[26rem]'
          )}
        />
        <span className="duration-1000 group-hover:-translate-x-6">Product Design</span>
      </Link>
      <Link
        to="/services#quality"
        className={clsx(
          'relative flex items-end justify-end bg-primary-400 px-3 py-2.5 text-right duration-1000 sm:col-span-2 sm:rounded-tr-3xl xl:rounded-tr-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/security.webp"
          alt="security"
          loading="lazy"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-0 w-[5rem] duration-1000 group-hover:-rotate-12 group-hover:scale-125 sm:-left-3 sm:-top-1 sm:w-[10.2rem] xl:-left-3 xl:top-0 xl:w-[17rem] 2xl:-left-8 2xl:-top-6 2xl:w-[21rem]',
            location === 'services' &&
              '-left-2 -top-1.5 w-[7rem] opacity-20 sm:-left-10 sm:-top-3 sm:w-[13rem] xl:-left-16 xl:-top-10 xl:w-[21.5rem] 2xl:-left-20'
          )}
        />
        <span className="z-10 duration-1000 group-hover:-translate-x-6">
          Quality Assurance
        </span>
      </Link>
      <Link
        to="/services#engineering"
        className={clsx(
          'relative flex items-end justify-end bg-primary-400 px-3 py-2.5 text-right duration-1000 sm:col-span-3 sm:rounded-bl-3xl xl:rounded-bl-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/code.webp"
          alt="code"
          loading="lazy"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-1 w-[4.563rem] duration-1000 group-hover:-rotate-12 group-hover:scale-125 sm:-left-1 sm:-top-1 sm:w-[11rem] xl:left-3 xl:top-0 xl:w-[18.5rem] 2xl:-left-1.5 2xl:w-[23.5rem]',
            location === 'services' &&
              '-left-3 -top-3 w-[7rem] -rotate-12 opacity-20 sm:-left-7 sm:-top-8 sm:w-64 xl:-top-11 xl:w-[23rem]'
          )}
        />
        <span className="z-10 duration-1000 group-hover:-translate-x-6">
          Software Engineering
        </span>
      </Link>
      <Link
        to="/services#fullCycle"
        className={clsx(
          'relative col-span-2 flex items-end justify-end rounded-b-3xl bg-primary-400 px-3 py-2.5 text-right duration-1000 sm:col-span-3 sm:rounded-bl-none xl:rounded-br-[4rem] xl:p-7',
          location === 'home' &&
            'group h-28 hover:scale-[1.01] hover:shadow-xl sm:h-48 xl:h-80',
          location === 'services' &&
            'group h-24 overflow-hidden hover:scale-[1.01] hover:shadow-xl sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/analytics.webp"
          alt="analytics"
          loading="lazy"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-1 z-30 w-[8.125rem] duration-1000 group-hover:-rotate-12 group-hover:scale-125 sm:-left-4 sm:-top-2 sm:w-[13rem] xl:left-0 xl:top-0 xl:w-[19.5rem] 2xl:-left-8 2xl:-top-5 2xl:w-[23.5rem]',
            location === 'services' &&
              '-top-1 left-2 w-[8.5rem] -rotate-6 opacity-20 sm:-left-6 sm:-top-4 sm:w-[15.5rem] xl:-left-16 xl:-top-12 xl:w-[27rem]'
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
