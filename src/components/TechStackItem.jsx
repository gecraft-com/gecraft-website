function TechStackItem({ stackItem }) {
  const { title, stack } = stackItem

  return (
    <li className="rounded-3xl bg-primary-100 px-4 py-3.5 sm:p-4 xl:px-10 xl:py-9">
      <h2 className="text-lg font-medium sm:text-xl xl:text-3xl">{title}</h2>
      <ul className="mt-4 grid grid-cols-3 gap-1.5 min-[434px]:grid-cols-4 min-[522px]:grid-cols-5 sm:gap-3 min-[755px]:grid-cols-6 min-[1100px]:grid-cols-7 xl:gap-4 min-[1440px]:grid-cols-8 min-[1600px]:grid-cols-9 min-[1760px]:grid-cols-10 min-[1923px]:grid-cols-11">
        {stack.map((item, index) => (
          <li
            key={index}
            className="group flex h-20 flex-col items-center justify-center rounded-md bg-white hover:bg-primary-500 sm:h-24 xl:h-28"
          >
            <img src={item.icon} alt={item.name} className="w-6 sm:w-7 xl:w-10" />
            <p className="mt-2 text-sm group-hover:text-white sm:text-base xl:mt-2.5 xl:text-lg">
              {item.name}
            </p>
          </li>
        ))}
      </ul>
    </li>
  )
}

export default TechStackItem
