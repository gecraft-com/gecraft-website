import { Button } from '@nextui-org/react'

const Services = () => {
  const services = [
    'Custom Software',
    'API Development',
    'Data engineering',
    'Infrastructure & DevOps',
    'Mobile app development',
    'AI development',
  ]

  return (
    <div className="block justify-between p-[3.23vw] sm:flex">
      <div className="flex w-1/4 flex-col items-start">
        <h3 className="text-xs before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic">
          Our services
        </h3>
        <h4 className="3xl:text-5xl 3xl:w-[33.6rem] mt-12 w-[28rem] text-left text-3xl">
          Skills to enhance your performance
        </h4>
      </div>

      <div className="hover:text-ourServicesBtn hover:duration-300">
        {services.map((label, index) => (
          <a
            key={index}
            className="4xl:text-[190px] 3xl:text-[150px] 3xl:after:-translate-x-[2250px] relative z-10 table cursor-pointer px-32 text-center text-4xl leading-snug after:pointer-events-none after:absolute after:-left-0 after:-top-0 after:z-[-1] after:box-content after:h-full after:w-full after:-translate-x-[710px] after:rotate-12 after:scale-[3] after:transform after:rounded-full after:bg-buttonHover after:opacity-0 after:transition after:duration-300 hover:text-basic hover:duration-300 after:hover:translate-x-0 hover:after:rotate-[0] hover:after:scale-100 hover:after:opacity-100 lg:after:-translate-x-[800px] xl:text-5xl xl:leading-normal xl:after:-translate-x-[710px] 2xl:text-8xl 2xl:leading-snug 2xl:after:-translate-x-[1250px]"
          >
            {label}
          </a>
        ))}
      </div>
    </div>
  )
}

export default Services
