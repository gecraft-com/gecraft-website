import Carousel from './Carousel'
import Gallery from './Gallery'

function Work() {
  return (
    <div id="projects" className="relative bg-basic px-5 pb-32 pt-20 sm:px-14 sm:pt-24">
      <h3 className="sticky top-10 z-10 ml-4 mt-0 w-36 text-left text-xs uppercase text-white before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-white sm:ml-0">
        Our Work
      </h3>
      <Carousel />
      <Gallery />
    </div>
  )
}

export default Work
