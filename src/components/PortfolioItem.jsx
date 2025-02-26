import { useState } from 'react'

function PortfolioItem({
  icon,
  projectName,
  sinceDate,
  services,
  description,
  location = '',
}) {
  const [expanded, setExpanded] = useState(false)
  const words = description.split(' ')
  const shouldTruncate = words.length > 30

  return (
    <div className="rounded-3xl bg-primary-100 p-4 sm:p-6 xl:p-8">
      <div className="flex items-center gap-2 sm:gap-4 xl:gap-9">
        <img
          src={icon}
          alt="logo"
          loading="lazy"
          className="h-16 w-16 sm:h-24 sm:w-24 xl:h-80 xl:w-80"
        />
        <div>
          <h2 className="hidden text-5xl font-semibold xl:block">{projectName}</h2>
          <h3 className="mt-4 hidden text-3xl font-semibold xl:block">
            Cooperation period
          </h3>
          <p className="mt-1.5 hidden text-2xl xl:block">Since {sinceDate}</p>
          <h3 className="mt-4 hidden text-3xl font-semibold xl:block">Services used</h3>
          <ul className="mt-3 hidden flex-wrap gap-3 xl:flex">
            {services.map((service, index) => (
              <li
                key={index}
                className="inline-block rounded-full bg-primary-900 px-3 py-1 text-xl xl:text-2xl"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
        <h2 className="text-xl font-semibold sm:text-5xl xl:hidden">{projectName}</h2>
      </div>
      <h3 className="mt-4 text-lg font-semibold sm:text-xl xl:hidden">
        Cooperation period
      </h3>
      <p className="mt-1 text-sm sm:mt-1.5 sm:text-lg xl:hidden">Since {sinceDate}</p>
      <h3 className="mt-4 text-lg font-semibold sm:text-xl xl:hidden">Services used</h3>
      <ul className="mb-3.5 mt-1.5 flex flex-wrap gap-2 sm:mt-2 sm:gap-3 xl:hidden">
        {services.map((service, index) => (
          <li
            key={index}
            className="inline-block rounded-full bg-primary-900 px-3 py-1 text-sm sm:text-lg"
          >
            {service}
          </li>
        ))}
      </ul>
      <span
        className={`${expanded || !shouldTruncate ? 'inline text-sm sm:mt-4 xl:mt-10 xl:text-2xl' : 'line-clamp-2 inline text-sm sm:mt-4 xl:mt-10 xl:text-2xl'}`}
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
  )
}

export default PortfolioItem
