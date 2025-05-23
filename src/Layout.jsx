import { useEffect, useState } from 'react'

import { Outlet } from 'react-router-dom'

import CookiesBanner from './components/CookiesBanner'
import Footer from './components/Footer'
import Header from './components/Header'
import GoToTopIcon from './components/icons/GoToTopIcon'

function Layout() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300)
    }

    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className="relative">
      <Header />
      <main className="mx-auto max-w-[120.188rem] overflow-x-hidden px-4 pb-6 pt-20 sm:px-8 xl:px-20 xl:pb-9 xl:pt-28 2xl:px-40 2xl:pb-11">
        {<Outlet />}
      </main>
      <Footer />

      <a
        href="#"
        className={`fixed bottom-5 right-5 duration-200 ${visible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
      >
        <GoToTopIcon />
      </a>
      <CookiesBanner />
    </div>
  )
}

export default Layout
