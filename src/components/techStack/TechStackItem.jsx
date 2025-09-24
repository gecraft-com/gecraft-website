export const TechStackItem = ({ children, title }) => {
  return (
    <li className="group hover:bg-primary-500 bg-secondary-50 flex h-20 flex-col items-center justify-center rounded-lg duration-100 md:h-24 xl:h-28">
      {children}
      <p className="group-hover:text-black-00 mt-2 text-sm duration-100 md:text-base xl:mt-2.5 xl:text-lg">
        {title}
      </p>
    </li>
  )
}
