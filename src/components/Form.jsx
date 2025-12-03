import { useEffect, useRef, useState } from 'react'

import clsx from 'clsx'

import {
  validateEmail,
  validateField,
  validateGoals,
  validateName,
} from '../shared/validateForm'
import { GCButton } from './GCButton'
import { GCDropdown } from './GCDropdown'
import { GCInput } from './GCInput'

const budget = [
  '$5000 - $10000',
  '$10000 - $50000',
  '$50000 - $250000',
  '$250000 - $500000',
  "I don't know yet",
]

export const Form = ({ onPage = false }) => {
  const [submitMessage, setSubmitMessage] = useState(false)
  const [submitErrors, setSubmitErrors] = useState(null)
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    goals: false,
  })
  const [sending, setSending] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    goals: '',
  })
  const [errors, setErrors] = useState({})

  const apiBase = import.meta.env.DEV ? '/.netlify/functions' : '/api'

  const timeoutRef = useRef(null)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouchedFields((prev) => ({ ...prev, [name]: true }))
    const error = validateField(name, value, onPage)
    setErrors((prev) => ({ ...prev, [name]: error }))
  }

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      goals: '',
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setTouchedFields({
      name: true,
      email: true,
      goals: true,
    })
    setErrors({})
    setSubmitErrors(null)

    const nameError = validateName(formData.name, onPage)
    const emailError = validateEmail(formData.email)
    const goalsError = validateGoals(formData.goals)

    if ((onPage && nameError) || emailError || goalsError) {
      setErrors({ name: nameError, email: emailError, goals: goalsError })
      return
    }

    try {
      setSending(true)
      const response = await fetch(`${apiBase}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()
      setSending(false)

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setSubmitMessage(true)
      resetForm()
      setTouchedFields({
        name: false,
        email: false,
        goals: false,
      })

      timeoutRef.current = setTimeout(() => {
        setSubmitMessage(false)
      }, 60000)
    } catch (error) {
      setSending(false)
      console.error('Error submitting form:', error)
      setSubmitErrors(error.message || 'Failed to send message. Please try again.')
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current)
      }
    }
  }, [])

  return (
    <>
      {submitMessage ? (
        <div className="w-full max-w-120">
          <p className="text-primary-500 mt-10 text-center text-3xl font-semibold">
            Thank You!
          </p>
          <p className="mt-3 text-center">
            Your form has been successfully submitted. A representative from Glokas will
            be in touch with you shortly to assist with your inquiry. We appreciate your
            interest and look forward to connecting with you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={clsx('text-black-500 text-lg', {
            'mt-6 grid w-full grid-cols-1 gap-2 md:mt-8 md:grid-cols-2 md:gap-4 xl:mt-0':
              onPage,
            'hidden w-72 gap-3 md:flex md:flex-col xl:w-96': !onPage,
          })}
        >
          {onPage && (
            <GCInput
              inputId="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your name*"
              variant={touchedFields.name && errors.name ? 'danger' : 'secondary'}
              errorText={touchedFields.name ? errors.name : undefined}
            />
          )}
          <GCInput
            inputId="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder="Your email*"
            variant={touchedFields.email && errors.email ? 'danger' : 'secondary'}
            errorText={touchedFields.email ? errors.email : undefined}
          />
          {onPage && (
            <GCInput
              inputId="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              onBlur={handleBlur}
              placeholder="Your company"
              variant="secondary"
            />
          )}
          {onPage && (
            <GCDropdown
              name="budget"
              budget={budget}
              value={formData.budget}
              onSelect={handleInputChange}
            >
              <span className="text-black-500">Project budget</span>
            </GCDropdown>
          )}
          <GCInput
            inputId="goals"
            name="goals"
            value={formData.goals}
            onChange={handleInputChange}
            onBlur={handleBlur}
            placeholder={onPage ? 'Your goals*' : 'Your questions*'}
            variant={touchedFields.goals && errors.goals ? 'danger' : 'secondary'}
            errorText={touchedFields.goals ? errors.goals : undefined}
            isTextarea
            isOnPage={onPage}
            className="md:col-span-2"
          />
          {submitErrors && (
            <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600 md:col-span-2">
              {submitErrors}
            </div>
          )}
          <div className="md:col-span-2">
            <GCButton type="submit" view="secondary" className="h-12 w-full">
              {sending ? 'Sending...' : onPage ? 'Submit' : 'Contact us'}
            </GCButton>
          </div>
        </form>
      )}
    </>
  )
}
