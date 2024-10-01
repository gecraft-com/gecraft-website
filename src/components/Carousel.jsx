import { useLayoutEffect, useRef } from 'react'

import gsap from 'gsap'

const Carousel = () => {
  const textRef = useRef()
  const spanRef = useRef()

  useLayoutEffect(() => {
    gsap.fromTo(
      textRef.current,
      { x: -spanRef.current.clientWidth + 'px' },
      { x: 0, duration: 10, repeat: -1, ease: 'none' }
    )
  }, [])

  return (
    <div className="animate-wiggle absolute left-0 top-24 flex items-center ease-in">
      <p className="flex items-center text-[380px] text-white" ref={textRef}>
        <span ref={spanRef} className="flex w-[1750px] items-center">
          Our work
          <svg
            className="ml-16"
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58 0L59.3036 3.52301C68.4193 28.1577 87.8423 47.5807 112.477 56.6964L116 58L112.477 59.3036C87.8423 68.4193 68.4193 87.8423 59.3036 112.477L58 116L56.6964 112.477C47.5807 87.8423 28.1577 68.4193 3.52301 59.3036L0 58L3.523 56.6964C28.1577 47.5807 47.5807 28.1577 56.6964 3.523L58 0Z"
              fill="white"
            />
          </svg>
        </span>
        <span ref={spanRef} className="flex w-[1750px] items-center">
          Our work
          <svg
            className="ml-16"
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58 0L59.3036 3.52301C68.4193 28.1577 87.8423 47.5807 112.477 56.6964L116 58L112.477 59.3036C87.8423 68.4193 68.4193 87.8423 59.3036 112.477L58 116L56.6964 112.477C47.5807 87.8423 28.1577 68.4193 3.52301 59.3036L0 58L3.523 56.6964C28.1577 47.5807 47.5807 28.1577 56.6964 3.523L58 0Z"
              fill="white"
            />
          </svg>
        </span>
        <span ref={spanRef} className="flex w-[1750px] items-center">
          Our work
          <svg
            className="ml-16"
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58 0L59.3036 3.52301C68.4193 28.1577 87.8423 47.5807 112.477 56.6964L116 58L112.477 59.3036C87.8423 68.4193 68.4193 87.8423 59.3036 112.477L58 116L56.6964 112.477C47.5807 87.8423 28.1577 68.4193 3.52301 59.3036L0 58L3.523 56.6964C28.1577 47.5807 47.5807 28.1577 56.6964 3.523L58 0Z"
              fill="white"
            />
          </svg>
        </span>
        <span ref={spanRef} className="flex w-[1750px] items-center">
          Our work
          <svg
            className="ml-16"
            width="116"
            height="116"
            viewBox="0 0 116 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M58 0L59.3036 3.52301C68.4193 28.1577 87.8423 47.5807 112.477 56.6964L116 58L112.477 59.3036C87.8423 68.4193 68.4193 87.8423 59.3036 112.477L58 116L56.6964 112.477C47.5807 87.8423 28.1577 68.4193 3.52301 59.3036L0 58L3.523 56.6964C28.1577 47.5807 47.5807 28.1577 56.6964 3.523L58 0Z"
              fill="white"
            />
          </svg>
        </span>
      </p>
    </div>
  )
}

export default Carousel
