function TeamItem({ person }) {
  const { photo, name, role } = person
  return (
    <div className="bg-primary-900 rounded-2xl px-3.5 py-3 sm:px-4 sm:py-3.5 xl:p-5">
      <img src={photo} alt={name} className="mx-auto w-auto rounded-lg bg-white" />
      <p className="text-primary-950 mt-2 font-semibold sm:text-xl xl:mt-4 xl:text-3xl">
        {name}
      </p>
      <p className="text-primary-950 mt-1 text-xs sm:mt-2 sm:text-base xl:text-lg">
        {role}
      </p>
    </div>
  )
}

export default TeamItem
