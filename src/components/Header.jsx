import { useState } from 'react'

import DropdownMenu from './DropdownMenu'
import GCButton from './GCButton'
import Icons from './Icons'

function Header() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <header className="fixed z-10 flex w-full items-center justify-between bg-primary-100 p-4 sm:px-8 sm:py-2.5 xl:h-20 xl:px-20 2xl:px-40">
        <a href="/" className="xl:hidden">
          <Icons name="logo" width={88} height={22} />
        </a>
        <a href="/" className="hidden xl:block">
          <Icons name="logo" width={150} height={36} />
        </a>
        <div className="hidden sm:block xl:text-lg">
          <a href="/services" className="mr-2.5 px-4 py-3">
            Services
          </a>
          <a href="/work" className="mr-2.5 p-3 px-4">
            Work
          </a>
          <a href="/about" className="p-3 px-4">
            About
          </a>
        </div>
        <div className="sm:hidden">
          <GCButton type="menu" onClick={() => setIsShow(true)}>
            <Icons name="menu" />
          </GCButton>
        </div>
        <div className="hidden sm:block">
          <GCButton type="green-header">Contact us</GCButton>
        </div>
      </header>
      {isShow && <DropdownMenu setIsShow={setIsShow} />}
    </>
  )
}

export default Header
