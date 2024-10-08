import Carousel from './Carousel'
import Gallery from './Gallery'

function Work() {
  return (
    <div
      id="projects"
      className="relative bg-basic px-5 pb-32 pt-20 md:px-16 md:pt-14 lg:px-16 lg:pt-24"
    >
      <h3 className="top-36 z-10 ml-4 mt-0 w-36 text-left text-xs font-extrabold uppercase text-white before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-white sm:ml-0 md:sticky">
        Our Work
      </h3>
      <Carousel />
      <Gallery />
    </div>
  )
}

export default Work
