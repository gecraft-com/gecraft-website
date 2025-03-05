import { useState } from 'react'

function PortfolioItem({
  icon,
  projectName,
  sinceDate,
  link,
  services,
  description,
  location = '',
}) {
  const [expanded, setExpanded] = useState(false)
  const words = description.split(' ')
  const shouldTruncate = words.length > 30

  return (
    <div className="item rounded-3xl bg-primary-100 p-4 sm:p-6 xl:rounded-[3.5rem] xl:p-8">
      <img
        src={icon}
        alt="logo"
        className="w-full rounded-xl object-cover xl:rounded-xl"
      />
      <a href={link} target="_blank">
        <h2 className="mt-2 font-readexPro text-2xl font-semibold text-primary-800 underline duration-100 hover:text-primary-700 sm:mt-4 sm:text-4xl xl:mb-3 xl:mt-9">
          {projectName}
        </h2>
      </a>
      <div className="flex flex-col xl:flex-col-reverse">
        <div>
          <h3 className="mt-4 font-readexPro text-lg font-semibold sm:text-xl xl:text-3xl">
            Cooperation period
          </h3>
          <p className="mt-1 sm:mt-1.5 xl:text-lg">Since {sinceDate}</p>
          <h3 className="mt-4 font-readexPro text-lg font-semibold sm:text-xl xl:mt-6 xl:text-3xl">
            Services used
          </h3>
          <ul className="mb-3.5 mt-1.5 flex flex-wrap gap-2 sm:mb-5 sm:mt-2 sm:gap-3 xl:mb-0 xl:mt-3">
            {services.map((service, index) => (
              <li
                key={index}
                className="inline-block rounded-full bg-primary-900 px-3 py-1 xl:text-lg"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <span
            className={`${expanded || !shouldTruncate ? 'inline text-primary-550 sm:mt-4 xl:mt-10 xl:text-lg' : 'line-clamp-2 inline text-primary-550 sm:mt-4 xl:mt-10 xl:text-lg'}`}
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

export default PortfolioItem
