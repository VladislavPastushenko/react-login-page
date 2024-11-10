export const loginValidation = (data) => {
  const error = {}

  if (!/[A-Z]/.test(data.password)) {
    error.password = ('Password must contain at least one uppercase letter.')
  }

  if (!/[a-z]/.test(data.password)) {
    error.password = ('Password must contain at least one lowercase letter.')
  }

  if (!/[!@#$%^&*(),.?":{}|<>]/.test(data.password)) {
    error.password = ('Password must contain at least one special character.')
  }

  if (data.password.length < 8) {
    error.password = ('Password must contain at least 8 symbols.')
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailPattern.test(data.login)) {
    error.login = ('Email must be a valid email address.')
  }

  return error
}
