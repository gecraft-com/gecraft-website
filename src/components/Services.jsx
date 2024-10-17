import { useCallback, useState } from 'react'

import services from '../../data/services.json'
import ModalWindow from './ModalWindow'
import ServiceModal from './ServiceModal'

function Services() {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [selectedService, setSelectedService] = useState(null)
  const [label, setLabel] = useState('')

  const handleClick = useCallback((service) => {
    setSelectedService(service)
    setLabel(service.label)
    setModalIsOpen(true)
  }, [])

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div
      id="services"
      className="block justify-between px-[2.1vw] pb-[20.5vw] pt-[51vw] md:flex md:pb-[2.8vw] md:pl-[5.92vw] md:pr-[4.5vw] md:pt-[4.1vw] lg:pb-[5.5vw] lg:pl-[3.13vw] lg:pr-[2vw] lg:pt-[6.35vw] 2xl:pb-[4.5vw] 2xl:pl-[3.23vw] 2xl:pt-[4.99vw]"
    >
      <div className="flex w-1/4 flex-col items-start md:mt-[2.5vw]">
        <div className="inline-block flex-col md:sticky md:top-16">
          <h3 className="ml-[2.84vw] whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-basic md:ml-0 md:text-[1.06vw] md:before:mr-[0.45vw] md:before:h-[0.8vw] md:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
            Our services
          </h3>
          <h4 className="ml-[2.84vw] mt-[10vw] w-[90vw] text-left text-[9vw] leading-tight md:ml-0 md:mt-[2.74vw] md:w-[32vw] md:text-[3.185vw] lg:mt-[1.67vw] lg:w-[23vw] lg:text-[2.1vw] 2xl:mt-[1.3vw] 2xl:w-[14vw] 2xl:text-[1.4vw]">
            Skills to enhance your performance
          </h4>
        </div>
      </div>

      <div className="mt-[14.1vw] hover:text-ourServicesBtn hover:duration-300 md:mt-0">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => handleClick(service)}
            className="relative z-0 mb-[1vw] table whitespace-nowrap px-[2.84vw] py-[1.3vw] text-center text-[8.45vw] after:absolute after:left-0 after:top-0 after:-z-10 after:box-content after:h-full after:w-full after:rounded-full after:bg-buttonHover after:opacity-0 after:duration-300 last:mb-0 hover:text-basic hover:duration-300 hover:after:opacity-100 md:mb-0 md:px-[4.33vw] md:py-[1.2vw] md:text-[4.25vw] md:after:pointer-events-none md:after:-translate-x-[70vw] md:after:rotate-12 md:after:scale-[3] md:after:transform md:after:transition md:after:hover:translate-x-0 md:hover:after:rotate-[0] md:hover:after:scale-100 lg:px-[3.55vw] lg:py-[0.4vw] lg:text-[5.52vw] 2xl:px-[4.1vw]"
          >
            {service.label}
          </button>
        ))}
        {modalIsOpen && selectedService && (
          <ModalWindow
            onCloseModal={handleCloseModal}
            modalIsOpen={modalIsOpen}
            label={label}
          >
            <ServiceModal {...selectedService} />
          </ModalWindow>
        )}
      </div>
    </div>
  )
}

export default Services
