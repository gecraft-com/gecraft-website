import { useEffect, useState } from 'react'

import { Button, Link } from '@nextui-org/react'

import appBarButtons from '../../data/appBarButtons.json'

const GroupButton = () => {
  // const [width, setWidth] = useState(0)

  // const getStickyGroupButton = () => {
  //   const groupButton = document.getElementById('groupButton')
  //   const text = document.getElementById('text')

  //   const coord = groupButton.getBoundingClientRect().top

  //   window.addEventListener('resize', () => {
  //     const width = document.body.clientWidth
  //     setWidth(width)
  //   })

  //   window.onscroll = () => {
  //     if (window.scrollY > coord - 40) {
  //       groupButton.classList.add('fixed')
  //       text.classList.add('mt-48')
  //     } else if (window.scrollY <= 1270) {
  //       groupButton.classList.remove('fixed')
  //       text.classList.remove('mt-48')
  //     }
  //   }
  // }

  // useEffect(getStickyGroupButton, [width])

  return (
    <div
      id="groupButton"
      className="top-10 z-50 hidden h-24 items-center gap-2.5 rounded-full bg-buttonGroup p-1.5 sm:flex"
    >
      <Button
        data-hover="false"
        radius="full"
        className="z-20 h-full bg-buttonHover hover:opacity-100"
        href="#"
        as={Link}
      >
        <img src="img/logo.svg" alt="logo GeCraft" className="h-14 w-14" />
      </Button>
      {appBarButtons.map(({ label }, index) => (
        <Button
          data-hover="false"
          key={index}
          radius="full"
          className="h-full bg-transparent px-11 text-xl font-bold text-basic last:bg-buttonHover hover:bg-buttonHover hover:opacity-100"
          as={Link}
          href="#"
        >
          {label}
        </Button>
      ))}
    </div>
  )
}

export default GroupButton
