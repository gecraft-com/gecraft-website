import PropTypes from 'prop-types'

function Project({ project, handleClick, color }) {
  return (
    <li className="w-max-[54.5rem] w-full md:w-[49.2%] lg:w-[32.6%] 3xl:w-[54.5rem]">
      <button className="border-0" onClick={() => handleClick(project)}>
        <img src={project.img} alt={project.client} className="w-full rounded-md" />
        <div className="mt-4 block sm:mt-5 sm:flex sm:gap-x-10 2xl:gap-x-5">
          <div className="w-5/12 2xl:w-2/6">
            <p className="text-left text-xs uppercase" style={color}>
              client
            </p>
            <p
              className="mt-1 whitespace-nowrap text-left text-base uppercase sm:mt-4"
              style={color}
            >
              {project.client}
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
              {project.service}
            </p>
          </div>
        </div>
      </button>
    </li>
  )
}

Project.propTypes = {
  project: PropTypes.objectOf(PropTypes.string).isRequired,
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
}

export default Project
