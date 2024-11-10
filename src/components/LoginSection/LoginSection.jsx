import React from 'react'

// Styles
import styles from './LoginSection.module.css'

// Components
import DesignSection from '../DesignSection/DesignSection'
import LoginForm from '../LoginForm/LoginForm'

function LoginSection () {
  return (
    <div className={styles.container}>
      <img
        className={styles.moonImage}
        src='/moon.svg'
      />
      <div className={styles.section}>
        <DesignSection />
      </div>
      <div className={[styles.section, styles.loginSection]}>
        <LoginForm />
      </div>
      <img
        className={styles.arrowsImage}
        src='/arrows.svg'
      />
    </div>
  )
}

export default LoginSection
