import PropTypes from 'prop-types'

import services from '../../data/services.json'

function Filter({ handleFilterClick }) {
  return (
    <div className="hidden md:mt-[17.8vw] md:flex md:flex-wrap md:gap-5 lg:mt-[20.14vw] lg:gap-10 2xl:gap-20">
      {services.map(({ label }, index) => (
        <label
          key={index}
          htmlFor={label}
          className="flex select-none items-center whitespace-nowrap text-ourServicesBtn peer-checked:text-white md:text-[1.42vw] lg:text-[1.25vw] 2xl:text-[1.05vw]"
        >
          <input
            key={index}
            onClick={() => handleFilterClick(label)}
            name="services"
            id={label}
            type="checkbox"
            value={label}
            className="peer sr-only"
          />
          <span className="relative mr-[0.9vw] inline-block h-[1.77vw] w-[1.77vw] items-center rounded-full border-[0.28vw] border-ourServicesBtn bg-basic before:absolute before:left-1/2 before:top-1/2 before:hidden before:h-[1.1vw] before:w-[1.1vw] before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white peer-checked:border-white peer-checked:before:block md:mr-[0.52vw] lg:h-[1.1vw] lg:w-[1.1vw] lg:border-[0.2vw] lg:before:h-[0.6vw] lg:before:w-[0.6vw] 2xl:mr-[0.3vw] 2xl:h-[1.17vw] 2xl:w-[1.17vw] 2xl:border-[0.1vw] 2xl:before:h-[0.93vw] 2xl:before:w-[0.93vw]"></span>

          {label}
        </label>
      ))}
    </div>
  )
}

Filter.propTypes = {
  handleFilterClick: PropTypes.func.isRequired,
}

export default Filter
