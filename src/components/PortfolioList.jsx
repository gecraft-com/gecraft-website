import portfolio from '../../data/portfolio.json'
import PortfolioItem from './PortfolioItem'

function PortfolioList() {
  return (
    <div className="flex flex-col gap-2 sm:mt-6 sm:gap-4 xl:mt-9 xl:gap-6">
      {portfolio.map(({ id, icon, projectName, sinceDate, services, description }) => (
        <PortfolioItem
          key={id}
          icon={icon}
          projectName={projectName}
          sinceDate={sinceDate}
          services={services}
          description={description}
        />
      ))}
    </div>
  )
}

export default PortfolioList
