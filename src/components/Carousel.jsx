function Carousel() {
  function SlideElement() {
    return (
      <span className="flex items-center">
        Our work
        <svg
          className="mx-[4.1vw] h-[5.4vw] w-[5.4vw] md:mx-[2.3vw] md:h-[2.91vw] md:w-[2.91vw] lg:mx-[2.61vw] lg:h-[3.33vw] lg:w-[3.33vw] 2xl:h-[3.37vw] 2xl:w-[3.37vw]"
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
    )
  }

  return (
    <div className="absolute left-0 top-[28vw] flex w-full items-center overflow-hidden ease-in md:top-[7.8vw]">
      <p className="infinit-text animation-timeline flex w-full items-center whitespace-nowrap text-[18.4vw] text-white md:text-[9.73vw] lg:text-[11.03vw]">
        <SlideElement />
        <SlideElement />
        <SlideElement />
        <SlideElement />
      </p>
    </div>
  )
}

export default Carousel
