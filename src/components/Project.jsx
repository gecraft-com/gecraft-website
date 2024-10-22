import PropTypes from 'prop-types'

function Project({ project, handleClick, color }) {
  return (
    <div className="w-full md:w-[43.43vw] lg:w-[29.8vw] 2xl:w-[25vw]">
      <button className="border-0" onClick={() => handleClick(project)}>
        <img src={project.img} alt={project.client} className="w-full rounded-md" />
        <div className="mt-[5.14vw] block md:mt-5 md:flex md:gap-x-10 lg:w-[30vw] 2xl:w-[22.95vw] 2xl:gap-x-5">
          <div className="w-5/12 2xl:w-2/6">
            <p
              className="text-left text-[3.08vw] uppercase md:text-[1.07vw] lg:text-[0.63vw] 2xl:text-[0.35vw]"
              style={color}
            >
              client
            </p>
            <p
              className="mt-[2vw] whitespace-nowrap text-left text-[4.1vw] uppercase sm:mt-[1.33vw] md:text-[1.25vw] lg:mt-[0.79vw] lg:text-[0.84vw] 2xl:mt-[0.44vw] 2xl:text-[0.47vw]"
              style={color}
            >
              {project.client}
            </p>
          </div>
          <div>
            <p
              className="mt-[4vw] text-left text-[3.08vw] uppercase md:mt-0 md:text-[1.07vw] lg:text-[0.63vw] 2xl:text-[0.35vw]"
              style={color}
            >
              service
            </p>
            <p
              className="mt-[2vw] text-left text-[3.6vw] uppercase sm:mt-[1.33vw] md:text-[1.25vw] lg:mt-[0.79vw] lg:text-[0.84vw] 2xl:mt-[0.44vw] 2xl:text-[0.47vw]"
              style={color}
            >
              {project.service}
            </p>
          </div>
        </div>
      </button>
    </div>
  )
}

Project.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.string.isRequired,
    client: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    service: PropTypes.string.isRequired,
    description1: PropTypes.string.isRequired,
    description2: PropTypes.string,
    title1: PropTypes.string.isRequired,
    title2: PropTypes.string.isRequired,
    title3: PropTypes.string.isRequired,
    screenshots: PropTypes.objectOf(PropTypes.string.isRequired),
  }),
  handleClick: PropTypes.func.isRequired,
  color: PropTypes.object.isRequired,
}

export default Project
