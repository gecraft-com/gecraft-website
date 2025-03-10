import GCButton from './GCButton'
import CloseIcon from './icons/CloseIcon'
import LogoIcon from './icons/LogoIcon'

function DropdownMenu({ setIsShow }) {
  return (
    <div className="fixed z-40 w-full rounded-b-lg bg-primary-100 px-4 pb-4 drop-shadow-xl">
      <div className="flex h-16 items-center justify-between border-b border-primary-200">
        <a href="/">
          <LogoIcon width={88} height={22} />
        </a>
        <GCButton onClick={() => setIsShow(false)}>
          <CloseIcon />
        </GCButton>
      </div>
      <div className="flex flex-col pt-3 text-left font-readexPro">
        <a href="/services" className="p-3" onClick={() => setIsShow(false)}>
          Services
        </a>
        <a href="/work" className="p-3" onClick={() => setIsShow(false)}>
          Work
        </a>
        <a href="/about" className="mb-3 p-3" onClick={() => setIsShow(false)}>
          About
        </a>
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

export default DropdownMenu
