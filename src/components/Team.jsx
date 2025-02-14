import team from '../../data/team.json'
import TeamItem from './TeamItem'

function Team() {
  return (
    <div className="mt-6 sm:mt-11 xl:mt-14 2xl:mt-20">
      <h3 className="text-lg font-semibold sm:text-3xl xl:text-5xl">Our team</h3>
      <ul className="mt-4 grid grid-cols-2 gap-2 sm:mt-6 sm:grid-cols-3 min-[950px]:grid-cols-4 xl:mt-9 xl:gap-7 min-[1440px]:grid-cols-5 min-[1750px]:gap-12 2xl:gap-7">
        {team.map((person) => (
          <TeamItem key={person.id} person={person} />
        ))}
      </ul>
    </div>
  )
}

export default Team
