import { useEffect, useState } from 'react'

const Cursor = () => {
  const [cursorX, setCursorX] = useState(0)
  const [cursorY, setCursorY] = useState(0)

  useEffect(() => {
    const cursor = document.getElementById('cursor')
    const links = Array.from(document.getElementsByTagName('a'))
    const buttons = Array.from(document.getElementsByTagName('button'))

    links.forEach((link) => {
      link.addEventListener('mouseover', () => {
        cursor.classList.add('scale-150', 'bg-[#1A1A1A99]')
      })
    })

    links.forEach((link) => {
      link.addEventListener('mouseleave', () => {
        cursor.classList.remove('scale-150', 'bg-[#1A1A1A99]')
      })
    })

    buttons.forEach((button) => {
      button.addEventListener('mouseover', () => {
        cursor.classList.add('scale-150', 'bg-[#1A1A1A99]')
      })
    })

    buttons.forEach((button) => {
      button.addEventListener('mouseleave', () => {
        cursor.classList.remove('scale-150', 'bg-[#1A1A1A99]')
      })
    })
    links.forEach((link) => {
      link.addEventListener('mousedown', () => {
        cursor.classList.add('scale-50')
      })
    })

    links.forEach((link) => {
      link.addEventListener('mouseup', () => {
        cursor.classList.remove('scale-50')
      })
    })

    buttons.forEach((button) => {
      button.addEventListener('mousedown', () => {
        cursor.classList.add('scale-50')
      })
    })

    buttons.forEach((button) => {
      button.addEventListener('mouseup', () => {
        cursor.classList.remove('scale-50')
      })
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
  }, [])

  return (
    <div
      style={{ left: cursorX + 'px', top: cursorY + 'px' }}
      id="cursor"
      className="pointer-events-none absolute z-50 h-7 w-7 -translate-x-1/2 -translate-y-1/2 select-none rounded-full border border-solid border-bgHeader bg-[#1A1A1ACC]"
    ></div>
  )
}

export default Cursor
