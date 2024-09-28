import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
} from '@nextui-org/react'

import Cursor from './Cursor'

const ModalWindow = ({ label, description, projects, service, isOpen, onOpenChange }) => {
  return (
    <Modal
      radius="sm"
      size="5xl"
      backdrop="blur"
      scrollBehavior="outside"
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      classNames={{
        wrapper: '',
        base: 'max-w-screen-4xl',
        header: 'flex flex-col gap-1 pt-10 pb-0 px-5 sm:pt-20 sm:px-36',
        body: 'px-5 pb-20 pt-10 sm:px-36 sm:pb-64',
        footer: 'border-t border-ourServicesBtn flex items-center h-28 justify-center',
        closeButton:
          'flex bg-basic hover:bg-buttonHover mt-5 mr-5 w-14 h-14 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 justify-center text-center text-sm 2xl:text-2xl text-white hover:text-basic items-center',
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader>
              <h3 className="text-left text-xs uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic">
                Our services / {label}
              </h3>
            </ModalHeader>
            <ModalBody>
              <div className="block justify-between sm:flex">
                <div className="w-full sm:w-2/12 3xl:w-3/12">
                  <h4 className="text-4xl sm:text-3xl 2xl:text-5xl 3xl:text-7xl 4xl:text-9xl">
                    {label}
                  </h4>
                  <p className="mt-2.5 block w-full text-sm uppercase sm:hidden">
                    {service}
                  </p>
                </div>
                <div className="mt-10 w-full sm:mt-0 sm:w-8/12">
                  <p className="text-2xl sm:text-4xl 3xl:text-6xl 3xl:leading-tight">
                    {description}
                  </p>
                  <h5 className="mt-14 text-left text-xs uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic sm:mt-24">
                    Related Projects
                  </h5>
                  <ul className="mt-4 flex flex-col gap-y-10 sm:mt-12 sm:flex-row sm:justify-items-start sm:gap-x-2.5 sm:gap-y-0">
                    {projects.map(({ id, client, img }) => (
                      <li key={id} className="w-full sm:w-8/12">
                        <button>
                          <img src={img} alt={client} />
                          <div className="mt-4 block sm:mt-5 sm:flex sm:gap-x-10 2xl:gap-x-5">
                            <div className="w-5/12 2xl:w-2/6">
                              <p className="text-xs uppercase">client</p>
                              <p className="mt-1 text-base uppercase sm:mt-4">{client}</p>
                            </div>
                            <div>
                              <p className="mt-3 text-xs uppercase sm:mt-0">service</p>
                              <p className="mt-1 text-sm uppercase sm:mt-4 sm:text-base">
                                {service}
                              </p>
                            </div>
                          </div>
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <p className="mt-20 text-center text-sm sm:mt-64 sm:text-xl 2xl:text-3xl">
                Do you have a similar project?
              </p>
              <a className="mt-0 text-center text-xl text-basic underline sm:mt-5 sm:text-3xl 2xl:text-5xl">
                Contact us
              </a>
            </ModalBody>
            <ModalFooter>
              <button
                onClick={onClose}
                className="h-20 w-96 rounded-full text-sm uppercase hover:bg-buttonHover 2xl:text-base"
              >
                Close
              </button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
      <Cursor />
    </Modal>
  )
}

export default ModalWindow
