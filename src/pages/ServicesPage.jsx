import Services from '../components/Services'
import ServicesList from '../components/ServicesList'
import TechStackList from '../components/TechStackList'

function ServicesPage() {
  return (
    <>
      <Services location="services" />
      <ServicesList />
      <TechStackList />
    </>
  )
}

export default ServicesPage
