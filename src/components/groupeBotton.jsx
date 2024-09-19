import { Button, Link } from '@nextui-org/react'

const GroupeBotton = () => {
  return (
    <div className="bg-buttonGroup z-10 mt-32 hidden h-12 items-center gap-2.5 rounded-full p-1.5 sm:flex lg:mt-40 lg:h-24 2xl:mt-72">
      <Button
        radius="full"
        className="hover:bg-buttonHover z-20 h-full bg-transparent"
        href="#"
        as={Link}
      >
        <img src="img/logo.svg" alt="" className="h-7 w-7 lg:h-14 lg:w-14" />
      </Button>
      <Button
        radius="full"
        className="hover:bg-buttonHover text-basic h-full bg-transparent text-sm font-bold lg:text-xl"
        href="#"
        as={Link}
      >
        Services
      </Button>
      <Button
        radius="full"
        className="hover:bg-buttonHover text-basic h-full bg-transparent text-sm font-bold lg:text-xl"
        href="#"
        as={Link}
      >
        Our Projects
      </Button>
      <Button
        radius="full"
        className="hover:bg-buttonHover text-basic h-full bg-transparent text-sm font-bold lg:text-xl"
        href="#"
        as={Link}
      >
        Contact Us
      </Button>
      <Button
        radius="full"
        className="hover:bg-buttonHover text-basic h-full bg-transparent text-sm font-bold lg:text-xl"
        href="#"
        as={Link}
      >
        Request a Consultation
      </Button>
    </div>
  )
}

export default GroupeBotton
