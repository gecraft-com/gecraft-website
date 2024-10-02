import { useCallback, useEffect, useState } from 'react'

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
      <ul className="mt-4 flex flex-col gap-y-10 sm:mt-12 sm:flex-row sm:gap-x-2.5 sm:gap-y-0">
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

export default Projects
