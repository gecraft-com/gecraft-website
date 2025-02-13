import PortfolioList from './components/PortfolioList'
import Services from './components/Services'
import Layout from './Layout'

function App() {
  return (
    <Layout>
      <Services />
      <p className="mt-6 text-lg font-semibold leading-6">
        Tailored solutions: bespoke design and development for your business challenges
      </p>
      <PortfolioList />
    </Layout>
  )
}

export default App
