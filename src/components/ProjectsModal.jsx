import PropTypes from 'prop-types'

function ProjectsModal({
  client,
  service,
  img,
  description1,
  description2,
  title1,
  title2,
  title3,
  screenshots,
}) {
  const { iPhone, desktop, pages, logo, advantage } = screenshots
  return (
    <div className="px-[5.14vw] pt-[10.3vw] sm:px-[2.61vw] sm:pt-[5.22vw] lg:pt-[3vw] 2xl:pt-[2.91vw]">
      <div className="block pb-0 sm:flex sm:justify-between sm:gap-x-[3vw] sm:pb-[5.22vw] lg:pb-[3vw] 2xl:pb-[2.91vw]">
        <div className="w-full sm:w-7/12 2xl:w-[25.35vw]">
          <h2 className="whitespace-nowrap text-[10.3vw] sm:text-[5.22vw] 2xl:text-[3.72vw]">
            {client}
          </h2>
          <p className="mt-[2.6vw] text-[3.6vw] uppercase sm:mt-[1.31vw] sm:text-[1.83vw] md:text-[1.56vw] lg:text-[1.15vw] 2xl:mt-[0.59vw] 2xl:text-[0.93vw]">
            {service}
          </p>
          <img
            className="hidden w-[54.5rem] sm:mt-[3vw] sm:block 2xl:mt-[1.46vw]"
            src={img}
            alt={client}
          />
        </div>
        <div className="mt-[10.3vw] flex w-full flex-col justify-between sm:mt-0 2xl:w-[53.55vw]">
          <div>
            <p className="text-[6.16vw] sm:text-[3.13vw] md:text-[2.08vw] lg:text-[1.42vw] 2xl:text-[1.4vw]">
              {description1}
            </p>
            <p className="mt-[10.3vw] text-[6.16vw] sm:mt-[3vw] sm:text-[3.13vw] md:mt-[2vw] md:text-[2.08vw] lg:text-[1.42vw] 2xl:mt-[1.5vw] 2xl:text-[1.4vw]">
              {description2}
            </p>
          </div>
          <a
            href="#"
            className="mt-[10.3vw] text-[5.14vw] underline sm:mt-[3vw] sm:text-[2.61vw] md:mt-[2vw] md:text-[1.83vw] lg:mt-0 lg:text-[1.24vw] 2xl:text-[0.93vw]"
          >
            See the website
          </a>
          <img className="mt-[10.3vw] w-full sm:hidden" src={img} alt={client} />
        </div>
      </div>
      <div className="sm:grid sm:grid-cols-2 sm:gap-[0.5vw] 2xl:gap-[0.3vw]">
        <div className="col-start-1 col-end-3 mt-[2.6vw] flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] px-[2.06vw] pb-[4.11vw] pt-[6.16vw] sm:mt-0 lg:pt-[4vw] 2xl:pb-[2.62vw] 2xl:pt-[4.27vw]">
          <h3 className="text-[2.06vw] font-extrabold uppercase sm:text-[1.6vw] lg:text-[1.06vw] 2xl:text-[1.05vw]">
            {title1}
          </h3>
          <img src={desktop} alt="MacBook" />
        </div>
        <div className="mt-[2.6vw] flex h-[69.8vw] flex-col items-center justify-between rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-[6.16vw] sm:mt-0 sm:h-[32.42vw] sm:pt-[2vw] 2xl:pt-[2.24vw]">
          <h3 className="text-[2.06vw] font-extrabold uppercase sm:text-[1.6vw] lg:text-[1.06vw] 2xl:text-[1.05vw]">
            Mobile version
          </h3>
          <img src={iPhone} alt={iPhone} className="h-[55vw] sm:h-[26vw]" />
        </div>
        <div className="relative mt-[2.6vw] flex h-[69.8vw] flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] sm:mt-0 sm:h-[32.42vw]">
          <h3 className="z-10 mt-[6.16vw] text-[2.06vw] font-extrabold uppercase sm:mt-[2vw] sm:text-[1.6vw] lg:text-[1.06vw] 2xl:mt-[2.24vw] 2xl:text-[1.05vw]">
            {title2}
          </h3>
          <img src={pages} alt="pages" className="absolute h-full w-full rounded-md" />
        </div>
        <div className="relative mt-[2.6vw] flex h-[69.8vw] flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-[6.16vw] sm:mt-0 sm:h-[32.42vw] sm:pt-[2vw] 2xl:pt-[2.24vw]">
          <h3 className="z-10 text-[2.06vw] font-extrabold uppercase sm:text-[1.6vw] lg:text-[1.06vw] 2xl:text-[1.05vw]">
            Recognizable corporate identity
          </h3>
          <img
            src={logo}
            alt="logo"
            className="absolute left-1/2 top-1/2 w-11/12 -translate-x-1/2 -translate-y-1/2"
          />
        </div>
        <div className="mt-[2.6vw] flex h-[69.8vw] flex-col items-center justify-between rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-[6.16vw] sm:mt-0 sm:h-[32.42vw] sm:pt-[2vw] 2xl:pt-[2.24vw]">
          <h3 className="z-10 text-[2.06vw] font-extrabold uppercase sm:text-[1.6vw] lg:text-[1.06vw] 2xl:text-[1.05vw]">
            {title3}
          </h3>
          <img src={advantage} alt="advantage" className="w-11/12 sm:w-[40vw]" />
        </div>
      </div>
    </div>
  )
}

ProjectsModal.propTypes = {
  client: PropTypes.string.isRequired,
  service: PropTypes.string,
  img: PropTypes.string,
  description1: PropTypes.string,
  description2: PropTypes.string,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  screenshots: PropTypes.objectOf(PropTypes.string.isRequired),
}

export default ProjectsModal
