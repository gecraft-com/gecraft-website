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
    if (modalServiceIsOpen) {
      const projectsSlider = document.querySelector('.projectsSlider')
      const projectsCarousel = document.querySelector('.projectsCarousel')
      const description = document.querySelector('.description')

      let coordX = 0

      projectsSlider.addEventListener('mousemove', handleMouseMove)

      function handleMouseMove(e) {
        coordX = e.pageX - projectsSlider.offsetWidth

        const x = (coordX / projectsSlider.offsetWidth) * 35

        projectsCarousel.style.cssText = `
        transform: translateX(${-x}%);
        transition-duration: 700ms;
        `
      }

      projectsSlider.addEventListener('mouseover', () => {
        description.classList.remove('opacity-0')
        description.classList.add('opacity-100')
      })

      projectsSlider.addEventListener('mouseout', () => {
        projectsCarousel.style.cssText = `
        transform: translateX(0);
        transition-duration: 700ms;
        `
      })

      return () => {
        projectsSlider.removeEventListener('mousemove', handleMouseMove)
        projectsSlider.removeEventListener('mouseout', () => {
          projectsCarousel.style.cssText = `
        transform: translateX(0);
        translate-duration: 700ms;
        `
        })
        projectsSlider.removeEventListener('click', () => {
          description.style.cssText = `
            opacity: 1;
          `
        })
      }
    }
  }, [modalServiceIsOpen])

  return (
    <>
      {location === 'services' && (
        <div className="projectsSlider mt-[39.2vw] w-full duration-700 hover:-translate-x-[3.5vw] hover:scale-125 hover:duration-700 md:relative md:mt-[5.03vw] md:h-[20.04vw] md:w-[52.76vw] md:overflow-hidden lg:mt-[1.57vw]">
          <div className="projectsCarousel flex flex-col gap-y-10 md:absolute md:flex-row md:flex-wrap md:gap-x-2.5 md:gap-y-10 lg:flex-nowrap">
            {filteredProjects.map((project, index) => (
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
      {location === 'gallery' && (
        <ul className="mt-[39.2vw] flex w-full flex-col gap-y-10 md:mt-[5.03vw] md:min-h-[89.022vw] md:flex-row md:flex-wrap md:gap-x-2.5 md:gap-y-10 lg:mt-[1.57vw] lg:min-h-[28.2vw] 2xl:min-h-[20.4vw]">
          {filteredItems.map((project, index) => (
            <Project
              key={index}
              project={project}
              handleClick={handleClick}
              color={color}
            />
          ))}
        </ul>
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
}

export default Projects
