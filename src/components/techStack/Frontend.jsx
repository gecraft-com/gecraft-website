import { ICONS_STYLES, ICONS_STYLES_STROKE } from '../../constants/Styles'
import { CapacitorIcon } from '../icons/CapacitorIcon'
import { CssIcon } from '../icons/CssIcon'
import { HtmlIcon } from '../icons/HtmlIcon'
import { JavaScriptIcon } from '../icons/JavaScriptIcon'
import { NextJsIcon } from '../icons/NextJsIcon'
import { NextUiIcon } from '../icons/NextUiIcon'
import { ReactIcon } from '../icons/ReactIcon'
import { TailwindIcon } from '../icons/TailwindIcon'
import { TypeScriptIcon } from '../icons/TypeScriptIcon'
import { ViteIcon } from '../icons/ViteIcon'
import { TechStackItem } from './TechStackItem'

export const Frontend = () => {
  return (
    <li className="bg-black-00 rounded-3xl px-4 py-3.5 sm:p-4 xl:px-10 xl:py-9">
      <h2 className="font-[Faberge] text-lg sm:text-xl xl:text-3xl">Frontend</h2>
      <ul className="mt-4 grid grid-cols-3 gap-1.5 min-[434px]:grid-cols-4 min-[522px]:grid-cols-5 min-[755px]:grid-cols-6 min-[1100px]:grid-cols-7 min-[1440px]:grid-cols-8 min-[1600px]:grid-cols-9 min-[1760px]:grid-cols-10 min-[1923px]:grid-cols-11 sm:gap-3 xl:gap-4">
        <TechStackItem title="JavaScript">
          <JavaScriptIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="TypeScript">
          <TypeScriptIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="React">
          <ReactIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="Next.js">
          <NextJsIcon className={ICONS_STYLES} />
        </TechStackItem>

        <TechStackItem title="CSS">
          <CssIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="HTML">
          <HtmlIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="Tailwind">
          <TailwindIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="NextUI">
          <NextUiIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="Vite">
          <ViteIcon className={`${ICONS_STYLES} ${ICONS_STYLES_STROKE}`} />
        </TechStackItem>

        <TechStackItem title="Capacitor">
          <CapacitorIcon className={ICONS_STYLES} />
        </TechStackItem>
      </ul>
    </li>
  )
}
