import team from '../../data/team.json'
import { Lines3 } from './icons/Lines3'
import { TeamItem } from './TeamItem'

export const Team = () => {
  return (
    <div className="mt-6 md:mt-11 xl:mt-14 2xl:mt-20">
      <div className="relative mx-auto w-max">
        <h3 className="text-center font-[Faberge] text-xl md:text-3xl xl:text-5xl">
          Our team
        </h3>
        <Lines3 className="absolute -bottom-2.5 -left-2 w-25 md:-bottom-4.5 md:-left-3 md:w-38 xl:-bottom-8 xl:w-57" />
      </div>
      <ul className="mt-4 grid grid-cols-2 gap-2 md:mt-6 md:grid-cols-3 md:gap-4 lg:grid-cols-4 xl:mt-9 xl:gap-6.5 2xl:grid-cols-5">
        {team.map((person) => (
          <TeamItem key={person.id} person={person} />
        ))}
      </ul>
    </div>
  )
}
