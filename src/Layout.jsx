import Footer from './components/Footer'
import Header from './components/Header'

function Layout({ children }) {
  return (
    <>
      <Header />
      <main className="pt-20">{children}</main>
      <Footer />
    </>
  )
}

export default Layout
