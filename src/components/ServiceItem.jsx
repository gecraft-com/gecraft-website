import clsx from 'clsx'

export const ServiceItem = ({ service, odd }) => {
  const { icon, serviceName, list, paragraph, anchor } = service

  return (
    <div
      id={anchor}
      className={clsx(
        'bg-black-00 max-w-[78.875rem] scroll-mt-20 rounded-3xl px-4 py-3.5 md:p-6 xl:flex xl:scroll-mt-24 xl:items-center xl:px-11 xl:py-8',
        {
          'mr-auto': odd,
          'ml-auto': !odd,
        }
      )}
    >
      <img src={icon} alt="logo" className="hidden xl:mr-8 xl:block xl:w-80" />
      <div>
        <div className="flex items-center gap-4">
          <img src={icon} alt="logo" className="w-16 md:w-24 xl:hidden" />
          <h2 className="font-[Faberge] text-lg md:text-3xl xl:text-4xl">
            {serviceName}
          </h2>
        </div>
        <ul className="mt-3 list-none pl-6 font-bold md:mt-4 xl:pl-8 xl:text-lg">
          {list.map((item) => (
            <li
              key={item}
              className="relative pl-3 before:absolute before:left-0 before:text-xl before:leading-4 before:content-['.']"
            >
              {item}
            </li>
          ))}
        </ul>
        {paragraph && (
          <p className="text-black-900 mt-2 md:mt-3 xl:text-lg">{paragraph}</p>
        )}
      </div>
    </div>
  )
}
