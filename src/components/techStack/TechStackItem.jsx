export const TechStackItem = ({ children, title }) => {
  return (
    <li className="group hover:bg-primary-500 flex h-20 flex-col items-center justify-center rounded-md bg-white duration-100 sm:h-24 xl:h-28">
      {children}
      <p className="mt-2 text-sm duration-100 group-hover:text-white sm:text-base xl:mt-2.5 xl:text-lg">
        {title}
      </p>
    </li>
  )
}
