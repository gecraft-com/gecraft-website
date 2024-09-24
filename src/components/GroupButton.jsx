import { Button, Link } from '@nextui-org/react'

const GroupButton = () => {
  return (
    <div className="z-10 mt-32 hidden h-24 items-center gap-2.5 rounded-full bg-buttonGroup p-1.5 sm:flex lg:mt-40 2xl:mt-72">
      <Button
        data-hover="false"
        radius="full"
        className="z-20 h-full bg-buttonHover hover:opacity-100"
        href="#"
        as={Link}
      >
        <img src="img/logo.svg" alt="logo GeCraft" className="h-14 w-14" />
      </Button>
      {['Services', 'Our Projects', 'Contact Us', 'Request a Consultation'].map(
        (label, index) => (
          <Button
            data-hover="false"
            key={index}
            radius="full"
            className="h-full bg-transparent px-11 text-xl font-bold text-basic last:bg-buttonHover hover:bg-buttonHover hover:opacity-100"
            as={Link}
            href="#"
          >
            {label}
          </Button>
        )
      )}
    </div>
  )
}

export default GroupButton
