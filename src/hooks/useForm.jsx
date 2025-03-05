import { useEffect, useState } from 'react'

function useForm({ onPage }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: 'Not search',
    goals: '',
  })

  const [isEmailValid, setIsEmailValid] = useState(false)
  const [isNameValid, setIsNameValid] = useState(false)
  const [isFormValid, setIsFormValid] = useState(false)
  const [isGoalsValid, setIsGoalsValid] = useState(false)

  const validateEmail = (email) => {
    const re =
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
    return re.test(String(email).toLowerCase())
  }

  const handleInputChange = (name) => (value) => {
    setFormData((prevData) => ({
      ...prevData,
      [name]: value.target.value,
    }))

    if (name === 'email') {
      setIsEmailValid(validateEmail(value.target.value))
    }
  }

  useEffect(() => {
    const { name, goals } = formData

    const isNameValid = onPage ? name.trim() !== '' : true
    setIsNameValid(isNameValid)
    const isGoalsValid = goals.trim() !== ''
    setIsGoalsValid(isGoalsValid)

    const isValid = isNameValid && isEmailValid && isGoalsValid
    setIsFormValid(isValid)
  }, [formData, isEmailValid, onPage])

  const resetForm = () => {
    setFormData({
      name: '',
      email: '',
      company: '',
      budget: 'Not search',
      goals: '',
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

export default useForm
