import AppBar from './AppBar'
import MobileGroupButton from './MobileGroupButton'

function Header() {
  return (
    <header className="relative flex w-full flex-col items-center px-5 pb-[40vw] md:bg-bgHeader md:px-0 md:pb-[8.84vw] lg:pb-[5.2vw] 2xl:pb-[8.36vw]">
      <MobileGroupButton />
      <h1 className="title-gradient animate-descent mt-24 hidden select-none bg-clip-text font-sans text-[22vw] font-black not-italic leading-none text-transparent duration-500 md:mt-0 md:block">
        GeCraft
      </h1>

      <h1 className="title-gradient mt-[46vw] select-none font-sans text-[55vw] font-black not-italic leading-none md:hidden">
        Ge
      </h1>
      <h2 className="title-gradient select-none font-sans text-[22vw] font-black not-italic leading-none md:hidden">
        Craft
      </h2>

      <p className="animate-emergence mt-10 select-none text-[6.15vw] text-basic delay-300 md:mt-0 md:text-[2.12vw] lg:text-[1.88vw] 2xl:text-[2.79vw]">
        Your Reliable Partner
      </p>
      <p className="animate-emergence select-none text-[6.15vw] text-basic delay-500 md:text-[2.12vw] lg:text-[1.88vw] 2xl:text-[2.79vw]">
        for Assured Software Delivery
      </p>

      <a
        className="z-10 mt-[42.3vw] flex h-[20.5vw] w-[89.7vw] items-center justify-center rounded-full border-2 border-basic text-[4.1vw] text-base font-semibold text-basic duration-150 hover:border-buttonHover hover:bg-buttonHover hover:duration-150 md:mt-[8.84vw] md:h-[5.93vw] md:w-[32.7vw] md:text-[1.77vw] lg:mt-[6.77vw] lg:h-[4.17vw] lg:w-[28.1vw] lg:text-[1.36vw] 2xl:mt-[6vw] 2xl:h-[4.15vw] 2xl:w-[30.84vw] 2xl:text-[1.4vw]"
        href="#contactUs"
      >
        Request a Consultation
      </a>

      <AppBar />

      <p
        id="text"
        className="z-20 mt-[25.6vw] w-[89.7vw] select-none text-[6.15vw] leading-tight text-white md:mt-[24.53vw] md:w-[62.9vw] md:text-[2.65vw] lg:mt-[18.74vw] lg:w-[50.1vw] lg:text-[2.5vw] 2xl:mt-[14.2vw] 2xl:w-[49.4vw] 2xl:text-[2.44vw]"
      >
        Harnessing cutting-edge technology and years of industry expertise, GeCraft
        designs and develops custom, end-to-end solutions that bring your unique software
        vision to life.
      </p>

      <div className="absolute bottom-20 left-0 h-1/4 w-full bg-[url(/img/gradient_background_header_section.svg)] bg-cover md:bottom-0 md:h-1/2"></div>
    </header>
  )
}

export default Header
