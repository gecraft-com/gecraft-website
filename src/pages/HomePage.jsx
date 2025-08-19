import { Lines1 } from '../components/icons/Lines1'
import { Lines2 } from '../components/icons/Lines2'
import { PortfolioList } from '../components/PortfolioList'
import { Services } from '../components/Services'

export const HomePage = () => {
  return (
    <>
      <div className="relative">
        <p className="mb-4 text-center font-[Faberge] text-xl">
          <span className="bg-primary-200">End-to-end digital services:</span> <br />
          strategy, design, and development <br />
          for business growth
        </p>
        <Lines1 className="absolute right-16 -bottom-2 -z-10" />
      </div>
      <Services location="home" />
      <div className="relative">
        <p className="mt-6.5 text-center font-[Faberge] text-xl leading-6">
          Tailored solutions: <br />
          bespoke design and development <br />
          for your <span className="bg-primary-200">business</span> challenges
        </p>
        <Lines2 className="absolute top-4 right-13 -z-10" />
      </div>
      <PortfolioList location="home" />
    </>
  )
}
