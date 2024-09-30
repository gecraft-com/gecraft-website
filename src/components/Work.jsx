import Carousel from './carousel'

const Work = () => {
  return (
    <div id="projects" className="bg-basic px-14 pt-24">
      <h3 className="sticky top-10 ml-4 mt-0 w-36 text-left text-xs uppercase text-white before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-white sm:ml-0">
        Our Work
      </h3>
      <Carousel />
    </div>
  )
}

export default Work
