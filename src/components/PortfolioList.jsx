import portfolio from '../../data/portfolio.json'
import PortfolioItem from './PortfolioItem'

function PortfolioList() {
  return (
    <div className="flex flex-col gap-2">
      {portfolio.map(({ id, icon, projectName, sinceDate, services }) => (
        <PortfolioItem
          key={id}
          icon={icon}
          projectName={projectName}
          sinceDate={sinceDate}
          services={services}
        />
      ))}
    </div>
  )
}

export default PortfolioList
