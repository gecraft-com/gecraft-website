import Icons from './Icons'

function Header() {
  return (
    <header className="fixed flex w-full justify-between bg-primary-100 p-4">
      <a href="/">
        <Icons name="logo" width={88} height={22} />
      </a>
      <Icons name="menu" />
    </header>
  )
}

export default Header
