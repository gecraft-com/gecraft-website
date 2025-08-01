export const TeamItem = ({ person }) => {
  const { photo, name, role } = person

  return (
    <div className="group bg-primary-900 hover:bg-primary-650 rounded-2xl px-3.5 py-3 duration-100 sm:px-4 sm:py-3.5 xl:rounded-3xl xl:p-5">
      <img
        src={photo}
        alt={name}
        className="mx-auto h-auto w-auto rounded-lg bg-white xl:rounded-2xl"
      />
      <p className="text-primary-950 mt-2 font-semibold duration-100 group-hover:text-white sm:text-xl xl:mt-4 xl:text-3xl">
        {name}
      </p>
      <p className="text-primary-950 mt-1 text-xs duration-100 group-hover:text-white sm:mt-2 sm:text-base xl:text-lg">
        {role}
      </p>
    </div>
  )
}
