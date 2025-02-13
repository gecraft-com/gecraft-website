import PortfolioList from './components/PortfolioList'
import Services from './components/Services'
import Layout from './Layout'

function App() {
  return (
    <Layout>
      <Services />
      <p className="mt-6 text-lg font-semibold leading-6 sm:mt-12 sm:text-3xl xl:mt-14 xl:text-5xl 2xl:mt-20">
        Tailored solutions: bespoke design <br className="hidden sm:block" /> and
        development for your business challenges
      </p>
      <PortfolioList />
    </Layout>
  )
}

export default App
