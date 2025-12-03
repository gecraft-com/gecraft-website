const NAME_REGEX = /^[A-Za-zА-Яа-яЁё\s-]{2,}$/
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

export const validateField = (name, value, onPage) => {
  if (name === 'name') {
    return validateName(value, onPage)
  }
  if (name === 'email') {
    return validateEmail(value)
  }
  if (name === 'goals') {
    return validateGoals(value)
  }
  return undefined
}

export const validateName = (name, onPage) => {
  if (!name?.trim()) {
    return onPage ? 'Name is required' : ''
  }
  if (!NAME_REGEX.test(name)) {
    return 'Invalid name format'
  }
}

export const validateEmail = (email) => {
  if (!email?.trim()) {
    return 'Email is required'
  }
  if (!EMAIL_REGEX.test(email)) {
    return 'Invalid email format'
  }
  return undefined
}

export const validateGoals = (goals) => {
  if (!goals?.trim()) {
    return 'This field is required'
  }
  if (goals.length < 10) {
    return 'This field must contain at least 10 characters.'
  }
  return undefined
}
