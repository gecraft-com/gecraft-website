import { useEffect, useState } from 'react'

import axios from 'axios'
import clsx from 'clsx'

import useForm from '../hooks/useForm'
import GCButton from './GCButton'
import ArrowIcon from './icons/ArrowIcon'

function Form({ onPage = false }) {
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

  const [rotate, setRotate] = useState(false)

  const handleBlur = (fieldName) => () => {
    setTouchedFields((prev) => ({
      ...prev,
      [fieldName]: true,
    }))
  }

  const getInputClassName = (fieldName, isValid) => {
    const baseClasses = clsx(
      'w-full rounded-lg border-2 px-4 py-3',
      fieldName === 'goals'
        ? ['border-primary-600', { 'h-40': onPage, 'h-24': !onPage }]
        : ['h-12']
    )

    const shouldShowValidation = touchedFields[fieldName] || wasSubmitAttempted

    if (!shouldShowValidation) {
      return `${baseClasses} border-primary-600`
    }

    if (fieldName === 'name' || fieldName === 'email' || fieldName === 'goals') {
      return clsx(baseClasses, {
        'border-green-600': isValid,
        'border-red-600': !isValid,
      })
    }

    return `${baseClasses} border-primary-600`
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
        <div className="w-1/2">
          <p className="mt-10 text-3xl font-semibold text-primary-500">Thank You!</p>
          <p className="mt-3">
            Your form has been successfully submitted. A representative from Glokas will
            be in touch with you shortly to assist with your inquiry. We appreciate your
            interest and look forward to connecting with you soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className={clsx('text-black', {
            'mt-6 grid w-full grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4 xl:mt-0': onPage,
            'hidden w-72 gap-3 sm:flex sm:flex-col xl:w-96': !onPage,
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
                  'absolute left-4 top-1/2 -translate-y-1/2',
                  'duration-200',
                  'group-focus-within:top-2.5 group-focus-within:text-xs group-focus-within:opacity-35',
                  {
                    'top-2.5 text-xs opacity-35': formData.name,
                  }
                )}
              >
                Your name*
              </span>
              {wasSubmitAttempted && !isNameValid && (
                <span className="absolute right-4 top-0 text-sm text-red-600">
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
                'absolute left-4 top-1/2 -translate-y-1/2',
                'duration-200',
                'group-focus-within:top-2.5 group-focus-within:text-xs group-focus-within:opacity-35',
                {
                  'top-2.5 text-xs opacity-35': formData.email,
                }
              )}
            >
              Your email*
            </span>
            {wasSubmitAttempted && !isEmailValid && (
              <span className="absolute right-4 top-0 text-sm text-red-600">
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
                className="h-12 w-full rounded-lg border-2 border-primary-600 px-4"
              />
              <span
                className={clsx(
                  'absolute left-4 top-1/2 -translate-y-1/2',
                  'duration-200',
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
              <select
                name="budget"
                onChange={handleInputChange('budget')}
                className="h-12 w-full appearance-none rounded-lg border-2 border-primary-600 px-4"
                onClick={() => {
                  setRotate(!rotate)
                }}
                onBlur={() => {
                  setRotate(false)
                }}
              >
                <option value="Not search">Project budget</option>
                <option value="$5000-$10000">$5000-$10000</option>
                <option value="$10000-$50000">$10000-$50000</option>
                <option value="$50000-$250000">$50000-$250000</option>
                <option value="$250000-$500000">$250000-$500000</option>
                <option value="I don't know yet">I don&apos;t know yet</option>
              </select>
              <div
                className={clsx(
                  'absolute right-4 top-1/2 -translate-y-1/2',
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
          <label className="group relative sm:col-span-2">
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
                'duration-200',
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
                  'absolute bottom-4 left-4',
                  'duration-200',
                  'group-focus-within:scale-0 group-focus-within:opacity-0',
                  { 'scale-0 opacity-0': formData.goals }
                )}
              >
                <p className="text-primary-750">Helpful things to include:</p>
                <ul className="text-primary-750">
                  <li>— Your problem</li>
                  <li>— Your location</li>
                  <li>— How you heard about us</li>
                </ul>
              </div>
            )}
            {wasSubmitAttempted && !isGoalsValid && (
              <span className="absolute right-4 top-0 text-sm text-red-600">
                {getErrorMessage('goals')}
              </span>
            )}
          </label>
          <div className="sm:col-span-2">
            <GCButton type="submit" view="green-form">
              {onPage ? 'Submit' : 'Contact us'}
            </GCButton>
          </div>
        </form>
      )}
    </>
  )
}

export default Form
