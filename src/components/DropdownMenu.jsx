import GCButton from './GCButton'
import Icons from './Icons'

function DropdownMenu({ setIsShow }) {
  return (
    <div className="fixed z-30 w-full rounded-b-lg bg-primary-100 px-4 pb-4 drop-shadow-xl">
      <div className="flex h-16 items-center justify-between border-b border-primary-200">
        <a href="/">
          <Icons name="logo" width={88} height={22} />
        </a>
        <GCButton onClick={() => setIsShow(false)}>
          <Icons name="close" />
        </GCButton>
      </div>
      <div className="flex flex-col pt-3 text-left">
        <a href="/services" className="p-3">
          Services
        </a>
        <a href="/work" className="p-3">
          Work
        </a>
        <a href="/about" className="mb-3 p-3">
          About
        </a>
        <GCButton view="green-header">Contact us</GCButton>
      </div>
    </div>
  )
}

export default DropdownMenu
