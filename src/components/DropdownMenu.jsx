import { Link } from 'react-router-dom'

import { GCButton } from './GCButton'
import { CloseIcon } from './icons/CloseIcon'
import { LogoFooterIcon } from './icons/LogoFooterIcon'

export const DropdownMenu = ({ setIsShow }) => {
  return (
    <div className="bg-primary-100 fixed z-40 w-full rounded-b-lg px-4 pb-4 drop-shadow-xl">
      <div className="border-primary-200 flex h-16 items-center justify-between border-b">
        <Link to="/">
          <LogoFooterIcon width={88} height={22} />
        </Link>
        <GCButton onClick={() => setIsShow(false)}>
          <CloseIcon />
        </GCButton>
      </div>
      <div className="font-readexPro flex flex-col pt-3 text-left">
        <Link to="/services" className="p-3" onClick={() => setIsShow(false)}>
          Services
        </Link>
        <Link to="/work" className="p-3" onClick={() => setIsShow(false)}>
          Work
        </Link>
        <Link to="/about" className="mb-3 p-3" onClick={() => setIsShow(false)}>
          About
        </Link>
        <GCButton
          asLink
          link="/contact-us"
          view="green-header"
          onClick={() => setIsShow(false)}
        >
          Contact us
        </GCButton>
      </div>
    </div>
  )
}
