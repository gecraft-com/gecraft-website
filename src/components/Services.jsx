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
          'relative flex items-end justify-end overflow-hidden rounded-tl-3xl bg-primary-400 px-3 py-2.5 text-right sm:col-span-2 sm:p-4 xl:rounded-tl-[4rem] xl:p-7',
          location === 'home' && 'h-28 sm:h-48 xl:h-80',
          location === 'services' && 'h-24 sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/chat.svg"
          alt="chat"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0 top-0 w-[5.2rem] sm:w-[12rem] xl:left-2 xl:top-2 xl:w-[19rem] 2xl:-top-6 2xl:w-[25rem]',
            location === 'services' &&
              '-left-4 -top-3 w-[8rem] opacity-20 sm:-top-5 sm:w-80 xl:-left-14 xl:-top-16 xl:w-[28rem]'
          )}
        />
        <span className="z-10">
          Product <br className="xl:hidden" />
          Management
        </span>
      </Link>
      <Link
        to="/services#design"
        className={clsx(
          'relative flex items-end justify-end overflow-hidden rounded-tr-3xl bg-primary-400 px-3 py-2.5 text-right sm:col-span-2 sm:rounded-none xl:p-7',
          location === 'home' && 'h-28 sm:h-48 xl:h-80',
          location === 'services' && 'h-24 sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/frame.svg"
          alt="frame"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-1 w-[4.563rem] sm:-left-1.5 sm:-top-1.5 sm:w-[12rem] xl:left-0 xl:top-2 xl:w-[17.5rem] 2xl:-left-2 2xl:-top-6 2xl:w-[22rem]',
            location === 'services' &&
              '-left-3.5 -top-4 w-[7.7rem] -rotate-6 opacity-20 sm:-left-7 sm:-top-6 sm:w-80 xl:-left-28 xl:-top-14 xl:w-[28rem]'
          )}
        />
        <span className="z-10">
          Product <br className="sm:hidden" />
          Design
        </span>
      </Link>
      <Link
        to="/services#quality"
        className={clsx(
          'relative flex items-end justify-end overflow-hidden bg-primary-400 px-3 py-2.5 text-right sm:col-span-2 sm:rounded-tr-3xl xl:rounded-tr-[4rem] xl:p-7',
          location === 'home' && 'h-28 sm:h-48 xl:h-80',
          location === 'services' && 'h-24 sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/security.svg"
          alt="security"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-0 w-[5rem] sm:-left-3 sm:-top-1 sm:w-[10.2rem] xl:-left-3 xl:top-0 xl:w-[17rem] 2xl:-left-8 2xl:-top-6 2xl:w-[21rem]',
            location === 'services' &&
              '-left-6 -top-4 w-[8rem] opacity-20 sm:-left-12 sm:-top-7 sm:w-56 xl:-left-28 xl:-top-20 xl:w-96'
          )}
        />
        <span className="z-10">
          Quality <br className="sm:hidden" />
          Assurance
        </span>
      </Link>
      <Link
        to="/services#engineering"
        className={clsx(
          'relative flex items-end justify-end overflow-hidden bg-primary-400 px-3 py-2.5 text-right sm:col-span-3 sm:rounded-bl-3xl xl:rounded-bl-[4rem] xl:p-7',
          location === 'home' && 'h-28 sm:h-48 xl:h-80',
          location === 'services' && 'h-24 sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/code.svg"
          alt="code"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-1 w-[4.563rem] sm:-left-1 sm:-top-1 sm:w-[11rem] xl:left-3 xl:top-0 xl:w-[18.5rem] 2xl:-left-1.5 2xl:w-[23.5rem]',
            location === 'services' &&
              '-left-3 -top-3 w-[7rem] -rotate-12 opacity-20 sm:-left-7 sm:-top-8 sm:w-64 xl:-top-14 xl:w-96'
          )}
        />
        <span className="z-10">
          Software <br className="sm:hidden" />
          Engineering
        </span>
      </Link>
      <Link
        to="/services#fullCycle"
        className={clsx(
          'relative col-span-2 flex items-end justify-end overflow-hidden rounded-b-3xl bg-primary-400 px-3 py-2.5 text-right sm:col-span-3 sm:rounded-bl-none xl:rounded-br-[4rem] xl:p-7',
          location === 'home' && 'h-28 sm:h-48 xl:h-80',
          location === 'services' && 'h-24 sm:h-44 xl:h-56'
        )}
      >
        <img
          src="/analytics.svg"
          alt="analytics"
          className={clsx(
            'absolute',
            location === 'home' &&
              'left-0.5 top-1 w-[8.125rem] sm:-left-4 sm:-top-2 sm:w-[13rem] xl:left-0 xl:top-0 xl:w-[19.5rem] 2xl:-left-8 2xl:-top-5 2xl:w-[23.5rem]',
            location === 'services' &&
              '-left-3 -top-4 w-[9.5rem] opacity-20 sm:-left-14 sm:-top-10 sm:w-72 xl:-left-28 xl:-top-20 xl:w-[29rem]'
          )}
        />
        <span className="z-10">
          Digital Product <br className="xl:hidden" />
          Full-Cycle Service
        </span>
      </Link>
    </div>
  )
}

export default Services
