import React from 'react'

// Styles
import styles from './LoginSection.module.css'

// Images
import moon from '../../images/moon.svg'
import arrows from '../../images/arrows.svg'

// Components
import DesignSection from '../DesignSection/DesignSection'
import LoginForm from '../LoginForm/LoginForm'

function LoginSection () {
  return (
    <div className={styles.container}>
      <img
        className={styles.moonImage}
        src={moon}
      />
      <div className={styles.section}>
        <DesignSection />
      </div>
      <div className={[styles.section, styles.loginSection].join(' ')}>
        <LoginForm />
      </div>
      <img
        className={styles.arrowsImage}
        src={arrows}
      />
    </div>
  )
}

export default LoginSection
