import { useState } from 'react'

import axios from 'axios'

import useForm from '../hooks/useForm'

function FormContactUs() {
  const {
    formData,
    isFormValid,
    isNameValid,
    isEmailValid,
    handleInputChange,
    resetForm,
  } = useForm()
  const [submitMessage, setSubmitMessage] = useState(false)

  const nameInput = document.getElementById('name')
  const emailInput = document.getElementById('email')

  if (isNameValid) {
    nameInput.classList.remove('border-red-600')
    nameInput.classList.add('border-green-600')

    if (formData.name === '') {
      nameInput.classList.remove('border-green-600')
      nameInput.classList.add('border-basic')
    }
  }

  if (isEmailValid) {
    emailInput.classList.remove('border-red-600')
    emailInput.classList.add('border-green-600')

    if (formData.email === '') {
      emailInput.classList.remove('border-green-600')
      emailInput.classList.add('border-basic')
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    const nameInput = document.getElementById('name')
    const emailInput = document.getElementById('email')

    if (!isNameValid) {
      nameInput.classList.remove('border-basic')
      nameInput.classList.add('border-red-600')
    }

    if (!isEmailValid) {
      emailInput.classList.remove('border-basic')
      emailInput.classList.add('border-red-600')
    }

    if (!isFormValid) return

    try {
      await axios.post(import.meta.env.VITE_FORMSPREE_ENDPOINT, formData)
      setSubmitMessage(true)
      resetForm()

      setTimeout(() => {
        setSubmitMessage(false)
      }, 1000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="flex min-h-[185vw] w-full flex-wrap justify-center gap-4 md:min-h-[48.6vw] md:flex-nowrap lg:min-h-[29.5vw] 2xl:min-h-[26vw]">
      {submitMessage ? (
        <div className="pt-[30vw] text-center md:self-center md:pt-0">
          <p className="text-green-600 text-[10vw] font-bold md:text-[5vw] lg:text-[2.5vw] 2xl:text-[1.5vw]">
            Thank You!
          </p>
          <p className="mt-[5vw] text-[4.2vw] md:mt-[2vw] md:text-[1.5vw] lg:w-[40vw] lg:text-[1vw] 2xl:mt-[1vw] 2xl:text-[0.75vw]">
            Your form has been successfully submitted. A representative from Glokas will
            be in touch with you shortly to assist with your inquiry. We appreciate your
            interest and look forward to connecting with you soon.
          </p>
        </div>
      ) : (
        <form
          noValidate
          onSubmit={handleSubmit}
          className="grid w-full gap-y-[3vw] pt-[12.84vw] md:grid-cols-2 md:gap-x-[0.45vw] md:gap-y-[0.8vw] md:pt-0 lg:gap-x-[0.25vw] lg:gap-y-[0.5vw] 2xl:gap-x-[0.29vw] 2xl:gap-y-[0.29vw]"
        >
          <input
            id="name"
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleInputChange('name')}
            className="h-[24.11vw] w-full rounded-full border-4 border-basic bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />
          <input
            id="email"
            placeholder="Email"
            name="email"
            type="email"
            onChange={handleInputChange('email')}
            className="h-[24.11vw] w-full rounded-full border-4 border-basic bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
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
