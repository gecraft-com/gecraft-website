import services from '../../data/services.json'
import { ServiceItem } from './ServiceItem'

export const ServicesList = () => {
  return (
    <div className="mt-6 flex flex-col gap-3 sm:mt-11 sm:gap-6 xl:mt-14">
      {services.map((service, index) => (
        <ServiceItem key={service.id} service={service} odd={index % 2 === 0} />
      ))}
    </div>
  )
}
