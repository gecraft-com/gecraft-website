import Footer from './components/Footer'
import Header from './components/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="mx-auto max-w-[120.188rem] px-4 pb-6 pt-20 sm:px-8 xl:px-20 xl:pt-28 2xl:px-40">
        {children}
      </main>
      <Footer />
    </>
  )
}

export default Layout
