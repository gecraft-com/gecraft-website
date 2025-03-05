import JestIcon from '../icons/JestIcon'
import PlaywrightIcon from '../icons/PlaywrightIcon'
import VitestIcon from '../icons/VitestIcon'
import TechStackItem from './TechStackItem'

function Testing() {
  return (
    <li className="rounded-3xl bg-primary-100 px-4 py-3.5 sm:p-4 xl:px-10 xl:py-9">
      <h2 className="text-lg font-medium sm:text-xl xl:text-3xl">Testing</h2>
      <ul className="mt-4 grid grid-cols-3 gap-1.5 min-[434px]:grid-cols-4 min-[522px]:grid-cols-5 sm:gap-3 min-[755px]:grid-cols-6 min-[1100px]:grid-cols-7 xl:gap-4 min-[1440px]:grid-cols-8 min-[1600px]:grid-cols-9 min-[1760px]:grid-cols-10 min-[1923px]:grid-cols-11">
        <TechStackItem title="Jest">
          <JestIcon />
        </TechStackItem>

        <TechStackItem title="Playwright">
          <PlaywrightIcon />
        </TechStackItem>

        <TechStackItem title="Vitest">
          <VitestIcon />
        </TechStackItem>
      </ul>
    </li>
  )
}

export default Testing
