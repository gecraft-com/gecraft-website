import { Services } from '../components/Services'
import { ServicesList } from '../components/ServicesList'
import { TechStack } from '../components/techStack/TechStack'

export const ServicesPage = () => {
  return (
    <>
      <Services location="services" />
      <ServicesList />
      <TechStack />
    </>
  )
}
