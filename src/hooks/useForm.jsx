import { useEffect, useState } from 'react'

import { EMAIL_REGEX, NAME_REGEX } from '../constants/ContactForm'

export const useForm = ({ onPage }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    goals: '',
    onPage: onPage,
  })

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isNameValid, setIsNameValid] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [isGoalsValid, setIsGoalsValid] = useState(false)

  const handleInputChange = (name) => (valueOrEvent) => {
    const nextValue =
      valueOrEvent && valueOrEvent.target ? valueOrEvent.target.value : valueOrEvent
    setFormData((prevData) => ({
      ...prevData,
      [name]: nextValue,
      onPage,
    }))
  }

  useEffect(() => {
    const { name, email, goals } = formData

    const isNameValid = onPage ? NAME_REGEX.test(String(name).toLowerCase()) : true
    setIsNameValid(isNameValid)
    const isEmailValid = EMAIL_REGEX.test(String(email).toLowerCase())
    setIsEmailValid(isEmailValid)
    const isGoalsValid = goals.toString().length > 10
    setIsGoalsValid(isGoalsValid)

    const isValid = isNameValid && isEmailValid && isGoalsValid
    setIsFormValid(isValid)
  }, [formData, onPage])

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: '',
      goals: '',
      onPage: onPage,
    })
    setIsEmailValid(false)
    setIsFormValid(false)
  }

  return {
    formData,
    isFormValid,
    isNameValid,
    isEmailValid,
    isGoalsValid,
    handleInputChange,
    resetForm,
    setFormData,
  }
}
