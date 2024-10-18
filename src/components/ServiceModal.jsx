import PropTypes from 'prop-types'

import Projects from './Projects'

function ServiceModal({ label, service, description, modalServiceIsOpen }) {
  return (
    <div className="block justify-between px-[5.15vw] pt-[10.25vw] sm:pt-[5vw] md:flex md:pt-[5vw] lg:px-[3.53vw] lg:pt-[2.91vw] 2xl:px-[4.36vw]">
      <div className="mf:w-2/12 w-full lg:w-[18vw] 3xl:w-3/12">
        <h4 className="text-[10.25vw] leading-none md:text-[5vw] lg:text-[3.72vw]">
          {label}
        </h4>
        <p className="mt-[2.57vw] block w-full text-[3.6vw] uppercase md:hidden">
          {service}
        </p>
      </div>
      <div className="mt-[10.25vw] w-full sm:mt-[7.83vw] md:mt-0 md:w-[50vw] lg:w-[52.76vw]">
        <p className="text-[6.15vw] leading-snug sm:text-[5vw] md:text-[1.75vw] lg:text-[1.86vw]">
          {description}
        </p>
        <h5 className="mt-[14.35vw] whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase text-basic before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic sm:mt-[7.83vw] sm:text-[1.58vw] sm:before:mr-[0.66vw] sm:before:h-[1.19vw] sm:before:w-[1.19vw] md:mt-[2.91vw] md:text-[1.06vw] md:before:mr-[0.45vw] md:before:h-[0.8vw] md:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
          Related Projects
        </h5>
        <Projects
          location={'services'}
          category={label}
          modalServiceIsOpen={modalServiceIsOpen}
        />
      </div>
    </div>
  )
}

ServiceModal.propTypes = {
  label: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  service: PropTypes.string.isRequired,
  modalServiceIsOpen: PropTypes.bool,
}

export default ServiceModal
