import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'
import { useDispatch, useSelector } from 'react-redux'

import projects from '../../data/projects.json'
import { selectProject } from '../redux/actions'
import { selectProjectSelector } from '../redux/selectors'
import ModalWindow from './ModalWindow'
import Project from './Project'
import ProjectsModal from './ProjectsModal'

function Projects({
  location,
  filteredItems,
  category,
  modalServiceIsOpen,
  setShowProjectsModal,
}) {
  const dispatch = useDispatch()

  const selectedProject = useSelector(selectProjectSelector)

  const [color, setColor] = useState({})

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [filteredProjects, setFilteredProjects] = useState(projects)

  const [label, setLabel] = useState('')

  useEffect(() => {
    setColor(location === 'gallery' ? { color: 'white' } : {})
  }, [location])

  const handleClick = useCallback((project) => {
    dispatch(selectProject(project))
    {
      location !== 'gallery' && setShowProjectsModal(true)
    }
    setLabel(project.label)
    setModalIsOpen(true)
  }, [])

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  useEffect(() => {
    setFilteredProjects(
      filteredProjects.filter((project) => project.categories.includes(category))
    )
  }, [])

  useEffect(() => {
    if (modalServiceIsOpen && window.innerWidth > 1024) {
      const projectsSliderServices = document.querySelector('.projectsSliderServices')
      const projectsCarouselServices = document.querySelector('.projectsCarouselServices')

      let coordX = 0

      projectsSliderServices.addEventListener('mousemove', handleMouseMove)
      projectsSliderServices.addEventListener('mouseout', handleMouseOut)

      const percent = () => {
        if (window.innerWidth <= 1133) {
          return 75
        } else if (window.innerWidth <= 1922) {
          return 60
        } else if (window.innerWidth > 1922) {
          return 40
        }
      }

      function handleMouseMove(e) {
        coordX = e.pageX - projectsSliderServices.offsetWidth
        const xServices = (coordX / projectsSliderServices.offsetWidth) * percent()

        projectsCarouselServices.style.cssText = `
          transform: translateX(${-xServices}%);
          transition-duration: 150ms;
          `
      }

      function handleMouseOut() {
        projectsCarouselServices.style.cssText =
          'transform: translateX(0); transition-duration: 150ms;'
      }

      return () => {
        projectsSliderServices.removeEventListener('mousemove', handleMouseMove)
        projectsSliderServices.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [modalServiceIsOpen])

  useEffect(() => {
    if (window.innerWidth > 1133) {
      const projectsSliderGallery = document.querySelector('.projectsSliderGallery')
      const projectsCarouselGallery = document.querySelector('.projectsCarouselGallery')

      let coordX = 0

      projectsSliderGallery.addEventListener('mousemove', handleMouseMove)
      projectsSliderGallery.addEventListener('mouseout', handleMouseOut)

      function handleMouseMove(e) {
        coordX = e.pageX - projectsSliderGallery.offsetWidth
        const xGallery = (coordX / projectsSliderGallery.offsetWidth) * 20

        projectsCarouselGallery.style.cssText = `
          transform: translateX(${-xGallery}%);
          transition-duration: 150ms;
          `
      }

      function handleMouseOut() {
        projectsCarouselGallery.style.cssText =
          'transform: translateX(0); transition-duration: 150ms;'
      }

      return () => {
        projectsSliderGallery.removeEventListener('mousemove', handleMouseMove)
        projectsSliderGallery.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [])

  return (
    <>
      {location === 'services' &&
        filteredProjects !== undefined &&
        filteredProjects.length > 0 && (
          <div className="projectsSliderServices z-10 mt-[39.2vw] w-full self-end md:mt-[5.03vw] 1024:md:relative 1024:h-[40vw] 1024:w-full 1024:overflow-hidden 1024:duration-500 1024:hover:-translate-x-[3.5vw] 1024:hover:scale-125 1024:hover:duration-500 lg:mt-[1.57vw] lg:h-[28vw] lg:hover:-translate-x-[5vw] 2xl:h-[21vw]">
            <div className="projectsCarouselServices flex flex-col gap-y-10 1024:absolute 1024:flex-row 1024:gap-x-2.5">
              {filteredProjects.map((project, index) => (
                <Project
                  key={index}
                  location={location}
                  project={project}
                  handleClick={handleClick}
                  color={color}
                />
              ))}
            </div>
          </div>
        )}
      {location === 'services' &&
        filteredProjects !== undefined &&
        filteredProjects.length === 0 && (
          <div className="flex w-full justify-center pt-[20vw] md:pt-[10vw]">
            <p className="text-center text-[4.1vw] text-basic md:text-[1.24vw] lg:text-[1.15vw] 2xl:text-[0.82vw]">
              No projects here at the moment, but we&apos;re always ready to discuss your
              ideas in this field!
            </p>
          </div>
        )}
      {location === 'gallery' && filteredItems.length > 0 && (
        <div className="projectsSliderGallery animation-timeline z-10 mt-[39.2vw] w-full animate-appear self-end md:mt-[5.03vw] lg:relative lg:mt-[1.57vw] lg:h-[28vw] lg:duration-500 lg:hover:-translate-x-[5vw] lg:hover:scale-125 lg:hover:duration-500 2xl:h-[21vw]">
          <div className="projectsCarouselGallery flex flex-col gap-y-10 md:flex-row md:flex-wrap md:gap-x-2.5 lg:absolute lg:flex-nowrap lg:overflow-hidden">
            {filteredItems.map((project, index) => (
              <Project
                key={index}
                project={project}
                handleClick={handleClick}
                color={color}
              />
            ))}
          </div>
        </div>
      )}
      {location === 'gallery' && filteredItems.length === 0 && (
        <div className="flex w-full items-center justify-center md:min-h-[89.022vw] lg:min-h-[29.8vw] 2xl:min-h-[22vw]">
          <p className="text-[1.95vw] text-white lg:text-[1.15vw] 2xl:text-[0.82vw]">
            No projects here at the moment, but we&apos;re always ready to discuss your
            ideas in this field!
          </p>
        </div>
      )}
      {selectedProject && (
        <ModalWindow
          onCloseModal={handleCloseModal}
          modalIsOpen={modalIsOpen}
          label={label}
          preventScroll={true}
        >
          <ProjectsModal />
        </ModalWindow>
      )}
    </>
  )
}

Projects.propTypes = {
  location: PropTypes.string.isRequired,
  filteredItems: PropTypes.array,
  category: PropTypes.string,
  modalServiceIsOpen: PropTypes.bool,
  setShowProjectsModal: PropTypes.func,
}

export default Projects
