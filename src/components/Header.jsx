import AppBar from './AppBar'
import MobileAppBar from './MobileAppBar'

function Header() {
  return (
    <header className="relative flex w-full flex-col items-center px-5 pb-[40vw] sm:bg-bgHeader sm:px-0 sm:pb-[8.84vw] lg:pb-[5.2vw] 2xl:pb-[8.36vw]">
      <MobileAppBar />
      <h1 className="title-gradient mt-24 hidden animate-descent select-none bg-clip-text font-sans text-[22vw] font-black not-italic leading-none text-transparent duration-500 sm:mt-0 sm:block">
        GeCraft
      </h1>

      <h1 className="title-gradient mt-[46vw] animate-descent select-none font-sans text-[55vw] font-black not-italic leading-none sm:hidden">
        Ge
      </h1>
      <h2 className="title-gradient animate-descent select-none font-sans text-[22vw] font-black not-italic leading-none sm:hidden">
        Craft
      </h2>

      <p className="mt-10 animate-emergence select-none text-[6.15vw] text-basic sm:mt-0 sm:text-[2.12vw] lg:text-[1.88vw] 2xl:text-[2.79vw]">
        Your Reliable Partner
      </p>
      <p className="animate-emergence select-none text-[6.15vw] text-basic delay-500 sm:text-[2.12vw] lg:text-[1.88vw] 2xl:text-[2.79vw]">
        for Assured Software Delivery
      </p>

      <a
        className="animation-timeline z-10 mt-[42.3vw] flex h-[20.5vw] w-[89.7vw] animate-emergence items-center justify-center rounded-full border-2 border-basic text-[4.1vw] text-base font-semibold text-basic duration-150 hover:duration-150 active:border-buttonHover active:bg-buttonHover sm:mt-[8.84vw] sm:h-[5.93vw] sm:w-[32.7vw] sm:animate-lifting sm:text-[1.77vw] 1024:hover:border-buttonHover 1024:hover:bg-buttonHover 1024:active:bg-transparent lg:mt-[6.77vw] lg:h-[4.17vw] lg:w-[28.1vw] lg:text-[1.36vw] 2xl:mt-[6vw] 2xl:h-[4.15vw] 2xl:w-[30.84vw] 2xl:text-[1.4vw]"
        href="#contactUs"
      >
        Request a Consultation
      </a>

      <AppBar />

      <p
        id="text"
        className="animation-timeline z-20 mt-[25.6vw] w-[89.7vw] animate-emergence select-none text-[6.15vw] leading-tight sm:mt-[24.53vw] sm:w-[62.9vw] sm:text-[2.65vw] lg:mt-[18.74vw] lg:w-[50.1vw] lg:text-[2.5vw] 2xl:mt-[14.2vw] 2xl:w-[49.4vw] 2xl:text-[2.44vw]"
      >
        Harnessing cutting-edge technology and years of industry expertise, GeCraft
        designs and develops custom, end-to-end solutions that bring your unique software
        vision to life.
      </p>
    </header>
  )
}

export default Header
