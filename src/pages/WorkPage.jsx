import { PortfolioList } from '../components/PortfolioList'

export const WorkPage = () => {
  return (
    <>
      <h2 className="text-lg font-semibold sm:text-3xl xl:text-5xl xl:font-medium">
        Innovation in action: <br className="sm:hidden" />
        Our portfolio
      </h2>
      <PortfolioList />
    </>
  )
}
