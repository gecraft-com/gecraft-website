import GCButton from './GCButton'

function PortfolioItem({ icon, projectName, sinceDate, services }) {
  return (
    <div className="rounded-3xl bg-primary-100 p-4">
      <div className="flex items-center gap-2">
        <img src={icon} alt="logo" />
        <h2 className="text-2xl font-semibold">{projectName}</h2>
      </div>
      <h3 className="mt-4 text-lg font-semibold">Cooperation period</h3>
      <p className="mt-1">Since {sinceDate}</p>
      <h3 className="mt-4 text-lg font-semibold">Services used</h3>
      <ul className="mb-3.5 mt-1.5">
        {services.map((service, index) => (
          <li
            key={index}
            className="mb-2 inline-block rounded-full bg-primary-400 px-3 py-1 last:mb-0"
          >
            {service}
          </li>
        ))}
      </ul>
      <GCButton type="read-more">Read more</GCButton>
    </div>
  )
}

export default PortfolioItem
