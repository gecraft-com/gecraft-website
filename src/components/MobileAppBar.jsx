function MobileAppBar() {
  return (
    <div className="fixed left-0 top-10 z-40 flex w-full items-center justify-between px-5 sm:hidden">
      <a
        className="z-20 flex h-11 w-11 items-center justify-center rounded-full bg-buttonGroup backdrop-blur-3xl active:bg-buttonHover"
        href="#"
      >
        <img src="img/logo.svg" alt="mobile logo of GeCraft" className="h-8 w-8" />
      </a>
      <a
        className="flex h-11 w-48 items-center justify-center rounded-full bg-buttonGroup text-sm font-bold text-basic backdrop-blur-3xl active:bg-buttonHover"
        href="#contactUs"
      >
        Request a Consultation
      </a>
    </div>
  )
}

export default MobileAppBar
