const ProjectsModal = ({
  client,
  service,
  img,
  description,
  description2,
  title1,
  title2,
  title3,
  descktop,
  iPhone1,
  iPhone2,
  pages,
  logo,
  advantage,
}) => {
  return (
    <div className="px-36 pt-24">
      <div className="flex justify-between pb-24">
        <div className="w-[54.5rem]">
          <h2 className="text-9xl">{client}</h2>
          <p className="mt-5 text-3xl uppercase">{service}</p>
          <img className="mt-12 h-[37.5rem] w-[54.5rem]" src={img} alt={client} />
        </div>
        <div className="flex w-[113.563rem] flex-col justify-between">
          <div>
            <p className="text-5xl">{description}</p>
            <p className="mt-10 text-5xl">{description2}</p>
          </div>
          <a href="#" className="text-3xl underline">
            See the website
          </a>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2.5">
        <div className="col-start-1 col-end-3 flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pb-24 pt-36">
          <h3 className="text-4xl font-extrabold uppercase">{title1}</h3>
          <img src={descktop} alt="MacBook" />
        </div>
        <div className="relative flex h-[65.375rem] flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pb-24 pt-20">
          <h3 className="text-4xl font-extrabold uppercase">Mobile version</h3>
          <img src={iPhone1} alt={iPhone1} className="absolute right-60" />
          <img src={iPhone2} alt={iPhone2} className="absolute left-64" />
        </div>
        <div className="relative left-0 top-0 flex flex-col items-center rounded-md bg-gradient-to-b from-[#F0F0F0] to-[#D7D7D7] pb-[30.125rem]">
          <h3 className="z-10 mt-20 text-4xl font-extrabold uppercase">{title2}</h3>
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
