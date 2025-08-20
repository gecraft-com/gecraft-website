import team from '../../data/team.json'
import { Lines3 } from './icons/Lines3'
import { TeamItem } from './TeamItem'

export const Team = () => {
  return (
    <div className="mt-6 sm:mt-11 xl:mt-14 2xl:mt-20">
      <div className="relative mx-auto w-max">
        <h3 className="text-center font-[Faberge] text-xl sm:text-3xl xl:text-5xl">
          Our team
        </h3>
        <Lines3 className="absolute -bottom-2.5 -left-2 w-25" />
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 min-[950px]:grid-cols-4 min-[1440px]:grid-cols-5 min-[1750px]:gap-12 sm:mt-6 sm:grid-cols-3 xl:mt-9 xl:gap-7 2xl:gap-7">
        {team.map((person) => (
          <TeamItem key={person.id} person={person} />
        ))}
      </ul>
    </div>
  )
}
