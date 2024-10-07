import PropTypes from 'prop-types'

function ServiceModal({ label, description, projects, service }) {
  return (
    <div className="block justify-between px-5 pt-10 md:flex md:px-5 md:pt-24 lg:px-36">
      <div className="w-full md:w-2/12 3xl:w-3/12">
        <h4 className="text-4xl md:text-3xl 2xl:text-5xl 3xl:text-7xl 4xl:text-9xl">
          {label}
        </h4>
        <p className="mt-2.5 block w-full text-sm uppercase md:hidden">{service}</p>
      </div>
      <div className="mt-10 w-full md:mt-0 md:w-8/12">
        <p className="text-2xl md:text-4xl md:leading-snug 3xl:text-6xl">{description}</p>
        <h5 className="mt-14 text-left text-xs font-extrabold uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic md:mt-24">
          Related Projects
        </h5>
        <ul className="mt-4 flex flex-col gap-y-10 md:mt-12 md:justify-items-start md:gap-x-2.5 lg:flex-row lg:gap-y-0">
          {projects.map(({ id, client, img }) => (
            <li key={id} className="w-full lg:w-8/12">
              <button>
                <img src={img} alt={client} />
                <div className="mt-4 block md:mt-5 md:flex md:gap-x-10 2xl:gap-x-5">
                  <div className="w-5/12 2xl:w-2/6">
                    <p className="text-left text-xs uppercase">client</p>
                    <p className="mt-1 whitespace-nowrap text-left text-base uppercase md:mt-4">
                      {client}
                    </p>
                  </div>
                  <div>
                    <p className="mt-3 text-left text-xs uppercase md:mt-0">service</p>
                    <p className="mt-1 text-left text-sm uppercase md:mt-4 md:text-base">
                      {service}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

ServiceModal.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      client: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
    })
  ).isRequired,
  service: PropTypes.string.isRequired,
}

export default ServiceModal
