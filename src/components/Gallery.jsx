import { useEffect, useState } from 'react'

import projects from '../../data/projects.json'
import Filter from './Filter'
import Projects from './Projects'

function Gallery() {
  const [selectedFilters, setSelectedFilters] = useState([])
  const [filteredItems, setFilteredItems] = useState(projects)

  const handleFilterClick = (selectedCategory) => {
    if (selectedFilters.includes(selectedCategory)) {
      let filters = selectedFilters.filter((el) => el !== selectedCategory)
      setSelectedFilters(filters)
    } else {
      setSelectedFilters([...selectedFilters, selectedCategory])
    }
  }

  useEffect(() => {
    filterItems()
  }, [selectedFilters])

  const filterItems = () => {
    if (selectedFilters.length > 0) {
      let tempItems = selectedFilters
        .map((selectedCategory) =>
          projects.filter((item) => item.categories.includes(selectedCategory))
        )
        .flat()
      setFilteredItems(tempItems)
    } else {
      setFilteredItems([...projects])
    }
  }

  return (
    <>
      <Filter handleFilterClick={handleFilterClick} />
      <Projects filteredItems={filteredItems} location={'gallery'} />
    </>
  )
}

export default Gallery
