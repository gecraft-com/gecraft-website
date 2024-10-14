import Filter from './Filter'
import Projects from './Projects'

function Gallery() {
  return (
    <>
      <Filter />
      <Projects location={'gallery'} />
    </>
  )
}

export default Gallery
