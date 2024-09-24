import { Button, Link } from '@nextui-org/react'

const MobileGroupButton = () => {
  return (
    <div className="fixed left-0 top-0 z-20 flex h-11 w-full items-center justify-between sm:hidden">
      <Button
        radius="full"
        className="z-20 h-full bg-transparent hover:bg-buttonHover"
        href="#"
        as={Link}
      >
        <img src="img/logo.svg" alt="" className="h-14 w-14" />
      </Button>
      <Button
        radius="full"
        className="h-full bg-transparent text-xl font-bold text-basic hover:bg-buttonHover"
        as={Link}
        href="#"
      >
        Request a Consultation
      </Button>
    </div>
  )
}

export default MobileGroupButton
