import { PortfolioList } from '../components/PortfolioList'

export const WorkPage = () => {
  return (
    <>
      <h2 className="text-center font-[Faberge] text-xl md:text-3xl xl:text-5xl">
        Innovation in action: <span className="bg-primary-200">Our portfolio</span>
      </h2>
      <PortfolioList />
    </>
  )
}
