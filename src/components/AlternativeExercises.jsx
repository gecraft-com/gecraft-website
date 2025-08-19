import { useEffect, useRef } from 'react'

import clsx from 'clsx'
import { Link } from 'react-router-dom'

const AlternativeExercisesItem = () => (
  <div className="bg-secondary-50 flex max-w-80 shrink-0 gap-3 rounded-lg p-3 md:max-w-114">
    <img
      src="/exercise.png"
      alt="exercise"
      className="h-25 w-25 shrink-0 rounded object-cover"
    />
    <div>
      <Link to="/exercises/1" className="leading-4 font-semibold">
        Workout name
      </Link>
      <hr className="text-black-100 my-2 w-full" />
      <div className="flex gap-2 leading-4">
        <p className="text-secondary-600 text-sm underline">Other</p>
        <p className="text-secondary-600 text-sm underline">Lower back</p>
      </div>
      <p className="text-black-400 mt-2 line-clamp-2 text-sm leading-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero tempore, quis
        soluta ea necessitatibus nihil omnis magni earum dicta fuga.
      </p>
    </div>
  </div>
)

const items = Array.from({ length: 6 }).map((_, i) => (
  <AlternativeExercisesItem key={i} />
))

export const AlternativeExercises = ({ className }) => {
  const containerRef = (useRef < HTMLDivElement) | (null > null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const scrollLeftStart = useRef(0)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const onWheel = (e: WheelEvent) => {
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

    // Touch state
    let isTouchDragging = false
    let touchStartX = 0
    let touchScrollLeftStart = 0

    const onMouseDown = (e: MouseEvent) => {
      isDragging.current = true
      startX.current = e.pageX - container.offsetLeft
      scrollLeftStart.current = container.scrollLeft
      container.classList.add('cursor-grabbing')
    }

    const onMouseMove = (e: MouseEvent) => {
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

    // Touch events
    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length !== 1) return
      isTouchDragging = true
      touchStartX = e.touches[0].pageX - container.offsetLeft
      touchScrollLeftStart = container.scrollLeft
      container.classList.add('cursor-grabbing')
    }

    const onTouchMove = (e: TouchEvent) => {
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
    <div className={clsx('mt-7 overflow-hidden', className)}>
      <h3 className="mb-3 font-semibold">Alternative exercises:</h3>
      <div
        ref={containerRef}
        className="hide-scrollbar flex w-full max-w-full cursor-grab gap-4 overflow-x-auto select-none"
      >
        {items}
      </div>
    </div>
  )
}
