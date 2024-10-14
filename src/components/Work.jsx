import Carousel from './Carousel'
import Gallery from './Gallery'

function Work() {
  return (
    <div
      id="projects"
      className="relative bg-basic px-[5.13vw] pb-[33vw] pt-[20vw] md:px-[5.92vw] md:pb-[5.3vw] md:pt-[5.82vw] lg:px-[3.13vw] lg:py-[5.2vw] 2xl:px-[3.23vw] 2xl:pb-[3.81vw]"
    >
      <h3 className="top-36 z-10 ml-0 mt-0 whitespace-nowrap text-left text-[3.08vw] font-extrabold uppercase text-white before:mr-[1.3vw] before:inline-flex before:h-[2.31vw] before:w-[2.31vw] before:rounded-full before:bg-white md:ml-0 md:text-[1.06vw] md:before:mr-[0.45vw] md:before:h-[0.8vw] md:before:w-[0.8vw] lg:text-[0.63vw] lg:before:mr-[0.27vw] lg:before:h-[0.47vw] lg:before:w-[0.47vw] 2xl:text-[0.35vw] 2xl:before:mr-[0.15vw] 2xl:before:h-[0.263vw] 2xl:before:w-[0.263vw]">
        Our Work
      </h3>
      <Carousel />
      <Gallery />
    </div>
  )
}

export default Work
