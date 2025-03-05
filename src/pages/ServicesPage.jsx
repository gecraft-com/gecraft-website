import Services from '../components/Services'
import ServicesList from '../components/ServicesList'
import TechStack from '../components/techStack/TechStac'

function ServicesPage() {
  return (
    <>
      <Services location="services" />
      <ServicesList />
      <TechStack />
    </>
  )
}

export default ServicesPage
