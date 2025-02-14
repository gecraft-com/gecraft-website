import PortfolioList from '../components/PortfolioList'
import Services from '../components/Services'

function HomePage() {
  return (
    <>
      <Services location="home" />
      <p className="mt-6 text-lg font-semibold leading-6 sm:mt-12 sm:text-3xl xl:mt-14 xl:text-5xl 2xl:mt-20">
        Tailored solutions: bespoke design <br className="hidden sm:block" /> and
        development for your business challenges
      </p>
      <PortfolioList />
    </>
  )
}

export default HomePage
