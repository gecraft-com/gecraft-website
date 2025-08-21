import { Lines4 } from '../components/icons/Lines4'
import { ServicesList } from '../components/ServicesList'
import { TechStack } from '../components/techStack/TechStack'

export const ServicesPage = () => {
  return (
    <>
      <div className="relative mx-auto w-max">
        <p className="text-center font-[Faberge] text-xl md:py-8.5 md:text-3xl xl:text-5xl">
          From idea to launch <br className="md:hidden" />— we design, build,
          <br />
          and support digital <br className="md:hidden" />
          products that deliver <span className="bg-primary-200">real value</span>
        </p>
        <Lines4 className="absolute top-5 left-23 -z-10 w-14 md:top-15 md:left-33.5 md:w-26 xl:top-17.5 xl:left-56 xl:w-34" />
      </div>
      <ServicesList />
      <TechStack />
    </>
  )
}
