import { useEffect, useState } from 'react'

import projects from '../../data/projects.json'
import ModalWindow from './ModalWindow'
import ProjectsModal from './ProjectsModal'

const Projects = ({ location }) => {
  const [color, setColor] = useState({})

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [label, setLabel] = useState('')
  const [client, setClient] = useState('')
  const [service, setService] = useState('')
  const [img, setImg] = useState('')
  const [description, setDescription] = useState('')
  const [description2, setDescription2] = useState('')
  const [title1, setTitle1] = useState('')
  const [title2, setTitle2] = useState('')
  const [title3, setTitle3] = useState('')
  const [descktop, setDescktop] = useState('')
  const [iPhone1, setIPhone1] = useState('')
  const [iPhone2, setIPhone2] = useState('')
  const [pages, setPages] = useState('')
  const [logo, setLogo] = useState('')
  const [advantage, setAdvantage] = useState('')

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [modalIsOpen])

  const handleOpenModal = (
    label,
    client,
    service,
    img,
    description,
    description2,
    title1,
    title2,
    descktop,
    iPhone1,
    iPhone2,
    title3,
    pages,
    logo,
    advantage
  ) => {
    setLabel(label)
    setModalIsOpen(true)
    setClient(client)
    setService(service)
    setImg(img)
    setDescription(description)
    setDescription2(description2)
    setTitle1(title1)
    setTitle2(title2)
    setTitle3(title3)
    setDescktop(descktop)
    setIPhone1(iPhone1)
    setIPhone2(iPhone2)
    setPages(pages)
    setLogo(logo)
    setAdvantage(advantage)
  }

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  useEffect(() => {
    switch (location) {
      case 'gallery':
        setColor({ color: 'white' })
        break

      default:
        break
    }
  }, [location])

  return (
    <>
      <ul className="mt-4 flex flex-col gap-y-10 sm:mt-12 sm:flex-row sm:gap-x-2.5 sm:gap-y-0">
        {projects.map(
          ({
            id,
            label,
            client,
            img,
            service,
            description,
            description2,
            title1,
            title2,
            title3,
            screenshots: { descktop, iPhone1, iPhone2, pages, logo, advantage },
          }) => (
            <li key={id} className="w-full sm:w-[872px]">
              <button
                className="border-0"
                onClick={() =>
                  handleOpenModal(
                    label,
                    client,
                    service,
                    img,
                    description,
                    description2,
                    title1,
                    title2,
                    descktop,
                    iPhone1,
                    iPhone2,
                    title3,
                    pages,
                    logo,
                    advantage
                  )
                }
              >
                <img src={img} alt={client} className="h-[600px] w-full rounded-md" />
                <div className="mt-4 block sm:mt-5 sm:flex sm:gap-x-10 2xl:gap-x-5">
                  <div className="w-5/12 2xl:w-2/6">
                    <p className="text-left text-xs uppercase" style={color}>
                      client
                    </p>
                    <p
                      className="mt-1 text-left text-base uppercase sm:mt-4"
                      style={color}
                    >
                      {client}
                    </p>
                  </div>
                  <div>
                    <p className="mt-3 text-left text-xs uppercase sm:mt-0" style={color}>
                      service
                    </p>
                    <p
                      className="mt-1 text-left text-sm uppercase sm:mt-4 sm:text-base"
                      style={color}
                    >
                      {service}
                    </p>
                  </div>
                </div>
              </button>
            </li>
          )
        )}
      </ul>
      <ModalWindow
        label={label}
        onCloseModal={handleCloseModal}
        modalIsOpen={modalIsOpen}
      >
        <ProjectsModal
          client={client}
          service={service}
          img={img}
          description={description}
          description2={description2}
          title1={title1}
          title2={title2}
          descktop={descktop}
          iPhone1={iPhone1}
          iPhone2={iPhone2}
          pages={pages}
          logo={logo}
          title3={title3}
          advantage={advantage}
        />
      </ModalWindow>
    </>
  )
}

export default Projects
