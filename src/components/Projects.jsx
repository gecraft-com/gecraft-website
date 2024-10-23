import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import projects from '../../data/projects.json'
import ModalWindow from './ModalWindow'
import Project from './Project'
import ProjectsModal from './ProjectsModal'

function Projects({ location, filteredItems, category, modalServiceIsOpen }) {
  const [color, setColor] = useState({})

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [filteredProjects, setFilteredProjects] = useState(projects)

  const [selectedProject, setSelectedProject] = useState(null)
  const [label, setLabel] = useState('')

  useEffect(() => {
    setColor(location === 'gallery' ? { color: 'white' } : {})
  }, [location])

  const handleClick = useCallback((project) => {
    setSelectedProject(project)
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
      const projectsSlider = document.querySelector('.projectsSlider')
      const projectsCarousel = document.querySelector('.projectsCarousel')

      let coordX = 0

      projectsSlider.addEventListener('mousemove', handleMouseMove)
      projectsSlider.addEventListener('mouseout', handleMouseOut)

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
        coordX = e.pageX - projectsSlider.offsetWidth
        const x = (coordX / projectsSlider.offsetWidth) * percent()

        projectsCarousel.style.cssText = `
          transform: translateX(${-x}%);
          transition-duration: 150ms;
          `
      }

      function handleMouseOut() {
        projectsCarousel.style.cssText =
          'transform: translateX(0); transition-duration: 150ms;'
      }

      return () => {
        projectsSlider.removeEventListener('mousemove', handleMouseMove)
        projectsSlider.removeEventListener('mouseout', handleMouseOut)
      }
    }
  }, [modalServiceIsOpen])

  return (
    <>
      {location === 'services' &&
        filteredProjects !== undefined &&
        filteredProjects.length > 0 && (
          <div className="projectsSlider 1024:duration-500 1024:hover:-translate-x-[3.5vw] 1024:hover:scale-125 1024:hover:duration-500 1024:md:relative 1024:overflow-hidden 1024:h-[40vw] 1024:w-full z-10 mt-[39.2vw] w-full self-end md:mt-[5.03vw] lg:mt-[1.57vw] lg:h-[28vw] lg:hover:-translate-x-[5vw] 2xl:h-[21vw]">
            <div className="projectsCarousel 1024:absolute 1024:flex-row 1024:gap-x-2.5 flex flex-col gap-y-10">
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
        <div className="mt-[39.2vw] flex w-full flex-col gap-y-10 md:mt-[5.03vw] md:min-h-[89.022vw] md:flex-row md:flex-wrap md:gap-x-2.5 md:gap-y-10 lg:mt-[1.57vw] lg:min-h-[28.2vw] 2xl:min-h-[20.4vw]">
          {filteredItems.map((project, index) => (
            <Project
              key={index}
              project={project}
              handleClick={handleClick}
              color={color}
            />
          ))}
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
          <ProjectsModal {...selectedProject} />
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
}

export default Projects
