function TeamItem({ person }) {
  const { photo, name, role } = person
  return (
    <div className="group rounded-2xl bg-primary-900 px-3.5 py-3 duration-100 hover:bg-primary-650 sm:px-4 sm:py-3.5 xl:rounded-3xl xl:p-5">
      <img
        src={photo}
        alt={name}
        loading="lazy"
        className="mx-auto w-auto rounded-lg bg-white xl:rounded-2xl"
      />
      <p className="mt-2 font-semibold text-primary-950 duration-100 group-hover:text-white sm:text-xl xl:mt-4 xl:text-3xl">
        {name}
      </p>
      <p className="mt-1 text-xs text-primary-950 duration-100 group-hover:text-white sm:mt-2 sm:text-base xl:text-lg">
        {role}
      </p>
    </div>
  )
}

export default TeamItem
