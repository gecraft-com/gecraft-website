import { useEffect, useRef, useState } from 'react'

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)

  const cursorRef = useRef(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const links = Array.from(document.getElementsByTagName('a'))
    const buttons = Array.from(document.getElementsByTagName('button'))
    const labels = Array.from(document.getElementsByTagName('label'))

    links.forEach((link) => {
      link.addEventListener('mouseover', handleMouseOver)
      link.addEventListener('mouseleave', handleMouseLeave)
      link.addEventListener('mousedown', handleMouseDown)
      link.addEventListener('mouseup', handleMouseUp)
    })

    buttons.forEach((button) => {
      button.addEventListener('mouseover', handleMouseOver)
      button.addEventListener('mouseleave', handleMouseLeave)
      button.addEventListener('mousedown', handleMouseDown)
      button.addEventListener('mouseup', handleMouseUp)
    })

    labels.forEach((label) => {
      label.addEventListener('mouseover', handleMouseOver)
      label.addEventListener('mouseleave', handleMouseLeave)
      label.addEventListener('mousedown', handleMouseDown)
      label.addEventListener('mouseup', handleMouseUp)
    })

    window.addEventListener('mousemove', (e) => {
      setCursorX(e.pageX)
      setCursorY(e.pageY)
    })

    document.addEventListener('mouseleave', () => {
      cursor.classList.add('hidden')
    })

    document.addEventListener('mouseover', () => {
      cursor.classList.remove('hidden')
    })

    function handleMouseOver() {
      cursor.classList.add('scale-150', 'bg-cursorHover')
    }

    function handleMouseLeave() {
      cursor.classList.remove('scale-150', 'bg-cursorHover')
    }

    function handleMouseDown() {
      cursor.classList.add('scale-50')
    }

    function handleMouseUp() {
      cursor.classList.remove('scale-50')
    }

    return () => {
      links.forEach((link) => {
        link.removeEventListener('mouseover', handleMouseOver)
        link.removeEventListener('mouseleave', handleMouseLeave)
        link.removeEventListener('mousedown', handleMouseDown)
        link.removeEventListener('mouseup', handleMouseUp)
      })

      buttons.forEach((button) => {
        button.removeEventListener('mouseover', handleMouseOver)
        button.removeEventListener('mouseleave', handleMouseLeave)
        button.removeEventListener('mousedown', handleMouseDown)
        button.removeEventListener('mouseup', handleMouseUp)
      })

      labels.forEach((label) => {
        label.removeEventListener('mouseover', handleMouseOver)
        label.removeEventListener('mouseleave', handleMouseLeave)
        label.removeEventListener('mousedown', handleMouseDown)
        label.removeEventListener('mouseup', handleMouseUp)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      style={{ left: cursorX + 'px', top: cursorY + 'px' }}
      id="cursor"
      className="bg-cursor pointer-events-none absolute z-50 h-7 w-7 -translate-x-1/2 -translate-y-1/2 select-none rounded-full border border-solid border-bgHeader"
    ></div>
  )
}

export default Cursor
