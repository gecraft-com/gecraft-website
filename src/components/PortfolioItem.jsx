import { useState } from 'react'

import { Link } from 'react-router-dom'

export const PortfolioItem = ({
  icon,
  projectName,
  sinceDate,
  link,
  services,
  description,
  location = '',
}) => {
  const [expanded, setExpanded] = useState(false)
  const words = description.split(' ')
  const shouldTruncate = words.length > 30

  return (
    <div className="item bg-black-00 rounded-3xl p-4 md:p-6 xl:rounded-[3.5rem] xl:p-8">
      <img
        src={icon}
        alt="logo"
        className="w-full rounded-xl object-cover xl:rounded-xl"
      />
      <Link to={link} target="_blank">
        <h2 className="text-primary-600 hover:text-primary-700 mt-2 font-[Faberge] text-2xl underline duration-100 md:mt-4 md:text-4xl xl:mt-9 xl:mb-3">
          {projectName}
        </h2>
      </Link>
      <div className="flex flex-col xl:flex-col-reverse">
        <div>
          <h3 className="mt-3.5 text-lg font-semibold md:text-xl xl:text-3xl">
            Cooperation period
          </h3>
          <p className="mt-1 md:mt-1.5 xl:text-lg">Since {sinceDate}</p>
          <h3 className="mt-3.5 text-lg font-semibold md:text-xl xl:mt-6 xl:text-3xl">
            Services used
          </h3>
          <ul className="mt-1.5 mb-3.5 flex flex-wrap gap-2 md:mt-2 md:mb-5 md:gap-3 xl:mt-3 xl:mb-0">
            {services.map((service, index) => (
              <li
                key={index}
                className="bg-secondary-50 inline-block rounded-full px-3 py-1 xl:text-lg"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span
            className={`${expanded || !shouldTruncate ? 'text-black-900 inline md:mt-4 xl:mt-10 xl:text-lg' : 'text-primary-550 line-clamp-2 inline md:mt-4 xl:mt-10 xl:text-lg'}`}
          >
            {expanded || !location || window.innerWidth > 640
              ? description + ' '
              : words.slice(0, 15).join(' ') + '...' + ' '}
          </span>
          {!expanded && shouldTruncate && location && window.innerWidth <= 640 && (
            <button
              className="font-sm text-primary-500 underline"
              onClick={() => setExpanded(true)}
            >
              Read more
            </button>
          )}
          {expanded && shouldTruncate && location && window.innerWidth <= 640 && (
            <button
              className="font-sm text-primary-500 underline"
              onClick={() => setExpanded(false)}
            >
              Hide more
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
