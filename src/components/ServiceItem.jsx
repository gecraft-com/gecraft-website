import clsx from 'clsx'

function ServiceItem({ service, odd }) {
  const { icon, serviceName, list, paragraph, anchor } = service

  return (
    <div
      id={anchor}
      className={clsx(
        'max-w-[78.875rem] scroll-mt-20 rounded-3xl bg-primary-100 px-4 py-3.5 sm:p-6 xl:flex xl:scroll-mt-24 xl:items-center xl:rounded-[4rem] xl:px-11 xl:py-8',
        {
          'mr-auto': odd,
          'ml-auto': !odd,
        }
      )}
    >
      <img
        src={icon}
        alt="logo"
        loading="lazy"
        className="hidden w-[29rem] xl:block 2xl:w-[35rem]"
      />
      <div className="w-11/12">
        <div className="flex items-center">
          <img src={icon} alt="logo" loading="lazy" className="w-20 sm:w-32 xl:hidden" />
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
