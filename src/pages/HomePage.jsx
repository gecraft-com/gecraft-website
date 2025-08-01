import { PortfolioList } from '../components/PortfolioList'
import { Services } from '../components/Services'

export const HomePage = () => {
  return (
    <>
      <Services location="home" />
      <p className="font-readexPro mt-6 text-lg leading-6 font-semibold sm:mt-12 sm:text-3xl xl:mt-14 xl:text-4xl 2xl:mt-20">
        Tailored solutions: bespoke design <br className="hidden sm:block" /> and
        development for your business challenges
      </p>
      <PortfolioList location="home" />
    </>
  )
}
