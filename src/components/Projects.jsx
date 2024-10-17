import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import projects from '../../data/projects.json'
import ModalWindow from './ModalWindow'
import Project from './Project'
import ProjectsModal from './ProjectsModal'

function Projects({ location, filteredItems, category }) {
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

  return (
    <>
      {location === 'gallery' && (
        <ul className="mt-[39.2vw] flex w-full flex-col gap-y-10 md:mt-[5.03vw] md:flex-row md:flex-wrap md:gap-x-2.5 md:gap-y-10 lg:mt-[1.57vw]">
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
      {location === 'services' && (
        <ul className="mt-[39.2vw] flex w-full flex-col gap-y-10 md:mt-[5.03vw] md:flex-wrap md:gap-x-2.5 md:gap-y-10 lg:mt-[1.57vw]">
          {filteredProjects.map((project, index) => (
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
