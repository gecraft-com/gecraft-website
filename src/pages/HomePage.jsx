import { Lines1 } from '../components/icons/Lines1'
import { Lines2 } from '../components/icons/Lines2'
import { PortfolioList } from '../components/PortfolioList'
import { Services } from '../components/Services'

export const HomePage = () => {
  return (
    <>
      <div className="relative mx-auto w-max">
        <p className="text-center font-[Faberge] text-xl md:text-3xl xl:text-5xl">
          <span className="bg-primary-200">End-to-end digital services:</span>{' '}
          <br className="md:hidden" />
          strategy, design, <br className="hidden md:block" />
          and development <br className="md:hidden" />
          for business growth
        </p>
        <Lines1 className="absolute right-14.5 -bottom-2 -z-10 w-39 md:right-8 md:-bottom-3 md:w-56 xl:-bottom-6 xl:w-98" />
      </div>
      <Services />
      <div className="relative mx-auto mt-58 w-max md:mt-87 xl:mt-113.5">
        <p className="text-center font-[Faberge] text-xl md:text-3xl xl:text-5xl">
          Tailored solutions: <br className="md:hidden" />
          bespoke design <br className="hidden md:block" />
          and development <br className="md:hidden" />
          for your <span className="bg-primary-200">business</span> challenges
        </p>
        <Lines2 className="absolute top-4 right-11 -z-10 w-50 md:top-6.5 md:right-70 md:w-65 xl:top-8.5 xl:right-114 xl:w-100" />
      </div>
      <PortfolioList location="home" />
    </>
  )
}
