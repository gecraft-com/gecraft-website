const Services = () => {
  return (
    <div className="flex justify-between p-[3.23vw]">
      <div className="flex w-1/4 flex-col items-start">
        <h3 className="text-[0.51vw]">Our services</h3>
        <h4 className="text-left text-[2vw]">Skills to enhance your performance</h4>
      </div>

      <ul className="flex flex-col items-start">
        <li className="rounded-full px-[3vw] text-[5.3vw] text-[#C3C3C3] duration-500 hover:bg-[#BEE0FF] hover:text-[#1A1A1A]">
          Custom Software
        </li>
        <li className="rounded-full px-[3vw] text-[5.3vw] text-[#C3C3C3] duration-500 hover:bg-[#BEE0FF] hover:text-[#1A1A1A]">
          API Development
        </li>
        <li className="rounded-full px-[3vw] text-[5.3vw] text-[#C3C3C3] duration-500 hover:bg-[#BEE0FF] hover:text-[#1A1A1A]">
          Data engineering
        </li>
        <li className="rounded-full px-[3vw] text-[5.3vw] text-[#C3C3C3] duration-500 hover:bg-[#BEE0FF] hover:text-[#1A1A1A]">
          Infrastructure & DevOps
        </li>
        <li className="rounded-full px-[3vw] text-[5.3vw] text-[#C3C3C3] duration-500 hover:bg-[#BEE0FF] hover:text-[#1A1A1A]">
          Mobile app development
        </li>
        <li className="rounded-full px-[3vw] text-[5.3vw] text-[#C3C3C3] duration-500 hover:bg-[#BEE0FF] hover:text-[#1A1A1A]">
          AI development
        </li>
      </ul>
    </div>
  )
}

export default Services
