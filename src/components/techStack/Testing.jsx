import { ICONS_STYLES, ICONS_STYLES_STROKE } from '../../constants/Styles'
import { JestIcon } from '../icons/JestIcon'
import { PlaywrightIcon } from '../icons/PlaywrightIcon'
import { VitestIcon } from '../icons/VitestIcon'
import { TechStackItem } from './TechStackItem'

export const Testing = () => {
  return (
    <li className="bg-black-00 rounded-3xl px-4 py-3.5 md:p-4 xl:px-10 xl:py-9">
      <h2 className="font-[Faberge] text-lg md:text-xl xl:text-3xl">Testing</h2>
      <ul className="mt-4 grid grid-cols-3 gap-1.5 min-[434px]:grid-cols-4 min-[522px]:grid-cols-5 min-[755px]:grid-cols-6 min-[1100px]:grid-cols-7 min-[1440px]:grid-cols-8 min-[1600px]:grid-cols-9 min-[1760px]:grid-cols-10 min-[1923px]:grid-cols-11 md:gap-3 xl:gap-4">
        <TechStackItem title="Jest">
          <JestIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="Playwright">
          <PlaywrightIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="Vitest">
          <VitestIcon className={ICONS_STYLES} />
        </TechStackItem>
      </ul>
    </li>
  )
}
