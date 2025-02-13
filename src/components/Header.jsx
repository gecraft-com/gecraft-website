import { useState } from 'react'

import DropdownMenu from './DropdownMenu'
import GCButton from './GCButton'
import Icons from './Icons'

function Header() {
  const [isShow, setIsShow] = useState(false)

  return (
    <>
      <header className="fixed flex w-full justify-between bg-primary-100 p-4">
        <a href="/">
          <Icons name="logo" width={88} height={22} />
        </a>
        <GCButton type="menu" onClick={() => setIsShow(true)}>
          <Icons name="menu" />
        </GCButton>
      </header>
      {isShow && <DropdownMenu setIsShow={setIsShow} />}
    </>
  )
}

export default Header
