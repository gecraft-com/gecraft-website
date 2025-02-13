import GCButton from './GCButton'

function Form() {
  return (
    <form action="" className="hidden w-72 gap-3 sm:flex sm:flex-col xl:w-96">
      <input
        placeholder="Your name"
        type="text"
        className="border-primary-600 h-12 rounded-lg border-2 px-4 placeholder:text-lg placeholder:text-black"
      />
      <textarea
        placeholder="Your question"
        type="text"
        className="border-primary-600 h-24 rounded-lg border-2 px-4 py-3 placeholder:text-lg placeholder:text-black"
      />
      <GCButton type="green-form">Contact us</GCButton>
    </form>
  )
}

export default Form
