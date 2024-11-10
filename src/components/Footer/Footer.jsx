import React from 'react'

// Styles
import styles from './Footer.module.css'

function Footer () {
  return (
    <div className={styles.container}>
      <div>
        <a className={styles.link}>
          Terms And Conditions
        </a>
        <a className={styles.link}>
          Privacy Policy
        </a>
      </div>

      <div>
        <a className={styles.link}>
          Facebook
        </a>
        <a className={styles.link}>
          Instagram
        </a>
      </div>
    </div>
  )
}

export default Footer
