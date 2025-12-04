import { useState } from 'react'

import clsx from 'clsx'

import { ArrowIcon } from './icons/ArrowIcon'

export const GCDropdown = ({ children, budget, value = '', onSelect, name }) => {
  const [isShow, setIsShow] = useState(false)

  const handleClick = () => {
    setIsShow(!isShow)
  }

  return (
    <div className="relative">
      <div
        className={clsx(
          'text-black-500 bg-black-00 border-black-500 cursor-pointer rounded-lg border-2 select-none',
          {
            '': !isShow,
            'rounded-b-none border-b-0': isShow,
          }
        )}
      >
        <div
          className="flex h-11 items-center justify-between px-4"
          onClick={handleClick}
        >
          <div className="flex items-center">
            <p className={clsx({ 'text-black-950': Boolean(value) })}>
              {value ? value : children}
            </p>
          </div>
          <ArrowIcon
            className={clsx('duration-100', {
              'rotate-0': !isShow,
              'rotate-180': isShow,
            })}
          />
        </div>
      </div>
      <div
        className={clsx(
          'bg-black-00 border-black-500 absolute top-11.5 right-0 left-0 z-20 flex w-full flex-col overflow-hidden rounded-b-lg transition-[max-height]',
          {
            'max-h-0 border-x-0 border-b-0': !isShow,
            'max-h-96 border-x-2 border-b-2': isShow,
          }
        )}
      >
        <div className="px-4">
          <div className="custom-scrollbar overflow-y-auto">
            <div className="scrollbar-overlay"></div>
            {budget?.map((item) => (
              <div
                className="border-black-100 flex cursor-pointer items-center gap-3 border-t py-3.5 first:pt-1.5"
                key={item}
                onClick={() => {
                  if (onSelect) {
                    onSelect({ target: { name, value: item } })
                    setIsShow(false)
                  }
                }}
                role="option"
              >
                <span className="hover:text-black-950 whitespace-pre-line">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
