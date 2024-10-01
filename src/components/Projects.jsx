import { useEffect, useState } from 'react'

import projects from '../../data/projects.json'

const Projects = ({ location }) => {
  const [color, setColor] = useState({})

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
    <ul className="mt-4 flex flex-col gap-y-10 sm:mt-12 sm:flex-row sm:gap-x-2.5 sm:gap-y-0">
      {projects.map(({ id, client, img, service }) => (
        <li key={id} className="w-full sm:w-[872px]">
          <button className="border-0">
            <img src={img} alt={client} className="h-[600px] w-full rounded-md" />
            <div className="mt-4 block sm:mt-5 sm:flex sm:gap-x-10 2xl:gap-x-5">
              <div className="w-5/12 2xl:w-2/6">
                <p className="text-left text-xs uppercase" style={color}>
                  client
                </p>
                <p className="mt-1 text-left text-base uppercase sm:mt-4" style={color}>
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
      ))}
    </ul>
  )
}

export default Projects
