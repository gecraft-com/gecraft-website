import services from '../../data/services.json'

function Filter() {
  return (
    <div className="mt-[34.5rem] hidden gap-10 sm:flex 2xl:gap-20">
      {services.map(({ id, label }) => (
        <label
          key={id}
          htmlFor={label}
          className="flex items-center text-2xl text-ourServicesBtn peer-checked:text-white 2xl:text-4xl"
        >
          <input
            key={id}
            name="services"
            id={label}
            type="radio"
            value={label}
            className="peer sr-only"
          />
          <span className="relative mr-3 inline-block h-5 w-5 items-center rounded-full border-3 border-ourServicesBtn bg-basic before:absolute before:left-1/2 before:top-1/2 before:hidden before:h-3 before:w-3 before:-translate-x-1/2 before:-translate-y-1/2 before:rounded-full before:bg-white peer-checked:border-white peer-checked:before:block 2xl:h-10 2xl:w-10 2xl:before:h-8 2xl:before:w-8"></span>

          {label}
        </label>
      ))}
    </div>
  )
}

export default Filter
