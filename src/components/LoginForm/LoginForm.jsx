import React, { useEffect, useState } from 'react'

// Styles
import styles from './LoginForm.module.css'
import InputText from '../InputText/InputText'
import Btn from '../Btn/Btn'

// Utils
import { loginValidation } from '../../utils/validate'

function LoginForm () {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [errorLogin, setErrorLogin] = useState()
  const [errorPassword, setErrorPassword] = useState()
  const [errorServer, setErrorServer] = useState()
  const [btnDisabled, setBtnDisabled] = useState()

  // Button disabling, resseting server error
  useEffect(() => {
    if (!login.length || !password.length || errorLogin || errorPassword) {
      setBtnDisabled(true)

      return
    }

    setBtnDisabled(false)
    setErrorServer()
  }, [login, password, errorLogin, errorPassword])

  // Resetting errors
  useEffect(() => {
    setErrorLogin()
  }, [login])

  useEffect(() => {
    setErrorPassword()
  }, [password])

  const onSubmit = () => {
    const errors = loginValidation({login, password})
    setErrorPassword(errors.password)
    setErrorLogin(errors.login)

    if (errors.login|| errors.password) {
      return
    }

    console.log(!!errorLogin || !!errorPassword)

    signIn()
  }

  const signIn = async () => {
    try {
      const queryParams = new URLSearchParams({
        login: login,
        password: password,
      })

      const response = await fetch(`https://example.com/api/login?${queryParams}`, {
        method: 'GET',
      })

      if (!response.ok) {
        throw new Error('Failed to log in')
      }

      const data = await response.json()
      console.log('Login successful:', data)

    } catch (error) {
      console.error('Error during login:', error)
      setErrorServer(['Login failed. Please try again.'])
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        Sign In
      </div>

      <div className={styles.inputContainer}>
        <InputText
          id='login'
          placeholder='user@mail.com'
          value={login}
          onChange={setLogin}
          label='Email or username'
          type='email'
          error={errorLogin}
        />
      </div>

      <div className={styles.inputContainer}>
        <InputText
          id='password'
          placeholder='Your password'
          value={password}
          onChange={setPassword}
          label='Password'
          type='password'
          error={errorPassword}
        />
      </div>

      <div className={styles.warning}>
        You confirm that you accept our terms and conditions.
      </div>

      <div className={styles.footer}>
        <Btn
          label={'Sign In Now'}
          onClick={onSubmit}
          disabled={btnDisabled}
        />
        <a className={styles.link}>
          Forgot Password?
        </a>
      </div>

      <div className={styles.error}>
        {errorServer}
      </div>
    </div>
  )
}

export default LoginForm
