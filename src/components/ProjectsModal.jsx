import PropTypes from 'prop-types'

function ProjectsModal({
  client,
  service,
  img,
  description,
  description2,
  title1,
  title2,
  title3,
  screenshots,
}) {
  const { iPhone1, iPhone2, desktop, pages, logo, advantage } = screenshots
  return (
    <div className="px-5 pt-10 lg:px-36 1400:pt-24">
      <div className="block pb-0 1076:flex 1076:justify-between 1076:pb-10 1400:pb-24">
        <div className="w-full max-w-[54.5rem] 1076:w-[54.5rem] 2xl:w-2/6">
          <h2 className="whitespace-nowrap text-4xl 1076:text-6xl 1400:text-9xl">
            {client}
          </h2>
          <p className="mt-2.5 text-sm uppercase 1076:mt-5 1400:text-xl 3xl:text-3xl">
            {service}
          </p>
          <img className="mt-12 hidden w-[54.5rem] 1076:block" src={img} alt={client} />
        </div>
        <div className="mt-10 flex w-full flex-col justify-between 1076:mt-0 1076:w-[113.563rem] 1076:pl-10 2xl:w-1/2">
          <div>
            <p className="text-2xl 1400:text-3xl 3xl:text-5xl">{description}</p>
            <p className="mt-10 text-2xl 1400:text-3xl 3xl:text-5xl">{description2}</p>
          </div>
          <a
            href="#"
            className="mt-10 text-xl underline 1400:text-2xl 1500:mt-0 3xl:text-3xl"
          >
            See the website
          </a>
          <img className="mt-10 w-full 1076:hidden" src={img} alt={client} />
        </div>
      </div>
      <div className="1076:grid 1076:grid-cols-2 1076:gap-2.5">
        <div className="col-start-1 col-end-3 mt-2.5 flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] px-2 pb-4 pt-6 1076:mt-0 1076:pb-6 1076:pt-12 1400:px-0 2xl:pb-24 2xl:pt-36">
          <h3 className="text-[0.5rem] font-extrabold uppercase 600:text-sm 900:text-base 1076:text-2xl 1400:text-4xl">
            {title1}
          </h3>
          <img src={desktop} alt="MacBook" />
        </div>
        <div className="3000:h-[38vw] 3100:h-[37vw] 3300:h-[35vw] 3350:h-[34vw] relative mt-2.5 flex h-[75vw] flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-6 800:h-[68vw] 1076:mt-0 1076:h-[40vw] 1076:pb-24 1076:pt-12 lg:h-[35vw] 2xl:h-[40vw] 2xl:pt-36 4xl:h-[36vw]">
          <h3 className="text-[0.5rem] font-extrabold uppercase 600:text-sm 900:text-base 1076:text-2xl 1400:text-4xl">
            Mobile version
          </h3>
          <img
            src={iPhone1}
            alt={iPhone1}
            className="2200:right-24 2500:right-24 2800:right-28 3000:right-40 3100:right-44 3300:right-56 3350:right-60 absolute right-8 500:right-11 600:right-14 800:right-16 900:right-20 1076:right-12 1076:top-16 lg:right-10 lg:top-20 1400:right-12 1500:right-14 1600:right-16 2xl:right-20 2xl:top-48 3xl:right-28 4xl:right-52"
          />
          <img
            src={iPhone2}
            alt={iPhone2}
            className="2200:left-24 2500:left-28 2800:left-32 3000:left-36 3100:left-44 3300:left-56 3350:left-60 absolute left-7 500:left-11 600:left-16 800:left-20 1076:left-12 1076:top-16 lg:left-10 lg:top-20 1400:left-14 1500:left-14 1600:left-16 2xl:left-20 2xl:top-48 4xl:left-52"
          />
        </div>
        <div className="relative left-0 top-0 mt-2.5 flex h-[61.5vw] flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] 1076:mt-0 1076:pb-[30.125rem]">
          <h3 className="z-10 mt-6 text-[0.5rem] font-extrabold uppercase 600:text-sm 900:text-base 1076:mt-20 1076:text-2xl 1400:text-4xl">
            {title2}
          </h3>
          <img src={pages} alt="pages" className="absolute h-full w-full rounded-md" />
        </div>
        <div className="flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-20">
          <h3 className="text-4xl font-extrabold uppercase">
            Recognizable corporate identity
          </h3>
          <img src={logo} alt="logo" className="mt-72" />
        </div>
        <div className="flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-20">
          <h3 className="text-4xl font-extrabold uppercase">{title3}</h3>
          <img src={advantage} alt="advantage" className="mt-14" />
        </div>
      </div>
    </div>
  )
}

ProjectsModal.propTypes = {
  client: PropTypes.string.isRequired,
  service: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  description2: PropTypes.string,
  title1: PropTypes.string.isRequired,
  title2: PropTypes.string.isRequired,
  title3: PropTypes.string.isRequired,
  screenshots: PropTypes.objectOf(PropTypes.string.isRequired),
}

export default ProjectsModal
