import GCButton from './GCButton'
import Icons from './Icons'

function DropdownMenu({ setIsShow }) {
  return (
    <div className="fixed w-full rounded-b-lg bg-primary-100 p-4 drop-shadow-xl">
      <div className="flex justify-between border-b border-primary-200 pb-4">
        <a href="/">
          <Icons name="logo" width={88} height={22} />
        </a>
        <GCButton type="menu" onClick={() => setIsShow(false)}>
          <Icons name="close" />
        </GCButton>
      </div>
      <div className="flex flex-col pt-3 text-left">
        <a href="" className="p-3">
          Services
        </a>
        <a href="" className="p-3">
          Work
        </a>
        <a href="" className="mb-3 p-3">
          About
        </a>
        <GCButton type="green-header">Contact us</GCButton>
      </div>
    </div>
  )
}

export default DropdownMenu
