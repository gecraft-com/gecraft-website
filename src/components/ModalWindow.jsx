import Modal from 'react-modal'

Modal.setAppElement('#root')

const ModalWindow = ({ modalIsOpen, onCloseModal, children, label }) => {
  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={onCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      ariaHideApp={true}
      shouldReturnFocusAfterClose={false}
      className="relative z-50 w-full max-w-[208.938rem]"
      overlayClassName="fixed flex items-center flex-col px-10 py-10 top-0 left-0 w-full h-full bg-[#2E2E2ECC] overflow-hidden overflow-y-auto z-40 before:block after:block before:h-px after:h-px before:grow after:grow"
    >
      <div className="reltive rounded-lg bg-bgHeader pt-20 shadow-lg">
        <button
          type="button"
          onClick={onCloseModal}
          className="absolute right-5 top-5 flex h-24 w-24 items-center justify-center rounded-full bg-basic text-white"
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1 1L7.5 7.5M14 14L7.5 7.5M7.5 7.5L14 1L1 14"
              stroke="white"
              strokeWidth="2"
            />
          </svg>
        </button>
        <div className="pl-36">
          <h3 className="text-left text-xs font-semibold uppercase before:mr-1.5 before:inline-flex before:h-2.5 before:w-2.5 before:rounded-full before:bg-basic">
            Our services / {label}
          </h3>
        </div>
        {children}
        <p className="mt-20 text-center text-sm sm:mt-64 sm:text-xl 2xl:text-3xl">
          Do you have a similar project?
        </p>
        <a className="mt-5 block text-center text-xl text-basic underline sm:mt-5 sm:text-3xl 2xl:text-5xl">
          Contact us
        </a>
        <div className="mt-64 flex h-28 w-full items-center justify-center border-t border-ourServicesBtn text-center">
          <button
            onClick={onCloseModal}
            className="h-20 w-96 rounded-full text-sm uppercase hover:bg-buttonHover 2xl:text-base"
          >
            Close
          </button>
        </div>
      </div>
    </Modal>
  )
}

export default ModalWindow
