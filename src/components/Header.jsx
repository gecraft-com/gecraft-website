import Icons from './Icons'

function Header() {
  return (
    <header className="fixed flex w-full justify-between bg-primary-100 p-4">
      <Icons name="logo-small" width={88} height={22} />
      <Icons name="menu" />
    </header>
  )
}

export default Header
