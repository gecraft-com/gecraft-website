import CloseIcon from './icons/CloseIcon'

export function Modal({ children, setModal }) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false)
    }
  }

  return (
    <div
      className="bg-primary-600/90 fixed inset-0 z-40 flex items-center justify-center overflow-y-auto"
      onClick={closeModal}
    >
      <div className="bg-primary-100 relative w-full rounded-lg p-3 sm:w-auto sm:p-4 xl:p-9">
        <div
          className="absolute top-5 right-5 cursor-pointer duration-100 hover:scale-110"
          onClick={() => setModal(false)}
        >
          <CloseIcon />
        </div>
        {children}
      </div>
    </div>
  )
}
