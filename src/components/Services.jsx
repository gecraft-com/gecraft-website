function Services() {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-1 font-semibold sm:grid-cols-6 sm:gap-1.5 sm:text-xl xl:gap-4 xl:text-3xl">
      <a
        href=""
        className="relative flex h-28 items-end justify-end rounded-tl-3xl bg-primary-400 px-3 py-2.5 text-right sm:col-span-2 sm:h-48 sm:p-4 xl:h-80 xl:p-7"
      >
        <img
          src="/chat.svg"
          alt="chat"
          className="absolute left-0 top-0 w-[5.2rem] sm:w-[12rem] xl:left-2 xl:top-2 xl:w-[19rem] 2xl:-top-6 2xl:w-[25rem]"
        />
        Product <br className="xl:hidden" />
        Management
      </a>
      <a
        href=""
        className="relative flex h-28 items-end justify-end rounded-tr-3xl bg-primary-400 px-3 py-2.5 text-right sm:col-span-2 sm:h-48 sm:rounded-none xl:h-80 xl:p-7"
      >
        <img
          src="/frame.svg"
          alt="frame"
          className="absolute left-0.5 top-1 w-[4.563rem] sm:-left-1.5 sm:-top-1.5 sm:w-[12rem] xl:left-0 xl:top-2 xl:w-[17.5rem] 2xl:-left-2 2xl:-top-6 2xl:w-[22rem]"
        />
        Product <br className="sm:hidden" />
        Design
      </a>
      <a
        href=""
        className="relative flex h-28 items-end justify-end bg-primary-400 px-3 py-2.5 text-right sm:col-span-2 sm:h-48 sm:rounded-tr-3xl xl:h-80 xl:p-7"
      >
        <img
          src="/security.svg"
          alt="security"
          className="absolute left-0.5 top-0 w-[5rem] sm:-left-3 sm:-top-1 sm:w-[10.2rem] xl:-left-3 xl:top-0 xl:w-[17rem] 2xl:-left-8 2xl:-top-6 2xl:w-[21rem]"
        />
        Quality <br className="sm:hidden" />
        Assurance
      </a>
      <a
        href=""
        className="relative flex h-28 items-end justify-end bg-primary-400 px-3 py-2.5 text-right sm:col-span-3 sm:h-48 sm:rounded-bl-3xl xl:h-80 xl:p-7"
      >
        <img
          src="/code.svg"
          alt="code"
          className="absolute left-0.5 top-1 w-[4.563rem] sm:-left-1 sm:-top-1 sm:w-[11rem] xl:left-3 xl:top-0 xl:w-[18.5rem] 2xl:-left-1.5 2xl:w-[23.5rem]"
        />
        Software <br className="sm:hidden" />
        Engineering
      </a>
      <a
        href=""
        className="relative col-span-2 flex h-28 items-end justify-end rounded-b-3xl bg-primary-400 px-3 py-2.5 text-right sm:col-span-3 sm:h-48 sm:rounded-bl-none xl:h-80 xl:p-7"
      >
        <img
          src="/analytics.svg"
          alt="analytics"
          className="absolute left-0.5 top-1 w-[8.125rem] sm:-left-4 sm:-top-2 sm:w-[13rem] xl:left-0 xl:top-0 xl:w-[19.5rem] 2xl:-left-8 2xl:-top-5 2xl:w-[23.5rem]"
        />
        Digital Product <br className="xl:hidden" />
        Full-Cycle Service
      </a>
    </div>
  )
}

export default Services
