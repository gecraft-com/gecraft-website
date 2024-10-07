import { useCallback, useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import projects from '../../data/projects.json'
import ModalWindow from './ModalWindow'
import Project from './Project'

function Projects({ location }) {
  const [color, setColor] = useState({})

  const [modalIsOpen, setModalIsOpen] = useState(false)

  const [selectedProject, setSelectedProject] = useState(null)

  useEffect(() => {
    setColor(location === 'gallery' ? { color: 'white' } : {})
  }, [location])

  useEffect(() => {
    if (modalIsOpen) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [modalIsOpen])

  const handleClick = useCallback((project) => {
    setSelectedProject(project)
    setModalIsOpen(true)
  }, [])

  const handleCloseModal = () => {
    setModalIsOpen(false)
  }

  return (
    <>
      <ul className="mt-40 flex w-full flex-col gap-y-10 md:mt-14 md:flex-row md:flex-wrap md:gap-x-2.5 md:gap-y-10 lg:mt-12">
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            handleClick={handleClick}
            color={color}
          />
        ))}
      </ul>
      {selectedProject && (
        <ModalWindow
          {...selectedProject}
          onCloseModal={handleCloseModal}
          modalIsOpen={modalIsOpen}
        >
          <h3>Hello</h3>
        </ModalWindow>
      )}
    </>
  )
}

Projects.propTypes = {
  location: PropTypes.string.isRequired,
}

export default Projects
