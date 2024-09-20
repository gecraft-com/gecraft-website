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
    <div className="flex justify-between p-[3.23vw]">
      <div className="flex w-1/4 flex-col items-start">
        <h3 className="text-xs before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic">
          Our services
        </h3>
        <h4 className="mt-12 w-[33.6rem] text-left text-5xl">
          Skills to enhance your performance
        </h4>
      </div>

      <div className="flex flex-col">
        {services.map((label, index) => (
          <Button
            key={index}
            radius="full"
            className="hover:text-black relative z-10 h-64 justify-start bg-transparent px-20 text-[180px] text-ourServicesBtn hover:before:absolute hover:before:-left-4 hover:before:h-[348px] hover:before:w-[2200px] hover:before:rounded-full hover:before:bg-[rgba(59,160,255,0.1)]"
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Services
