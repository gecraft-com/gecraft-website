import { Button, Link } from '@nextui-org/react'

import GroupeBotton from './groupeBotton'

// import Cursor from './cursor'

const Header = () => {
  return (
    <header className="bg-bgHeader relative flex w-full flex-col items-center pb-20 lg:pb-72">
      <h1 className="title-gradient hidden bg-clip-text font-sans text-[22vw] font-black not-italic leading-none text-transparent sm:block">
        GeCraft
      </h1>

      <h1 className="mt-48 font-sans text-[55vw] font-black not-italic leading-none sm:hidden">
        Ge
      </h1>
      <h2 className="font-sans text-[22vw] font-black not-italic leading-none sm:hidden">
        Craft
      </h2>

      <p className="text-basic text-4xl 2xl:text-8xl">Your Reliable Partner</p>
      <p className="text-basic text-4xl 2xl:text-8xl">for Assured Software Delivery</p>

      <Button
        className="border-basic text-basic hover:bg-buttonHover hover:border-buttonHover z-10 mt-32 h-20 w-[540px] text-2xl font-semibold 2xl:mt-52 2xl:h-36 2xl:w-[1062px] 2xl:text-5xl"
        radius="full"
        variant="bordered"
        href="#"
        as={Link}
      >
        Request a Consultation
      </Button>

      <GroupeBotton />

      <p className="z-10 mt-24 w-[600px] text-3xl leading-tight text-white lg:w-[969px] lg:text-5xl 2xl:w-[1450px] 2xl:text-7xl">
        Harnessing cutting-edge technology and years of industry expertise, GeCraft
        designs and develops custom, end-to-end solutions that bring your unique software
        vision to life.
      </p>

      <div className="absolute bottom-0 left-0 h-[1400px] w-full bg-[url(img/gradient_background_header_section.svg)] bg-cover"></div>

      {/* <Cursor /> */}
    </header>
  )
}

export default Header
