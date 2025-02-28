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
        className="hidden xl:mr-8 xl:block xl:w-80"
      />
      <div className="w-11/12">
        <div className="flex items-center gap-4">
          <img src={icon} alt="logo" loading="lazy" className="w-16 sm:w-24 xl:hidden" />
          <h2 className="font-readexPro text-lg font-semibold sm:text-3xl xl:text-4xl">
            {serviceName}
          </h2>
        </div>
        <ul className="mt-3 list-disc pl-6 font-bold sm:mt-4 xl:pl-8 xl:text-lg">
          {list.map((item, index) => (
            <li key={index} className="marker:text-xl marker:leading-4">
              {item}
            </li>
          ))}
        </ul>
        {paragraph && (
          <p className="text-primary-550 mt-2 sm:mt-3 xl:text-lg">{paragraph}</p>
        )}
      </div>
    </div>
  )
}

export default ServiceItem
