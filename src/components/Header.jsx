import { Button, Link } from '@nextui-org/react'

import GroupButton from './GroupButton'

const Header = () => {
  return (
    <header className="relative flex w-full flex-col items-center bg-bgHeader px-5 pb-20 sm:px-0 2xl:pb-72">
      <h1 className="title-gradient hidden cursor-default select-none bg-clip-text font-sans text-[22vw] font-black not-italic leading-none text-transparent sm:block">
        GeCraft
      </h1>

      <h1 className="title-gradient mt-48 cursor-default select-none font-sans text-[55vw] font-black not-italic leading-none sm:hidden">
        Ge
      </h1>
      <h2 className="title-gradient cursor-default select-none font-sans text-[22vw] font-black not-italic leading-none sm:hidden">
        Craft
      </h2>

      <p className="mt-10 cursor-default text-2xl text-basic sm:mt-0 sm:text-4xl 2xl:text-8xl">
        Your Reliable Partner
      </p>
      <p className="cursor-default text-2xl text-basic sm:text-4xl 2xl:text-8xl">
        for Assured Software Delivery
      </p>

      <Button
        data-hover="false"
        className="z-10 mt-40 h-20 w-full border-basic text-base font-semibold text-basic hover:border-buttonHover hover:bg-buttonHover hover:text-basic hover:opacity-100 sm:mt-32 sm:w-[540px] sm:text-2xl 2xl:mt-52 2xl:h-36 2xl:w-[1062px] 2xl:text-5xl"
        radius="full"
        color="default"
        variant="bordered"
        href="#"
        as={Link}
      >
        Request a Consultation
      </Button>

      <GroupButton />

      <p className="z-10 mt-24 w-full cursor-default text-2xl leading-tight text-white sm:w-[600px] sm:text-3xl lg:w-[969px] lg:text-5xl 2xl:w-[1450px] 2xl:text-7xl">
        Harnessing cutting-edge technology and years of industry expertise, GeCraft
        designs and develops custom, end-to-end solutions that bring your unique software
        vision to life.
      </p>

      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-[url(/img/gradient_background_header_section.svg)] bg-cover sm:h-1/2"></div>
    </header>
  )
}

export default Header
