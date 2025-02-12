function Services() {
  return (
    <div className="grid grid-cols-2 gap-1 font-semibold">
      <a
        href=""
        className="bg-primary-400 relative flex h-28 items-end justify-end rounded-tl-3xl px-3 py-2.5 text-right"
      >
        <img src="/chat.svg" alt="chat" className="absolute left-0 top-0 w-[5.2rem]" />
        Product
        <br />
        Management
      </a>
      <a
        href=""
        className="bg-primary-400 relative flex h-28 items-end justify-end rounded-tr-3xl px-3 py-2.5 text-right"
      >
        <img
          src="/frame.svg"
          alt="frame"
          className="absolute left-0.5 top-1 w-[4.563rem]"
        />
        Product
        <br />
        Design
      </a>
      <a
        href=""
        className="bg-primary-400 relative flex h-28 items-end justify-end px-3 py-2.5 text-right"
      >
        <img
          src="/security.svg"
          alt="security"
          className="absolute left-0.5 top-0 w-[5rem]"
        />
        Quality
        <br />
        Assurance
      </a>
      <a
        href=""
        className="bg-primary-400 relative flex h-28 items-end justify-end px-3 py-2.5 text-right"
      >
        <img
          src="/code.svg"
          alt="code"
          className="absolute left-0.5 top-1 w-[4.563rem]"
        />
        Software
        <br />
        Engineering
      </a>
      <a
        href=""
        className="bg-primary-400 relative col-span-2 flex h-28 items-end justify-end rounded-b-3xl px-3 py-2.5 text-right"
      >
        <img
          src="/analytics.svg"
          alt="analytics"
          className="absolute left-0.5 top-1 w-[8.125rem]"
        />
        Digital Product
        <br />
        Full-Cycle Service
      </a>
    </div>
  )
}

export default Services
