import { useEffect, useState } from 'react'

import services from '../../data/services.json'
import ModalWindow from './ModalWindow'
import ServiceModal from './ServiceModal'

const Services = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [modalIsOpen])

  const handleOpenModal = (label, description, projects, service) => {
    setModalIsOpen(true)
    setLabel(label)
    setDescription(description)
    setProjects(projects)
    setService(service)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  const [label, setLabel] = useState('')
  const [description, setDescription] = useState('')
  const [projects, setProjects] = useState([])
  const [service, setService] = useState('')

  return (
    <div
      id="services"
      className="block justify-between px-2 pb-20 pt-48 sm:flex sm:px-14 sm:pb-32 sm:pt-32"
    >
      <div className="flex w-1/4 flex-col items-start">
        <h3 className="sticky top-10 ml-4 mt-0 w-36 text-left text-xs uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic sm:ml-0 sm:mt-12">
          Our services
        </h3>
        <h4 className="sticky top-28 ml-4 mt-10 w-72 text-left text-3xl sm:ml-0 sm:mt-12 sm:w-[28rem] sm:text-4xl 2xl:text-5xl 3xl:w-[33.6rem] 3xl:text-5xl">
          Skills to enhance your performance
        </h4>
      </div>

      <div className="mt-14 hover:text-ourServicesBtn hover:duration-300 sm:mt-0">
        {services.map(({ label, description, id, projects, service }) => (
          <button
            key={id}
            onClick={() => handleOpenModal(label, description, projects, service)}
            className="relative z-0 table px-4 text-center text-3xl leading-relaxed after:absolute after:left-0 after:top-0 after:z-[-1] after:box-content after:h-full after:w-full after:rounded-full after:bg-buttonHover after:opacity-0 after:duration-300 hover:text-basic hover:duration-300 hover:after:opacity-100 sm:px-4 sm:text-4xl sm:leading-snug sm:after:pointer-events-none sm:after:-translate-x-[710px] sm:after:rotate-12 sm:after:scale-[3] sm:after:transform sm:after:transition sm:after:hover:translate-x-0 sm:hover:after:rotate-[0] sm:hover:after:scale-100 lg:px-7 lg:after:-translate-x-[800px] xl:text-5xl xl:leading-normal xl:after:-translate-x-[710px] 2xl:text-8xl 2xl:leading-snug 2xl:after:-translate-x-[1250px] 3xl:text-[150px] 3xl:after:-translate-x-[2250px] 4xl:text-[190px]"
          >
            {label}
          </button>
        ))}
        {modalIsOpen && (
          <ModalWindow onCloseModal={handleCloseModal} modalIsOpen={modalIsOpen}>
            <ServiceModal
              label={label}
              description={description}
              projects={projects}
              service={service}
            />
          </ModalWindow>
        )}
      </div>
    </div>
  )
}

export default Services
