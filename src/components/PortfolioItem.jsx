import GCButton from './GCButton'

function PortfolioItem({ icon, projectName, sinceDate, services, description }) {
  return (
    <div className="rounded-3xl bg-primary-100 p-4 sm:p-6 xl:p-8">
      <div className="flex items-center gap-2 sm:gap-4 xl:gap-9">
        <img src={icon} alt="logo" className="w-16 sm:w-24 xl:w-80" />
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
                className="inline-block rounded-full bg-primary-400 px-3 py-1 text-xl"
              >
                {service}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <h3 className="mt-4 text-lg font-semibold sm:text-xl xl:hidden">
        Cooperation period
      </h3>
      <p className="mt-1 text-sm sm:mt-1.5 sm:text-lg xl:hidden">Since {sinceDate}</p>
      <h3 className="mt-4 text-lg font-semibold sm:text-xl xl:hidden">Services used</h3>
      <ul className="mb-3 mt-1.5 flex flex-wrap gap-2 sm:mt-2 sm:gap-3 xl:hidden">
        {services.map((service, index) => (
          <li
            key={index}
            className="inline-block rounded-full bg-primary-400 px-3 py-1 text-sm sm:text-lg"
          >
            {service}
          </li>
        ))}
      </ul>
      <div className="sm:hidden">
        <GCButton type="read-more">Read more</GCButton>
      </div>
      <p className="hidden sm:mt-4 sm:block xl:mt-10 xl:text-2xl">{description}</p>
    </div>
  )
}

export default PortfolioItem
