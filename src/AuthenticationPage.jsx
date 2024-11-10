import React from 'react'

// Styles
import styles from './AuthenticationPage.module.css'
import './AuthenticationPage.css'

// Components
import Header from './components/Header/Header'
import FreeUsage from './components/FreeUsage/FreeUsage'
import LoginSection from './components/LoginSection/LoginSection'
import Footer from './components/Footer/Footer'

function AuthenticationPage () {
  return (
    <div className={styles.container}>
      <header className={styles.section}>
        <Header />
      </header>
      <section className={[styles.section, styles.middleSection].join(' ')}>
        <FreeUsage />
        <LoginSection />
      </section>
      <section className={styles.section}>
        <Footer />
      </section>
    </div>
  )
}

export default AuthenticationPage
