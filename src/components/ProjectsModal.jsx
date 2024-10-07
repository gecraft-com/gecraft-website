const ProjectsModal = ({
  client,
  service,
  img,
  description,
  description2,
  title1,
  title2,
  title3,
  screenshots,
}) => {
  const { iPhone1, iPhone2, descktop, pages, logo, advantage } = screenshots
  return (
    <div className="px-5 pt-10 md:px-36 md:pt-24">
      <div className="block pb-0 md:flex md:justify-between md:pb-24">
        <div className="w-full md:w-[54.5rem]">
          <h2 className="text-4xl md:text-9xl">{client}</h2>
          <p className="mt-2.5 text-sm uppercase md:mt-5 md:text-3xl">{service}</p>
          <img
            className="mt-12 hidden h-[37.5rem] w-[54.5rem] md:block"
            src={img}
            alt={client}
          />
        </div>
        <div className="mt-10 flex w-full flex-col justify-between md:mt-0 md:w-[113.563rem]">
          <div>
            <p className="text-2xl md:text-5xl">{description}</p>
            <p className="mt-10 text-2xl md:text-5xl">{description2}</p>
          </div>
          <a href="#" className="mt-10 text-xl underline md:mt-0 md:text-3xl">
            See the website
          </a>
          <img className="mt-10 w-full" src={img} alt={client} />
        </div>
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-2.5">
        <div className="col-start-1 col-end-3 mt-2.5 flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] px-2 pb-4 pt-6 md:mt-0 md:px-0 md:pb-24 md:pt-36">
          <h3 className="text-[0.5rem] font-extrabold uppercase md:text-4xl">{title1}</h3>
          <img src={descktop} alt="MacBook" />
        </div>
        <div className="relative mt-2.5 flex h-72 flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-6 md:mt-0 md:h-[65.375rem] md:pb-24 md:pt-20">
          <h3 className="text-[0.5rem] font-extrabold uppercase md:text-4xl">
            Mobile version
          </h3>
          <img src={iPhone1} alt={iPhone1} className="absolute right-8 md:right-60" />
          <img src={iPhone2} alt={iPhone2} className="absolute left-7 md:left-64" />
        </div>
        <div className="relative left-0 top-0 mt-2.5 flex h-96 flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] md:mt-0 md:pb-[30.125rem]">
          <h3 className="z-10 mt-6 text-[0.5rem] font-extrabold uppercase md:mt-20 md:text-4xl">
            {title2}
          </h3>
          <img src={pages} alt="pages" className="absolute h-full w-full" />
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

export default ProjectsModal
