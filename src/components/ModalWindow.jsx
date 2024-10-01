// import {
//   Modal,
//   ModalBody,
//   ModalContent,
//   ModalFooter,
//   ModalHeader,
// } from '@nextui-org/react'

// const ModalWindow = ({ label, description, projects, service, isOpen, onOpenChange }) => {
//   return (
//     <Modal
//       radius="sm"
//       size="5xl"
//       backdrop="blur"
//       scrollBehavior="outside"
//       isOpen={isOpen}
//       onOpenChange={onOpenChange}
//       classNames={{
//         wrapper: '',
//         base: 'max-w-screen-4xl',
//         header: 'flex flex-col gap-1 pt-10 pb-0 px-5 sm:pt-20 sm:px-36',
//         body: 'px-5 pb-20 pt-10 sm:px-36 sm:pb-64',
//         footer: 'border-t border-ourServicesBtn flex items-center h-28 justify-center',
//         closeButton:
//           'flex bg-basic hover:bg-buttonHover mt-5 mr-5 w-14 h-14 2xl:w-20 2xl:h-20 3xl:w-24 3xl:h-24 justify-center text-center text-sm 2xl:text-2xl text-white hover:text-basic items-center',
//       }}
//     >
//       <ModalContent>
//         {(onClose) => (
//           <>
//             <ModalHeader>
//               <h3 className="text-left text-xs uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic">
//                 Our services / {label}
//               </h3>
//             </ModalHeader>
//             <ModalBody></ModalBody>
//             <ModalFooter>

//             </ModalFooter>
//           </>
//         )}
//       </ModalContent>
//       <Cursor />
//     </Modal>
//   )
// }

// export default ModalWindow

import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalWindow = ({ modalIsOpen, onCloseModal, children }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={true}
      shouldReturnFocusAfterClose={false}
      className="relative z-50 w-full max-w-[3343px]"
      overlayClassName="fixed flex items-center flex-col px-10 py-10 top-0 left-0 w-full h-full bg-[#2E2E2ECC] overflow-hidden overflow-y-auto z-40 before:after:block before:after:h-px before:after:grow"
    >
      <div className="reltive rounded-xl bg-bgHeader px-36 pt-20 shadow-lg">
        <button
          type="button"
          onClick={onCloseModal}
          className="absolute right-6 top-6 h-6 w-6 rounded-full bg-basic text-white"
        >
          x
        </button>
        {children}
        <p className="mt-20 text-center text-sm sm:mt-64 sm:text-xl 2xl:text-3xl">
          Do you have a similar project?
        </p>
        <a className="mt-0 text-center text-xl text-basic underline sm:mt-5 sm:text-3xl 2xl:text-5xl">
          Contact us
        </a>

        <button
          onClick={onCloseModal}
          className="h-20 w-96 rounded-full text-sm uppercase hover:bg-buttonHover 2xl:text-base"
        >
          Close
        </button>
      </div>
    </Modal>
  )
}

export default ModalWindow
