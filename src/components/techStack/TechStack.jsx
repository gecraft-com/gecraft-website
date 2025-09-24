import { Backend } from './Backend'
import { Design } from './Design'
import { Frontend } from './Frontend'
import { Testing } from './Testing'

export const TechStack = () => {
  return (
    <div className="mt-6 md:mt-11 xl:mt-14 2xl:mt-20">
      <h2 className="mb-4 font-[Faberge] text-lg md:mb-8 md:text-3xl xl:mb-9">
        Our tech stack
      </h2>
      <ul className="flex flex-col gap-3 md:gap-6 2xl:gap-9">
        <Design />
        <Frontend />
        <Backend />
        <Testing />
      </ul>
    </div>
  )
}
