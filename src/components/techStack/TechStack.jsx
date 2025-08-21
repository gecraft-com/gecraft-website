import { Backend } from './Backend'
import { Frontend } from './Frontend'
import { Testing } from './Testing'

export const TechStack = () => {
  return (
    <div className="mt-6 md:mt-11 xl:mt-14 2xl:mt-20">
      <h2 className="mb-4 text-lg font-semibold md:mb-8 md:text-3xl xl:mb-9 xl:text-5xl">
        Our tech stack
      </h2>
      <ul className="font-readexPro flex flex-col gap-6 2xl:gap-9">
        <Frontend />
        <Backend />
        <Testing />
      </ul>
    </div>
  )
}
