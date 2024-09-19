import { Button } from '@nextui-org/react'

const Services = () => {
  return (
    <div className="flex justify-between p-[3.23vw]">
      <div className="flex w-1/4 flex-col items-start">
        <h3 className="text-[0.51vw]">Our services</h3>
        <h4 className="text-left text-[2vw]">Skills to enhance your performance</h4>
      </div>

      <div className="flex flex-col">
        <Button
          radius="full"
          className="hover:bg-buttonHover text-ourServicesBtn hover:text-basic h-64 justify-start bg-transparent px-20 text-[180px]"
        >
          Custom Software
        </Button>
        <Button
          radius="full"
          className="hover:bg-buttonHover text-ourServicesBtn hover:text-basic h-64 justify-start bg-transparent px-20 text-[180px]"
        >
          API Development
        </Button>
        <Button
          radius="full"
          className="hover:bg-buttonHover text-ourServicesBtn hover:text-basic h-64 justify-start bg-transparent px-20 text-[180px]"
        >
          Data engineering
        </Button>
        <Button
          radius="full"
          className="hover:bg-buttonHover text-ourServicesBtn hover:text-basic h-64 justify-start bg-transparent px-20 text-[180px]"
        >
          Infrastructure & DevOps
        </Button>
        <Button
          radius="full"
          className="hover:bg-buttonHover text-ourServicesBtn hover:text-basic h-64 justify-start bg-transparent px-20 text-[180px]"
        >
          Mobile app development
        </Button>
        <Button
          radius="full"
          className="hover:bg-buttonHover text-ourServicesBtn hover:text-basic h-64 justify-start bg-transparent px-20 text-[180px]"
        >
          AI development
        </Button>
      </div>
    </div>
  )
}

export default Services
