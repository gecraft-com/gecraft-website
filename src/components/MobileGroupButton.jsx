const MobileGroupButton = () => {
  return (
    <div className="fixed left-0 top-10 z-50 flex w-full items-center justify-between px-5 sm:hidden">
      <a className="z-20 rounded-full bg-transparent hover:bg-buttonHover" href="#">
        <img
          src="img/logo-mobile.svg"
          alt="mobile logo of GeCraft"
          className="h-11 w-11"
        />
      </a>
      <a
        className="flex h-11 w-48 items-center justify-center rounded-full bg-buttonGroup text-sm font-bold text-basic hover:bg-buttonHover"
        href="#"
      >
        Request a Consultation
      </a>
    </div>
  )
}

export default MobileGroupButton
