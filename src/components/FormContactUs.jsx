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
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
  })
  const [wasSubmitAttempted, setWasSubmitAttempted] = useState(false)
  const [isSubmittingForm, setIsSubmittingForm] = useState(false)

  const handleBlur = (fieldName) => () => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }))
  }

  const getInputClassName = (fieldName, isValid, value) => {
    const baseClasses =
      'animation-timeline animate-emergence h-[24.11vw] w-full rounded-full border-4 bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]'

    const shouldShowValidation = touchedFields[fieldName] || wasSubmitAttempted

    if (!shouldShowValidation) {
      return `${baseClasses} border-basic`
    }

    if (fieldName === 'name' || fieldName === 'email') {
      if (!value) {
        return `${baseClasses} border-red-500`
      }
      return `${baseClasses} ${isValid ? 'border-green-600' : 'border-red-600'}`
    }

    return `${baseClasses} border-basic`
  }

  const getErrorMessage = (fieldName) => {
    if (!formData[fieldName]) {
      return 'This field is required'
    }
    if (fieldName === 'email' && !isEmailValid) {
      return 'Please enter a valid email'
    }
    if (fieldName === 'name' && !isNameValid) {
      return 'Please enter a valid name'
    }
    return ''
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    setIsSubmittingForm(true)
    setWasSubmitAttempted(true)

    if (!formData.name || !formData.email || !isFormValid) {
      setIsSubmittingForm(false)
      return
    }

    try {
      await axios.post(import.meta.env.VITE_FORMSPREE_ENDPOINT, formData)
      setSubmitMessage(true)
      resetForm()
      setWasSubmitAttempted(false)
      setTouchedFields({
        name: false,
        email: false,
      })
      setTimeout(() => {
        setIsSubmittingForm(false)
        setSubmitMessage(false)
      }, 10000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  return (
    <div className="flex min-h-[185vw] w-full flex-wrap justify-center gap-4 md:min-h-[48.6vw] md:flex-nowrap lg:min-h-[29.5vw] 2xl:min-h-[26vw]">
      {submitMessage ? (
        <div className="pt-[30vw] text-center md:self-center md:pt-0">
          <p className="text-[10vw] font-bold text-green-600 md:text-[5vw] lg:text-[2.5vw] 2xl:text-[1.5vw]">
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
          <div className="relative">
            <input
              placeholder="Name *"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange('name')}
              onBlur={handleBlur('name')}
              className={getInputClassName('name', isNameValid, formData.name)}
            />
            {wasSubmitAttempted && !isNameValid && (
              <span className="absolute right-[13.35vw] top-[2vw] text-[4.11vw] text-red-500 md:right-[4.5vw] md:top-[0.8vw] md:text-[1.42vw] lg:right-[2.7vw] lg:top-[0.4vw] lg:text-[0.84vw] 2xl:top-[0.6vw] 2xl:text-[0.47vw]">
                {getErrorMessage('name')}
              </span>
            )}
          </div>

          <div className="relative">
            <input
              placeholder="Email *"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleInputChange('email')}
              onBlur={handleBlur('email')}
              className={getInputClassName('email', isEmailValid, formData.email)}
            />
            {wasSubmitAttempted && !isEmailValid && (
              <span className="absolute right-[13.35vw] top-[2vw] text-[4.11vw] text-red-500 md:right-[4.5vw] md:top-[0.8vw] md:text-[1.42vw] lg:right-[2.7vw] lg:top-[0.4vw] lg:text-[0.84vw] 2xl:top-[0.6vw] 2xl:text-[0.47vw]">
                {getErrorMessage('email')}
              </span>
            )}
          </div>

          <input
            placeholder="Phone"
            name="phoneNumber"
            type="text"
            value={formData.phoneNumber}
            onChange={handleInputChange('phoneNumber')}
            className="animation-timeline h-[24.11vw] w-full animate-emergence rounded-full bg-basic px-[13.35vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:col-start-1 md:col-end-3 md:h-[8.3vw] md:px-[4.5vw] md:text-[2.3vw] lg:h-[4.9vw] lg:px-[2.7vw] lg:text-[1.3vw] 2xl:h-[4.94vw]"
          />

          <textarea
            placeholder="Message"
            name="message"
            value={formData.message}
            onChange={handleInputChange('message')}
            className="animation-timeline h-[52.32vw] w-full animate-emergence resize-none rounded-[15vw] bg-basic px-[13.35vw] py-[11.55vw] text-[7vw] text-white placeholder:text-white placeholder:duration-150 placeholder:focus:text-opacity-15 md:col-start-1 md:col-end-3 md:h-[18vw] md:rounded-[5vw] md:px-[4.5vw] md:py-[3.98vw] md:text-[2.3vw] lg:h-[10.62vw] lg:rounded-[3.4vw] lg:px-[2.7vw] lg:py-[2.35vw] lg:text-[1.3vw]"
          />

          <button
            disabled={isSubmittingForm}
            className="animation-timeline animate-emergence justify-self-end md:col-start-2"
          >
            {isSubmittingForm ? (
              <img
                src="img/spinner.svg"
                alt="spinner"
                className="rounded-full border border-buttonGroup bg-transparent px-[8.6vw] py-[8.6vw] md:px-[3.051vw] md:py-[3.051vw] lg:px-[1.722vw] lg:py-[1.722vw] 2xl:w-[6.824vw] 2xl:px-[1.5vw] 2xl:py-[1.5vw]"
              />
            ) : (
              <img
                src="img/submit.svg"
                alt="submit"
                className="rounded-full border border-basic bg-transparent px-[7.7vw] py-[8.34vw] duration-150 hover:duration-150 active:border-buttonHover active:bg-buttonHover md:px-[2.61vw] md:py-[2.83vw] 1024:hover:border-buttonHover 1024:hover:bg-buttonHover 1024:active:bg-transparent lg:px-[1.54vw] lg:py-[1.67vw] 2xl:w-[6.824vw] 2xl:px-[1.5vw] 2xl:py-[1.634vw]"
              />
            )}
          </button>
        </form>
      )}
    </div>
  )
}

export default FormContactUs
