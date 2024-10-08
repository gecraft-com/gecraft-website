import GroupButton from './GroupButton'
import MobileGroupButton from './MobileGroupButton'


function Header() {
  window.onbeforeunload = function () {
    window.scrollTo(0, 0)
  }

  return (
    <header className="relative flex w-full flex-col items-center px-5 pb-20 sm:bg-bgHeader md:px-0 2xl:pb-72">
      <MobileGroupButton />
      <h1 className="title-gradient mt-24 hidden select-none bg-clip-text font-sans text-[22vw] font-black not-italic leading-none text-transparent sm:block md:mt-0">
        GeCraft
      </h1>

      <h1 className="title-gradient mt-48 select-none font-sans text-[55vw] font-black not-italic leading-none sm:hidden">
        Ge
      </h1>
      <h2 className="title-gradient select-none font-sans text-[22vw] font-black not-italic leading-none sm:hidden">
        Craft
      </h2>

      <p className="mt-10 select-none text-2xl text-basic sm:mt-0 sm:text-2xl 2xl:text-8xl">
        Your Reliable Partner
      </p>
      <p className="select-none text-2xl text-basic sm:text-2xl 2xl:text-8xl">
        for Assured Software Delivery
      </p>

      <a
        className="z-10 mt-40 flex h-20 w-full items-center justify-center rounded-full border-2 border-basic text-base font-semibold text-basic hover:border-buttonHover hover:bg-buttonHover sm:mt-24 sm:w-[23.125rem] sm:text-xl md:mb-28 2xl:mt-52 2xl:h-36 2xl:w-[66.375rem] 2xl:text-5xl"
        href="#"
      >
        Request a Consultation
      </a>

      <GroupButton />

      <p
        id="text"
        className="z-20 mt-24 w-full select-none text-2xl leading-tight text-white md:w-[37.5rem] md:text-3xl lg:w-[60.563rem] lg:text-5xl 2xl:w-[90.625rem] 2xl:text-7xl"
      >
        Harnessing cutting-edge technology and years of industry expertise, GeCraft
        designs and develops custom, end-to-end solutions that bring your unique software
        vision to life.
      </p>

      <div className="absolute bottom-0 left-0 h-1/3 w-full bg-[url(/img/gradient_background_header_section.svg)] bg-cover sm:h-1/2"></div>
    </header>
  )
}

export default Header
