function ServiceItem({ service, even }) {
  const { icon, serviceName, list, paragraph, anchor } = service

  return (
    <div
      id={anchor}
      className={`max-w-[78.875rem] rounded-3xl bg-primary-100 px-4 py-3.5 sm:p-6 xl:flex xl:items-center xl:rounded-[4rem] xl:px-11 xl:py-8 ${even ? '' : 'ml-auto'}`}
    >
      <img
        src={icon}
        alt="logo"
        className={`hidden w-[29rem] 2xl:w-[35rem] ${even ? '' : '-scale-x-100'} xl:block`}
      />
      <div className="w-11/12">
        <div className="flex items-center">
          <img
            src={icon}
            alt="logo"
            className={`w-20 sm:w-32 ${even ? '' : '-scale-x-100'} xl:hidden`}
          />
          <h2 className="text-lg font-semibold sm:text-3xl xl:text-4xl">{serviceName}</h2>
        </div>
        <ul className="mt-3 list-disc pl-6 text-sm font-medium sm:mt-4 sm:text-lg xl:pl-8 xl:text-xl">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        {paragraph && (
          <p className="mt-2 text-sm sm:mt-3 sm:text-lg xl:text-xl">{paragraph}</p>
        )}
      </div>
    </div>
  )
}

export default ServiceItem
