import { Button, ButtonGroup, Link } from '@nextui-org/react'

import Cursor from './cursor'

const Header = () => {
  return (
    <header className="bg-bgHeader relative flex w-full flex-col items-center pb-[8.2vw]">
      <h1 className="title-gradient hidden bg-clip-text font-sans text-[22vw] font-black not-italic leading-[1] text-transparent sm:block">
        GeCraft
      </h1>

      <h1 className="mt-48 font-sans text-[55vw] font-black not-italic leading-[1] sm:hidden">
        Ge
      </h1>
      <h2 className="font-sans text-[22vw] font-black not-italic leading-[1] sm:hidden">
        Craft
      </h2>

      <p className="text-basic mt-10 text-8xl">Your Reliable Partner</p>
      <p className="text-basic text-8xl">for Assured Software Delivery</p>

      <Button
        className="z-10 mt-40 h-[4.25vw] w-[31.9vw] border-neutral-900 text-[1.5vw] font-semibold text-neutral-900 sm:mt-[6.1vw]"
        radius="full"
        variant="bordered"
        href="#"
        as={Link}
      >
        Request a Consultation
      </Button>

      <ButtonGroup className="bg-buttonGroup z-10 mt-[8.5vw] hidden h-[2.82vw] w-[27.8vw] rounded-full p-[0.18vw] sm:flex">
        <Button
          radius="full"
          variant="light"
          className="hover:bg-buttonHover mr-[0.3vw] h-[2.47vw] px-0"
        >
          <img src="img/logo.svg" alt="" className="h-[1.63vw]" />
        </Button>
        <Button
          radius="full"
          variant="light"
          className="hover:bg-buttonHover mr-[0.3vw] text-[0.8vw]"
        >
          Services
        </Button>
        <Button radius="full" variant="light" className="mr-[0.3vw] text-[0.8vw]">
          Our Projects
        </Button>
        <Button radius="full" variant="light" className="mr-[0.3vw] text-[0.8vw]">
          Contact Us
        </Button>
        <Button radius="full" variant="light" className="mr-[0.3vw] text-[0.8vw]">
          Request a Consultation
        </Button>
      </ButtonGroup>

      <p className="z-10 mt-24 w-10/12 text-[5.5vw] text-white sm:mt-[3vw] sm:w-[50%] sm:text-[2.45vw]">
        Harnessing cutting-edge technology and years of industry expertise, GeCraft
        designs and develops custom, end-to-end solutions that bring your unique software
        vision to life.
      </p>

      <div className="absolute bottom-0 left-0 h-[40vw] w-full bg-[url(img/gradient_background_header_section.svg)] bg-cover"></div>

      <Cursor />
    </header>
  )
}

export default Header
