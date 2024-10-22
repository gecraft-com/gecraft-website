import { useState } from 'react'

import axios from 'axios'

import useForm from '../hooks/useForm'

function FormContactUs() {
  const { formData, isFormValid, handleInputChange, resetForm } = useForm()
  const [submitMessage, setSubmitMessage] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!isFormValid) return

    try {
      await axios.post(import.meta.env.VITE_FORMSPREE_ENDPOINT, formData)
      setSubmitMessage(true)
      resetForm()

      setTimeout(() => {
        setSubmitMessage(false)
      }, 10000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="flex w-full flex-wrap gap-4 md:flex-nowrap">
      {submitMessage ? (
        <div className="text-balance py-60 text-center">
          <p className="font-helvetica text-green-350 pb-5 text-2xl font-bold">
            Thank You!
          </p>
          <p>
            Your form has been successfully submitted. A representative from Glokas will
            be in touch with you shortly to assist with your inquiry. We appreciate your
            interest and look forward to connecting with you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="grid w-full gap-y-[3vw] pt-[12.84vw] md:grid-cols-2 md:gap-x-[0.45vw] md:gap-y-[0.8vw] md:pt-0 lg:gap-x-[0.25vw] lg:gap-y-[0.5vw] 2xl:gap-x-[0.29vw] 2xl:gap-y-[0.29vw]"
        >
          <input
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleInputChange('name')}
            className="relative h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />
          {/* <ErrorMessage name="name">
              {(msg) => (
                <span className="text-red-400 absolute right-[13.35vw] top-[2vw] md:right-[4.5vw] md:top-[0.7vw] lg:right-[2.7vw] lg:top-[0.4vw] 2xl:text-[0.8vw]">
                  {msg}
                </span>
              )}
            </ErrorMessage> */}
          <input
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleInputChange('email')}
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />

          <input
            placeholder="Phone"
            name="phoneNumber"
            type="text"
            onChange={handleInputChange('phoneNumber')}
            className="h-[24.11vw] w-full rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:col-start-1 md:col-end-3 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />

          <textarea
            placeholder="Message"
            name="message"
            type="text"
            onChange={handleInputChange('message')}
            className="h-[52.32vw] w-full resize-none rounded-[15vw] bg-basic px-[13.35vw] py-[11.55vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:col-start-1 md:col-end-3 md:h-[18vw] md:rounded-[5vw] md:px-[4.5vw] md:py-[3.98vw] md:text-[2.3vw] lg:h-[10.62vw] lg:rounded-[3.4vw] lg:px-[2.7vw] lg:py-[2.35vw] lg:text-[1.3vw]"
          />

          <button className="justify-self-end md:col-start-2">
            <img
              src="img/submit.svg"
              alt="submit"
              className="rounded-full border border-basic bg-transparent px-[7.7vw] py-[8.34vw] duration-150 hover:border-buttonHover hover:bg-buttonHover hover:duration-150 md:px-[2.61vw] md:py-[2.83vw] lg:px-[1.54vw] lg:py-[1.67vw] 2xl:px-[0.86vw] 2xl:py-[0.94vw]"
            />
          </button>
        </form>
      )}
    </div>
  )
}

export default FormContactUs
