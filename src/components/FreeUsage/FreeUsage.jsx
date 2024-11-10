import React from 'react'

// Components

// Styles
import styles from './FreeUsage.module.css'

function FreeUsage () {
  return (
    <div className={styles.container}>
      <img
        className={styles.circleImage}
        src='/radio.svg'
      />
      <div className={styles.textContainer}>
        <div className={styles.textFirstSection}>
          Free
        </div>
        <div className={styles.textSecondSection}>
          <div>
            Usage of
          </div>
          <div>
            Our Services Forever
          </div>
        </div>
      </div>
    </div>
  )
}

export default FreeUsage
