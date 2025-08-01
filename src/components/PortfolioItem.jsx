import { useState } from 'react'

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
    <div className="item bg-primary-100 rounded-3xl p-4 sm:p-6 xl:rounded-[3.5rem] xl:p-8">
      <img
        src={icon}
        alt="logo"
        className="w-full rounded-xl object-cover xl:rounded-xl"
      />
      <a href={link} target="_blank">
        <h2 className="font-readexPro text-primary-800 hover:text-primary-700 mt-2 text-2xl font-semibold underline duration-100 sm:mt-4 sm:text-4xl xl:mt-9 xl:mb-3">
          {projectName}
        </h2>
      </a>
      <div className="flex flex-col xl:flex-col-reverse">
        <div>
          <h3 className="font-readexPro mt-4 text-lg font-semibold sm:text-xl xl:text-3xl">
            Cooperation period
          </h3>
          <p className="mt-1 sm:mt-1.5 xl:text-lg">Since {sinceDate}</p>
          <h3 className="font-readexPro mt-4 text-lg font-semibold sm:text-xl xl:mt-6 xl:text-3xl">
            Services used
          </h3>
          <ul className="mt-1.5 mb-3.5 flex flex-wrap gap-2 sm:mt-2 sm:mb-5 sm:gap-3 xl:mt-3 xl:mb-0">
            {services.map((service, index) => (
              <li
                key={index}
                className="bg-primary-900 inline-block rounded-full px-3 py-1 xl:text-lg"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span
            className={`${expanded || !shouldTruncate ? 'text-primary-550 inline sm:mt-4 xl:mt-10 xl:text-lg' : 'text-primary-550 line-clamp-2 inline sm:mt-4 xl:mt-10 xl:text-lg'}`}
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
