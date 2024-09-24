import { Button, Link } from '@nextui-org/react'

const MobileGroupButton = () => {
  return (
    <div className="fixed left-0 top-10 z-20 flex h-11 w-11/12 items-center justify-between sm:hidden">
      <Button
        data-hover="false"
        radius="full"
        className="z-20 h-full bg-transparent hover:bg-buttonHover"
        href="#"
        as={Link}
      >
        <img
          src="img/logo-mobile.svg"
          alt="mobile logo of GeCraft"
          className="h-11 w-11"
        />
      </Button>
      <Button
        data-hover="false"
        radius="full"
        className="h-full rounded-full bg-buttonGroup text-sm font-bold text-basic hover:bg-buttonHover"
        as={Link}
        href="#"
      >
        Request a Consultation
      </Button>
    </div>
  )
}

export default MobileGroupButton
