import PropTypes from 'prop-types'

function Service({ client, img, service }) {
  return (
    <li className="w-full lg:w-8/12">
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
  )
}

Service.propTypes = {
  client: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
}

export default Service
