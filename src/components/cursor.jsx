import { useState } from 'react'

const Cursor = () => {
  const [cursorX, setCursorX] = useState('')
  const [cursorY, setCursorY] = useState('')

  window.addEventListener('mousemove', (e) => {
    setCursorX(e.pageX)
    setCursorY(e.pageY)
  })

  return (
    <div
      className="pointer-events-none fixed left-[1/2] top-1/2 z-50 h-[2vw] w-[2vw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#EBEBEB] bg-[#1A1A1ACC] opacity-100"
      style={{
        left: cursorX + 'px',
        top: cursorY + 'px',
      }}
    ></div>
  )
}

export default Cursor
