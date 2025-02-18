import Icons from './Icons'

export function Modal({ children, setModal }) {
  const closeModal = (e) => {
    if (e.target === e.currentTarget) {
      setModal(false)
    }
  }

  return (
    <div
      className="fixed inset-0 z-40 flex items-center justify-center overflow-y-auto bg-primary-600/90"
      onClick={closeModal}
    >
      <div className="relative w-full rounded-lg bg-primary-100 p-3 sm:w-auto sm:p-4 xl:p-9">
        <div
          className="absolute right-5 top-5 cursor-pointer"
          onClick={() => setModal(false)}
        >
          <Icons name="close" />
        </div>
        {children}
      </div>
    </div>
  )
}
