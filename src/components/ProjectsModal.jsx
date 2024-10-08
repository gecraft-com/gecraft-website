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
    <div className="px-5 pt-10 lg:px-36 1400:pt-24">
      <div className="block pb-0 lg:flex lg:justify-between lg:pb-10 1400:pb-24">
        <div className="w-full lg:w-[54.5rem]">
          <h2 className="whitespace-nowrap text-4xl lg:text-6xl 1400:text-9xl">
            {client}
          </h2>
          <p className="mt-2.5 text-sm uppercase lg:mt-5 lg:text-xl 1400:text-3xl">
            {service}
          </p>
          <img className="mt-12 hidden w-[54.5rem] lg:block" src={img} alt={client} />
        </div>
        <div className="mt-10 flex w-full flex-col justify-between lg:mt-0 lg:w-[113.563rem] lg:pl-10">
          <div>
            <p className="text-2xl lg:text-3xl 1400:text-5xl">{description}</p>
            <p className="mt-10 text-2xl lg:text-3xl 1400:text-5xl">{description2}</p>
          </div>
          <a href="#" className="mt-10 text-xl underline 1400:mt-0 1400:text-3xl">
            See the website
          </a>
          <img className="mt-10 w-full lg:hidden" src={img} alt={client} />
        </div>
      </div>
      <div className="lg:grid lg:grid-cols-2 lg:gap-2.5">
        <div className="col-start-1 col-end-3 mt-2.5 flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] px-2 pb-4 pt-6 lg:mt-0 lg:pb-6 lg:pt-12 1400:px-0 1400:pb-24 1400:pt-36">
          <h3 className="text-[0.5rem] font-extrabold uppercase lg:text-2xl 1400:text-4xl">
            {title1}
          </h3>
          <img src={descktop} alt="MacBook" />
        </div>
        <div className="relative mt-2.5 flex h-72 flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pt-6 lg:mt-0 lg:h-[65.375rem] lg:pb-24 lg:pt-20">
          <h3 className="text-[0.5rem] font-extrabold uppercase lg:text-4xl">
            Mobile version
          </h3>
          <img src={iPhone1} alt={iPhone1} className="absolute right-8 lg:right-60" />
          <img src={iPhone2} alt={iPhone2} className="absolute left-7 lg:left-64" />
        </div>
        <div className="relative left-0 top-0 mt-2.5 flex h-96 flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] lg:mt-0 lg:pb-[30.125rem]">
          <h3 className="z-10 mt-6 text-[0.5rem] font-extrabold uppercase lg:mt-20 lg:text-4xl">
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
