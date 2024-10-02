function ServiceModal({ label, description, projects, service }) {
  return (
    <>
      <div className="block justify-between px-36 pt-24 sm:flex">
        <div className="w-full sm:w-2/12 3xl:w-3/12">
          <h4 className="text-4xl sm:text-3xl 2xl:text-5xl 3xl:text-7xl 4xl:text-9xl">
            {label}
          </h4>
          <p className="mt-2.5 block w-full text-sm uppercase sm:hidden">{service}</p>
        </div>
        <div className="mt-10 w-full sm:mt-0 sm:w-8/12">
          <p className="text-2xl sm:text-4xl sm:leading-snug 3xl:text-6xl">
            {description}
          </p>
          <h5 className="mt-14 text-left text-xs uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic sm:mt-24">
            Related Projects
          </h5>
          <ul className="mt-4 flex flex-col gap-y-10 sm:mt-12 sm:flex-row sm:justify-items-start sm:gap-x-2.5 sm:gap-y-0">
            {projects.map(({ id, client, img }) => (
              <li key={id} className="w-full sm:w-8/12">
                <button>
                  <img src={img} alt={client} />
                  <div className="mt-4 block sm:mt-5 sm:flex sm:gap-x-10 2xl:gap-x-5">
                    <div className="w-5/12 2xl:w-2/6">
                      <p className="text-left text-xs uppercase">client</p>
                      <p className="mt-1 whitespace-nowrap text-left text-base uppercase sm:mt-4">
                        {client}
                      </p>
                    </div>
                    <div>
                      <p className="mt-3 text-left text-xs uppercase sm:mt-0">service</p>
                      <p className="mt-1 text-left text-sm uppercase sm:mt-4 sm:text-base">
                        {service}
                      </p>
                    </div>
                  </div>
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default ServiceModal
