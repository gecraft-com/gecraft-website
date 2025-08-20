import { useEffect, useState } from 'react'

import axios from 'axios'
import clsx from 'clsx'

import { useForm } from '../hooks/useForm'
import { GCButton } from './GCButton'
import { ArrowIcon } from './icons/ArrowIcon'

const budget = [
  '$5000-$10000',
  '$10000-$50000',
  '$50000-$250000',
  '$250000-$500000',
  'I don&apos;t know yet',
]

export const Form = ({ onPage = false }) => {
  const {
    formData,
    isFormValid,
    isNameValid,
    isEmailValid,
    isGoalsValid,
    handleInputChange,
    resetForm,
  } = useForm({ onPage })

  const [submitMessage, setSubmitMessage] = useState(false)
  const [touchedFields, setTouchedFields] = useState({
    name: false,
    email: false,
    goals: false,
  })
  const [wasSubmitAttempted, setWasSubmitAttempted] = useState(false)

  const [isOpen, setIsOpen] = useState(false)
  const [rotate, setRotate] = useState(false)

  const handleBlur = (fieldName) => () => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }))
  }

  const getInputClassName = (fieldName, isValid) => {
    const baseClasses = clsx(
      'w-full rounded-lg border-2 px-4 py-3 bg-black-00 text-black-950 focus:outline-none',
      {
        'border-black-500': onPage,
        'border-black-300': !onPage,
      },
      fieldName === 'goals'
        ? [
            'block',
            {
              'min-h-42.5 h-42.5': onPage,
              'min-h-20 h-22': !onPage,
            },
          ]
        : ['h-12']
    )

    const shouldShowValidation = touchedFields[fieldName] || wasSubmitAttempted

    if (!shouldShowValidation) {
      return `${baseClasses}`
    }

    if (fieldName === 'name' || fieldName === 'email' || fieldName === 'goals') {
      return clsx(baseClasses, {
        'border-primary-500': isValid,
        'border-error-1': !isValid,
      })
    }

    return `${baseClasses}`
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
    if (fieldName === 'goals' && !isGoalsValid) {
      return 'Please enter a valid goals'
    }
    return ''
  }

  const handleOpenBudget = () => {
    setRotate(!rotate)
    setIsOpen(!isOpen)
  }

  let timeoutId

  const handleSubmit = async (e) => {
    e.preventDefault()

    setWasSubmitAttempted(true)

    if ((onPage && !formData.name) || !formData.email || !isFormValid) {
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
        goals: false,
      })
      timeoutId = setTimeout(() => {
        setSubmitMessage(false)
      }, 10000)
    } catch (error) {
      console.error('Error submitting form:', error)
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [timeoutId])

  return (
    <>
      {submitMessage ? (
        <div className="w-full">
          <p className="text-primary-500 mt-10 text-3xl font-semibold">Thank You!</p>
          <p className="mt-3">
            Your form has been successfully submitted. A representative from Glokas will
            be in touch with you shortly to assist with your inquiry. We appreciate your
            interest and look forward to connecting with you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={clsx('text-black-500 text-lg', {
            'mt-6 grid w-full grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 xl:mt-0': onPage,
            'hidden w-72 gap-3 md:flex md:flex-col xl:w-96': !onPage,
          })}
        >
          {onPage && (
            <label className="group relative">
              <input
                name="name"
                value={formData.name}
                type="text"
                onChange={handleInputChange('name')}
                onBlur={handleBlur('name')}
                className={getInputClassName('name', isNameValid)}
              />
              <span
                className={clsx(
                  'absolute top-1/2 left-4 -translate-y-1/2',
                  'cursor-text duration-200',
                  'group-focus-within:top-2.5 group-focus-within:text-xs group-focus-within:opacity-35',
                  {
                    'top-2.5 text-xs opacity-35': formData.name,
                  }
                )}
              >
                Your name*
              </span>
              {wasSubmitAttempted && !isNameValid && (
                <span className="text-error-1 absolute top-0 right-4 text-sm">
                  {getErrorMessage('name')}
                </span>
              )}
            </label>
          )}
          <label className="group relative">
            <input
              name="email"
              value={formData.email}
              type="text"
              onChange={handleInputChange('email')}
              onBlur={handleBlur('email')}
              className={getInputClassName('email', isEmailValid)}
            />
            <span
              className={clsx(
                'absolute top-1/2 left-4 -translate-y-1/2',
                'cursor-text duration-200',
                'group-focus-within:top-2.5 group-focus-within:text-xs group-focus-within:opacity-35',
                {
                  'top-2.5 text-xs opacity-35': formData.email,
                }
              )}
            >
              Your email*
            </span>
            {wasSubmitAttempted && !isEmailValid && (
              <span className="text-error-1 absolute top-0 right-4 text-sm">
                {getErrorMessage('email')}
              </span>
            )}
          </label>
          {onPage && (
            <label className="group relative">
              <input
                name="company"
                value={formData.company}
                onChange={handleInputChange('company')}
                type="text"
                className="border-black-500 bg-black-00 h-12 w-full rounded-lg border-2 px-4 focus:outline-none"
              />
              <span
                className={clsx(
                  'absolute top-1/2 left-4 -translate-y-1/2',
                  'cursor-text duration-200',
                  'group-focus-within:top-2.5 group-focus-within:text-xs group-focus-within:opacity-35',
                  {
                    'top-2.5 text-xs opacity-35': formData.company,
                  }
                )}
              >
                Your company
              </span>
            </label>
          )}
          {onPage && (
            <div className="group relative">
              <div
                name="budget"
                onChange={handleInputChange('budget')}
                className={clsx(
                  'border-black-500 bg-black-00 flex h-12 w-full cursor-pointer appearance-none items-center rounded-lg border-2 px-4 focus:outline-none',
                  {
                    'h-12': !isOpen,
                    'h-50': isOpen,
                  }
                )}
                onClick={handleOpenBudget}
                onBlur={() => {
                  setRotate(false)
                }}
              >
                Project budget
              </div>
              <div
                className={clsx(
                  'absolute top-1/2 right-4 -translate-y-1/2',
                  'pointer-events-none duration-200',
                  {
                    'rotate-180': rotate,
                    'rotate-0': !rotate,
                  }
                )}
              >
                <ArrowIcon />
              </div>
            </div>
          )}
          <label className="group relative md:col-span-2">
            <textarea
              name="goals"
              type="text"
              value={formData.goals}
              onChange={handleInputChange('goals')}
              onBlur={handleBlur('goals')}
              className={getInputClassName('goals', isGoalsValid)}
            />
            <span
              className={clsx(
                'absolute left-4',
                'cursor-text duration-200',
                'group-focus-within:top-0.5 group-focus-within:text-xs group-focus-within:opacity-35',
                {
                  'top-0.5 text-xs opacity-35': formData.goals,
                  'top-4': !formData.goals,
                }
              )}
            >
              {onPage ? 'Project Goals*' : 'Your question*'}
            </span>
            {onPage && (
              <div
                className={clsx(
                  'text-black-300 absolute bottom-4 left-4',
                  'cursor-text duration-200',
                  'group-focus-within:scale-0 group-focus-within:opacity-0',
                  { 'scale-0 opacity-0': formData.goals }
                )}
              >
                <p>Helpful things to include:</p>
                <ul className="leading-6">
                  <li>— Your problem</li>
                  <li>— Your location</li>
                  <li>— How you heard about us</li>
                </ul>
              </div>
            )}
            {wasSubmitAttempted && !isGoalsValid && (
              <span className="text-error-1 absolute top-0 right-4 text-sm">
                {getErrorMessage('goals')}
              </span>
            )}
          </label>
          <div className="md:col-span-2">
            <GCButton type="submit" view="secondary" className="h-12 w-full">
              {onPage ? 'Submit' : 'Contact us'}
            </GCButton>
          </div>
        </form>
      )}
    </>
  )
}
