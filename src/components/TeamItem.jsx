export const TeamItem = ({ person }) => {
  const { photo, name, role } = person

  return (
    <div className="group bg-black-00 hover:bg-primary-400 rounded-2xl px-3.5 py-3 duration-100 md:px-4 md:py-3.5 xl:rounded-3xl xl:p-5">
      <img
        src={photo}
        alt={name}
        className="bg-black-50 mx-auto h-auto w-auto rounded-lg xl:rounded-2xl"
      />
      <p className="text-black-950 group-hover:text-black-00 mt-2 font-semibold duration-100 md:text-xl xl:mt-4 xl:text-3xl">
        {name}
      </p>
      <p className="text-black-900 group-hover:text-black-00 mt-0.5 text-sm duration-100 md:mt-2 md:text-base xl:text-lg">
        {role}
      </p>
    </div>
  )
}
