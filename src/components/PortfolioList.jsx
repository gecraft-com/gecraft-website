import portfolio from '../../data/portfolio.json'
import { useWindowWidth } from '../hooks/useWindowWidth'
import { PortfolioItem } from './PortfolioItem'

export const PortfolioList = ({ location = '' }) => {
  const windowWidth = useWindowWidth()

  return (
    <div className="mt-4 grid w-full gap-3 md:mt-6 md:gap-4 xl:mt-9 xl:grid-cols-2 xl:gap-6">
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
