import { useState } from 'react'

import DropdownMenu from './DropdownMenu'
import GCButton from './GCButton'
import BurgerMenuIcon from './icons/BurgerMenuIcon'
import LogoIcon from './icons/LogoIcon'

function Header() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <header className="fixed z-20 h-16 w-full border-b border-primary-100 bg-primary-100 px-4 drop-shadow-xl sm:px-8 sm:py-2.5 xl:h-20 xl:px-20 2xl:px-40">
        <div className="mx-auto flex h-full max-w-[100.188rem] items-center justify-between">
          <a href="/" className="xl:hidden">
            <LogoIcon width={88} height={22} />
          </a>
          <a href="/" className="hidden xl:block">
            <LogoIcon width={150} height={36} />
          </a>
          <a href="/about" className="p-3 px-4">
            About
          </a>
        </div>
        <div className="sm:hidden">
          <GCButton view="menu" onClick={() => setIsShow(true)}>
            <Icons name="menu" />
          </GCButton>
        </div>
        <div className="hidden sm:block">
          <GCButton view="green-header">Contact us</GCButton>
        </div>
      </header>
      {isShow && <DropdownMenu setIsShow={setIsShow} />}
    </>
  )
}

export default Header
