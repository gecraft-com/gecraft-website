import { useEffect, useRef } from 'react'

import { Link, useLocation } from 'react-router-dom'

import services from '../../data/services.json'
import { ArrowRightIcon } from './icons/ArrowRightIcon'

const ServicesItem = ({ icon, serviceName, anchor }) => (
  <Link
    to={`/services#${anchor}`}
    className="bg-secondary-100 flex h-47.5 w-36 shrink-0 cursor-pointer flex-col justify-between rounded-lg px-3 py-3.5 first:ml-4 last:mr-4 md:h-66.5 md:w-56 md:rounded-2xl md:px-4.5 md:py-4 first:md:ml-8 last:md:mr-8 xl:h-85.5 xl:w-75 xl:rounded-3xl xl:px-7 xl:py-6.5 first:xl:ml-20 last:xl:mr-20 first:2xl:ml-auto last:2xl:mr-auto"
  >
    <img src={icon} alt={serviceName} className="w-20 md:w-30 xl:w-40" />
    <p className="text-sm leading-4 font-medium break-words whitespace-pre-line md:text-2xl md:leading-7 xl:text-3xl xl:leading-9">
      {serviceName}
    </p>
    <ArrowRightIcon className="w-7 shrink-0 self-end md:w-8.5" />
  </Link>
)

export const Services = () => {
  const { hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [hash])

  const containerRef = useRef(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onWheel = (e) => {
      if (e.deltaY !== 0) {
        e.preventDefault()
        container.scrollLeft += e.deltaY * 0.5
      }
    }

    container.addEventListener('wheel', onWheel, { passive: false })
    return () => container.removeEventListener('wheel', onWheel)
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    let isTouchDragging = false
    let touchStartX = 0
    let touchScrollLeftStart = 0

    const onMouseDown = (e) => {
      isDragging.current = true
      startX.current = e.pageX - container.offsetLeft
      scrollLeftStart.current = container.scrollLeft
      container.classList.add('cursor-grabbing')
    }

    const onMouseMove = (e) => {
      if (!isDragging.current) return
      e.preventDefault()
      const x = e.pageX - container.offsetLeft
      const walk = x - startX.current
      container.scrollLeft = scrollLeftStart.current - walk
    }

    const onMouseUp = () => {
      isDragging.current = false
      container.classList.remove('cursor-grabbing')
    }

    const onTouchStart = (e) => {
      if (e.touches.length !== 1) return
      isTouchDragging = true
      touchStartX = e.touches[0].pageX - container.offsetLeft
      touchScrollLeftStart = container.scrollLeft
      container.classList.add('cursor-grabbing')
    }

    const onTouchMove = (e) => {
      if (!isTouchDragging) return
      if (e.touches.length !== 1) return
      e.preventDefault()
      const x = e.touches[0].pageX - container.offsetLeft
      const walk = x - touchStartX
      container.scrollLeft = touchScrollLeftStart - walk
    }

    const onTouchEnd = () => {
      isTouchDragging = false
      container.classList.remove('cursor-grabbing')
    }

    container.addEventListener('mousedown', onMouseDown)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseUp)
    container.addEventListener('mouseup', onMouseUp)
    container.addEventListener('touchstart', onTouchStart, { passive: false })
    container.addEventListener('touchmove', onTouchMove, { passive: false })
    container.addEventListener('touchend', onTouchEnd)
    container.addEventListener('touchcancel', onTouchEnd)

    return () => {
      container.removeEventListener('mousedown', onMouseDown)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseUp)
      container.removeEventListener('mouseup', onMouseUp)
      container.removeEventListener('touchstart', onTouchStart)
      container.removeEventListener('touchmove', onTouchMove)
      container.removeEventListener('touchend', onTouchEnd)
      container.removeEventListener('touchcancel', onTouchEnd)
    }
  }, [])

  return (
    <div className="absolute top-45 left-0 w-full overflow-hidden md:top-48 xl:top-64">
      <div
        ref={containerRef}
        className="hide-scrollbar flex w-full max-w-full cursor-grab gap-1.5 overflow-x-auto select-none md:gap-4 xl:gap-6"
      >
        {services.map(({ id, icon, serviceName, anchor }) => (
          <ServicesItem key={id} icon={icon} serviceName={serviceName} anchor={anchor} />
        ))}
      </div>
    </div>
  )
}
