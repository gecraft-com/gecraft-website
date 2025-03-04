import portfolio from '../../data/portfolio.json'
import { useWindowWidth } from '../hooks/useWindowWidth'
import PortfolioItem from './PortfolioItem'

function PortfolioList({ location = '' }) {
  const windowWidth = useWindowWidth()

  return (
    <div className="mt-4 flex w-full flex-col flex-wrap gap-2 sm:mt-6 sm:gap-4 xl:mt-9 xl:h-[117.57rem] xl:gap-6 1366:h-[113.71rem] 1440:h-[115.1rem] 1536:h-[116.6rem] 1680:h-[123.5rem] 2xl:h-[108.1rem]">
      {portfolio.map(
        ({
          id,
          icon1,
          icon2,
          icon3,
          icon4,
          projectName,
          sinceDate,
          link,
          services,
          description,
        }) => (
          <PortfolioItem
            key={id}
            icon={
              (windowWidth < 640 && icon1) ||
              (windowWidth >= 640 && windowWidth < 1280 && icon2) ||
              (windowWidth >= 1280 && windowWidth < 1920 && icon3) ||
              (windowWidth >= 1920 && icon4) ||
              undefined
            }
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
