import { useEffect } from 'react'

import { useLocation } from 'react-router-dom'

import services from '../../data/services.json'
import { ServiceItem } from './ServiceItem'

export const ServicesList = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) return
    const element = document.getElementById(hash.replace('#', ''))
    if (!element) return

    const headerHeight = document.querySelector('header')?.offsetHeight || 0
    const extraOffset = 8

    const elementTop = element.getBoundingClientRect().top + window.scrollY
    const targetY = Math.max(0, elementTop - headerHeight - extraOffset)

    window.scrollTo({ top: targetY, behavior: 'smooth' })
  }, [hash])

  return (
    <div className="mt-6 flex flex-col gap-3 sm:mt-11 sm:gap-6 xl:mt-14">
      {services.map((service, index) => (
        <ServiceItem key={service.id} service={service} odd={index % 2 === 0} />
      ))}
    </div>
  )
}
