import { ICONS_STYLES } from '../../constants/Styles'
import { CanvaIcon } from '../icons/CanvaIcon'
import { FigmaIcon } from '../icons/FigmaIcon'
import { IllustratorIcon } from '../icons/IllustratorIcon'
import { PhotoshopIcon } from '../icons/PhotoshopIcon'
import { TechStackItem } from './TechStackItem'

export const Design = () => {
  return (
    <li className="bg-black-00 rounded-3xl px-4 py-3.5 md:p-4 xl:px-10 xl:py-9">
      <h2 className="font-[Faberge] text-lg md:text-xl xl:text-3xl">Design</h2>
      <ul className="mt-4 grid grid-cols-3 gap-1.5 min-[434px]:grid-cols-4 min-[522px]:grid-cols-5 min-[755px]:grid-cols-6 min-[1100px]:grid-cols-7 min-[1440px]:grid-cols-8 min-[1600px]:grid-cols-9 min-[1760px]:grid-cols-10 min-[1923px]:grid-cols-11 md:gap-3 xl:gap-4">
        <TechStackItem title="Figma">
          <FigmaIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="Illustrator">
          <IllustratorIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="Photoshop">
          <PhotoshopIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="Canva">
          <CanvaIcon className={ICONS_STYLES} />
        </TechStackItem>
      </ul>
    </li>
  )
}
