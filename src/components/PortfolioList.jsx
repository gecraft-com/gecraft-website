import portfolio from '../../data/portfolio.json'
import PortfolioItem from './PortfolioItem'

function PortfolioList({ location = '' }) {
  return (
    <div className="1366:h-[124rem] 1440:h-[121rem] 1536:h-[117rem] 1680:h-[113rem] mt-4 flex w-full flex-col flex-wrap gap-2 sm:mt-6 sm:gap-4 xl:mt-9 xl:h-[128rem] xl:gap-6 2xl:h-[113rem]">
      {portfolio.map(
        ({ id, icon, projectName, sinceDate, link, services, description }) => (
          <PortfolioItem
            key={id}
            icon={icon}
            projectName={projectName}
            sinceDate={sinceDate}
            link={link}
            services={services}
            description={description}
            location={location}
          />
        )
      )}
    </div>
  )
}

export default PortfolioList
